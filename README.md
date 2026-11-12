# Maharah Kalam

Platform pembelajaran mandiri untuk meningkatkan keterampilan berbicara bahasa Arab. Proyek ini menggunakan Next.js App Router, TypeScript, Tailwind CSS, dan LocalStorage. Versi ini **tidak menggunakan database, backend, login, atau akun pengguna**.

## Fitur

- Dashboard pembelajaran siswa.
- Materi tematik dengan tujuan pembelajaran, kosakata, dialog, dan tugas berbicara.
- Hiwar dengan pembaca suara bawaan browser.
- Mufradat dengan pencarian dan filter tema.
- Kuis pilihan ganda dengan umpan balik dan skor.
- Speaking practice menggunakan MediaRecorder API.
- Progres materi dan riwayat kuis menggunakan LocalStorage.
- Layout responsif untuk desktop, tablet, dan ponsel.

## Teknologi

- Next.js 15 dan React 19
- TypeScript
- Tailwind CSS 3
- Lucide React
- Browser Speech Synthesis API
- MediaRecorder API
- LocalStorage

## Persyaratan

- Node.js 20.9 atau lebih baru.
- npm.

## Menjalankan di komputer lokal

1. Ekstrak folder proyek.
2. Buka terminal pada folder `maharah-kalam`.
3. Instal dependensi:

   ```bash
   npm install
   ```

4. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Buka `http://localhost:3000`.

## Memeriksa build produksi

```bash
npm run build
npm run start
```

## Deployment ke Vercel

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder proyek ke repository tersebut.
3. Masuk ke Vercel dan pilih **Add New Project**.
4. Impor repository GitHub `maharah-kalam`.
5. Biarkan Vercel mendeteksi framework Next.js secara otomatis.
6. Gunakan perintah build default `npm run build`.
7. Klik **Deploy**.

Tidak ada environment variable yang perlu diatur untuk versi ini.

## Mengubah materi

Materi disimpan pada `lib/data.ts`:

- `lessons`: daftar tema, tujuan, kosakata, dialog, dan prompt speaking.
- `quizQuestions`: pertanyaan, opsi, jawaban, dan penjelasan kuis.
- `learningTips`: tips belajar pada dashboard.

Tambahkan materi baru dengan mengikuti bentuk objek `Lesson` pada `lib/types.ts`. Pastikan nilai `id` unik karena aplikasi menggunakan nilai tersebut pada URL dan LocalStorage.

## Mengubah tampilan

- `app/globals.css`: warna, tipografi, layout, dan responsive breakpoints.
- `components/app-shell.tsx`: navigasi utama dan sidebar.
- `app/page.tsx`: dashboard.
- Folder `app/`: halaman fitur.

## Penyimpanan data dan privasi

- Materi dan soal kuis berasal dari source code lokal.
- Progres dan riwayat kuis disimpan pada LocalStorage browser dengan key `maharah-kalam-progress-v1`.
- Data LocalStorage tidak tersinkronisasi antarperangkat dan dapat hilang jika pengguna menghapus data situs/browser.
- Rekaman suara diproses di browser. Pengguna dapat memutar dan mengunduh rekaman, tetapi aplikasi tidak mengunggah rekaman ke server.
- Tidak ada akun siswa, login, atau dashboard pengajar pada versi ini.

## Catatan audio

Tombol pelafalan menggunakan Speech Synthesis API. Ketersediaan suara Arab bergantung pada browser, sistem operasi, dan voice yang terpasang. Untuk kualitas pembelajaran yang konsisten, ganti atau lengkapi fitur ini dengan file audio penutur asli yang disimpan di `public/audio`.

Fitur perekaman membutuhkan izin mikrofon. Browser umumnya mensyaratkan HTTPS atau `localhost` untuk akses mikrofon.

## Batasan versi

Proyek ini merupakan aplikasi frontend interaktif dengan penyimpanan sisi klien, bukan fullstack dengan backend. Jika nanti dibutuhkan akun, sinkronisasi progres lintas perangkat, penyimpanan rekaman di server, atau dashboard guru, tambahkan backend dan database pada fase berikutnya.
