import React from 'react';
import { Code, Layers, Zap, Package, GitBranch, ArrowRight, Coffee } from 'lucide-react';

const PengantarPythonPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Pengantar Pemrograman Python
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-blue-500 mr-3" />
            <span>Bahasa pemrograman serba guna, mudah dipelajari, dan bertenaga tinggi</span>
          </div>
        </header>

        {/* Slide 2: Apa itu Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu Python?</h2>
              <p className="text-gray-700 mb-4">
                Python adalah bahasa pemrograman tingkat tinggi, ditafsirkan (interpreted), dan bersifat umum yang dikembangkan oleh Guido van Rossum dan dirilis pertama kali pada tahun 1991.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Bahasa Interpreted: Kode dijalankan baris per baris, tidak perlu dikompilasi terlebih dahulu</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Dinamis dan Strongly Typed: Tipe data ditentukan saat runtime, dengan pengecekan tipe yang ketat</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Multiparadigma: Mendukung pemrograman berorientasi objek, imperatif, fungsional, dan prosedural</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 3: Mengapa Menggunakan Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mengapa Menggunakan Python?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Kemudahan Dipelajari</h3>
                  <p className="text-gray-700">
                    Sintaks yang jelas dan mudah dibaca, dengan indentasi yang menekankan struktur kode.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Produktivitas Tinggi</h3>
                  <p className="text-gray-700">
                    Pengembangan lebih cepat berkat sintaks yang sederhana dan library yang ekstensif.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Komunitas Besar</h3>
                  <p className="text-gray-700">
                    Didukung oleh komunitas pengembang yang aktif dan librari third-party yang kaya.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Serbaguna</h3>
                  <p className="text-gray-700">
                    Dapat digunakan untuk web, data science, AI, otomasi, game, dan banyak lagi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Fitur Utama Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Fitur Utama Python</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Tipe Data Dinamis</h3>
                  <p className="text-gray-700">
                    Tidak perlu mendeklarasikan tipe data secara eksplisit. Python akan otomatis mengenali tipe data saat runtime.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Garbage Collection</h3>
                  <p className="text-gray-700">
                    Manajemen memori otomatis, sehingga pengembang tidak perlu mengalokasikan dan membebaskan memori secara manual.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Standard Library yang Kaya</h3>
                  <p className="text-gray-700">
                    Sudah terintegrasi dengan banyak library untuk berbagai fungsi, termasuk manipulasi string, protokol internet, dan matematika.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Dukungan Ekspresi Lambda</h3>
                  <p className="text-gray-700">
                    Mendukung pembuatan fungsi anonim sederhana menggunakan kata kunci 'lambda'.
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contoh Kode Python Sederhana</h2>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
{`# Contoh fungsi sederhana
def hitung_faktorial(n):
    """
    Menghitung faktorial dari bilangan n secara rekursif.
    
    Args:
        n (int): Bilangan non-negatif
        
    Returns:
        int: Hasil faktorial dari n
    """
    if n == 0 or n == 1:
        return 1
    else:
        return n * hitung_faktorial(n - 1)

# Contoh list comprehension
bilangan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
bilangan_genap = [x for x in bilangan if x % 2 == 0]
kuadrat = [x**2 for x in bilangan]

print(f"Faktorial 5: {hitung_faktorial(5)}")
print(f"Bilangan genap: {bilangan_genap}")
print(f"Kuadrat: {kuadrat}")

# Output:
# Faktorial 5: 120
# Bilangan genap: [2, 4, 6, 8, 10]
# Kuadrat: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Python vs Bahasa Lain */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Python vs Bahasa Lain</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Fitur</th>
                      <th className="border border-gray-300 p-3 text-left">Python</th>
                      <th className="border border-gray-300 p-3 text-left">Java</th>
                      <th className="border border-gray-300 p-3 text-left">JavaScript</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Tipe Sistem</td>
                      <td className="border border-gray-300 p-3">Dinamis, Strong</td>
                      <td className="border border-gray-300 p-3">Statis, Strong</td>
                      <td className="border border-gray-300 p-3">Dinamis, Weak</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Eksekusi</td>
                      <td className="border border-gray-300 p-3">Interpreted</td>
                      <td className="border border-gray-300 p-3">Compiled ke bytecode</td>
                      <td className="border border-gray-300 p-3">Interpreted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Kurva Belajar</td>
                      <td className="border border-gray-300 p-3">Landai</td>
                      <td className="border border-gray-300 p-3">Moderat</td>
                      <td className="border border-gray-300 p-3">Moderat</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Kecepatan</td>
                      <td className="border border-gray-300 p-3">Sedang</td>
                      <td className="border border-gray-300 p-3">Tinggi</td>
                      <td className="border border-gray-300 p-3">Tinggi (modern engines)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Ekosistem Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Package size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ekosistem Python</h2>
              <p className="text-gray-600 mb-6">
                Python memiliki ekosistem yang sangat luas dan matang yang mendukung berbagai bidang aplikasi, dari pengembangan web hingga komputasi ilmiah, kecerdasan buatan, dan analisis data.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* NumPy */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">NumPy</h3>
                  <p className="text-gray-700 mb-4">
                    Library fundamental untuk komputasi ilmiah, menyediakan objek array multidimensi dan fungsi matematika tingkat tinggi.
                  </p>
                </div>

                {/* Pandas */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Pandas</h3>
                  <p className="text-gray-700 mb-4">
                    Library untuk manipulasi dan analisis data, menyediakan struktur data yang fleksibel seperti DataFrame.
                  </p>
                </div>

                {/* Django */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Django</h3>
                  <p className="text-gray-700 mb-4">
                    Framework web tingkat tinggi yang mendukung pengembangan web yang cepat, aman, dan skalabel.
                  </p>
                </div>

                {/* TensorFlow/PyTorch */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">TensorFlow/PyTorch</h3>
                  <p className="text-gray-700 mb-4">
                    Framework untuk machine learning dan deep learning, memungkinkan kreasi dan training model AI kompleks.
                  </p>
                </div>

                {/* Matplotlib */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Matplotlib</h3>
                  <p className="text-gray-700 mb-4">
                    Library visualisasi data yang komprehensif untuk membuat grafik dan plot statis, interaktif, dan animasi.
                  </p>
                </div>

                {/* Flask */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Flask</h3>
                  <p className="text-gray-700 mb-4">
                    Micro-framework web yang ringan dan fleksibel, ideal untuk aplikasi kecil hingga menengah.
                  </p>
                </div>

                {/* Scikit-learn */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Scikit-learn</h3>
                  <p className="text-gray-700 mb-4">
                    Library untuk machine learning yang menyediakan algoritma klasifikasi, regresi, clustering, dan lainnya.
                  </p>
                </div>

                {/* SQLAlchemy */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">SQLAlchemy</h3>
                  <p className="text-gray-700 mb-4">
                    Toolkit SQL dan Object-Relational Mapping (ORM) yang memberikan fleksibilitas dalam berinteraksi dengan database.
                  </p>
                </div>

                {/* Requests */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Requests</h3>
                  <p className="text-gray-700 mb-4">
                    Library HTTP untuk manusia, memungkinkan pengiriman permintaan HTTP dengan mudah dan intuitif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: Kelebihan dan Tantangan Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Coffee size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kelebihan dan Tantangan Python</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Kelebihan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-green-500 mr-2" />
                      <span>Sintaks yang mudah dibaca dan dipahami</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-green-500 mr-2" />
                      <span>Ekosistem library yang sangat kaya</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-green-500 mr-2" />
                      <span>Mendukung multiple programming paradigms</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-green-500 mr-2" />
                      <span>Portabilitas tinggi antar platform</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-green-500 mr-2" />
                      <span>Komunitas yang sangat aktif dan suportif</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Tantangan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-red-500 mr-2" />
                      <span>Kecepatan eksekusi lebih lambat dibanding bahasa kompilasi</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-red-500 mr-2" />
                      <span>Konsumsi memori yang relatif tinggi</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-red-500 mr-2" />
                      <span>Keterbatasan dalam pengembangan mobile</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-red-500 mr-2" />
                      <span>Global Interpreter Lock (GIL) membatasi konkurensi sejati</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-red-500 mr-2" />
                      <span>Performa bisa menjadi kendala untuk aplikasi tertentu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PengantarPythonPresentation;