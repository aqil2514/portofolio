# Migrasi dari Sanity CMS

Rencana bertahap untuk memindahkan data dari Sanity ke solusi yang lebih ringan.

## Latar Belakang

Sanity terasa overkill untuk skala portofolio pribadi:
- Harus maintain dua project sekaligus (`web/` dan `cms/`)
- Dependency chain berat — banyak vulnerability dari `@sanity/*`
- Schema harus didefinisikan manual via TypeScript
- Butuh hosted CMS (biaya / ketergantungan eksternal)

---

## Data yang Ada di Sanity

### 1. About Page (`about-page` document)
- **Hero** — title & description (bilingual: EN/ID)
- **Who Am I** — title, subtitle, content, foto, CTA button (download CV / none)
- **Core Skills** — skill name, level (beginner/intermediate/advanced), skill list
- **Product Philosophy** — title & description (array)
- **Roadmap Timeline** — title, date, description, learning skills (gambar), certificates (gambar + link)

### 2. CV / Portofolio (`portofolio` document)
- **Summary** — title & isi (bilingual)
- **Experience** — title section + item (job title, company, location, start/end date, isCurrent, bullet points bilingual)
- **Education** — title section + item (degree, major, university, location, start/end, GPA)
- **Skills** — title section + item (label kategori + referensi ke tech stack)
- **Projects (CV)** — title section + item (title, role, dates, bullet points bilingual)

### 3. Projects (`projects` document — halaman projects)
- Title, gambar utama, URL demo utama
- Status: `live` / `archived` / `on-progress`
- Kategori: Frontend, Backend, Database, DevOps, Automation, AI Integration, Product Engineering
- Tech stack (referensi ke dokumen `tech`)
- Deskripsi (bilingual)
- Features list (bilingual)
- Sub-demos (title, video URL, deskripsi bilingual)
- Live URL & Source Code URL

### 4. Tech Stack (`tech` document — helper)
- Hanya berisi `name` — dipakai sebagai referensi dari Projects dan Skills

---

## Yang PERLU Dipindahkan

- [x] Data **About Hero** (title & description bilingual)
- [x] Data **Who Am I** (profil singkat + foto)
- [x] Data **Core Skills**
- [x] Data **Product Philosophy**
- [x] Data **Roadmap / Timeline** (termasuk sertifikat)
- [x] Data **CV** — Summary, Experience, Education, Skills, Projects
- [x] Data **Projects** (halaman projects) — termasuk gambar, demo, features
- [x] Data **Tech Stack** list

## Yang TIDAK Perlu Dipindahkan

- Sanity Studio UI — tidak dipakai lagi setelah migrasi
- `@sanity/vision` — hanya untuk debugging di Studio
- Sanity hosted backend — digantikan file lokal
- `sanity-plugin-internationalized-array` — logic i18n dipindahkan ke struktur JSON manual
- `cms/` folder secara keseluruhan — bisa dihapus setelah migrasi selesai

---

## Target Arsitektur Baru

**Pilihan: JSON files di repo** (paling simpel untuk portofolio)

```
web/
├── data/                          # BARU — ganti Sanity
│   ├── about.json                 # Hero, Who Am I, Core Skills, Philosophy, Roadmap
│   ├── portfolio.json             # Summary, Experience, Education, Skills, Projects CV
│   ├── projects.json              # Halaman projects
│   └── tech-stack.json           # Daftar tech stack
│
├── public/
│   ├── images/                    # BARU — gambar project pindah dari Sanity CDN
│   │   ├── projects/
│   │   └── about/
│   └── ...existing files
│
└── src/
    ├── @types/
    │   ├── About.d.ts
    │   ├── General.d.ts
    │   ├── PDF.d.ts
    │   ├── Projects.d.ts
    │   └── Sanity.d.ts            # HAPUS
    │
    ├── data/                      # BARU — ganti src/sanity/actions/
    │   ├── getAboutPage.ts        # baca about.json
    │   ├── getPortfolio.ts        # baca portfolio.json
    │   ├── getProjects.ts         # baca projects.json
    │   └── getTechStack.ts        # baca tech-stack.json
    │
    ├── lib/
    │   ├── redis.ts               # HAPUS
    │   └── utils.ts
    │
    ├── sanity/                    # HAPUS seluruh folder
    │   ├── actions/
    │   ├── env.ts
    │   ├── lib/
    │   └── query/
    │
    └── ...folder lain tidak berubah
```

Data bilingual (EN/ID) disimpan dalam struktur:
```json
{
  "en": { ... },
  "id": { ... }
}
```

---

## Dependency yang Bisa Dihapus Setelah Migrasi

```
@sanity/client
@sanity/image-url
next-sanity
@upstash/redis
```

Dan seluruh folder `cms/`.

---

## Rencana Migrasi Bertahap

### Fase 1 — Ekspor data dari Sanity
- [ ] Export semua dokumen dari Sanity Studio (JSON export)
- [ ] Petakan struktur data ke format file lokal

### Fase 2 — Buat data files
- [ ] Buat `web/data/` dengan file JSON per section
- [ ] Migrate data About Page
- [ ] Migrate data Portfolio / CV
- [ ] Migrate data Projects
- [ ] Migrate data Tech Stack
- [ ] Pindahkan gambar publik dari Sanity CDN ke `web/public/`

### Fase 3 — Update queries & komponen
- [ ] Ganti `src/sanity/queries/` dengan fungsi baca file JSON
- [ ] Hapus `src/sanity/lib/client.ts` dan koneksi Sanity
- [ ] Update semua komponen yang pakai `sanity image URL builder`
- [ ] Pastikan PDF CV masih bisa generate dengan data baru

### Fase 4 — Cleanup
- [ ] Hapus dependency `@sanity/client`, `@sanity/image-url`, `next-sanity`
- [ ] Hapus folder `cms/`
- [ ] Jalankan `npm audit` — pastikan vulnerability dari `@sanity/*` hilang
- [ ] Test build production
