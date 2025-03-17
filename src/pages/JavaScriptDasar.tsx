import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import { CodeBlock } from '@/components/praktikum/CodeBlock';
import { StepGuide } from '@/components/praktikum/StepGuide';
import { InfoBox } from '@/components/praktikum/InfoBox';
import { SubmissionLink } from '@/components/praktikum/SubmissionLink';
import { ResultPreview } from '@/components/praktikum/ResultPreview';
import {
  BookOpen,
  HelpCircle,
  Target,
  PlayCircle,
  Layers,
  CheckCircle,
  Award,
  FolderTree,
} from 'lucide-react';
import { useState } from 'react';

const LivePreview1 = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-xl font-bold">Belajar JavaScript Dasar</h1>
    </div>
  );
};

const LivePreview2 = () => {
  return (
    <div className="bg-white p-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Belajar JavaScript Dasar</h1>

        <div id="result" className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p>Nama: <strong>Budi</strong></p>
          <p>Usia: <strong>20</strong></p>
          <p>Tahun Lahir: <strong>2004</strong></p>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Output di atas menunjukkan hasil dari kode JavaScript yang baru saja kita jalankan. Perhatikan bahwa kita menggunakan metode <code>getElementById</code> untuk mengakses elemen HTML dan mengubah kontennya. Selain itu, kita juga menggunakan template literals untuk menyisipkan nilai variabel ke dalam string.
          </p>
        </div>
      </div>
    </div>
  );
};

// Live Preview untuk Langkah 3
const LivePreview3 = () => {
  return (
    <div className="bg-white p-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Belajar JavaScript Dasar</h1>

        <div id="result" className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p>Nama: <strong>Budi</strong></p>
          <p>Usia: <strong>20</strong></p>
          <p>Tahun Lahir: <strong>2004</strong></p>
          <hr className="my-2" />
          <p>Nilai: <strong>85</strong></p>
          <p>Grade: <strong>B</strong></p>
          <p>Status: <strong>Lulus</strong></p>
          <p>Hari ini adalah: <strong>Senin</strong></p>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Output di atas menunjukkan hasil dari kode JavaScript yang menggunakan struktur kondisional. Kita menggunakan if-else if-else untuk menentukan grade, operator ternary untuk menentukan status, dan switch-case untuk menentukan nama hari.
          </p>
        </div>
      </div>
    </div>
  );
};

// Live Preview untuk Langkah 4
const LivePreview4 = () => {
  return (
    <div className="bg-white p-4">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Belajar JavaScript Dasar</h1>

        <div id="result" className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p>Nama: <strong>Budi</strong></p>
          <p>Usia: <strong>20</strong></p>
          <p>Tahun Lahir: <strong>2004</strong></p>
          <hr className="my-2" />
          <p>Nilai: <strong>85</strong></p>
          <p>Grade: <strong>B</strong></p>
          <p>Status: <strong>Lulus</strong></p>
          <p>Hari ini adalah: <strong>Senin</strong></p>
          <hr className="my-2" />

          <h3 className="font-semibold">Daftar Nilai Siswa:</h3>
          <ul id="daftar-nilai" className="list-disc pl-5">
            <li>Siswa 1: 85</li>
            <li>Siswa 2: 92</li>
            <li>Siswa 3: 78</li>
            <li>Siswa 4: 90</li>
            <li>Siswa 5: 88</li>
          </ul>
          <p id="rata-rata" className="mt-2">Rata-rata nilai: <strong>86.60</strong></p>

          <h3 className="font-semibold mt-3">Countdown:</h3>
          <div id="countdown" className="my-2">
            <span className="inline-block bg-blue-100 px-2 py-1 m-1 rounded">5</span>
            <span className="inline-block bg-blue-100 px-2 py-1 m-1 rounded">4</span>
            <span className="inline-block bg-blue-100 px-2 py-1 m-1 rounded">3</span>
            <span className="inline-block bg-blue-100 px-2 py-1 m-1 rounded">2</span>
            <span className="inline-block bg-blue-100 px-2 py-1 m-1 rounded">1</span>
          </div>

          <h3 className="font-semibold mt-3">Nilai dengan for...of:</h3>
          <div id="nilai-of" className="flex flex-wrap gap-2 my-2">
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-green-600">85</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-green-600">92</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-red-600">78</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-green-600">90</span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded text-green-600">88</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Output di atas menunjukkan hasil dari kode JavaScript yang menggunakan loop. Kita menggunakan for loop untuk menampilkan daftar nilai siswa, while loop untuk countdown, dan for...of loop untuk menampilkan nilai dengan format yang berbeda berdasarkan kondisi.
          </p>
        </div>
      </div>
    </div>
  );
};

