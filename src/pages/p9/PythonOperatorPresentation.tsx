import React from 'react';
import { Code, Layers, Zap, Package, GitBranch, ArrowRight } from 'lucide-react';

const PythonOperatorPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Pemrograman Python: Operator dan Operasi
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-blue-500 mr-3" />
            <span>Mendalami fondasi operasi logika dan matematika dalam bahasa Python</span>
          </div>
        </header>

        {/* Slide 2: Pengenalan Operator dalam Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu Operator dalam Python?</h2>
              <p className="text-gray-700 mb-4">
                Operator adalah konstruksi khusus dalam Python yang dapat memanipulasi nilai dan variabel,
                melakukan operasi matematika atau logika, dan menghasilkan nilai baru.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Menyederhanakan operasi kompleks dalam bentuk ekspresi yang ringkas</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Meningkatkan keterbacaan code dengan menyediakan simbol intuisi</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>Meningkatkan efisiensi dengan operasi yang dioptimalkan secara internal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 3: Kategori Operator dalam Python */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kategori Operator dalam Python</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Aritmatika</h3>
                  <p className="text-gray-700">
                    Digunakan untuk melakukan operasi matematika pada nilai numerik (+, -, *, /, //, %, **)
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Perbandingan</h3>
                  <p className="text-gray-700">
                    {`Membandingkan dua nilai atau ekspresi (==, !=, >, <, >=, <=)`}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Logika</h3>
                  <p className="text-gray-700">
                    Mengevaluasi ekspresi Boolean untuk menghasilkan nilai True atau False (and, or, not)
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Penugasan</h3>
                  <p className="text-gray-700">
                    {`Menetapkan nilai ke variabel (=, +=, -=, *=, /=, %=, //=, **=, &=, |=, ^=, >>=, <<=)`}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Bitwise</h3>
                  <p className="text-gray-700">
                    {`Melakukan operasi bit-by-bit pada nilai integer (&, |, ^, ~, <<, >>)`}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Identitas & Keanggotaan</h3>
                  <p className="text-gray-700">
                    Memeriksa identitas objek (is, is not) dan keanggotaan nilai (in, not in)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Operator Aritmatika */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Aritmatika</h2>
              <p className="text-gray-700 mb-4">Operator aritmatika digunakan untuk melakukan operasi matematika standar:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Operator</th>
                      <th className="border border-gray-300 p-3 text-left">Deskripsi</th>
                      <th className="border border-gray-300 p-3 text-left">Contoh</th>
                      <th className="border border-gray-300 p-3 text-left">Hasil</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">+</td>
                      <td className="border border-gray-300 p-3">Penjumlahan</td>
                      <td className="border border-gray-300 p-3">a = 5 + 3</td>
                      <td className="border border-gray-300 p-3">a = 8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">-</td>
                      <td className="border border-gray-300 p-3">Pengurangan</td>
                      <td className="border border-gray-300 p-3">a = 5 - 3</td>
                      <td className="border border-gray-300 p-3">a = 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">*</td>
                      <td className="border border-gray-300 p-3">Perkalian</td>
                      <td className="border border-gray-300 p-3">a = 5 * 3</td>
                      <td className="border border-gray-300 p-3">a = 15</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">/</td>
                      <td className="border border-gray-300 p-3">Pembagian</td>
                      <td className="border border-gray-300 p-3">a = 5 / 2</td>
                      <td className="border border-gray-300 p-3">a = 2.5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">//</td>
                      <td className="border border-gray-300 p-3">Pembagian Bulat</td>
                      <td className="border border-gray-300 p-3">a = 5 // 2</td>
                      <td className="border border-gray-300 p-3">a = 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">%</td>
                      <td className="border border-gray-300 p-3">Modulus</td>
                      <td className="border border-gray-300 p-3">a = 5 % 2</td>
                      <td className="border border-gray-300 p-3">a = 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">**</td>
                      <td className="border border-gray-300 p-3">Pangkat</td>
                      <td className="border border-gray-300 p-3">a = 5 ** 2</td>
                      <td className="border border-gray-300 p-3">a = 25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh operasi matematika dalam Python
a = 15
b = 4

print(f"a + b = {a + b}")    # Output: a + b = 19
print(f"a - b = {a - b}")    # Output: a - b = 11
print(f"a * b = {a * b}")    # Output: a * b = 60
print(f"a / b = {a / b}")    # Output: a / b = 3.75
print(f"a // b = {a // b}")  # Output: a // b = 3
print(f"a % b = {a % b}")    # Output: a % b = 3
print(f"a ** b = {a ** b}")  # Output: a ** b = 50625`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Operator Perbandingan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex flex-col items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Perbandingan</h2>
            <p className="text-gray-700 mb-4">Digunakan untuk membandingkan dua nilai dan mengembalikan hasil Boolean:</p>
            <div className='flex gap-16'>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Operator</th>
                      <th className="border border-gray-300 p-3 text-left">Deskripsi</th>
                      <th className="border border-gray-300 p-3 text-left">Contoh</th>
                      <th className="border border-gray-300 p-3 text-left">Hasil</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">==</td>
                      <td className="border border-gray-300 p-3">Sama dengan</td>
                      <td className="border border-gray-300 p-3">5 == 5</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">!=</td>
                      <td className="border border-gray-300 p-3">Tidak sama dengan</td>
                      <td className="border border-gray-300 p-3">5 != 3</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`>`}</td>
                      <td className="border border-gray-300 p-3">Lebih besar dari</td>
                      <td className="border border-gray-300 p-3">5 {`>`} 3</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`<`}</td>
                      <td className="border border-gray-300 p-3">Lebih kecil dari</td>
                      <td className="border border-gray-300 p-3">5 {`<`} 3</td>
                      <td className="border border-gray-300 p-3">False</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`>=`}</td>
                      <td className="border border-gray-300 p-3">Lebih besar atau sama dengan</td>
                      <td className="border border-gray-300 p-3">5 {`>=`} 5</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`<=`}</td>
                      <td className="border border-gray-300 p-3">Lebih kecil atau sama dengan</td>
                      <td className="border border-gray-300 p-3">5 {`<=`} 3</td>
                      <td className="border border-gray-300 p-3">False</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh operator perbandingan dalam Python
