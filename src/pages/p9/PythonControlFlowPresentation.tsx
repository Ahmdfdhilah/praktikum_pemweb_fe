import React from 'react';
import { Code, Zap, GitBranch, ArrowRight, Check, RefreshCw } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, description, code }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const PythonControlFlowPresentation = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Title Slide */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
            Percabangan dan Perulangan dalam Python
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-blue-500 mr-3" />
            <span>Fundamental kontrol alur eksekusi untuk logika pemrograman yang efektif</span>
          </div>
        </header>

        {/* Slide 2: Introduction to Control Flow */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pengenalan Kontrol Alur</h2>
              <p className="text-gray-700 mb-6">
                Kontrol alur memungkinkan program Python untuk membuat keputusan dan menjalankan kode secara berulang
                berdasarkan kondisi tertentu. Ini adalah fondasi dari logika pemrograman yang memungkinkan pembuatan
                algoritma yang kompleks dan efektif.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    Jenis Kontrol Alur
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">Percabangan (Branching)</h4>
                      <p className="text-gray-700">
                        Mengeksekusi blok kode tertentu hanya jika kondisi terpenuhi. Menggunakan if, elif, dan else.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700">Perulangan (Looping)</h4>
                      <p className="text-gray-700">
                        Mengeksekusi blok kode secara berulang selama kondisi terpenuhi. Menggunakan for dan while.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Pentingnya Kontrol Alur</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Memungkinkan program membuat keputusan</li>
                    <li>Mengurangi pengulangan kode dengan perulangan</li>
                    <li>Membuat program lebih dinamis</li>
                    <li>Memungkinkan penanganan situasi yang berbeda</li>
                    <li>Fondasi untuk algoritma kompleks</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <CodeExample
                  title="Contoh Sederhana Kontrol Alur"
                  description="Ilustrasi dasar percabangan dan perulangan dalam Python"
                  code={`# Contoh percabangan
nilai = 85

if nilai >= 80:
    print("Nilai Anda A")
elif nilai >= 70:
    print("Nilai Anda B")
else:
    print("Nilai Anda perlu ditingkatkan")

# Contoh perulangan
for i in range(5):
    print(f"Iterasi ke-{i+1}")

# Output:
# Nilai Anda A
# Iterasi ke-1
# Iterasi ke-2
# Iterasi ke-3
# Iterasi ke-4
# Iterasi ke-5`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Percabangan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Percabangan (Branching)</h2>
              <p className="text-gray-700 mb-6">
                Percabangan memungkinkan program Python untuk mengeksekusi blok kode tertentu hanya jika kondisi yang
                ditentukan terpenuhi. Python menggunakan keyword if, elif (else if), dan else untuk struktur percabangan.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Struktur Percabangan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>if</strong>: Blok kode dieksekusi jika kondisi benar</li>
                    <li><strong>elif</strong>: Diuji jika kondisi if sebelumnya salah</li>
                    <li><strong>else</strong>: Dieksekusi jika semua kondisi sebelumnya salah</li>
                    <li>Kondisi dievaluasi sebagai Boolean (True/False)</li>
                    <li>Blok kode diindentasi (biasanya 4 spasi)</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Operator Pembanding</h3>
                  <div className="">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="px-3 py-2 text-left">Operator</th>
                          <th className="px-3 py-2 text-left">Deskripsi</th>
                          <th className="px-3 py-2 text-left">Contoh</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr><td className="px-3 py-2 border-t">==</td><td className="px-3 py-2 border-t">Sama dengan</td><td className="px-3 py-2 border-t">a == b</td></tr>
                        <tr><td className="px-3 py-2 border-t">!=</td><td className="px-3 py-2 border-t">Tidak sama dengan</td><td className="px-3 py-2 border-t">a != b</td></tr>
                        <tr><td className="px-3 py-2 border-t">&gt;</td><td className="px-3 py-2 border-t">Lebih besar dari</td><td className="px-3 py-2 border-t">a &gt; b</td></tr>
                        <tr><td className="px-3 py-2 border-t">&lt;</td><td className="px-3 py-2 border-t">Lebih kecil dari</td><td className="px-3 py-2 border-t">a &lt; b</td></tr>
                        <tr><td className="px-3 py-2 border-t">&gt;=</td><td className="px-3 py-2 border-t">Lebih besar atau sama dengan</td><td className="px-3 py-2 border-t">a &gt;= b</td></tr>
                        <tr><td className="px-3 py-2 border-t">&lt;=</td><td className="px-3 py-2 border-t">Lebih kecil atau sama dengan</td><td className="px-3 py-2 border-t">a &lt;= b</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <CodeExample
                title="Implementasi Percabangan"
                description="Contoh penggunaan if, elif, dan else dalam program Python"
                code={`def klasifikasi_nilai(nilai):
    if nilai >= 90:
        return "A"
    elif nilai >= 80:
        return "B"
    elif nilai >= 70:
        return "C"
    elif nilai >= 60:
        return "D"
    else:
        return "E"

def hitung_diskon(total_belanja, member=False):
    if member:
        if total_belanja > 1000000:
            diskon = 0.15  # 15% untuk member, belanja > 1jt
        elif total_belanja > 500000:
            diskon = 0.10  # 10% untuk member, belanja > 500rb
        else:
            diskon = 0.05  # 5% untuk member, belanja <= 500rb
    else:
        if total_belanja > 1000000:
            diskon = 0.07  # 7% untuk non-member, belanja > 1jt
        else:
            diskon = 0.00  # Tidak ada diskon untuk non-member, belanja <= 1jt
    
    return total_belanja * diskon

# Penggunaan
print(klasifikasi_nilai(85))  # Output: B
print(hitung_diskon(1500000, True))  # Output: 225000.0 (15% dari 1.5jt)`}
              />
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Percabangan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gunakan operator logika <code>and</code>, <code>or</code>, <code>not</code> untuk kondisi kompleks</li>
                  <li>Perhatikan urutan kondisi — yang paling spesifik dulu</li>
                  <li>Hindari nested if yang terlalu dalam (lebih dari 3 level)</li>
                  <li>Pertimbangkan penggunaan <code>dict</code> untuk menggantikan if-elif yang panjang</li>
                  <li>Gunakan conditional expressions (ternary operator) untuk kasus sederhana: <code>x if condition else y</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Perulangan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <RefreshCw size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Perulangan (Looping)</h2>
              <p className="text-gray-700 mb-6">
                Perulangan memungkinkan pengguna untuk mengeksekusi blok kode secara berulang, baik untuk sejumlah 
                iterasi tertentu atau selama suatu kondisi terpenuhi. Python menyediakan perulangan for dan while.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">For Loop</h3>
                  <p className="text-gray-700 mb-3">
                    Digunakan untuk iterasi melalui sekumpulan item (list, tuple, dict, set, atau string).
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
                    <code>{`# Sintaksis dasar
for item in iterable:
    # Kode yang dieksekusi untuk setiap item

# Contoh dengan range
for i in range(5):  # range(5) menghasilkan 0, 1, 2, 3, 4
    print(i)

# Contoh dengan list
for nama in ["Andi", "Budi", "Cindy"]:
    print(f"Halo, {nama}!")

# Contoh dengan enumerate
for index, nilai in enumerate([10, 20, 30]):
    print(f"Index {index}: {nilai}")`}</code>
                  </pre>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">While Loop</h3>
                  <p className="text-gray-700 mb-3">
                    Digunakan untuk eksekusi berulang selama kondisi tertentu bernilai True.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                    <code>{`# Sintaksis dasar
while condition:
# Kode yang dieksekusi selama condition benar
# Biasanya ada perubahan yang akan membuat condition False

# Contoh counter
counter = 0
while counter < 5:
    print(counter)
    counter += 1

# Contoh input validasi
password = ""
while password != "rahasia":
    password = input("Masukkan password: ")
    if password != "rahasia":
        print("Password salah!")`}</code>
                  </pre>
                </div>
              </div>
              
              <CodeExample
                title="Kasus Penggunaan Perulangan"
                description="Implementasi berbagai tipe perulangan untuk menyelesaikan masalah"
                code={`# 1. Menghitung faktorial dengan for loop
def faktorial_for(n):
    hasil = 1
    for i in range(1, n + 1):
        hasil *= i
    return hasil

# 2. Menghitung faktorial dengan while loop
def faktorial_while(n):
    hasil = 1
    counter = 1
    while counter <= n:
        hasil *= counter
        counter += 1
    return hasil

# 3. Loop control dengan break dan continue
def cari_bilangan_prima(batas):
    print(f"Bilangan prima hingga {batas}:")
    
    for n in range(2, batas + 1):
        # Skip jika n tidak prima
        is_prime = True
        
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                is_prime = False
                break  # Keluar dari loop dalam jika ditemukan pembagi
        
        if not is_prime:
            continue  # Lanjut ke iterasi berikutnya dari loop luar
        
        print(n, end=" ")  # Cetak jika n adalah bilangan prima

# 4. Nested loops (loop bersarang)
def cetak_pola_segitiga(tinggi):
    for i in range(1, tinggi + 1):
        for j in range(i):
            print("*", end="")
        print()  # Baris baru setelah setiap baris pola

# Penggunaan
print(faktorial_for(5))  # Output: 120
print(faktorial_while(5))  # Output: 120
cari_bilangan_prima(30)  # Output: 2 3 5 7 11 13 17 19 23 29
cetak_pola_segitiga(5)
# Output:
# *
# **
# ***
# ****
# *****`}
              />
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Kontrol Perulangan Lanjutan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>break</strong>: Menghentikan seluruh loop dan keluar</li>
                  <li><strong>continue</strong>: Melewatkan iterasi saat ini dan melanjutkan ke iterasi berikutnya</li>
                  <li><strong>else</strong> dengan loop: Dieksekusi jika loop selesai secara normal (tanpa break)</li>
                  <li><strong>pass</strong>: Placeholder, tidak melakukan apa-apa</li>
                  <li>List comprehensions: Cara ringkas membuat list dengan loop (<code>[x for x in range(10) if x % 2 == 0]</code>)</li>
                </ul>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-3">
                  <code>{`# Contoh else dengan loop
for i in range(5):
    if i == 10:  # Kondisi yang tidak pernah terpenuhi
        print("Ditemukan!")
        break
else:
    print("Tidak ditemukan dalam loop")`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Kombinasi dan Pola Umum */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kombinasi dan Pola Umum</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-3 text-left">Pola</th>
                      <th className="border border-blue-200 p-3 text-left">Deskripsi</th>
                      <th className="border border-blue-200 p-3 text-left">Contoh Kasus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Filter dengan if dalam loop</td>
                      <td className="border border-blue-200 p-3">Memilih elemen yang memenuhi kriteria</td>
                      <td className="border border-blue-200 p-3">Memilih bilangan genap dari list</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Loop dengan penghitung</td>
                      <td className="border border-blue-200 p-3">Menghitung elemen yang memenuhi kondisi</td>
                      <td className="border border-blue-200 p-3">Menghitung jumlah siswa yang lulus</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Akumulator dalam loop</td>
                      <td className="border border-blue-200 p-3">Mengakumulasi nilai selama iterasi</td>
                      <td className="border border-blue-200 p-3">Menghitung total atau rata-rata</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Early exit dengan break</td>
                      <td className="border border-blue-200 p-3">Keluar dari loop segera setelah kondisi terpenuhi</td>
                      <td className="border border-blue-200 p-3">Mencari item pertama dalam list</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Nested loops (loop bersarang)</td>
                      <td className="border border-blue-200 p-3">Loop di dalam loop</td>
                      <td className="border border-blue-200 p-3">Matrix processing, pola bintang</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Contoh Implementasi Terstruktur</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`def analisis_data_mahasiswa(data_mahasiswa):
    """
    Analisis data nilai mahasiswa
    """
    # Inisialisasi variabel
    total_nilai = 0
    jumlah_lulus = 0
    nilai_tertinggi = 0
    mahasiswa_tertinggi = ""
    
    # Loop untuk setiap mahasiswa
    for nama, nilai in data_mahasiswa.items():
        # Akumulator
        total_nilai += nilai
        
        # Percabangan untuk menghitung yang lulus
        if nilai >= 60:
            jumlah_lulus += 1
            
            # Cari nilai tertinggi
            if nilai > nilai_tertinggi:
                nilai_tertinggi = nilai
                mahasiswa_tertinggi = nama
    
    # Hitung rata-rata
    rata_rata = total_nilai / len(data_mahasiswa) if data_mahasiswa else 0
    
    # Return hasil analisis
    return {
        "rata_rata": rata_rata,
        "jumlah_lulus": jumlah_lulus,
        "mahasiswa_tertinggi": mahasiswa_tertinggi,
        "nilai_tertinggi": nilai_tertinggi
    }`}</code>
                  </pre>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Kasus Nyata: Game Tebak Angka</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import random

def permainan_tebak_angka():
    """
    Game tebak angka sederhana
    """
    angka_rahasia = random.randint(1, 100)
    percobaan = 0
    batas_percobaan = 10
    
    print("== GAME TEBAK ANGKA ==")
    print(f"Saya telah memilih angka 1-100. Tebak dalam {batas_percobaan} kesempatan.")
    
    # Loop utama game
    while percobaan < batas_percobaan:
        # Hitung sisa percobaan
        sisa = batas_percobaan - percobaan
        
        # Input dari user
        try:
            tebakan = int(input(f"Kesempatan tersisa {sisa}. Tebakan Anda: "))
        except ValueError:
            print("Masukkan angka yang valid!")
            continue
        
        # Increment counter
        percobaan += 1
        
        # Cek tebakan
        if tebakan < angka_rahasia:
            print("Tebakan terlalu rendah!")
        elif tebakan > angka_rahasia:
            print("Tebakan terlalu tinggi!")
        else:
            # Tebakan benar, keluar dari loop
            print(f"Selamat! Anda berhasil menebak angka {angka_rahasia}")
            print(f"dalam {percobaan} percobaan.")
            break
    else:
        # Loop selesai tanpa break (kesempatan habis)
        print(f"Maaf, Anda kehabisan kesempatan. Angka rahasianya adalah {angka_rahasia}.")`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Best Practices Percabangan dan Perulangan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gunakan pendekatan pythonic: list comprehension, generator expression</li>
                  <li>Hindari "deep nesting" — terlalu banyak level if atau loop bersarang</li>
                  <li>Gunakan fungsi untuk memecah logika kompleks</li>
                  <li>Perhatikan kinerja — hindari operasi mahal dalam loop dalam</li>
                  <li>Gunakan itertools untuk operasi perulangan yang lebih efisien</li>
                  <li>Prioritaskan readability — kode yang mudah dibaca lebih penting daripada optimasi prematur</li>
                  <li>Tambahkan komentar untuk logika kontrol alur yang kompleks</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Kombinasi yang tepat antara percabangan dan perulangan adalah kunci untuk menulis program Python
                  yang efektif, efisien, dan mudah dipelihara.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PythonControlFlowPresentation;