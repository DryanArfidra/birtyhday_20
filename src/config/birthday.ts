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
      { id: "1", src: "/public/images/images1.jpg", caption: "First time kita jalan berdua", date: "12 Februari 2023" },
      { id: "2", src: "/images/memory-02.jpg", caption: "Sore yang nggak mau aku lupakan", date: "20 Maret 2023" },
      { id: "3", src: "/images/memory-03.jpg", caption: "Kopi dan obrolan panjang", date: "05 Mei 2023" },
      { id: "4", src: "/images/memory-04.jpg", caption: "Ketawa sampai lupa waktu", date: "18 Juni 2023" },
      { id: "5", src: "/images/memory-05.jpg", caption: "Sederhana, tapi berarti", date: "02 Agustus 2023" },
      { id: "6", src: "/images/memory-06.jpg", caption: "Dan masih banyak lagi nanti", date: "—" },
    ] as MemoryPhoto[],
  },
  

questions: [
  {
    id: 1,
    question: "Kamu sayang aku nggak? ❤️",
    options: [
      "Sayang ❤️",
      "Tidak 💔",
    ],
    correctIndex: 0,
    wrongMessage: "Yah, kok pilih tidak? 😭 Coba lagi ya, sayang!",
  },
  {
    id: 2,
    question: "Beneran sayang banget sama aku? 🥺❤️",
    options: [
      "Sayang banget! ❤️",
      "Biasa saja 😝",
    ],
    correctIndex: 0,
    wrongMessage: "Lho, kok biasa aja? Aku maunya disayang banget 🤭❤️",
  },
  {
    id: 3,
    question: "Siapa yang ulang tahun ke-20 tanggal 25 Oktober? 🎂",
    options: [
      "Aryan, tanggal 25 Maret 🎁",
      "Nayla, tanggal 25 Oktober 💗",
      "Nayla, tanggal 25 Maret 🌷",
      "Aryan, tanggal 25 Oktober 🎉",
    ],
    correctIndex: 1,
    wrongMessage: "Coba ingat lagi, siapa yang ulang tahun ke-20? 🥹💕",
  },
  {
    id: 4,
    question: "Kalau kamu sayang aku, pasti tahu dong tanggal ulang tahunku? 🤭❤️",
    options: [
      "3 Maret 🎂",
      "25 Maret ❤️",
      "14 November 🎁",
      "30 April 💕",
    ],
    correctIndex: 1,
    wrongMessage: "Masa tanggal ulang tahun aku lupa, Nayla? 😭❤️",
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