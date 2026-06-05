# Todo List — Migrasi Sanity

## Todo 1 — Salin semua data dari Sanity
- [ ] Export data About Page dari Sanity Studio
- [ ] Export data Portfolio / CV dari Sanity Studio
- [ ] Export data Projects dari Sanity Studio
- [ ] Export data Tech Stack dari Sanity Studio
- [ ] Download semua gambar dari Sanity CDN
- [ ] Setup MCP Filesystem di Claude Code
- [ ] Buat file profil global (`~/.claude/profile.json`) untuk akses lintas project
- [ ] Buat `profile.md` untuk dipakai sebagai context di Claude Web (claude.ai Projects)

## Todo 2 — Migrasi dari Sanity
- [ ] Buat `web/data/` dengan file JSON per section
- [ ] Tulis `about.json` dari data export
- [ ] Tulis `portfolio.json` dari data export
- [ ] Tulis `projects.json` dari data export
- [ ] Tulis `tech-stack.json` dari data export
- [ ] Pindahkan gambar ke `web/public/images/`
- [ ] Buat `src/data/getAboutPage.ts`
- [ ] Buat `src/data/getPortfolio.ts`
- [ ] Buat `src/data/getProjects.ts`
- [ ] Buat `src/data/getTechStack.ts`
- [ ] Ganti semua pemanggilan `src/sanity/actions/` ke `src/data/`
- [ ] Update komponen yang pakai Sanity image URL builder
- [ ] Pastikan PDF CV generate dengan benar
- [ ] Hapus `src/sanity/` folder
- [ ] Hapus `src/lib/redis.ts`
- [ ] Hapus `src/@types/Sanity.d.ts`
- [ ] Hapus dependency: `@sanity/client`, `@sanity/image-url`, `next-sanity`, `@upstash/redis`
- [ ] Hapus folder `cms/`
- [ ] Jalankan `npm audit` — pastikan vuln dari `@sanity/*` hilang
- [ ] Test build production

## Todo 3 — Chatbot Portofolio
- [ ] Tentukan model OpenRouter yang dipakai (default: Gemini 2.0 Flash gratis)
- [ ] Buat API route di Next.js (`/api/chat`)
- [ ] Pakai data JSON hasil migrasi sebagai system prompt context
- [ ] Desain agar model mudah diganti via env variable (`OPENROUTER_MODEL`)
- [ ] Implementasi mekanisme fallback model (Gemini 2.0 Flash → Llama 3.1 8B → Mistral 7B) jika model error/timeout
- [ ] Setup rate limiting via Redis (reuse yang sudah ada)
- [ ] Buat komponen chat UI (floating button atau di halaman Contact)
- [ ] Test dengan berbagai pertanyaan soal profil
