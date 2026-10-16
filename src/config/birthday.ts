export type MemoryPhoto = {
  id: string;
  src: string;
  caption: string;
  date?: string;
};

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  wrongMessage?: string;
};

export const config = {
  recipient: "Nayla",
  letter: {
    title: "A Letter for You",
    greeting: "Dear Nayla,",
    paragraphs: [
      "Selamat ulang tahun, sayang. Hari ini adalah hari yang spesial karena dunia pernah menghadiahkan seseorang seindah kamu untuk aku kenal, dan sekarang aku yang beruntung bisa merayakannya bersama kamu.",
      "Terima kasih sudah menjadi rumah yang tenang, tempat aku bisa pulang setelah hari yang panjang. Terima kasih untuk tawa kecil, untuk sabar, untuk semua hal yang mungkin nggak selalu kamu sadari tapi selalu aku syukuri.",
      "Aku berharap di umur yang baru ini, semua hal baik yang kamu doakan diam-diam perlahan menemukan jalannya. Dan kalau boleh, aku ingin terus ada di setiap babaknya.",
    ],
    signature: "With love, always.",
  },
  album: {
    title: "Little Pieces of Us",
    subtitle: "Every little moment with you means something to me.",
    photos: [
      { id: "1", src: "/images/image1.jpg", caption: "First time kita jalan berdua", date: "12 Februari 2023" },
      { id: "2", src: "/images/image2.jpg", caption: "Sore yang nggak mau aku lupakan", date: "20 Maret 2023" },
      { id: "3", src: "/images/image3.jpg", caption: "Kopi dan obrolan panjang", date: "05 Mei 2023" },
      { id: "4", src: "/images/image4.jpg", caption: "Ketawa sampai lupa waktu", date: "18 Juni 2023" },
      { id: "5", src: "/images/image5.jpg", caption: "Sederhana, tapi berarti", date: "02 Agustus 2023" },
      { id: "6", src: "/images/image6.jpg", caption: "Dan masih banyak lagi nanti", date: "—" },
    ] as MemoryPhoto[],
  },
  

questions: [
  {
    id: 1,
    question: "Kamu sayang aku nggak? ❤️",
    options: ["Sayang ❤️", "Tidak 💔"],
    correctIndex: 0,
    wrongMessage:
      "Yah, kok pilih tidak? 😭 Coba lagi ya, sayang!",
  },
  {
    id: 2,
    question: "Beneran sayang banget sama aku? 🥺❤️",
    options: ["Sayang banget! ❤️", "Biasa saja 😝"],
    correctIndex: 0,
    wrongMessage:
      "Lho, kok biasa aja? Aku maunya disayang banget 🤭❤️",
  },
  {
    id: 3,
    question: "Kapan tanggal ulang tahun Nayla? 🎂❤️",
    options: [
      "ISI TANGGAL ULANG TAHUN NAYLA",
      "Pilihan tanggal kedua",
      "Pilihan tanggal ketiga",
    ],
    correctIndex: 0,
    wrongMessage:
      "Masa lupa tanggal spesial kamu sendiri? 🤭❤️",
  },
] as Question[],
  closing: {
    title: "Until Our Next Chapter",
    paragraphs: [
      "Terima kasih sudah membaca sampai sini, Nayla. Terima kasih sudah jadi bagian paling hangat dari hari-hariku.",
      "Selamat ulang tahun sekali lagi. Semoga tahun ini jadi tahun yang lembut untuk kamu, dan semoga kita masih terus berjalan berdampingan — pelan, tapi pasti.",
    ],
    cta: "Read the Letter Again",
  },
};