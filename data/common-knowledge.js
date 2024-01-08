const quizData = {
  title: "Pengetahuan UMUM", 
  desc: `Selamat datang dalam Kuis Pengetahuan UMUM.
  Dalam kuis ini, anda akan disajikan 2 jenis pertanyaan yaitu<br>
  <ol>
    <li>
      <h3>Pilihan Ganda</h3>
      <p>
      Pada jenis ini, terdapat pertanyaan dengan 4 kemungkinan jawaban.
      Silahkan pilih salah satu jawaban <br>yang anda rasa benar.
      Setelah anda memilih, jawaban akan langsung ditampilkan.
      Jawaban benar <br> ditunjukkan hijau, jawaban salah ditunjukkan merah
      </p>
    </li>
    <li>
      <h3>Input Teks</h3>
      <p>
      Pada jenis ini, terdapat pertanyaan dengan 1 kemungkinan jawaban.
      Silahkan isi jawaban di kolom yang <br> tersedia.
      Setelah mengisi, silahkan klik "Cek".
      Jawaban benar ditunjukkan hijau, jawaban salah <br> ditunjukkan merah
      Kesalahan penulisan pada jawaban menghasilkan jawaban salah
      </p>
    </li>
  </ol>
  Nilai minimum untuk lulus adalah 70, jika dibawah itu maka anda
  diharuskan mengulang <br>
  Selamat Mengerjakan...`
};

const questions = [
  {
    text: "Kapan Anda dilahirkan?",
    type: "mc",
    answers: [
      { text: "08 Januari 2000", correct: false },
      { text: "08 Januari 2001", correct: true },
      { text: "09 Januari 2000", correct: false },
      { text: "09 Januari 2001", correct: false }
    ]
  },
  // {
  //   text: "Kapan Enrico dilahirkan?",
  //   type: "mc",
  //   answers: [
  //     { text: "20 Oktober 2000", correct: true },
  //     { text: "21 November 2001", correct: false },
  //     { text: "20 Oktober 2001", correct: false },
  //     { text: "Lupa...", correct: false }
  //   ]
  // },
  // {
  //   text: "Kapan kita jadian? (Gunakan format DD-MM-YYYY)",
  //   type: "txt",
  //   answers: ["20-02-2020"]
  // },
  // {
  //   text: "Berapa selisih umur anda dengan Enrico? (Dalam hari)",
  //   type: "txt",
  //   answers: ["80", "80 hari"]
  // }
];

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
const questionss = shuffle(questions);

module.exports = { quizData, questionss };
