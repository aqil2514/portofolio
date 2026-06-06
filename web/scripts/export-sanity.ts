import { createClient } from "@sanity/client";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "30c680d2",
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: "2024-07-11",
  useCdn: false,
});

const DATA_DIR = resolve(process.cwd(), "data");
const IMAGES_ABOUT_DIR = resolve(process.cwd(), "public/images/about");
const IMAGES_PROJECTS_DIR = resolve(process.cwd(), "public/images/projects");

function ensureDirs() {
  for (const dir of [DATA_DIR, IMAGES_ABOUT_DIR, IMAGES_PROJECTS_DIR]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }
}

function writeJson(filename: string, data: unknown) {
  const filepath = join(DATA_DIR, filename);
  writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`✓ Saved ${filename}`);
}

async function downloadImage(url: string, destDir: string, filename: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const ext = url.split("?")[0].split(".").pop() ?? "jpg";
  const fullName = `${filename}.${ext}`;
  writeFileSync(join(destDir, fullName), buffer);
  return fullName;
}

async function exportAbout() {
  console.log("\n→ Fetching about page...");

  const data = await client.fetch(`*[_type=="about-page"][0]{
    hero{ title, description },
    whoAmI[]{
      content,
      "imageSrc": imageSrc.asset->url,
      imageAlt,
      title,
      subtitle,
      ctaButtonId
    },
    coreSkill[]{ skillField, skillLevel, skillList },
    productPhilosophy[]{ title, description },
    roadmapTimeline[]{
      title, description, date,
      learningSkill[]{
        label,
        "imageSrc": imageSrc.asset->url,
        imageAlt
      },
      certificates[]{
        label,
        "imageSrc": imageSrc.asset->url,
        imageAlt,
        link
      }
    }
  }`);

  // Download whoAmI images
  for (let i = 0; i < (data.whoAmI ?? []).length; i++) {
    const item = data.whoAmI[i];
    if (item.imageSrc) {
      const filename = await downloadImage(item.imageSrc, IMAGES_ABOUT_DIR, `whoami-${i}`);
      data.whoAmI[i].imageSrc = `/images/about/${filename}`;
      console.log(`  ↓ whoami-${i} image`);
    }
  }

  // Download roadmap learning skill & certificate images
  for (let i = 0; i < (data.roadmapTimeline ?? []).length; i++) {
    const item = data.roadmapTimeline[i];
    for (let j = 0; j < (item.learningSkill ?? []).length; j++) {
      const skill = item.learningSkill[j];
      if (skill.imageSrc) {
        const filename = await downloadImage(skill.imageSrc, IMAGES_ABOUT_DIR, `roadmap-${i}-skill-${j}`);
        data.roadmapTimeline[i].learningSkill[j].imageSrc = `/images/about/${filename}`;
        console.log(`  ↓ roadmap-${i} skill-${j} image`);
      }
    }
    for (let j = 0; j < (item.certificates ?? []).length; j++) {
      const cert = item.certificates[j];
      if (cert.imageSrc) {
        const filename = await downloadImage(cert.imageSrc, IMAGES_ABOUT_DIR, `roadmap-${i}-cert-${j}`);
        data.roadmapTimeline[i].certificates[j].imageSrc = `/images/about/${filename}`;
        console.log(`  ↓ roadmap-${i} cert-${j} image`);
      }
    }
  }

  writeJson("about.json", data);
}

async function exportPortfolio() {
  console.log("\n→ Fetching portfolio / CV...");

  const data = await client.fetch(`*[_type=="portofolio"][0]{
    summary{ title, item },
    experience{
      title,
      "items": item[]{
        jobTitle, company, location,
        startDate, endDate, isCurrent,
        "bullets": bullets[]{ text }
      }
    },
    education,
    skills,
    projects
  }`);

  writeJson("portfolio.json", data);
}

async function exportProjects() {
  console.log("\n→ Fetching projects...");

  const data = await client.fetch(`*[_type=="projects"]{
    "id": _id,
    title,
    "shortDesc": description[]{
      _key, _type,
      "value": array::join(string::split(value, " ")[0..15], " ") + "..."
    },
    "fullDesc": description,
    categories,
    "image": mainImage{
      label, imageAlt,
      "imageSrc": imageSrc.asset->url
    },
    "subDemos": subDemos[]{ description, title, videoUrl },
    mainDemo,
    features,
    status,
    "techStack": techStack[]->name,
    liveUrl,
    sourceCode
  }`);

  // Download project images
  for (let i = 0; i < data.length; i++) {
    const project = data[i];
    if (project.image?.imageSrc) {
      const slug = String(project.title?.en ?? project.title ?? `project-${i}`)
        .toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const filename = await downloadImage(project.image.imageSrc, IMAGES_PROJECTS_DIR, slug);
      data[i].image.imageSrc = `/images/projects/${filename}`;
      console.log(`  ↓ ${slug} image`);
    }
  }

  writeJson("projects.json", data);
}

async function exportTechStack() {
  console.log("\n→ Fetching tech stack...");
  const data = await client.fetch(`*[_type=="tech"]{ name }`);
  const sorted = data.map((t: { name: string }) => t.name).sort();
  writeJson("tech-stack.json", sorted);
}

async function main() {
  console.log("Starting Sanity export...");
  ensureDirs();

  await exportAbout();
  await exportPortfolio();
  await exportProjects();
  await exportTechStack();

  console.log("\n✅ Export selesai! Semua file tersimpan di web/data/");
  console.log("   Gambar tersimpan di web/public/images/");
}

main().catch((err) => {
  console.error("Export gagal:", err);
  process.exit(1);
});
