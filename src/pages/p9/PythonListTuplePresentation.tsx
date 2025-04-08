import React from 'react';
import {
  Code,
  Layers,
  Zap,
  ArrowRight,
  List,
  FileSymlink,
  GitCompare,
  FileText,
  ListOrdered,
} from 'lucide-react';

const PythonListTuplePresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Koleksi Data: List dan Tuple
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <List size={28} className="text-blue-500 mr-3" />
            <span>
              Struktur data mutable dan immutable untuk menyimpan koleksi item
            </span>
          </div>
        </header>

        {/* Slide 2: Pengenalan List dan Tuple */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Struktur Data Sekuensial
              </h2>
              <p className="text-gray-700 mb-4">
                Python menyediakan beberapa tipe data sekuensial untuk menyimpan
                kumpulan nilai. List dan Tuple adalah dua tipe koleksi data
                paling mendasar dalam Python.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <List size={24} className="text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg text-blue-700">
                      List
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Struktur data{' '}
                    <span className="font-bold text-blue-600">mutable</span>{' '}
                    yang dapat menyimpan koleksi item berbagai tipe data. Dapat
                    diubah setelah dibuat.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg text-sm">
                    <code>my_list = [1, 2, 3, "Python", True]</code>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <FileSymlink size={24} className="text-green-600 mr-2" />
                    <h3 className="font-semibold text-lg text-green-700">
                      Tuple
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Struktur data{' '}
                    <span className="font-bold text-green-600">immutable</span>{' '}
                    yang menyimpan koleksi item berurutan. Tidak dapat diubah
                    setelah dibuat.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg text-sm">
                    <code>my_tuple = (1, 2, 3, "Python", True)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Membuat List dan Tuple */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Membuat List dan Tuple
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 border-b pb-2">
                    List
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# Membuat list kosong
kosong = []

# List dengan item
buah = ["apel", "jeruk", "mangga"]

# List dengan berbagai tipe data
campuran = [1, "dua", 3.0, True]

# List bersarang (nested)
bersarang = [[1, 2], [3, 4]]

# Membuat list dengan konstruktor list()
angka = list(range(1, 6))  # [1, 2, 3, 4, 5]

# List comprehension
kuadrat = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-green-700 border-b pb-2">
                    Tuple
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# Membuat tuple kosong
kosong = ()

# Tuple dengan item
buah = ("apel", "jeruk", "mangga")

# Tuple dengan berbagai tipe data
campuran = (1, "dua", 3.0, True)

# Tuple bersarang
bersarang = ((1, 2), (3, 4))

# Membuat tuple dengan konstruktor tuple()
angka = tuple(range(1, 6))  # (1, 2, 3, 4, 5)

# Tuple dengan satu item (perhatikan koma)
satu_item = (42,)  # Tanpa koma menjadi int`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Akses dan Slicing */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ListOrdered
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Akses dan Slicing List dan Tuple
              </h2>
              <p className="text-gray-700 mb-4">
                List dan Tuple menggunakan indeks berbasis nol, dan mendukung
                indeks negatif serta slicing.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Kode di sisi kiri */}
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre>
                    {`items = ["a", "b", "c", "d", "e"]
# items[0] = "a"   # Indeks pertama
# items[-1] = "e"  # Indeks terakhir

# Akses indeks tunggal
print(items[0])      # Output: a
print(items[3])      # Output: d
print(items[-1])     # Output: e (indeks dari akhir)

# Slicing - [start:end:step]
print(items[1:4])    # Output: ['b', 'c', 'd']
print(items[1:])     # Output: ['b', 'c', 'd', 'e']
print(items[:3])     # Output: ['a', 'b', 'c']
print(items[::2])    # Output: ['a', 'c', 'e']
print(items[::-1])   # Output: ['e', 'd', 'c', 'b', 'a']

# Cara yang sama berlaku untuk tuple
tup = ("a", "b", "c", "d", "e")
print(tup[2:5])      # Output: ('c', 'd', 'e')`}
                  </pre>
                </div>

                {/* Ilustrasi di sisi kanan */}
                <div>
                  <div className="bg-blue-50 p-5 rounded-lg h-full">
                    <h3 className="font-semibold text-lg mb-3 text-blue-700">
                      Indeks Python dalam Ilustrasi
                    </h3>
                    <div className="flex justify-center my-4">
                      <table className="border-collapse">
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-center bg-gray-100 font-bold">
                              a
                            </td>
                            <td className="border border-gray-300 p-3 text-center bg-gray-100 font-bold">
                              b
                            </td>
                            <td className="border border-gray-300 p-3 text-center bg-gray-100 font-bold">
                              c
                            </td>
                            <td className="border border-gray-300 p-3 text-center bg-gray-100 font-bold">
                              d
                            </td>
                            <td className="border border-gray-300 p-3 text-center bg-gray-100 font-bold">
                              e
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 text-center text-blue-600">
                              0
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-blue-600">
                              1
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-blue-600">
                              2
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-blue-600">
                              3
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-blue-600">
                              4
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 text-center text-red-600">
                              -5
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-red-600">
                              -4
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-red-600">
                              -3
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-red-600">
                              -2
                            </td>
                            <td className="border border-gray-300 p-2 text-center text-red-600">
                              -1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Indeks positif dimulai dari 0 (kiri ke kanan), indeks
                      negatif dimulai dari -1 (kanan ke kiri)
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-blue-700">
                      Ilustrasi Slicing
                    </h3>
                    <table className="w-full border-collapse mb-2">
                      <tbody>
                        <tr>
                          <td className="w-24 font-mono text-blue-700 py-2">
                            items[1:4]
                          </td>
                          <td className="py-2">
                            <div className="flex justify-center">
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                a
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                b
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                c
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                d
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                e
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-24 font-mono text-blue-700 py-2">
                            items[:3]
                          </td>
                          <td className="py-2">
                            <div className="flex justify-center">
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                a
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                b
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                c
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                d
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                e
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-24 font-mono text-blue-700 py-2">
                            items[::2]
                          </td>
                          <td className="py-2">
                            <div className="flex justify-center">
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                a
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                b
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                c
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-gray-200 opacity-50">
                                d
                              </span>
                              <span className="w-8 h-8 flex items-center justify-center mx-1 bg-blue-200">
                                e
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Operasi pada List */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Operasi pada List
              </h2>
              <p className="text-gray-700 mb-4">
                Sebagai tipe data mutable, list mendukung berbagai operasi
                modifikasi.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Menambah Item
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`buah = ["apel", "jeruk"]

# Menambah di akhir
buah.append("mangga")
# ["apel", "jeruk", "mangga"]

# Menambah list ke list
buah.extend(["anggur", "pisang"])
# ["apel", "jeruk", "mangga", "anggur", "pisang"]

# Menyisipkan item pada indeks tertentu
buah.insert(1, "kiwi")
# ["apel", "kiwi", "jeruk", "mangga", "anggur", "pisang"]`}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Menghapus Item
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`buah = ["apel", "jeruk", "mangga", "anggur", "pisang"]

# Menghapus item spesifik pertama
buah.remove("mangga")
# ["apel", "jeruk", "anggur", "pisang"]

# Menghapus & mengembalikan item pada indeks
item = buah.pop(1)  # Menghapus "jeruk"
# item = "jeruk"
# buah = ["apel", "anggur", "pisang"]

# Hapus dengan del statement
del buah[0]  # Hapus "apel"
# buah = ["anggur", "pisang"]

# Menghapus semua item
buah.clear()
# []`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Modifikasi Item
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`buah = ["apel", "jeruk", "mangga"]

# Mengubah item dengan assignment
buah[0] = "kiwi"
# ["kiwi", "jeruk", "mangga"]

# Mengubah beberapa item sekaligus dengan slicing
buah[1:3] = ["anggur", "pisang", "semangka"]
# ["kiwi", "anggur", "pisang", "semangka"]

# Mengganti item dengan jumlah berbeda
buah[1:3] = ["nanas"]
# ["kiwi", "nanas", "semangka"]`}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Operasi Lainnya
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`buah = ["apel", "jeruk", "apel", "mangga"]

# Menghitung jumlah kemunculan item
jumlah_apel = buah.count("apel")  # 2

# Mencari indeks pertama suatu item
idx = buah.index("mangga")  # 3

# Mengurutkan list (mengubah list asli)
buah.sort()
# ["apel", "apel", "jeruk", "mangga"]

# Membalik urutan list
buah.reverse()
# ["mangga", "jeruk", "apel", "apel"]

# Menyalin list
buah_copy = buah.copy()  # atau list(buah)`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Slide 6: Operasi pada Tuple */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <FileSymlink
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Operasi pada Tuple
              </h2>
              <p className="text-gray-700 mb-4">
                Sebagai tipe data immutable, tuple tidak mendukung operasi
                modifikasi. Namun ada beberapa operasi yang dapat dilakukan:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">
                    Operasi Dasar
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`angka = (1, 2, 3, 4, 2)

# Menghitung panjang tuple
panjang = len(angka)  # 5

# Mencari nilai minimum dan maksimum
minimum = min(angka)  # 1
maksimum = max(angka)  # 4

# Menghitung jumlah kemunculan item
jumlah_dua = angka.count(2)  # 2

# Mencari indeks pertama suatu item
idx = angka.index(3)  # 2

# Kita TIDAK BISA melakukan:
# angka[0] = 10  # TypeError!
# del angka[0]   # TypeError!
# angka.append(5)  # AttributeError!`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">
                    Concatenation & Conversion
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Menggabungkan tuple
tup1 = (1, 2, 3)
tup2 = (4, 5, 6)
gabungan = tup1 + tup2  # (1, 2, 3, 4, 5, 6)

