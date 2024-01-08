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

const questionss = [
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
  {
    text: "Kapan Enrico dilahirkan?",
    type: "mc",
    answers: [
      { text: "20 Oktober 2000", correct: true },
      { text: "21 November 2001", correct: false },
      { text: "20 Oktober 2001", correct: false },
      { text: "Lupa...", correct: false }
    ]
  },
  {
    text: "Kapan kita jadian? (Gunakan format DD-MM-YYYY)",
    type: "txt",
    answers: ["20-02-2020"]
  },
  {
    text: "Berapa selisih umur anda dengan Enrico? (Dalam hari)",
    type: "txt",
    answers: ["80", "80 hari"]
  },
  {
    text: "Apa warna kesukaan Enrico?",
    type: "txt",
    answers: ["biru", "merah"]
  },
  {
    text: "Sudah berapa kali anda ke Propau?",
    type: "txt",
    answers: ["2 kali", "2", "dua"]
  },
  {
    text: "Buah buah apa yang belum pasti?",
    type: "mc",
    answers: [
      { text: "Duren", correct: false },
      { text: "Dugan", correct: true },
      { text: "Singkong", correct: false },
      { text: "Apel", correct: false }
    ]
  },
  {
    text: "Berapa tinggi Enrico?",
    type: "mc",
    answers: [
      { text: "170 CM", correct: true },
      { text: "169 CM", correct: false },
      { text: "174 CM", correct: false },
      { text: "175 CM", correct: false }
    ]
  },
  {
    text: "Film apa yang terakhir kali Enrico sarankan tonton tapi belum ditonton?",
    type: "mc",
    answers: [
      { text: "The Butterfly Effect", correct: false },
      { text: "Mr. Nobody", correct: true },
      { text: "Inception", correct: false },
      { text: "Back to The Future", correct: false }
    ]
  },
  {
    text: "Yang mana yang bukan merupakan dekan di ITERA?",
    type: "mc",
    answers: [
      { text: "Arif Rohman, S.T.,M.T.", correct: false },
      { text: "Dr. Ikah Ning Prasetiowati Permanasari, S.Si., M.Si.", correct: false },
      { text: "Hadi Teguh Yudistira, S.T., Ph.D.", correct: false },
      { text: "Dr. Tarmizi Taher, S.Si.", correct: true }
    ]
  },
  {
    text: "Siapa nama baptis Enrico?",
    type: "txt",
    answers: ["ignasius"]
  },
  {
    text: "Berapa jumlah gereja yang sudah kita kunjungi selama di Lamsel?",
    type: "mc",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "Lupa...", correct: false }
    ]
  },
  {
    text: "Berapa umur dari Prof. Dr. I Nyoman Pugeg Aryantha?",
    type: "txt",
    answers: ["58 tahun", "58"]
  },
  {
    text: "Pada tahun berapa Indonesia mencapai tahun Emas (100 Tahun)?",
    type: "txt",
    answers: ["2045"]
  },
  {
    text: "Apa merk motor yang dimiliki Enrico?",
    type: "mc",
    answers: [
      { text: "Suzuki", correct: false },
      { text: "Honda", correct: false },
      { text: "Yamaha", correct: true },
      { text: "Verza", correct: false }
    ]
  }
];

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

const questions = shuffle(questionss).slice(-1);

module.exports = { quizData, questions };