x = 10
y = 5

# Perbandingan menghasilkan nilai Boolean
print(f"x == y: {x == y}")  # False
print(f"x != y: {x != y}")  # True
print(f"x > y: {x > y}")    # True
print(f"x < y: {x < y}")    # False
print(f"x >= y: {x >= y}")  # True
print(f"x <= y: {x <= y}")  # False

# Perbandingan dapat digunakan dalam percabangan
if x > y:
    print("x lebih besar dari y")
else:
    print("x lebih kecil atau sama dengan y")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Operator Logika */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Logika</h2>
              <p className="text-gray-700 mb-4">
                Digunakan untuk menggabungkan pernyataan kondisional dan mengevaluasi ekspresi Boolean:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">and</h3>
                  <p className="text-gray-700">
                    Mengembalikan True jika kedua pernyataan bernilai True.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">or</h3>
                  <p className="text-gray-700">
                    Mengembalikan True jika salah satu pernyataan bernilai True.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">not</h3>
                  <p className="text-gray-700">
                    Membalikkan hasil, mengembalikan False jika hasilnya True.
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">x</th>
                      <th className="border border-gray-300 p-3 text-left">y</th>
                      <th className="border border-gray-300 p-3 text-left">x and y</th>
                      <th className="border border-gray-300 p-3 text-left">x or y</th>
                      <th className="border border-gray-300 p-3 text-left">not x</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">False</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">False</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">True</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">False</td>
                      <td className="border border-gray-300 p-3">True</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh penggunaan operator logika
umur = 25
punya_ktp = True

# Menggunakan operator and
if umur >= 17 and punya_ktp:
    print("Boleh memilih dalam pemilu")

# Menggunakan operator or
if umur < 17 or not punya_ktp:
    print("Tidak boleh memilih dalam pemilu")

