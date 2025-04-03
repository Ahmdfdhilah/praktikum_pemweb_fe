import React from 'react';
import { Code, Layers, Zap, Package, GitBranch, ArrowRight } from 'lucide-react';

const MengenalReactPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans ">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Mengenal React.js
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-blue-500 mr-3" />
            <span>Library JavaScript untuk membangun antarmuka pengguna yang interaktif dan efisien</span>
          </div>
        </header>

        {/* Slide 2: Apa itu React.js */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu React.js?</h2>
              <p className="text-gray-700 mb-4">
                React adalah library JavaScript yang dikembangkan oleh Facebook (sekarang Meta) untuk membangun user interface (UI) yang interaktif dan responsif.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Deklaratif: Membuat UI yang mudah dipahami dan di-debug</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Berbasis Komponen: Membangun UI dengan komponen yang dapat digunakan kembali</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Learn Once, Write Anywhere: Dapat dijalankan di client dan server</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 3: Mengapa Menggunakan React */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mengapa Menggunakan React?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Virtual DOM</h3>
                  <p className="text-gray-700">
                    React menggunakan Virtual DOM untuk meningkatkan kinerja dengan meminimalkan manipulasi DOM secara langsung.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Unidirectional Data Flow</h3>
                  <p className="text-gray-700">
                    Aliran data satu arah membuat aplikasi lebih mudah diprediksi dan di-debug.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Ekosistem yang Kaya</h3>
                  <p className="text-gray-700">
                    Didukung oleh komunitas besar dan ekosistem library yang luas.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">JSX</h3>
                  <p className="text-gray-700">
                    Memudahkan penulisan komponen UI dengan sintaks yang mirip HTML.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Konsep Dasar React */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konsep Dasar React</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Komponen</h3>
                  <p className="text-gray-700 mb-2">
                    Blok pembangun utama dalam React yang dapat berupa:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>Functional Components (dengan Hooks)</li>
                    <li>Class Components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Props</h3>
                  <p className="text-gray-700">
                    Data yang diteruskan dari komponen induk ke komponen anak, bersifat read-only.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">State</h3>
                  <p className="text-gray-700">
                    Data yang dikelola dalam komponen dan dapat berubah seiring waktu, memicu rendering ulang.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Lifecycle</h3>
                  <p className="text-gray-700">
                    Tahapan yang dilalui komponen: mounting, updating, dan unmounting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Contoh Kode Sederhana */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contoh Komponen React Sederhana</h2>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
{`// Functional Component dengan TypeScript
import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (onClick) onClick();
  };
  
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      onClick={handleClick}
    >
      {label} (Diklik: {clickCount} kali)
    </button>
  );
};

export default Button;`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: React vs Framework Lain */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">React vs Framework Lain</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Fitur</th>
                      <th className="border border-gray-300 p-3 text-left">React</th>
                      <th className="border border-gray-300 p-3 text-left">Angular</th>
                      <th className="border border-gray-300 p-3 text-left">Vue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Tipe</td>
                      <td className="border border-gray-300 p-3">Library</td>
                      <td className="border border-gray-300 p-3">Framework</td>
                      <td className="border border-gray-300 p-3">Framework</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Kurva Belajar</td>
                      <td className="border border-gray-300 p-3">Moderat</td>
                      <td className="border border-gray-300 p-3">Curam</td>
                      <td className="border border-gray-300 p-3">Landai</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Popularitas</td>
                      <td className="border border-gray-300 p-3">Sangat Tinggi</td>
                      <td className="border border-gray-300 p-3">Tinggi</td>
                      <td className="border border-gray-300 p-3">Tinggi</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Fleksibilitas</td>
                      <td className="border border-gray-300 p-3">Sangat Tinggi</td>
                      <td className="border border-gray-300 p-3">Moderat</td>
                      <td className="border border-gray-300 p-3">Tinggi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Ekosistem React */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
  <div className="flex items-start mb-6">
    <Package size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ekosistem React</h2>
      <p className="text-gray-600 mb-6">
        React adalah library JavaScript yang kuat untuk membangun antarmuka pengguna. Ekosistemnya yang luas menyediakan berbagai alat dan library yang memudahkan pengembangan aplikasi modern, mulai dari routing, manajemen state, testing, hingga pengembangan aplikasi mobile.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* React Router */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">React Router</h3>
          <p className="text-gray-700 mb-4">
            Library untuk menangani routing di aplikasi React, memungkinkan navigasi yang dinamis dan efisien.
          </p>
        </div>

        {/* Redux */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Redux</h3>
          <p className="text-gray-700 mb-4">
            Library manajemen state global untuk aplikasi React yang kompleks.
          </p>
        </div>

        {/* React Native */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">React Native</h3>
          <p className="text-gray-700 mb-4">
            Framework untuk membangun aplikasi mobile native menggunakan React.
          </p>
        </div>

        {/* Tailwind CSS */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Tailwind CSS</h3>
          <p className="text-gray-700 mb-4">
            Utility-first CSS framework yang sering digunakan bersama React untuk styling yang cepat.
          </p>
        </div>

        {/* Jest */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Jest</h3>
          <p className="text-gray-700 mb-4">
            Framework testing untuk JavaScript, sering digunakan untuk menguji aplikasi React.
          </p>
        </div>

        {/* React Query */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">React Query</h3>
          <p className="text-gray-700 mb-4">
            Library untuk manajemen data fetching dan caching di React.
          </p>
        </div>

        {/* Vite */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Vite</h3>
          <p className="text-gray-700 mb-4">
            Build tool modern yang cepat untuk pengembangan aplikasi React.
          </p>
        </div>

        {/* Material-UI (MUI) */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Material-UI (MUI)</h3>
          <p className="text-gray-700 mb-4">
            Library komponen UI yang mengikuti prinsip desain Material Design.
          </p>
        </div>

        {/* React Testing Library */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">React Testing Library</h3>
          <p className="text-gray-700 mb-4">
            Alat untuk menguji komponen React dengan pendekatan yang berfokus pada pengguna.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default MengenalReactPresentation;