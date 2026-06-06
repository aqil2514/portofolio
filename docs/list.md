# Todo List — Migrasi Sanity

## Todo 1 — Salin semua data dari Sanity
- [x] Export data About Page dari Sanity Studio
- [x] Export data Portfolio / CV dari Sanity Studio
- [x] Export data Projects dari Sanity Studio
- [x] Export data Tech Stack dari Sanity Studio
- [x] Download semua gambar dari Sanity CDN
- [ ] Setup MCP Filesystem di Claude Code
- [ ] Buat file profil global (`~/.claude/profile.json`) untuk akses lintas project
- [ ] Buat `profile.md` untuk dipakai sebagai context di Claude Web (claude.ai Projects)

## Todo 2 — Migrasi dari Sanity
- [x] Buat `web/data/` dengan file JSON per section
- [x] Tulis `about.json` dari data export
- [x] Tulis `portfolio.json` dari data export
- [x] Tulis `projects.json` dari data export
- [x] Tulis `tech-stack.json` dari data export
- [x] Pindahkan gambar ke `web/public/images/`
- [x] Buat `src/data/getAboutPage.ts`
- [x] Buat `src/data/getPortfolio.ts`
- [x] Buat `src/data/getProjects.ts`
- [x] Buat `src/data/getTechStack.ts`
- [x] Ganti semua pemanggilan `src/sanity/actions/` ke `src/data/`
- [x] Update komponen yang pakai Sanity image URL builder
- [x] Pastikan PDF CV generate dengan benar
- [x] Hapus `src/sanity/` folder
- [x] Hapus `src/lib/redis.ts`
- [x] Hapus `src/@types/Sanity.d.ts` (diganti `types.d.ts`)
- [x] Hapus dependency: `@sanity/client`, `@sanity/image-url`, `next-sanity`, `@upstash/redis`
- [x] Hapus folder `cms/`
- [x] Jalankan `npm audit` — vuln dari `@sanity/*` hilang (sisa 2 moderate dari `next` sendiri, tidak bisa di-fix tanpa breaking change)
- [x] Test build production

## Todo 3 — Chatbot Portofolio
- [x] Tentukan model OpenRouter yang dipakai (meta-llama/llama-3.3-70b-instruct:free)
- [x] Buat API route di Next.js (`/api/chat`)
- [x] Pakai data JSON hasil migrasi sebagai system prompt context
- [x] Desain agar model mudah diganti via env variable (`OPENROUTER_MODEL`)
- [x] Implementasi mekanisme fallback model
- [x] Buat komponen chat UI (floating button + ChatPanel)
- [x] Test dengan berbagai pertanyaan soal profil