# Kombinasi operator logika
if not (umur < 17 or not punya_ktp):
    print("Boleh memilih dalam pemilu (ekspresi ekuivalen)")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Operator Penugasan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Penugasan</h2>
              <p className="text-gray-700 mb-4">
                Digunakan untuk menetapkan nilai ke variabel, sering kali merupakan bentuk singkat dari operasi yang lebih kompleks:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Operator</th>
                      <th className="border border-gray-300 p-3 text-left">Contoh</th>
                      <th className="border border-gray-300 p-3 text-left">Ekuivalen Dengan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">=</td>
                      <td className="border border-gray-300 p-3">x = 5</td>
                      <td className="border border-gray-300 p-3">x = 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">+=</td>
                      <td className="border border-gray-300 p-3">x += 5</td>
                      <td className="border border-gray-300 p-3">x = x + 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">-=</td>
                      <td className="border border-gray-300 p-3">x -= 5</td>
                      <td className="border border-gray-300 p-3">x = x - 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">*=</td>
                      <td className="border border-gray-300 p-3">x *= 5</td>
                      <td className="border border-gray-300 p-3">x = x * 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">/=</td>
                      <td className="border border-gray-300 p-3">x /= 5</td>
                      <td className="border border-gray-300 p-3">x = x / 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">%=</td>
                      <td className="border border-gray-300 p-3">x %= 5</td>
                      <td className="border border-gray-300 p-3">x = x % 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">//=</td>
                      <td className="border border-gray-300 p-3">x //= 5</td>
                      <td className="border border-gray-300 p-3">x = x // 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">**=</td>
                      <td className="border border-gray-300 p-3">x **= 5</td>
                      <td className="border border-gray-300 p-3">x = x ** 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh penggunaan operator penugasan
x = 10

# Menambahkan dan menetapkan
x += 5  # x sekarang 15

# Mengurangi dan menetapkan
x -= 3  # x sekarang 12

# Mengalikan dan menetapkan
x *= 2  # x sekarang 24

# Membagi dan menetapkan
x /= 4  # x sekarang 6.0 (perhatikan perubahan ke float)

# Pembagian bulat dan menetapkan
x //= 2  # x sekarang 3.0 (masih float)

# Modulus dan menetapkan
y = 10
y %= 3  # y sekarang 1

# Pangkat dan menetapkan
z = 2
z **= 3  # z sekarang 8`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: Operator Bitwise */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Bitwise</h2>
              <p className="text-gray-700 mb-4">
                Digunakan untuk melakukan operasi bit-by-bit pada bilangan bulat. Sangat berguna untuk pemrograman rendah tingkat, kriptografi, dan optimasi:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Operator</th>
                      <th className="border border-gray-300 p-3 text-left">Nama</th>
                      <th className="border border-gray-300 p-3 text-left">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">&</td>
                      <td className="border border-gray-300 p-3">AND</td>
                      <td className="border border-gray-300 p-3">Menghasilkan 1 pada posisi bit dimana keduanya adalah 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">|</td>
                      <td className="border border-gray-300 p-3">OR</td>
                      <td className="border border-gray-300 p-3">Menghasilkan 1 pada posisi bit dimana salah satu atau keduanya adalah 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">^</td>
                      <td className="border border-gray-300 p-3">XOR</td>
                      <td className="border border-gray-300 p-3">Menghasilkan 1 pada posisi bit dimana hanya salah satu yang bernilai 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">~</td>
                      <td className="border border-gray-300 p-3">NOT</td>
                      <td className="border border-Gray-300 p-3">Membalikkan semua bit (0 jadi 1, 1 jadi 0)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`<<`}</td>
                      <td className="border border-gray-300 p-3">Left Shift</td>
                      <td className="border border-gray-300 p-3">Menggeser bit ke kiri, mengisi 0 dari kanan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`>>`}</td>
                      <td className="border border-gray-300 p-3">Right Shift</td>
                      <td className="border border-gray-300 p-3">Menggeser bit ke kanan, mengisi 0 dari kiri</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh penggunaan operator bitwise
a = 60    # 60 = 0011 1100
b = 13    # 13 = 0000 1101

# AND Bitwise
print(f"a & b = {a & b}")  # Output: 12 (0000 1100)

# OR Bitwise
print(f"a | b = {a | b}")  # Output: 61 (0011 1101)

# XOR Bitwise
print(f"a ^ b = {a ^ b}")  # Output: 49 (0011 0001)

# NOT Bitwise
print(f"~a = {~a}")        # Output: -61 (1100 0011 dalam komplemen 2)

# Left Shift
print(f"a << 2 = {a << 2}") # Output: 240 (1111 0000)

