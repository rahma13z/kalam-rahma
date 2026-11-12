import type { Lesson, QuizQuestion } from "@/lib/types";

export const lessons: Lesson[] = [
  {
    id: "taaruf",
    title: "Perkenalan",
    arabicTitle: "التَّعَارُفُ",
    transliteration: "At-ta'āruf",
    description: "Belajar memperkenalkan diri, menanyakan nama, asal, dan kabar.",
    level: "Pemula",
    duration: 15,
    accent: "mint",
    objective: "Siswa mampu memperkenalkan diri dan menanyakan identitas orang lain menggunakan ungkapan sederhana.",
    vocabulary: [
      { arabic: "اِسْمٌ", latin: "Ismun", meaning: "Nama" },
      { arabic: "طَالِبٌ", latin: "Thālibun", meaning: "Siswa" },
      { arabic: "مِنْ أَيْنَ", latin: "Min aina", meaning: "Dari mana" },
      { arabic: "مُسْرُورٌ", latin: "Masrūrun", meaning: "Senang / gembira" }
    ],
    dialogue: [
      { speaker: "أَحْمَدُ", arabic: "السَّلَامُ عَلَيْكُمْ", translation: "Assalamu'alaikum." },
      { speaker: "عَلِيٌّ", arabic: "وَعَلَيْكُمُ السَّلَامُ", translation: "Wa'alaikumussalam." },
      { speaker: "أَحْمَدُ", arabic: "مَا اسْمُكَ؟", translation: "Siapa namamu?" },
      { speaker: "عَلِيٌّ", arabic: "اِسْمِي عَلِيٌّ. وَمَا اسْمُكَ؟", translation: "Nama saya Ali. Siapa namamu?" },
      { speaker: "أَحْمَدُ", arabic: "اِسْمِي أَحْمَدُ. تَشَرَّفْنَا", translation: "Nama saya Ahmad. Senang berkenalan denganmu." }
    ],
    practicePrompt: "Perkenalkan dirimu dalam bahasa Arab. Sebutkan nama, asal, dan statusmu sebagai pelajar."
  },
  {
    id: "usrah",
    title: "Keluarga",
    arabicTitle: "الأُسْرَةُ",
    transliteration: "Al-usrah",
    description: "Menyebutkan anggota keluarga dan menceritakan keluarga secara singkat.",
    level: "Pemula",
    duration: 18,
    accent: "sand",
    objective: "Siswa mampu menyebutkan anggota keluarga dan mendeskripsikan keluarga dengan kalimat sederhana.",
    vocabulary: [
      { arabic: "أَبٌ", latin: "Abun", meaning: "Ayah" },
      { arabic: "أُمٌّ", latin: "Ummun", meaning: "Ibu" },
      { arabic: "أَخٌ", latin: "Akhun", meaning: "Saudara laki-laki" },
      { arabic: "أُخْتٌ", latin: "Ukhtun", meaning: "Saudara perempuan" }
    ],
    dialogue: [
      { speaker: "مَرْيَمُ", arabic: "كَمْ فَرْدًا فِي أُسْرَتِكِ؟", translation: "Ada berapa orang dalam keluargamu?" },
      { speaker: "فَاطِمَةُ", arabic: "فِي أُسْرَتِي خَمْسَةُ أَفْرَادٍ", translation: "Dalam keluarga saya ada lima orang." },
      { speaker: "مَرْيَمُ", arabic: "مَنْ هُمْ؟", translation: "Siapa saja mereka?" },
      { speaker: "فَاطِمَةُ", arabic: "أَبِي وَأُمِّي وَأَخَوَايَ وَأَنَا", translation: "Ayah, ibu, dua saudara laki-laki, dan saya." }
    ],
    practicePrompt: "Ceritakan keluargamu dalam empat sampai lima kalimat bahasa Arab."
  },
  {
    id: "madrasah",
    title: "Sekolah",
    arabicTitle: "المَدْرَسَةُ",
    transliteration: "Al-madrasah",
    description: "Mengenal kosakata sekolah dan menjelaskan kegiatan belajar.",
    level: "Pemula",
    duration: 20,
    accent: "blue",
    objective: "Siswa mampu menyebutkan benda dan tempat di sekolah serta menjelaskan aktivitas belajar.",
    vocabulary: [
      { arabic: "مَدْرَسَةٌ", latin: "Madrasatun", meaning: "Sekolah" },
      { arabic: "فَصْلٌ", latin: "Fashlun", meaning: "Kelas" },
      { arabic: "مَكْتَبَةٌ", latin: "Maktabatun", meaning: "Perpustakaan" },
      { arabic: "مُعَلِّمٌ", latin: "Mu'allimun", meaning: "Guru" }
    ],
    dialogue: [
      { speaker: "خَالِدٌ", arabic: "أَيْنَ تَدْرُسُ؟", translation: "Di mana kamu belajar?" },
      { speaker: "حَسَنٌ", arabic: "أَدْرُسُ فِي المَدْرَسَةِ الثَّانَوِيَّةِ", translation: "Saya belajar di sekolah menengah." },
      { speaker: "خَالِدٌ", arabic: "مَا مَادَّتُكَ المُفَضَّلَةُ؟", translation: "Apa mata pelajaran kesukaanmu?" },
      { speaker: "حَسَنٌ", arabic: "مَادَّتِي المُفَضَّلَةُ هِيَ اللُّغَةُ العَرَبِيَّةُ", translation: "Mata pelajaran kesukaan saya adalah bahasa Arab." }
    ],
    practicePrompt: "Jelaskan sekolahmu, mata pelajaran favorit, dan kegiatan yang biasa kamu lakukan."
  },
  {
    id: "hiwayah",
    title: "Hobi",
    arabicTitle: "الهِوَايَةُ",
    transliteration: "Al-hiwāyah",
    description: "Menyampaikan hobi, kesukaan, dan aktivitas waktu luang.",
    level: "Dasar",
    duration: 20,
    accent: "lilac",
    objective: "Siswa mampu menyatakan hobi dan memberikan alasan sederhana tentang kesukaannya.",
    vocabulary: [
      { arabic: "هِوَايَةٌ", latin: "Hiwāyatun", meaning: "Hobi" },
      { arabic: "قِرَاءَةٌ", latin: "Qirā'atun", meaning: "Membaca" },
      { arabic: "رِيَاضَةٌ", latin: "Riyādhah", meaning: "Olahraga" },
      { arabic: "رَسْمٌ", latin: "Rasmun", meaning: "Menggambar" }
    ],
    dialogue: [
      { speaker: "سَارَةُ", arabic: "مَا هِوَايَتُكَ؟", translation: "Apa hobimu?" },
      { speaker: "زَيْدٌ", arabic: "هِوَايَتِي قِرَاءَةُ الكُتُبِ", translation: "Hobi saya membaca buku." },
      { speaker: "سَارَةُ", arabic: "مَتَى تَقْرَأُ؟", translation: "Kapan kamu membaca?" },
      { speaker: "زَيْدٌ", arabic: "أَقْرَأُ فِي وَقْتِ الفَرَاغِ", translation: "Saya membaca pada waktu luang." }
    ],
    practicePrompt: "Ceritakan hobimu dan jelaskan kapan kamu biasanya melakukannya."
  },
  {
    id: "yaumiyyat",
    title: "Aktivitas Harian",
    arabicTitle: "الأَنْشِطَةُ اليَوْمِيَّةُ",
    transliteration: "Al-ansyithah al-yaumiyyah",
    description: "Menceritakan rutinitas dari pagi hingga malam.",
    level: "Dasar",
    duration: 25,
    accent: "mint",
    objective: "Siswa mampu menceritakan urutan aktivitas harian menggunakan kata kerja dan keterangan waktu.",
    vocabulary: [
      { arabic: "أَسْتَيْقِظُ", latin: "Astaiqizhu", meaning: "Saya bangun" },
      { arabic: "أَذْهَبُ", latin: "Adzhabu", meaning: "Saya pergi" },
      { arabic: "أَتَنَاوَلُ", latin: "Atanāwalu", meaning: "Saya menyantap" },
      { arabic: "مَسَاءً", latin: "Masā'an", meaning: "Pada sore/malam hari" }
    ],
    dialogue: [
      { speaker: "عُمَرُ", arabic: "مَتَى تَسْتَيْقِظُ؟", translation: "Kapan kamu bangun?" },
      { speaker: "بِلَالٌ", arabic: "أَسْتَيْقِظُ فِي السَّاعَةِ الخَامِسَةِ", translation: "Saya bangun pukul lima." },
      { speaker: "عُمَرُ", arabic: "مَاذَا تَفْعَلُ بَعْدَ ذَلِكَ؟", translation: "Apa yang kamu lakukan setelah itu?" },
      { speaker: "بِلَالٌ", arabic: "أَصَلِّي ثُمَّ أَسْتَعِدُّ لِلذَّهَابِ إِلَى المَدْرَسَةِ", translation: "Saya salat kemudian bersiap pergi ke sekolah." }
    ],
    practicePrompt: "Ceritakan rutinitas harianmu dengan urutan waktu yang jelas."
  },
  {
    id: "suuq",
    title: "Di Pasar",
    arabicTitle: "فِي السُّوقِ",
    transliteration: "Fī as-sūq",
    description: "Melakukan percakapan sederhana saat membeli barang.",
    level: "Menengah",
    duration: 25,
    accent: "sand",
    objective: "Siswa mampu bertanya harga, menyebutkan jumlah, dan melakukan transaksi sederhana.",
    vocabulary: [
      { arabic: "سُوقٌ", latin: "Sūqun", meaning: "Pasar" },
      { arabic: "سِعْرٌ", latin: "Si'run", meaning: "Harga" },
      { arabic: "بِكَمْ", latin: "Bikam", meaning: "Berapa harganya" },
      { arabic: "غَالٍ", latin: "Ghālin", meaning: "Mahal" }
    ],
    dialogue: [
      { speaker: "البَائِعُ", arabic: "مَاذَا تُرِيدُ؟", translation: "Apa yang Anda inginkan?" },
      { speaker: "المُشْتَرِي", arabic: "أُرِيدُ كِيلُوًا مِنَ التُّفَّاحِ", translation: "Saya ingin satu kilogram apel." },
      { speaker: "المُشْتَرِي", arabic: "بِكَمْ هَذَا؟", translation: "Berapa harga ini?" },
      { speaker: "البَائِعُ", arabic: "بِعَشَرَةِ آلَافِ رُوبِيَّةٍ", translation: "Sepuluh ribu rupiah." }
    ],
    practicePrompt: "Buat simulasi percakapan antara penjual dan pembeli di pasar."
  }
];