const LivePreview5 = () => {
  const [namaInput, setNamaInput] = useState('Budi');
  const [sapaOutput, setSapaOutput] = useState(
    'Halo, Budi! Selamat belajar JavaScript 😊'
  );
  const [angka1, setAngka1] = useState('10');
  const [angka2, setAngka2] = useState('5');
  const [hasilKalkulator, setHasilKalkulator] = useState('10 + 5 = 15');

  const handleSapa = () => {
    if (namaInput.trim() === '') {
      setSapaOutput('Silakan masukkan nama Anda terlebih dahulu!');
    } else {
      setSapaOutput(`Halo, ${namaInput}! Selamat belajar JavaScript 😊`);
    }
  };

  const handleOperasi = (operasi: string) => {
    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    if (isNaN(num1) || isNaN(num2)) {
      setHasilKalkulator('Masukkan angka yang valid!');
      return;
    }

    let hasil;
    let operasiTeks;

    switch (operasi) {
      case 'tambah':
        hasil = num1 + num2;
        operasiTeks = '+';
        break;
      case 'kurang':
        hasil = num1 - num2;
        operasiTeks = '-';
        break;
      case 'kali':
        hasil = num1 * num2;
        operasiTeks = '×';
        break;
      case 'bagi':
        if (num2 === 0) {
          setHasilKalkulator('Error: Tidak dapat membagi dengan nol!');
          return;
        }
        hasil = num1 / num2;
        operasiTeks = '÷';
        break;
      default:
        return;
    }

    setHasilKalkulator(`${num1} ${operasiTeks} ${num2} = ${hasil}`);
  };

  return (
    <div className="bg-white p-2 sm:p-4">
      <div className="event-demo p-2 sm:p-4 my-2">
        <h2 className="text-lg sm:text-xl font-bold mb-3">Demo Event Handler</h2>
        <input
          type="text"
          id="nama-input"
          placeholder="Masukkan nama Kalian"
          className="border p-2 rounded w-full mb-3"
          value={namaInput}
          onChange={(e) => setNamaInput(e.target.value)}
        />
        <button
          id="sapa-button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
          onClick={handleSapa}
        >
          Sapa Saya
        </button>

        <div
          id="sapa-output"
          className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded"
        >
          <p className="text-blue-800 break-words">{sapaOutput}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Kalkulator Sederhana</h3>
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <input
              type="number"
              id="angka1"
              placeholder="Angka 1"
              className="border p-2 rounded flex-1"
              value={angka1}
              onChange={(e) => setAngka1(e.target.value)}
            />
            <input
              type="number"
              id="angka2"
              placeholder="Angka 2"
              className="border p-2 rounded flex-1"
              value={angka2}
              onChange={(e) => setAngka2(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              id="btn-tambah"
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              onClick={() => handleOperasi('tambah')}
            >
              +
            </button>
            <button
              id="btn-kurang"
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              onClick={() => handleOperasi('kurang')}
            >
              -
            </button>
            <button
              id="btn-kali"
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
              onClick={() => handleOperasi('kali')}
            >
              ×
            </button>
            <button
              id="btn-bagi"
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleOperasi('bagi')}
            >
              ÷
            </button>
          </div>
          <div
            id="hasil-kalkulator"
            className="mt-3 p-3 bg-green-50 border border-green-200 rounded font-semibold break-words"
          >
            {hasilKalkulator}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <p className="text-yellow-800">
          <strong>Catatan:</strong> Demo ini menunjukkan bagaimana event handler
          bekerja di JavaScript. Coba ubah nama atau angka, kemudian klik tombol
          untuk melihat hasilnya.
        </p>
      </div>
    </div>
  );
};

const LivePreview6 = () => {
  return (
    <div className="bg-white p-4">
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Manipulasi Array:</h3>
          <div id="array-demo" className="space-y-1">
            <p>
              <strong>Array buah:</strong> Apel, Jeruk, Mangga, Pisang, Anggur
            </p>
            <p>
              <strong>Setelah push Durian:</strong> Apel, Jeruk, Mangga, Pisang,
              Anggur, Durian
            </p>
            <p>
              <strong>Setelah pop:</strong> Apel, Jeruk, Mangga, Pisang, Anggur
              (item dihapus: Durian)
            </p>
            <p>
              <strong>Setelah sort:</strong> Anggur, Apel, Jeruk, Mangga, Pisang
            </p>
            <p>
              <strong>Array dengan harga:</strong> Anggur (Rp10,000), Apel
              (Rp8,000), Jeruk (Rp15,000), Mangga (Rp5,000), Pisang (Rp20,000)
            </p>
            <p>
              <strong>Buah dengan harga &gt; 10.000:</strong> Jeruk, Pisang
            </p>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Manipulasi Objek:</h3>
          <div id="objek-demo" className="space-y-1">
            <p>
              <strong>Info Mahasiswa:</strong> Budi Santoso (20210001) - Teknik
              Informatika
            </p>
            <p>
              <strong>Rata-rata Nilai:</strong> 87.67
            </p>
            <p>
              <strong>Hobi:</strong> Coding, Membaca, Futsal
            </p>
            <p>
              <strong>Email:</strong> budi.santoso@example.com
            </p>
            <p>
              <strong>Nilai Web setelah diubah:</strong> 92
            </p>
            <p>
              <strong>Hobi setelah dihapus:</strong> Tidak ada data hobi
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Output di atas menunjukkan hasil eksekusi
            kode JavaScript untuk manipulasi array dan objek. Perhatikan cara
            kerja metode array (push, pop, sort, map, filter) dan operasi pada
            objek (akses, tambah, ubah, hapus properti).
          </p>
        </div>
      </div>
    </div>
  );
};

const LivePreview7 = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const [bgColor, setBgColor] = useState('bg-blue-100');
  const [itemCount, setItemCount] = useState(3);

  // Fungsi untuk menambah item
  const handleTambahItem = () => {
    const newItemCount = itemCount + 1;
    setItemCount(newItemCount);
    setItems([...items, { id: newItemCount, text: `Item ${newItemCount}` }]);
  };

  // Fungsi untuk menghapus item
  const handleHapusItem = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
      setItemCount(itemCount - 1);
    }
  };

  // Fungsi untuk mengubah warna
  const handleUbahWarna = () => {
    const colors = [
      'bg-blue-100',
      'bg-green-100',
      'bg-yellow-100',
      'bg-pink-100',
    ];
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };

  return (
    <div className="bg-white p-4">
      <div className="dom-demo p-4 my-2">
        <h2 className="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>

        <div id="dom-output" className={`p-4 mb-3 ${bgColor} rounded`}>
          {items.map((item) => (
            <div key={item.id} className="p-2 mb-2 bg-gray-100 rounded">
              {item.text}
            </div>
          ))}
        </div>

        <div className="space-x-2">
          <button
            id="btn-tambah-item"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleTambahItem}
          >
            Tambah Item
          </button>
          <button
            id="btn-hapus-item"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleHapusItem}
          >
            Hapus Item
          </button>
          <button
            id="btn-ubah-warna"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleUbahWarna}
          >
            Ubah Warna
          </button>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <p className="text-yellow-800">
          <strong>Catatan:</strong> Interaksi ini mendemonstrasikan bagaimana
          JavaScript memanipulasi DOM untuk menambah/menghapus elemen dan
          mengubah gaya. Coba klik tombol di atas untuk melihat efeknya.
        </p>
        <p className="text-yellow-800 mt-2">
          Pada implementasi sebenarnya, ini dilakukan dengan method DOM seperti{' '}
          <code>createElement()</code>, <code>appendChild()</code>,{' '}
          <code>removeChild()</code>, dan manipulasi <code>className</code>.
        </p>
      </div>
    </div>
  );
};