# Right Shift
print(f"a >> 2 = {a >> 2}") # Output: 15 (0000 1111)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Operator Identitas dan Keanggotaan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Package size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Operator Identitas dan Keanggotaan</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Identitas (is, is not)</h3>
                  <p className="text-gray-700 mb-2">
                    Digunakan untuk memeriksa apakah dua variabel merujuk ke objek yang sama dalam memori, bukan hanya nilai yang sama.
                  </p>
                  <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg">
                    <pre>
                      {`# Contoh operator identitas
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is y)     # False (objek berbeda)
print(x is z)     # True (objek sama)
print(x == y)     # True (nilai sama)

a = 5
b = 5
print(a is b)     
# True (Python mengoptimasi integer kecil)`}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Operator Keanggotaan (in, not in)</h3>
                  <p className="text-gray-700 mb-2">
                    Digunakan untuk menguji apakah suatu nilai ditemukan dalam sequence (string, list, tuple, set, dictionary).
                  </p>
                  <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Contoh operator keanggotaan
buah = ['apel', 'mangga', 'pisang']

print('apel' in buah)      # True
print('jeruk' not in buah) # True

# Pada string
nama = "Budi"
print('u' in nama)         # True

# Pada dictionary
data = {'nama': 'Budi', 'umur': 25}
print('nama' in data)      # True (cek key)
print('Budi' in data.values()) # True (cek value)`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10: Prioritas Operator */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Prioritas Operator dalam Python</h2>
              <p className="text-gray-700 mb-4">
                Python mengevaluasi ekspresi berdasarkan aturan prioritas operator. Berikut urutan prioritas dari tertinggi ke terendah:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Operator</th>
                      <th className="border border-gray-300 p-3 text-left">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">()</td>
                      <td className="border border-gray-300 p-3">Parentheses (pengelompokan)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">**</td>
                      <td className="border border-gray-300 p-3">Eksponensial</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">~ + -</td>
                      <td className="border border-gray-300 p-3">Bitwise NOT, Unary plus and minus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">* / % //</td>
                      <td className="border border-gray-300 p-3">Perkalian, pembagian, modulus, floor division</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">+ -</td>
                      <td className="border border-gray-300 p-3">Penjumlahan dan pengurangan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`>> <<`}</td>
                      <td className="border border-gray-300 p-3">Bitwise shifts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">&</td>
                      <td className="border border-gray-300 p-3">Bitwise AND</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">^ |</td>
                      <td className="border border-gray-300 p-3">Bitwise XOR dan OR</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">{`<= < > >=`}</td>
                      <td className="border border-gray-300 p-3">Perbandingan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">== !=</td>
                      <td className="border border-gray-300 p-3">Kesetaraan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">= %= /= //= -= += *= **=</td>
                      <td className="border border-gray-300 p-3">Penugasan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">is is not</td>
                      <td className="border border-gray-300 p-3">Identitas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">in not in</td>
                      <td className="border border-gray-300 p-3">Keanggotaan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">not</td>
                      <td className="border border-gray-300 p-3">Logika NOT</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">and</td>
                      <td className="border border-gray-300 p-3">Logika AND</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">or</td>
                      <td className="border border-gray-300 p-3">Logika OR</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# Contoh prioritas operator
result = 5 + 3 * 2 ** 2 / 4 - 1
# Langkah-langkah evaluasi:
# 1. 2 ** 2 = 4
# 2. 3 * 4 = 12
# 3. 12 / 4 = 3.0
# 4. 5 + 3.0 = 8.0
# 5. 8.0 - 1 = 7.0
print(result)  # Output: 7.0

# Menggunakan parentheses untuk mengubah prioritas
result = (5 + 3) * (2 ** (2 / 4)) - 1
print(result)  # Output: 7.65685424949238`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 11: Kesimpulan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Python menyediakan berbagai jenis operator untuk memanipulasi data dan membuat ekspresi yang kompleks</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Memahami prioritas operator penting untuk menulis ekspresi yang benar dan menghindari bug</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Operator dapat dikombinasikan untuk membuat ekspresi yang lebih kompleks dan powerful</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Gunakan parentheses untuk memperjelas dan mengontrol urutan evaluasi</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Tips Praktis:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">1. Gunakan Operator Penugasan Gabungan</h4>
                    <p className="text-sm text-gray-600">x += 1 lebih efisien daripada x = x + 1</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">2. Pahami Perbedaan == dan is</h4>
                    <p className="text-sm text-gray-600">== membandingkan nilai, is membandingkan identitas objek</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">3. Operator Short-Circuit</h4>
                    <p className="text-sm text-gray-600">and dan or berhenti mengevaluasi begitu hasil diketahui</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">4. Operator Walrus (Python 3.8+)</h4>
                    <p className="text-sm text-gray-600">:= untuk menugaskan nilai dalam ekspresi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PythonOperatorPresentation;