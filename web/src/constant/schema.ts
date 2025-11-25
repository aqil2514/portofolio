export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhamad Aqil Maulana",
  alternateName: "Aqil Maulana",
  url: "https://maqilm-portofolio.vercel.app",
  image: "https://maqilm-portofolio.vercel.app/me.jpg",
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Independent Developer",
  },
  sameAs: ["https://github.com/maqilmaulana"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhamad Aqil Maulana",
  url: "https://maqilm-portofolio.vercel.app",
  description:
    "Personal website and portfolio of Muhamad Aqil Maulana, a Full-Stack Developer specializing in modern web engineering and automation.",
  inLanguage: ["id-ID", "en-US"],
  publisher: {
    "@type": "Person",
    name: "Muhamad Aqil Maulana",
    url: "https://maqilm-portofolio.vercel.app",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://maqilm-portofolio.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