export const vocabulary = lessons.flatMap((lesson) =>
  lesson.vocabulary.map((word) => ({ ...word, topic: lesson.title, lessonId: lesson.id }))
);

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa arti dari kata berikut?",
    arabic: "مَدْرَسَةٌ",
    options: ["Rumah", "Sekolah", "Pasar", "Perpustakaan"],
    answer: 1,
    explanation: "مَدْرَسَةٌ (madrasatun) berarti sekolah."
  },
  {
    id: 2,
    question: "Ungkapan bahasa Arab untuk menanyakan nama adalah ...",
    options: ["كَيْفَ حَالُكَ؟", "أَيْنَ بَيْتُكَ؟", "مَا اسْمُكَ؟", "كَمْ عُمْرُكَ؟"],
    answer: 2,
    explanation: "مَا اسْمُكَ؟ berarti siapa namamu?"
  },
  {
    id: 3,
    question: "Apa arti dari أُمٌّ?",
    options: ["Ayah", "Ibu", "Saudara laki-laki", "Anak"],
    answer: 1,
    explanation: "أُمٌّ (ummun) berarti ibu."
  },
  {
    id: 4,
    question: "Kata bahasa Arab yang berarti membaca adalah ...",
    options: ["قِرَاءَةٌ", "كِتَابَةٌ", "رَسْمٌ", "لَعِبٌ"],
    answer: 0,
    explanation: "قِرَاءَةٌ (qirā'atun) berarti membaca atau kegiatan membaca."
  },
  {
    id: 5,
    question: "Apa arti بِكَمْ هَذَا؟",
    options: ["Siapa ini?", "Di mana ini?", "Apa ini?", "Berapa harga ini?"],
    answer: 3,
    explanation: "بِكَمْ هَذَا؟ digunakan untuk menanyakan harga suatu barang."
  }
];

export const learningTips = [
  "Dengarkan contoh percakapan dua kali sebelum menirukan pelafalannya.",
  "Gunakan kosakata baru dalam kalimat yang berkaitan dengan kehidupan sehari-hari.",
  "Rekam latihan berbicaramu, lalu dengarkan kembali untuk mengevaluasi pelafalan.",
  "Berlatihlah secara singkat tetapi konsisten setiap hari."
];
