Jika proyek Anda fokus sebagai **Web Static** (Website Statis), maka arsitektur pengembangannya akan jauh lebih sederhana, ringan, dan super cepat karena tidak memerlukan database kompleks atau sistem login yang rumit di sisi server.

Dalam dunia Next.js, ini memanfaatkan fitur bernama **SSG (Static Site Generation)**. Semua halaman web akan di-generate menjadi file HTML/CSS/JS siap pakai saat proses *build*, sehingga ketika dibuka oleh pengguna, website akan langsung muncul secara instan (bagus untuk daerah pelosok yang sinyalnya kurang stabil).

Berikut adalah penyesuaian rencana proyek untuk Website Statis KKN:

---

## 1. Keuntungan Pendekatan Statis untuk Web KKN

* **Biaya Hosting Rp 0 (Gratis Selamanya):** Karena tidak butuh server aktif untuk database, Anda bisa menghostingnya gratis di Vercel, Netlify, atau GitHub Pages tanpa khawatir batasan kuota server.
* **Performa Maksimal:** Website akan memuat data secepat kilat karena browser hanya mengunduh file HTML yang sudah jadi.
* **Bebas Maintenance & Aman:** Tidak ada database yang bisa diretas atau disuntik SQL Injection. Sekali *deploy*, website akan hidup terus tanpa perlu pusing mikirin *maintenance* server.

---

## 2. Struktur Fitur (Khusus Publik)

Karena bersifat statis, fokus utama adalah menyajikan informasi secara satu arah kepada pembaca (dosen, kampus, masyarakat).

* **Landing Page:** Sambutan, visi misi kelompok KKN, statistik singkat proker (misal: "5 Proker Selesai, 120 Warga Terbantu"), dan galeri foto utama.
* **Profil & Potensi Desa:** Halaman statis berisi sejarah desa, peta wilayah, struktur perangkat desa, dan komoditas unggulan (misal: pertanian atau kerajinan tangan).
* **Artikel / Dokumentasi Proker:** Halaman blog yang berisi detail jalannya program kerja yang sudah selesai dilaksanakan, lengkap dengan foto dan narasi kegiatannya.
* **Profil Anggota:** Grid foto berisi seluruh anggota kelompok KKN beserta jabatan dan media sosialnya (sebagai kenang-kenangan digital).

---

## 3. Tech Stack Rekomendasi (Web Statis)

| Komponen | Teknologi | Keterangan |
| --- | --- | --- |
| **Framework** | **Next.js (App Router)** | Gunakan konfigurasi `output: 'export'` di `next.config.js` untuk mengubahnya menjadi web statis murni. |
| **Sumber Data Content** | **Markdown (.md / .mdx)** atau **JSON File** | Daripada pakai database, semua artikel blog atau data anggota disimpan dalam bentuk file teks (Markdown/JSON) langsung di dalam folder proyek. |
| **Styling** | **Tailwind CSS** | Membuat tampilan responsif (bagus di HP & laptop) dengan ukuran file CSS yang sangat kecil. |
| **Deployment** | **Vercel** atau **GitHub Pages** | Tinggal push ke GitHub, website langsung online dalam hitungan detik. |

---

## 4. Cara Mengelola Konten Tanpa Database (Menggunakan Markdown)

Untuk mengisi artikel atau berita KKN secara statis, Anda tidak perlu mengetik coding HTML berulang kali. Anda cukup membuat file teks dengan format `.md` (Markdown).

Contoh file `src/content/proker-1.md`:

```markdown
---
title: "Sosialisasi Digital Marketing untuk UMKM Desa"
date: "2026-07-07"
author: "Tim KKN"
image: "/images/proker1.jpg"
---

Pada hari ini, tim KKN mengadakan pelatihan untuk 20 pelaku UMKM di balai desa...
(Isi berita KKN Anda di sini)

```

Next.js nantinya akan membaca file teks di atas secara otomatis dan mengubahnya menjadi halaman web artikel yang rapi.

---

## 5. Cara Konfigurasi Next.js Menjadi Web Statis

Agar Next.js menghasilkan file HTML statis saat di-build, Anda hanya perlu menambahkan satu baris kode di file `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Tambahkan baris ini untuk Static Export
  images: {
    unoptimized: true, // Dibutuhkan jika Anda menggunakan komponen <Image /> bawaan Next.js di web statis
  },
};

module.exports = nextConfig;

```

Saat Anda menjalankan perintah `npm run build`, Next.js akan membuat folder bernama `out` yang berisi file HTML murni. Folder inilah yang tinggal di-upload ke hosting gratisan.

menggunakan CMS gratisan yang ramah pengguna (seperti *Decap CMS* / *Contentful*) 