# Mengulang tuple
ulang = tup1 * 3  # (1, 2, 3, 1, 2, 3, 1, 2, 3)

# Konversi list ke tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)  # (1, 2, 3)

# Konversi tuple ke list
my_tuple = (1, 2, 3)
my_list = list(my_tuple)  # [1, 2, 3]`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-700">
                  Membuat Tuple "Berubah" (workaround)
                </h3>
                <p className="text-gray-700 mb-3">
                  Meskipun tuple tidak dapat dimodifikasi langsung, Anda dapat
                  mengonversinya ke list, memodifikasi list, lalu
                  mengkonversinya kembali ke tuple:
                </p>
                <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                  <pre>
                    {`tuple_asli = (1, 2, 3, 4)

# Konversi ke list untuk modifikasi
list_temp = list(tuple_asli)
list_temp[0] = 10
list_temp.append(5)

# Konversi kembali ke tuple
tuple_baru = tuple(list_temp)  # (10, 2, 3, 4, 5)

# Namun, ini membuat objek tuple baru, bukan memodifikasi yang asli`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Perbandingan List vs Tuple */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitCompare
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                List vs Tuple: Perbandingan
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">
                        Fitur
                      </th>
                      <th className="border border-gray-300 p-3 text-left text-blue-600">
                        List
                      </th>
                      <th className="border border-gray-300 p-3 text-left text-green-600">
                        Tuple
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Sintaksis
                      </td>
                      <td className="border border-gray-300 p-3">
                        <code className="bg-blue-50 px-2 py-1 rounded">[]</code>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <code className="bg-green-50 px-2 py-1 rounded">
                          ()
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Mutabilitas
                      </td>
                      <td className="border border-gray-300 p-3">
                        Mutable (dapat diubah)
                      </td>
                      <td className="border border-gray-300 p-3">
                        Immutable (tidak dapat diubah)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Performa
                      </td>
                      <td className="border border-gray-300 p-3">
                        Lebih lambat
                      </td>
                      <td className="border border-gray-300 p-3">
                        Lebih cepat
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Penggunaan Memori
                      </td>
                      <td className="border border-gray-300 p-3">
                        Lebih besar
                      </td>
                      <td className="border border-gray-300 p-3">
                        Lebih kecil
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Metode Tersedia
                      </td>
                      <td className="border border-gray-300 p-3">
                        Banyak (append, insert, pop, dll.)
                      </td>
                      <td className="border border-gray-300 p-3">
                        Sedikit (count, index)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Kasus Penggunaan
                      </td>
                      <td className="border border-gray-300 p-3">
                        Data yang perlu dimodifikasi
                      </td>
                      <td className="border border-gray-300 p-3">
                        Data konstan, kunci dictionary
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Keamanan
                      </td>
                      <td className="border border-gray-300 p-3">
                        Kurang aman (dapat berubah)
                      </td>
                      <td className="border border-gray-300 p-3">
                        Lebih aman (dijamin tidak berubah)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Dapat digunakan sebagai kunci dictionary
                      </td>
                      <td className="border border-gray-300 p-3">Tidak</td>
                      <td className="border border-gray-300 p-3">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: Praktik Terbaik dan Kasus Penggunaan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <FileText
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Praktik Terbaik dan Kasus Penggunaan
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Kapan Menggunakan List
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>
                        Saat data perlu dimodifikasi (tambah/hapus/update)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Untuk koleksi item yang sifatnya dinamis</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Ketika urutan item penting dan dapat berubah</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Saat Anda memerlukan banyak manipulasi data</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-gray-800 text-gray-200 p-3 rounded-lg">
                    <pre>
                      {`# Contoh penggunaan list
todo_list = ["Belajar Python", "Membuat project"]
todo_list.append("Membaca buku")
todo_list.remove("Belajar Python")

# Perubahan urutan prioritas
todo_list.sort()`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">
                    Kapan Menggunakan Tuple
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span>Untuk data yang tidak boleh berubah (konstan)</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span>Sebagai kunci dictionary (list tidak bisa)</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span>Untuk data heterogen yang bersifat "record"</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      <span>Saat performansi dan keamanan data penting</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-gray-800 text-gray-200 p-3 rounded-lg">
                    <pre>
                      {`# Contoh penggunaan tuple
# Koordinat (tidak boleh berubah)
titik = (10, 20)

# Sebagai kunci dictionary
lokasi = {(10, 20): "Rumah", (30, 40): "Kantor"}

# Data tetap seperti bulan dalam setahun
bulan = ("Jan", "Feb", "Mar", ..., "Des")`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-lg mb-3 text-yellow-700">
                  Tips Praktis
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <ArrowRight
                      size={18}
                      className="text-yellow-600 mr-2 flex-shrink-0"
                    />
                    <span>
                      <strong>Unpacking:</strong> Membongkar item dari list atau
                      tuple ke variabel terpisah
                    </span>
                  </li>
                </ul>
                <div className="mt-2 bg-gray-800 text-gray-200 p-3 rounded-lg">
                  <pre>
                    {`# Unpacking list atau tuple
warna = ["merah", "hijau", "biru"]
a, b, c = warna  # a="merah", b="hijau", c="biru"

# Unpacking dengan *
first, *middle, last = [1, 2, 3, 4, 5]
# first=1, middle=[2, 3, 4], last=5`}
                  </pre>
                </div>

                <ul className="space-y-2 mt-4 text-gray-700">
                  <li className="flex items-center">
                    <ArrowRight
                      size={18}
                      className="text-yellow-600 mr-2 flex-shrink-0"
                    />
                    <span>
                      <strong>Shallow vs Deep Copy:</strong> Hati-hati dengan
                      list bersarang
                    </span>
                  </li>
                </ul>
                <div className="mt-2 bg-gray-800 text-gray-200 p-3 rounded-lg">
                  <pre>
                    {`import copy

# Shallow copy - list bersarang tetap terhubung
a = [[1, 2], [3, 4]]
b = a.copy()  # atau b = list(a) atau b = a[:]
b[0][0] = 99  # mengubah a juga: [[99, 2], [3, 4]]

# Deep copy - memutus semua referensi
c = copy.deepcopy(a)
c[0][0] = 100  # tidak mengubah a`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Ringkasan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ringkasan
              </h2>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      <strong>List</strong> adalah struktur data mutable yang
                      dapat diubah setelah dibuat.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      <strong>Tuple</strong> adalah struktur data immutable yang
                      tidak dapat diubah setelah dibuat.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Keduanya mendukung <strong>indexing</strong>,{' '}
                      <strong>slicing</strong>, dan <strong>iterasi</strong>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      List cocok untuk data yang perlu sering dimodifikasi,
                      tuple untuk data yang tetap.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Tuple lebih efisien dalam hal kecepatan dan penggunaan
                      memori dibanding list.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Koleksi Data dalam Python
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">List</h4>
                    <p className="text-sm text-gray-600">
                      Koleksi mutable, berurutan, items dapat diubah
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Tuple</h4>
                    <p className="text-sm text-gray-600">
                      Koleksi immutable, berurutan, items tidak dapat diubah
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Next Topic</h4>
                    <p className="text-sm text-gray-600">
                      Set dan Dictionary - Pembahasan pada materi selanjutnya
                    </p>
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

export default PythonListTuplePresentation;
