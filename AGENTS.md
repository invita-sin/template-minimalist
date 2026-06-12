# AGENTS.md — template-minimalist

## Status

Template **Minimalist White** — sudah dibangun. Lihat `.agents/prd.md` untuk requirements lengkap.

## Struktur

```
index.html          → 8 section + tombol "Buka Undangan" di Cover
css/style.css       → Mobile-first (3.5rem→5rem→6rem spacing), responsive (640/768/1024)
js/main.js          → Countdown timer + Intersection Observer fade-in
```

## Developer commands

```bash
# Serve locally untuk preview
npx serve . -p 8080
python3 -m http.server 8080
```

## Yang perlu di-custom sebelum live

- **index.html**: Nama pasangan, tanggal, lokasi, nomor WhatsApp, src Google Maps embed
- **data-wedding-date** di `<section id="countdown">` — atur tanggal acara
- **Google Maps iframe src** — ganti dengan embed link lokasi asli
- **Unsplash gambar** — bisa diganti dengan foto asli

## Konvensi

- No framework — plain HTML/CSS/JS
- Animasi simpel (CSS transitions + Intersection Observer)
- Semua konten statis (no backend)
- RSVP via WhatsApp — `https://wa.me/628xxxxxxxxxxx?text=...`
- `.agents/prd.md` adalah source of truth — jangan deviate