const LivePreview8 = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Sample post data yang akan ditampilkan setelah tombol diklik
  const samplePosts = [
    {
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
    {
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
    },
    {
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
    },
  ];

  // Fungsi untuk mensimulasikan pengambilan data
  const handleFetchData = () => {
    // Tampilkan loading indicator
    setIsDataLoaded(true);
  };

  return (
    <div className="bg-white p-4">
      <div className="api-demo p-4 my-2">
        <h2 className="text-xl font-bold mb-3">Demo Fetch API</h2>
        <button
          id="btn-fetch"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleFetchData}
        >
          Ambil Data
        </button>

        <div id="api-output" className="mt-3">
          {isDataLoaded ? (
            <>
              <h3 className="font-bold mb-2">Daftar Post:</h3>
              {samplePosts.map((post) => (
                <div key={post.id} className="p-3 mb-2 bg-gray-100 rounded">
                  <h4 className="font-semibold">{post.title}</h4>
                  <p className="text-sm">{post.body}</p>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <p className="text-yellow-800">
          <strong>Catatan:</strong> Demo ini mensimulasikan pengambilan data
          dari API menggunakan Fetch API dan async/await.
        </p>
        <p className="text-yellow-800 mt-2">
          Pada implementasi sebenarnya, data benar-benar diambil dari server
          eksternal (JSONPlaceholder API) saat tombol "Ambil Data" diklik.
        </p>
        <p className="text-yellow-800 mt-2">
          Async/await memungkinkan penulisan kode asynchronous secara
          synchronous, membuat kode lebih mudah dibaca dan di-debug.
        </p>
      </div>
    </div>
  );
};

export default function JavaScriptDasar() {
  return (
    <PraktikumLayout
      title="Praktikum JavaScript Dasar"
      subtitle="Mengenal dasar-dasar JavaScript dan konsep pemrograman web"
    >
      <SectionWrapper
        id="tujuan"
        title="Tujuan Praktikum"
        icon={<Target className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Memahami konsep dasar JavaScript sebagai bahasa pemrograman web
            </li>
            <li>
              Menguasai penggunaan variabel, tipe data, dan operator dalam
              JavaScript
            </li>
            <li>
              Mengimplementasikan struktur kendali (conditionals dan loops)
            </li>
            <li>Membuat dan menggunakan fungsi dalam JavaScript</li>
            <li>Mengerti cara menangani event dan memanipulasi DOM</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="dasar-teori"
        title="Dasar Teori"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-6">
          <InfoBox type="info" title="Apa itu JavaScript?">
            <p>
              JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan
              serbaguna yang memungkinkan Kalian untuk menambahkan
              interaktivitas ke halaman web. Sejak diciptakan oleh Brendan Eich
              pada tahun 1995, JavaScript telah menjadi salah satu bahasa
              pemrograman paling populer di dunia.
            </p>
            <p className="mt-2">
              Menurut survey Stack Overflow Developer Survey 2024, JavaScript
              tetap menjadi bahasa pemrograman yang paling banyak digunakan
              untuk tahun kesepuluh berturut-turut, dengan lebih dari 67%
              developer menggunakannya secara reguler.
            </p>
            <p className="mt-2">
              JavaScript awalnya dikembangkan untuk browser Netscape Navigator
              dengan nama "Mocha", kemudian diubah menjadi "LiveScript", dan
              akhirnya menjadi "JavaScript" sebagai strategi pemasaran untuk
              memanfaatkan popularitas Java pada saat itu.
            </p>
          </InfoBox>

          <div className="overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-800 my-4">
              Karakteristik Utama JavaScript
            </h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                    Karakteristik
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                    Deskripsi
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                    Contoh
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Client-side scripting
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Berjalan di browser pengguna, tidak memerlukan kompilasi
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      document.getElementById('demo').innerHTML = 'Hello World';
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Dinamis
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Tipe data ditentukan saat runtime
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      let x = 5; // x adalah number
                      <br />x = "John"; // sekarang x adalah string
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Berorientasi objek
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Berbasis prototipe alih-alih kelas
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>{`
const person = {name: 'John', age: 30};
                      `}</pre>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Event-driven
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Dapat merespons tindakan pengguna
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>{`
button.addEventListener('click', function() {alert('Clicked!'); });
`}</pre>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    First-class functions
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Fungsi dapat diperlakukan sebagai variabel
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>
                        {`
const greeting = function(name) { return \`Hello ${name}\`; };`}
                      </pre>
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">
              Engine JavaScript
            </h3>
            <p>
              Engine JavaScript adalah program yang mengeksekusi kode
              JavaScript. Browser web modern memiliki engine JavaScript
              terintegrasi.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>V8</strong>: Dikembangkan oleh Google, digunakan di
                Chrome dan Node.js
              </li>
              <li>
                <strong>SpiderMonkey</strong>: Engine pertama, dikembangkan oleh
                Netscape, sekarang digunakan di Firefox
              </li>
              <li>
                <strong>JavaScriptCore</strong>: Dikembangkan oleh Apple untuk
                Safari
              </li>
              <li>
                <strong>Chakra</strong>: Dikembangkan oleh Microsoft untuk Edge
                (versi lama)
              </li>
            </ul>
          </div>

          {/* Dasar-dasar JavaScript */}
          <div className="flex flex-col mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Dasar-dasar JavaScript
            </h3>

            <div>
              <p>JavaScript memiliki 3 cara untuk mendeklarasikan variabel:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <code>var</code>: Cara lama, memiliki cakupan fungsi atau
                  global
                </li>
                <li>
                  <code>let</code>: Diperkenalkan di ES6, memiliki cakupan blok
                </li>
                <li>
                  <code>const</code>: Diperkenalkan di ES6, untuk nilai yang
                  tidak berubah
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-700">Tipe Data Primitif</h4>
              <p>
                Number, String, Boolean, Undefined, Null, Symbol, dan BigInt
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg font-medium text-gray-800">
              JavaScript modern tidak hanya terbatas pada browser, tetapi telah
              berkembang menjadi ekosistem lengkap untuk pengembangan berbagai
              platform:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: 'Server-side',
                  tech: 'Node.js, Deno',
                  color: 'bg-blue-50',
                },
                {
                  title: 'Mobile',
                  tech: 'React Native, Ionic',
                  color: 'bg-green-50',
                },
                {
                  title: 'Desktop',
                  tech: 'Electron, NW.js',
                  color: 'bg-yellow-50',
                },
                {
                  title: 'IoT',
                  tech: 'Johnny-Five, Cylon.js',
                  color: 'bg-purple-50',
                },
                { title: 'Game', tech: 'Phaser, Three.js', color: 'bg-red-50' },
                {
                  title: 'AI/ML',
                  tech: 'TensorFlow.js, Brain.js',
                  color: 'bg-blue-50',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} p-4 rounded-xl shadow-md hover:scale-105 transition-transform`}
                >
                  <h4 className="font-semibold text-blue-700 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">{item.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-800 my-4">
                Fitur JavaScript Modern
              </h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                      Fitur
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                      Deskripsi
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                      Contoh
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Arrow Functions
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Sintaks ringkas untuk fungsi
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
const add = (a, b) => a + b;
`}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Template Literals
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      String yang mendukung interpolasi
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`\`Hello, ${name}!\``}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Destructuring
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Ekstraksi nilai dari objek/array
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
const {name, age} = person;
                         `}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Promises
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Penanganan operasi asinkron
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
fetch(url).then(response => response.json())
`}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Async/Await
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Sintaks untuk kode asinkron
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
async function getData() {... }
`}</pre>
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Document Object Model (DOM)
            </h3>
            <p>
              DOM adalah representasi terstruktur dari dokumen HTML yang
              memungkinkan JavaScript untuk berinteraksi dengan dan memanipulasi
              konten halaman web.
            </p>
            <div className="mt-2 bg-gray-100 p-3 md:p-5 rounded-md overflow-x-auto">
              <code className="text-sm md:text-base">
                <pre className="whitespace-pre-wrap md:whitespace-pre">{`
// Mengakses elemen
const element = document.getElementById('myId');

// Mengubah konten
element.innerHTML = 'New content';

// Menambah event listener
element.addEventListener('click', function() {
    alert('Element clicked!');
});
        `}</pre>
              </code>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mt-8">
              API Web Modern
            </h3>
            <p className="text-lg font-medium text-gray-800">
              JavaScript modern menawarkan berbagai API Web yang memungkinkan
              pengembangan aplikasi yang kaya fitur:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: 'Fetch API',
                  tech: 'Mengirim permintaan jaringan',
                  color: 'bg-blue-50',
                },
                {
                  title: 'Web Storage',
                  tech: 'Menyimpan data di browser',
                  color: 'bg-green-50',
                },
                {
                  title: 'Geolocation',
                  tech: 'Mendapatkan lokasi pengguna',
                  color: 'bg-yellow-50',
                },
                {
                  title: 'Canvas',
                  tech: 'Menggambar grafik dinamis',
                  color: 'bg-purple-50',
                },
                {
                  title: 'WebSockets',
                  tech: 'Komunikasi dua arah real-time',
                  color: 'bg-red-50',
                },
                {
                  title: 'IndexedDB',
                  tech: 'Database di sisi klien',
                  color: 'bg-blue-50',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} p-4 rounded-xl shadow-md hover:scale-105 transition-transform`}
                >
                  <h4 className="font-semibold text-blue-700 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">{item.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="prasyarat"
        title="Prasyarat"
        icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Sebelum memulai praktikum ini, pastikan Kalian memiliki pengetahuan
            dasar tentang:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>HTML dan CSS dasar</li>
            <li>Konsep logika pemrograman</li>
            <li>Penggunaan browser modern (Chrome, Firefox, dll.)</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="alat-bahan"
        title="Alat dan Bahan"
        icon={<Layers className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Untuk mengikuti praktikum ini, Kalian memerlukan:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Browser Web</strong>: Chrome, Firefox, atau Edge
            </li>
            <li>
              <strong>Code Editor</strong>: Visual Studio Code, Sublime Text,
              atau editor teks lainnya
            </li>
          </ul>

          <InfoBox type="tip" title="Rekomendasi">
            <p>
              Kami menyarankan menggunakan Visual Studio Code dengan ekstensi
              JavaScript (ES6) code snippets dan LiveServer untuk pengalaman
              pengembangan yang lebih baik.
            </p>
          </InfoBox>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="langkah-praktikum"
        title="Langkah Praktikum"
        icon={<PlayCircle className="w-6 h-6 text-blue-500" />}
      >
        <StepGuide
          steps={[
            {
              id: 1,
              title: 'Membuat File JavaScript Pertama',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Buat sebuah file HTML baru dengan nama{' '}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      index.html
                    </code>{' '}
                    dan file JavaScript dengan nama{' '}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      script.js
                    </code>
                    . Hubungkan file JavaScript dengan file HTML menggunakan tag
                    script.
                  </p>

                  <CodeBlock
                    title="index.html"
                    code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Dasar</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> 
    <!-- Tailwind opsional karna kali ini kita tidak fokus ke styling -->
</head>
<body>
    <h1>Belajar JavaScript Dasar</h1>
    
    <div id="result"></div>
    
    <!-- Menghubungkan dengan file JavaScript -->
    <script src="script.js"></script>
</body>
</html>`}
                    language="html"
                  />
                  <ResultPreview
                    title="Output Langkah 1"
                    livePreview={<LivePreview1 />}
                  ></ResultPreview>

                  <InfoBox type="info">
                    <p>
                      Tag{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        script
                      </code>{' '}
                      dapat diletakkan di dalam{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        head
                      </code>{' '}
                      atau sebelum penutup{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        body
                      </code>
                      . Menempatkannya sebelum penutup body memastikan bahwa
                      semua elemen HTML telah dimuat sebelum JavaScript
                      dijalankan.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 2,
              title: 'Mengenal Variabel dan Output',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Buka file{' '}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      script.js
                    </code>{' '}
                    dan tulis kode berikut untuk mendeklarasikan variabel dan
                    menampilkan output:
                  </p>

                  <CodeBlock
                    title="script.js"
                    code={`// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Budi";
let usia = 20;
const TAHUN_LAHIR = 2004;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = \`
  <p>Nama: <strong>\${nama}</strong></p>
  <p>Usia: <strong>\${usia}</strong></p>
  <p>Tahun Lahir: <strong>\${TAHUN_LAHIR}</strong></p>
\`;`}
                    language="javascript"
                  />

                  <p className="text-gray-700">
                    Buka file HTML Kalian di browser dan buka konsol pengembang
                    (F12 atau klik kanan → Inspect → Console) untuk melihat
                    output log yang dihasilkan.
                  </p>

                  <ResultPreview
                    title="Output Langkah 2"
                    livePreview={<LivePreview2 />}
                  ></ResultPreview>

                  <InfoBox type="tip">
                    <p>
                      Template literals (menggunakan backticks ``) memungkinkan
                      Kalian untuk menyisipkan variabel langsung ke dalam string
                      dengan menggunakan sintaks{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded">
                        ${'{'}variabel{'}'}
                      </code>
                      .
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 3,
              title: 'Implementasi Struktur Kondisional',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Tambahkan kode berikut untuk mempelajari struktur
                    kondisional dalam JavaScript:
                  </p>

                  <CodeBlock
                    title="script.js (tambahkan di bawah kode sebelumnya)"
                    code={`// Struktur kondisional
let nilai = 85;
let grade = "";

// If-else if-else
if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Nilai: " + nilai + ", Grade: " + grade);

// Menambahkan hasil ke HTML
document.getElementById("result").innerHTML += \`
  <hr>
  <p>Nilai: <strong>\${nilai}</strong></p>
  <p>Grade: <strong>\${grade}</strong></p>
\`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += \`
  <p>Status: <strong>\${status}</strong></p>
\`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";

switch (hari) {
    case 0:
        namaHari = "Minggu";
        break;
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah: " + namaHari);

document.getElementById("result").innerHTML += \`
  <p>Hari ini adalah: <strong>\${namaHari}</strong></p>
\`;`}
                    language="javascript"
                  />
                  <ResultPreview
                    title="Output Langkah 3"
                    livePreview={<LivePreview3 />}
                  ></ResultPreview>

                  <InfoBox type="info">
                    <p>
                      JavaScript menyediakan beberapa cara untuk membuat
                      keputusan berdasarkan kondisi: if-else, ternary operator
                      (?:), dan switch-case. Pilih yang paling sesuai dengan
                      kebutuhan kode Kalian.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 4,
              title: 'Menggunakan Loop',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Tambahkan kode berikut untuk mempelajari loop dalam
                    JavaScript:
                  </p>

                  <CodeBlock
                    title="script.js (tambahkan di bawah kode sebelumnya)"
                    code={`// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Daftar Nilai Siswa:</h3>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
\`;

for (let i = 0; i < nilaiSiswa.length; i++) {
    total += nilaiSiswa[i];
    document.getElementById("daftar-nilai").innerHTML += \`
      <li>Siswa \${i + 1}: \${nilaiSiswa[i]}</li>
    \`;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = \`
  Rata-rata nilai: <strong>\${rataRata.toFixed(2)}</strong>
\`;

// While loop
document.getElementById("result").innerHTML += \`
  <h3>Countdown:</h3>
  <div id="countdown"></div>
\`;

let hitungMundur = 5;
while (hitungMundur > 0) {
    document.getElementById("countdown").innerHTML += \`
      <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">\${hitungMundur}</span>
    \`;
    hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += \`
  <h3>Nilai dengan for...of:</h3>
  <div id="nilai-of" class="flex flex-wrap gap-2"></div>
\`;

for (let nilai of nilaiSiswa) {
    let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
    document.getElementById("nilai-of").innerHTML += \`
      <span class="inline-block bg-gray-100 px-3 py-1 rounded \${statusNilai}">\${nilai}</span>
    \`;
}`}
                    language="javascript"
                  />
                  <ResultPreview
                    title="Output Langkah 4"
                    livePreview={<LivePreview4 />}
                  ></ResultPreview>

                  <InfoBox type="info">
                    <p>
                      JavaScript menyediakan beberapa jenis loop: for, while,
                      do-while, for...in, dan for...of. for...of (diperkenalkan
                      di ES6) sangat berguna untuk meng-iterasi array dan objek
                      iterable lainnya.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 5,
              title: 'Fungsi dan Event Handler',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pada langkah ini, kita akan belajar membuat fungsi dan
                    menangani event:
                  </p>

                  <CodeBlock
                    title="Tambahkan ke index.html"
                    code={`<hr>
<div class="event-demo p-4 my-4 border border-gray-300 rounded">
    <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
    <input type="text" id="nama-input" placeholder="Masukkan nama Kalian" class="border p-2 rounded w-full mb-3">
    <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sapa Saya</button>
    <div id="sapa-output" class="mt-3"></div>
    
    <div class="mt-4">
        <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
        <div class="flex gap-2 mb-3">
            <input type="number" id="angka1" placeholder="Angka 1" class="border p-2 rounded flex-1">
            <input type="number" id="angka2" placeholder="Angka 2" class="border p-2 rounded flex-1">
        </div>
        <div class="flex gap-2">
            <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
            <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">-</button>
            <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">×</button>
            <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">÷</button>
        </div>
        <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
    </div>
</div>`}
                    language="html"
                  />
                  <CodeBlock
                    title="Tambahkan kode JavaScript berikut ke file script.js kalian"
                    code={`function sapaNama(nama) {
    return \`Halo, \${nama}! Selamat belajar JavaScript!\`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            \`<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>\`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            \`<p class="text-green-500">\${pesan}</p>\`;
    }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} + \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} - \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} × \${angka2} = \${hasil}</p>\`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p class="text-red-500">Masukkan angka yang valid!</p>\`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            \`<p>Hasil: \${angka1} ÷ \${angka2} = \${hasil}</p>\`;
    }
});`}
                    language="javascript"
                  />

                  <ResultPreview
                    title="Output Langkah 5"
                    livePreview={<LivePreview5 />}
                  ></ResultPreview>
                </div>
              ),
            },

            {
              id: 6,
              title: 'Array dan Objek',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pada langkah ini, kita akan belajar membuat fungsi dan
                    menangani event:
                  </p>

                  <CodeBlock
                    title="Tambahkan ke script.js"
                    code={`// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Manipulasi Array:</h3>
  <div id="array-demo"></div>
\`;

// Menampilkan array
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array buah:</strong> \${buah.join(", ")}</p>
\`;

// Menambahkan item
buah.push("Durian");
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah push Durian:</strong> \${buah.join(", ")}</p>
\`;

// Menghapus item terakhir
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah pop:</strong> \${buah.join(", ")} (item dihapus: \${itemDihapus})</p>
\`;

// Mengurutkan array
buah.sort();
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Setelah sort:</strong> \${buah.join(", ")}</p>
\`;

// Array map
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => \`\${item} (Rp\${hargaBuah[index].toLocaleString()})\`);

document.getElementById("array-demo").innerHTML += \`
  <p><strong>Array dengan harga:</strong> \${daftarBuah.join(", ")}</p>
\`;

// Array filter
const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += \`
  <p><strong>Buah dengan harga > 10.000:</strong> \${buahMahal.join(", ")}</p>
\`;

// Objek
const mahasiswa = {
    nama: "Budi Santoso",
    nim: "20210001",
    jurusan: "Teknik Informatika",
    nilai: {
        algoritma: 85,
        basis_data: 90,
        web: 88
    },
    hobi: ["Coding", "Membaca", "Futsal"],
    tampilkanInfo: function() {
        return \`\${this.nama} (\${this.nim}) - \${this.jurusan}\`;
    },
    hitungRataRata: function() {
        const nilaiArray = Object.values(this.nilai);
        const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
        return (total / nilaiArray.length).toFixed(2);
    }
};

document.getElementById("result").innerHTML += \`
  <hr>
  <h3>Manipulasi Objek:</h3>
  <div id="objek-demo"></div>
\`;

// Menampilkan informasi objek
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Info Mahasiswa:</strong> \${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> \${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> \${mahasiswa.hobi.join(", ")}</p>
\`;

// Menambahkan properti baru ke objek
mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Email:</strong> \${mahasiswa.email}</p>
\`;

// Mengubah nilai properti
mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Nilai Web setelah diubah:</strong> \${mahasiswa.nilai.web}</p>
\`;

// Menghapus properti
delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += \`
  <p><strong>Hobi setelah dihapus:</strong> \${mahasiswa.hobi ? mahasiswa.hobi.join(", ") : "Tidak ada data hobi"}</p>
\`;`}
                    language="html"
                  />

                  <InfoBox type="info">
                    <p>
                      Array dan objek adalah struktur data penting dalam
                      JavaScript. Array digunakan untuk menyimpan koleksi data,
                      sedangkan objek digunakan untuk menyimpan data dalam
                      bentuk pasangan key-value. JavaScript menyediakan banyak
                      metode bawaan untuk memanipulasi array dan objek.
                    </p>
                  </InfoBox>

                  <ResultPreview
                    title="Output Langkah 6"
                    livePreview={<LivePreview6 />}
                  ></ResultPreview>
                </div>
              ),
            },

            {
              id: 7,
              title: 'Manipulasi DOM',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pelajari cara memanipulasi DOM (Document Object Model)
                    dengan JavaScript:
                  </p>

                  <CodeBlock
                    title="Tambahkan ke index.html (sebelum tag script)"
                    code={`<hr>
<div class="dom-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>
  <div id="dom-output" class="mb-3"></div>
  <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tambah Item</button>
  <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus Item</button>
  <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ubah Warna</button>
</div>`}
                    language="html"
                  />

                  <CodeBlock
                    title="script.js (tambahkan di bawah kode sebelumnya)"
                    code={`// Manipulasi DOM
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.innerText = \`Item \${itemCount}\`;
  domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.className = \`p-4 mb-3 \${randomColor} rounded\`;
});`}
                    language="javascript"
                  />

                  <InfoBox type="info">
                    <p>
                      DOM adalah representasi struktur HTML dalam bentuk pohon
                      objek. JavaScript dapat memanipulasi DOM untuk mengubah
                      konten, struktur, dan gaya halaman web secara dinamis.
                    </p>
                  </InfoBox>

                  <ResultPreview
                    title="Output Langkah 7"
                    livePreview={<LivePreview7 />}
                  ></ResultPreview>
                </div>
              ),
            },
            {
              id: 8,
              title: 'Fetch API dan Async/Await',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pelajari cara menggunakan Fetch API dan async/await untuk
                    mengambil data dari server:
                  </p>

                  <CodeBlock
                    title="Tambahkan ke index.html (sebelum tag script)"
                    code={`<hr>
<div class="api-demo p-4 my-4 border border-gray-300 rounded">
  <h2 class="text-xl font-bold mb-3">Demo Fetch API</h2>
  <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ambil Data</button>
  <div id="api-output" class="mt-3"></div>
</div>`}
                    language="html"
                  />

                  <CodeBlock
                    title="script.js (tambahkan di bawah kode sebelumnya)"
                    code={`// Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const apiOutput = document.getElementById("api-output");
    apiOutput.innerHTML = "<h3 class='font-bold mb-2'>Daftar Post:</h3>";
    
    data.slice(0, 5).forEach(post => {
      apiOutput.innerHTML += \`
        <div class="p-3 mb-2 bg-gray-100 rounded">
          <h4 class="font-semibold">\${post.title}</h4>
          <p class="text-sm">\${post.body}</p>
        </div>
      \`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("api-output").innerHTML = \`
      <div class="p-3 bg-red-100 text-red-800 rounded">
        Gagal mengambil data: \${error.message}
      </div>
    \`;
  }
});`}
                    language="javascript"
                  />

                  <InfoBox type="info">
                    <p>
                      Fetch API adalah cara modern untuk melakukan HTTP request
                      di JavaScript. Dengan async/await, kode menjadi lebih
                      mudah dibaca dan dikelola dibandingkan dengan callback
                      atau promise chaining.
                    </p>
                  </InfoBox>

                  <ResultPreview
                    title="Output Langkah 8"
                    livePreview={<LivePreview8 />}
                  ></ResultPreview>
                </div>
              ),
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper
        id="hasil-praktikum"
        title="Hasil Praktikum"
        icon={<Award className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya
            telah:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Membuat file HTML dan JavaScript yang terhubung</li>
            <li>Menggunakan variabel, tipe data, dan operator</li>
            <li>Mengimplementasikan struktur kondisional dan loop</li>
            <li>Membuat dan menggunakan fungsi</li>
            <li>Menangani event dan memanipulasi DOM</li>
            <li>Menggunakan array dan objek</li>
            <li>Mengambil data dari API menggunakan Fetch API</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="format-pengumpulan"
        title="Format Pengumpulan"
        icon={<FolderTree className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Direktori GitHub:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Buat repository dengan format: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_[NIM]</code></li>
              <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_119140001</code></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Struktur Folder:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Buat folder per pertemuan dengan format: <code className="bg-gray-100 px-2 py-1 rounded">[NAMA]_[NIM]_pertemuan[X]</code></li>
              <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">johndoe_119140001_pertemuan3</code></li>
              <li>Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Deadline Pengumpulan:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Deadline: <span className="font-medium">Minggu, 23 Maret 2025, pukul 23:59 WIB</span></li>
              <li>Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="pertanyaan-dan-tugas"
        title="Pertanyaan dan Tugas"
        icon={<HelpCircle className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Untuk menguji pemahaman Kalian, kerjakan tugas yang berikut:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tugas:
              </h3>
              <ol className="pl-6 space-y-2 text-gray-700 list-decimal">
                <li>
                  Buatlah aplikasi to-do list sederhana. Style tampilan tidak
                  menjadi penilaian, fokus utama pada fungsionalitas JavaScript,
                  dengan kriteria:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Menambahkan item baru</li>
                    <li>Menandai item sebagai selesai</li>
                    <li>Menghapus item</li>
                    <li>Menyimpan data ke localStorage</li>
                  </ul>
                  <p className="mt-2 text-gray-600 text-sm"><strong>Bobot:</strong> 40% dari nilai tugas</p>
                </li>
                <li>
                  Modifikasi kalkulator pada langkah 5 untuk mendukung operasi
                  matematika tambahan seperti pangkat, akar kuadrat, dan
                  modulus.
                  <p className="mt-2 text-gray-600 text-sm"><strong>Bobot:</strong> 30% dari nilai tugas</p>
                </li>
                <li>
                  Buatlah sebuah fungsi untuk memvalidasi form input dengan
                  kriteria:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Nama harus lebih dari 3 karakter</li>
                    <li>Email harus valid</li>
                    <li>Password harus minimal 8 karakter</li>
                  </ul>
                  <p className="mt-2 text-gray-600 text-sm"><strong>Bobot:</strong> 30% dari nilai tugas</p>
                </li>
              </ol>
            </div>
          </div>

          <SubmissionLink href="https://example.com/submit-praktikum"></SubmissionLink>
        </div>
      </SectionWrapper>
    </PraktikumLayout>
  );
}
