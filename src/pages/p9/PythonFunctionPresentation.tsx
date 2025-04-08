import React from 'react';
import {
  Code,
  Layers,
  Zap,
  Package,
  ArrowRight,
  FunctionSquare,
  Settings,
  GitMerge,
} from 'lucide-react';

const PythonFunctionPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Fungsi dalam Python
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <FunctionSquare size={28} className="text-blue-500 mr-3" />
            <span>
              Blok kode terorganisir dan reusable yang melakukan tindakan
              spesifik
            </span>
          </div>
        </header>

        {/* Slide 2: Apa itu Fungsi */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Apa Itu Fungsi?
              </h2>
              <p className="text-gray-700 mb-4">
                Fungsi adalah blok kode terorganisir dan reusable yang dirancang
                untuk melakukan tugas spesifik. Fungsi membantu programmer
                menghindari pengulangan kode dan meningkatkan modularitas
                program.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>
                    <strong>Terorganisir:</strong> Mengelompokkan kode yang
                    berhubungan dalam satu unit
                  </span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>
                    <strong>Reusable:</strong> Dapat dipanggil berulang kali
                    tanpa menulis ulang kode
                  </span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>
                    <strong>Modular:</strong> Membagi program besar menjadi
                    komponen-komponen kecil yang lebih mudah dikelola
                  </span>
                </li>
                <li className="flex items-center">
                  <ArrowRight size={18} className="text-blue-500 mr-2" />
                  <span>
                    <strong>Abstraksi:</strong> Menyembunyikan kompleksitas
                    implementasi, fokus pada apa yang dilakukan bukan bagaimana
                    melakukannya
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 3: Sintaksis Dasar Fungsi */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Sintaksis Dasar Fungsi
              </h2>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-6">
                <pre>
                  {`def nama_fungsi(parameter1, parameter2, ...):
    """
    Docstring (opsional): Menjelaskan apa yang dilakukan fungsi,
    parameter yang diterima, dan nilai yang dikembalikan.
    """
    # Blok kode fungsi
    # Dapat terdiri dari banyak baris

    return nilai  # Opsional, mengembalikan nilai ke pemanggil`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Kata Kunci def
                  </h3>
                  <p className="text-gray-700">
                    Digunakan untuk mendeklarasikan fungsi, diikuti dengan nama
                    fungsi dan tanda kurung.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter
                  </h3>
                  <p className="text-gray-700">
                    Nilai yang diterima fungsi untuk diproses, bisa kosong atau
                    banyak.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Docstring
                  </h3>
                  <p className="text-gray-700">
                    Dokumentasi fungsi yang menjelaskan cara penggunaan
                    (opsional tapi direkomendasikan).
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Return Statement
                  </h3>
                  <p className="text-gray-700">
                    Mengembalikan nilai hasil fungsi, jika tidak ada return,
                    fungsi mengembalikan None.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Contoh Fungsi Sederhana */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Contoh Fungsi Sederhana
              </h2>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-6">
                <pre>
                  {`# Fungsi tanpa parameter dan return
def sapa():
    print("Halo, selamat datang!")

# Fungsi dengan parameter
def sapa_pengguna(nama):
    print(f"Halo {nama}, selamat datang!")

# Fungsi dengan parameter default
def sapa_dengan_pesan(nama, pesan="Selamat datang!"):
    print(f"Halo {nama}, {pesan}")

# Fungsi dengan return value
def jumlahkan(a, b):
    return a + b

# Memanggil fungsi-fungsi di atas
sapa()                          # Output: Halo, selamat datang!
sapa_pengguna("Budi")           # Output: Halo Budi, selamat datang!
sapa_dengan_pesan("Ani")        # Output: Halo Ani, Selamat datang!
sapa_dengan_pesan("Dodi", "Semoga harimu menyenangkan!")  # Output: Halo Dodi, Semoga harimu menyenangkan!

hasil = jumlahkan(5, 3)
print(f"Hasil penjumlahan: {hasil}")  # Output: Hasil penjumlahan: 8`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Parameter Fungsi */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Settings
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Parameter Fungsi
              </h2>
              <p className="text-gray-700 mb-4">
                Python menyediakan beberapa jenis parameter untuk memberikan
                fleksibilitas dalam mendefinisikan fungsi:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter Wajib (Required)
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def perkalian(a, b):
    return a * b

hasil = perkalian(5, 3)  # Kedua parameter harus diberikan
print(hasil)  # Output: 15`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter Default
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def pangkat(angka, eksponen=2):
    return angka ** eksponen

print(pangkat(3))     # Output: 9 (3²)
print(pangkat(2, 3))  # Output: 8 (2³)`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter Bernama (Keyword Arguments)
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def cetak_info(nama, usia, pekerjaan):
    print(f"Nama: {nama}, Usia: {usia}, Pekerjaan: {pekerjaan}")

# Menggunakan keyword arguments (urutan tidak penting)
cetak_info(usia=25, nama="Budi", pekerjaan="Programmer")
# Output: Nama: Budi, Usia: 25, Pekerjaan: Programmer`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter *args (Variabel Jumlah Posisional)
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def jumlahkan_semua(*args):
    total = 0
    for angka in args:
        total += angka
    return total

print(jumlahkan_semua(1, 2, 3))       # Output: 6
print(jumlahkan_semua(1, 2, 3, 4, 5)) # Output: 15`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter **kwargs (Variabel Jumlah Keyword)
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def cetak_data_diri(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

cetak_data_diri(nama="Budi", usia=25, kota="Jakarta", hobi="Membaca")
# Output:
# nama: Budi
# usia: 25
# kota: Jakarta
# hobi: Membaca`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Return Values dan Scope */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitMerge
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Return Values dan Scope
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Return Values
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Fungsi dapat mengembalikan nilai tunggal, multiple values,
                    atau tidak mengembalikan nilai (None).
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Return tunggal
def kuadrat(x):
    return x ** 2

# Multiple returns
def operasi_matematika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    return tambah, kurang, kali, bagi

# Contoh multiple returns
hasil = operasi_matematika(10, 5)
print(hasil)  # Output: (15, 5, 50, 2.0)

# Unpacking hasil multiple returns
t, k, ka, b = operasi_matematika(10, 5)
print(f"Tambah: {t}, Kurang: {k}")`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Scope Variabel
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Variabel yang didefinisikan di dalam fungsi hanya dapat
                    diakses di dalam fungsi tersebut (local scope).
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Contoh scope
x = 10  # Variabel global

def fungsi_a():
    y = 5  # Variabel lokal
    print(x)  # Dapat mengakses variabel global
    print(y)  # Dapat mengakses variabel lokal

def fungsi_b():
    print(x)  # Dapat mengakses variabel global
    # print(y)  # Error! y adalah variabel lokal fungsi_a

fungsi_a()
# Output:
# 10
# 5

fungsi_b()
# Output:
# 10`}
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-blue-700">
                  Keyword global dan nonlocal
                </h3>
                <p className="text-gray-700 mb-2">
                  Python menyediakan keyword untuk mengakses dan memodifikasi
                  variabel di luar scope lokal.
                </p>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre>
                    {`# Menggunakan global keyword
x = 10

def ubah_x():
    global x
    x = 20  # Mengubah variabel global
    print(f"x dalam fungsi: {x}")

print(f"x sebelum: {x}")  # Output: x sebelum: 10
ubah_x()                  # Output: x dalam fungsi: 20
print(f"x sesudah: {x}")  # Output: x sesudah: 20

# Menggunakan nonlocal (untuk nested functions)
def outer():
    y = 5
    
    def inner():
        nonlocal y
        y = 10  # Mengubah variabel di outer function
    
    print(f"y sebelum: {y}")  # Output: y sebelum: 5
    inner()
    print(f"y sesudah: {y}")  # Output: y sesudah: 10

outer()`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Fungsi Lambda */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Fungsi Lambda
              </h2>
              <p className="text-gray-700 mb-4">
                Lambda adalah cara untuk membuat fungsi anonim kecil dan
                sederhana dalam satu baris.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre>
                    {`# Sintaksis dasar lambda
# lambda arguments: expression

# Contoh sederhana
kuadrat = lambda x: x ** 2
print(kuadrat(5))  # Output: 25

# Multiple arguments
kali = lambda a, b: a * b
print(kali(3, 4))  # Output: 12`}
                  </pre>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Penggunaan Umum:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-blue-500 mr-2" />
                      <span>
                        Sebagai argumen untuk fungsi seperti{' '}
                        <strong>sorted()</strong>, <strong>filter()</strong>,
                        dan <strong>map()</strong>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={18} className="text-blue-500 mr-2" />
                      <span>
                        Untuk operasi-operasi sederhana yang tidak perlu fungsi
                        penuh
                      </span>
                    </li>
                  </ul>
                  <pre className="mt-3 bg-gray-800 text-gray-200 p-2 rounded-lg">
                    {`# Contoh map dengan lambda
angka = [1, 2, 3, 4, 5]
hasil = list(map(lambda x: x*2, angka))
# [2, 4, 6, 8, 10]`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: Rekursi dan Docstrings */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Package
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Rekursi dan Docstrings
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Fungsi Rekursif
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Fungsi yang memanggil dirinya sendiri untuk menyelesaikan
                    masalah.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Contoh rekursi: Faktorial
def faktorial(n):
    if n <= 1:
        return 1
    else:
        return n * faktorial(n - 1)

print(faktorial(5))  # Output: 120`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Docstrings
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Dokumentasi fungsi yang menjelaskan penggunaannya.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                    <pre>
                      {`def hitung_luas_lingkaran(radius):
    """
    Menghitung luas lingkaran dari radius.
    
    Parameters:
        radius (float): Jari-jari lingkaran
    
    Returns:
        float: Luas lingkaran
    """
    import math
    return math.pi * radius ** 2

# Melihat docstring
help(hitung_luas_lingkaran)`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Best Practices */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Settings
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Best Practices dalam Penggunaan Fungsi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Prinsip Single Responsibility
                  </h3>
                  <p className="text-gray-700">
                    Setiap fungsi harus melakukan satu tugas spesifik dengan
                    baik. Fungsi yang kompleks sebaiknya dipecah menjadi
                    fungsi-fungsi yang lebih kecil.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Nama Fungsi yang Deskriptif
                  </h3>
                  <p className="text-gray-700">
                    Gunakan nama fungsi yang jelas menggambarkan apa yang
                    dilakukan fungsi (misalnya, hitung_luas_lingkaran vs
                    fungsi1).
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Docstrings yang Lengkap
                  </h3>
                  <p className="text-gray-700">
                    Selalu sertakan docstring yang menjelaskan tujuan,
                    parameter, nilai kembalian, dan contoh penggunaan fungsi.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Hindari Side Effects
                  </h3>
                  <p className="text-gray-700">
                    Usahakan fungsi tidak mengubah state di luar scope-nya. Jika
                    perlu mengubah variabel global, gunakan dengan hati-hati.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Parameter Default yang Immutable
                  </h3>
                  <p className="text-gray-700">
                    Gunakan tipe data immutable (seperti None, string, numbers)
                    untuk parameter default, bukan list atau dict.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">
                    Error Handling
                  </h3>
                  <p className="text-gray-700">
                    Tangani error dengan baik menggunakan try-except, dan
                    berikan pesan error yang jelas dan informatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10: Ringkasan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ringkasan Fungsi dalam Python
              </h2>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Fungsi adalah blok kode terorganisir dan reusable yang
                      melakukan tugas spesifik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Didefinisikan dengan keyword def diikuti nama fungsi dan
                      parameter dalam tanda kurung
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Parameter dapat berupa required, default, *args, dan
                      **kwargs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Fungsi dapat mengembalikan nilai dengan keyword return
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Lambda adalah cara singkat untuk membuat fungsi anonim
                      sederhana
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight
                      size={18}
                      className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>
                      Fungsi rekursif adalah fungsi yang memanggil dirinya
                      sendiri
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Alasan Menggunakan Fungsi:
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">1. Reusability</h4>
                    <p className="text-sm text-gray-600">
                      Kode yang ditulis sekali dapat digunakan berkali-kali
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">2. Modularitas</h4>
                    <p className="text-sm text-gray-600">
                      Membagi program besar menjadi bagian-bagian kecil yang
                      lebih mudah dikelola
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">3. Maintainability</h4>
                    <p className="text-sm text-gray-600">
                      Lebih mudah melakukan perbaikan tanpa harus mengubah
                      seluruh program
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

export default PythonFunctionPresentation;
