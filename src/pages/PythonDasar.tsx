import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import { CodeBlock } from '@/components/praktikum/CodeBlock';
import { StepGuide } from '@/components/praktikum/StepGuide';
import { InfoBox } from '@/components/praktikum/InfoBox';
import { SubmissionLink } from '@/components/praktikum/SubmissionLink';

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

export default function PythonDasar() {
  return (
    <PraktikumLayout
      title="Praktikum Python Dasar"
      subtitle="Mengenal dasar-dasar Python dan pemrograman berbasis objek"
    >
      {/* Konten akan ditambahkan di sini */}
      <SectionWrapper
        id="tujuan"
        title="Tujuan Praktikum"
        icon={<Target className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, kalian diharapkan mampu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Memahami konsep dasar Python sebagai bahasa pemrograman</li>
            <li>
              Menguasai penggunaan variabel, tipe data, dan operator dalam
              Python
            </li>
            <li>
              Mengimplementasikan struktur kendali (conditionals dan loops)
            </li>
            <li>Membuat dan menggunakan fungsi dalam Python</li>
            <li>
              Bekerja dengan koleksi data seperti list, dictionary, dan set
            </li>
          </ul>
        </div>
      </SectionWrapper>
      <SectionWrapper
        id="dasar-teori"
        title="Dasar Teori"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-6">
          <InfoBox type="info" title="Apa itu Python?">
            <p>
              Python adalah bahasa pemrograman interpretatif multiguna dengan
              filosofi perancangan yang berfokus pada tingkat keterbacaan kode.
              Diciptakan oleh Guido van Rossum dan pertama kali dirilis pada
              tahun 1991, Python didesain dengan penekanan pada keterbacaan
              kode.
            </p>
            <p className="mt-2">
              Menurut survey Stack Overflow Developer Survey 2024, Python tetap
              menjadi salah satu bahasa pemrograman paling populer di dunia,
              terutama di bidang data science, machine learning, dan AI.
            </p>
            <p className="mt-2">
              Python dikenal dengan sintaksisnya yang bersih dan mudah dibaca,
              yang membuatnya menjadi bahasa yang ideal untuk pemula maupun
              profesional. Tidak seperti bahasa lain yang menggunakan kurung
              kurawal, Python menggunakan indentasi untuk mendefinisikan blok
              kode.
            </p>
          </InfoBox>

          <div className="overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-800 my-4">
              Karakteristik Utama Python
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
                    Interpreted
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Kode dieksekusi langsung tanpa perlu dikompilasi terlebih
                    dahulu
                  </td>
                  <td className="px-4 py-2">
                    <code>python script.py</code>
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
                      x = 5 # x adalah integer
                      <br />x = "Python" # sekarang x adalah string
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Berorientasi Objek
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Mendukung konsep OOP seperti class dan inheritance
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>{`
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
                      `}</pre>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Indentasi
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Menggunakan indentasi untuk mendefinisikan blok kode
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>{`
if x > 0:
    print("Positif")
else:
    print("Negatif")
`}</pre>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Multi-paradigma
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Mendukung beberapa paradigma pemrograman
                  </td>
                  <td className="px-4 py-2">
                    <code>
                      <pre>
                        {`# Functional
data = [1, 2, 3, 4, 5]
result = list(map(lambda x: x * 2, data))`}
                      </pre>
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        id="dasar-teori-2"
        title="Dasar Teori (Lanjutan)"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-6">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">
              Interpreter Python
            </h3>
            <p>
              Python menggunakan interpreter untuk mengeksekusi kode. Ada
              beberapa implementasi interpreter Python:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>CPython</strong>: Implementasi standar, ditulis dalam C
              </li>
              <li>
                <strong>PyPy</strong>: Implementasi dengan JIT compiler, lebih
                cepat untuk beberapa aplikasi
              </li>
              <li>
                <strong>Jython</strong>: Implementasi yang berjalan di JVM
              </li>
              <li>
                <strong>IronPython</strong>: Implementasi untuk .NET Framework
              </li>
            </ul>
          </div>

          {/* Dasar-dasar Python */}
          <div className="flex flex-col mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Dasar-dasar Python
            </h3>

            <div>
              <p>Python memiliki beberapa tipe data dasar:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <code>int</code>: Bilangan bulat (1, 100, -10)
                </li>
                <li>
                  <code>float</code>: Bilangan desimal (3.14, -0.001)
                </li>
                <li>
                  <code>str</code>: String ("Hello", 'Python')
                </li>
                <li>
                  <code>bool</code>: Boolean (True, False)
                </li>
                <li>
                  <code>None</code>: Tipe khusus untuk menyatakan nilai kosong
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-700">Tipe Data Koleksi</h4>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <code>list</code>: Koleksi terurut yang bisa diubah [1, 2, 3]
                </li>
                <li>
                  <code>tuple</code>: Koleksi terurut yang tidak bisa diubah (1,
                  2, 3)
                </li>
                <li>
                  <code>dict</code>: Kumpulan pasangan key-value{' '}
                  {"{'nama': 'Budi', 'usia': 20}"}
                </li>
                <li>
                  <code>set</code>: Kumpulan item unik tanpa urutan {'{'}1, 2, 3
                  {'}'}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg font-medium text-gray-800">
              Python tidak hanya populer untuk pengembangan web, tetapi juga
              banyak digunakan di berbagai bidang:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: 'Data Science',
                  tech: 'NumPy, Pandas, Matplotlib',
                  color: 'bg-blue-50',
                },
                {
                  title: 'Machine Learning',
                  tech: 'TensorFlow, PyTorch, Scikit-learn',
                  color: 'bg-green-50',
                },
                {
                  title: 'Web Development',
                  tech: 'Django, Flask, FastAPI',
                  color: 'bg-yellow-50',
                },
                {
                  title: 'Automation',
                  tech: 'Selenium, PyAutoGUI, Scrapy',
                  color: 'bg-purple-50',
                },
                {
                  title: 'Game Development',
                  tech: 'Pygame, Panda3D',
                  color: 'bg-red-50',
                },
                {
                  title: 'Scientific Computing',
                  tech: 'SciPy, Sympy',
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
        id="fitur-modern"
        title="Fitur Python Modern"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-6">
          <div className="mt-12">
            <div className="overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-800 my-4">
                Fitur Python Modern
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
                      List Comprehension
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Cara singkat untuk membuat list
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
squares = [x**2 for x in range(10)]
`}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      f-strings
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      String formatting yang mudah
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`f"Hello, {name}!"`}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Type Hints
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Petunjuk tipe data
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
def greet(name: str) -> str:
    return f"Hello {name}"
                        `}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Async/Await
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Dukungan untuk programming asinkron
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
async def fetch_data():
    # code here
`}</pre>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Walrus Operator
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                      Assignment dalam ekspresi
                    </td>
                    <td className="px-4 py-2">
                      <code>
                        <pre>{`
if (n := len(data)) > 10:
    print(f"Data terlalu banyak ({n} items)")
`}</pre>
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            Sebelum memulai praktikum ini, pastikan kalian memiliki:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Python 3.8 atau versi lebih baru yang terinstall</li>
            <li>Dasar pemahaman konsep pemrograman</li>
            <li>Editor teks atau IDE seperti VS Code, PyCharm, dll.</li>
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
            Untuk mengikuti praktikum ini, kalian memerlukan:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Python 3.8+</strong>: Pastikan Python sudah terinstall
              dengan menjalankan <code>python --version</code> di terminal
            </li>
            <li>
              <strong>Code Editor</strong>: VSCode, PyCharm, Sublime Text, IDLE,
              atau editor teks lainnya
            </li>
            <li>
              <strong>Terminal atau Command Prompt</strong>: Untuk menjalankan
              program Python
            </li>
          </ul>

          <InfoBox type="tip" title="Rekomendasi">
            <p>
              Kami menyarankan menggunakan Visual Studio Code dengan ekstensi
              Python untuk pengalaman pengembangan yang lebih baik. VSCode
              menyediakan fitur seperti debugging, IntelliSense, dan linting
              untuk Python.
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
              title: 'Mengenal Python dan Cara Menjalankannya',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Buat sebuah file dengan nama{' '}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      hello.py
                    </code>{' '}
                    dan tulis kode pertama Python kalian.
                  </p>

                  <CodeBlock
                    title="hello.py"
                    code={`# Program Python pertama
print("Hello, World!")
print("Selamat datang di praktikum Python")
print("Saya sedang belajar Python")`}
                    language="python"
                  />

                  <p className="text-gray-700">
                    Untuk menjalankan file Python, buka terminal, arahkan ke
                    direktori tempat file tersebut berada, kemudian ketik:
                  </p>

                  <CodeBlock
                    title="Terminal"
                    code={`python hello.py`}
                    language="bash"
                  />

                  <InfoBox type="info">
                    <p>
                      Python adalah bahasa yang diinterpretasi, artinya kode
                      Python tidak perlu dikompilasi sebelum dijalankan.
                      Interpreter Python membaca dan menjalankan kode secara
                      langsung.
                    </p>
                  </InfoBox>

                  <div className="bg-gray-100 p-4 rounded-md">
                    <h4 className="font-medium text-gray-800">
                      Output yang diharapkan:
                    </h4>
                    <pre className="bg-black text-white p-3 rounded mt-2">
                      Hello, World!
                      <br />
                      Selamat datang di praktikum Python
                      <br />
                      Saya sedang belajar Python
                    </pre>
                  </div>
                </div>
              ),
            },
            {
              id: 2,
              title: 'Variabel dan Tipe Data',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Python memiliki beberapa tipe data dasar. Mari mengenal
                    variabel dan tipe data dalam Python.
                  </p>

                  <CodeBlock
                    title="variables.py"
                    code={`# Variabel dan tipe data dasar
nama = "Budi Santoso"    # string
usia = 20                # integer
tinggi = 175.5           # float
is_mahasiswa = True      # boolean

# Menampilkan nilai variabel
print("Nama:", nama)
print("Usia:", usia, "tahun")
print("Tinggi:", tinggi, "cm")
print("Status mahasiswa:", is_mahasiswa)

# Memeriksa tipe data
print("\\nTipe data variabel:")
print("Tipe data nama:", type(nama))
print("Tipe data usia:", type(usia))
print("Tipe data tinggi:", type(tinggi))
print("Tipe data is_mahasiswa:", type(is_mahasiswa))

# Konversi tipe data
usia_str = str(usia)
print("\\nUsia (string):", usia_str)
print("Tipe data usia_str:", type(usia_str))

# Input dari user
print("\\nInput dari pengguna:")
nama_input = input("Masukkan nama Anda: ")
usia_input = int(input("Masukkan usia Anda: "))  # konversi input ke integer
print(f"Halo {nama_input}, usia Anda {usia_input} tahun")`}
                    language="python"
                  />

                  <InfoBox type="tip">
                    <p>
                      Di Python, kita tidak perlu mendeklarasikan tipe data
                      secara eksplisit. Python akan menentukan tipe data secara
                      otomatis berdasarkan nilai yang diberikan. Ini disebut
                      dengan "dynamic typing".
                    </p>
                  </InfoBox>

                  <InfoBox type="info">
                    <p>
                      <code>input()</code> selalu mengembalikan string. Jika
                      kita ingin mendapatkan tipe data lain, kita perlu
                      melakukan konversi secara manual, seperti{' '}
                      <code>int(input())</code> untuk mendapatkan integer.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 3,
              title: 'Operator dan Ekspresi',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Python mendukung berbagai jenis operator untuk melakukan
                    operasi pada variabel dan nilai.
                  </p>

                  <CodeBlock
                    title="operators.py"
                    code={`# Operator aritmatika
a = 10
b = 3

print("Operator Aritmatika:")
print("a + b =", a + b)    # Penjumlahan
print("a - b =", a - b)    # Pengurangan
print("a * b =", a * b)    # Perkalian
print("a / b =", a / b)    # Pembagian (hasil float)
print("a // b =", a // b)  # Pembagian bulat
print("a % b =", a % b)    # Modulo (sisa pembagian)
print("a ** b =", a ** b)  # Pangkat

# Operator perbandingan
print("\\nOperator Perbandingan:")
print("a == b:", a == b)  # Sama dengan
print("a != b:", a != b)  # Tidak sama dengan
print("a > b:", a > b)    # Lebih besar dari
print("a < b:", a < b)    # Lebih kecil dari
print("a >= b:", a >= b)  # Lebih besar atau sama dengan
print("a <= b:", a <= b)  # Lebih kecil atau sama dengan

# Operator logika
x = True
y = False

print("\\nOperator Logika:")
print("x and y:", x and y)  # AND
print("x or y:", x or y)    # OR
print("not x:", not x)      # NOT

# Operator assignment
c = 5
print("\\nOperator Assignment:")
print("Nilai awal c =", c)
c += 3  # Sama dengan c = c + 3
print("Setelah c += 3, c =", c)
c -= 1  # Sama dengan c = c - 1
print("Setelah c -= 1, c =", c)
c *= 2  # Sama dengan c = c * 2
print("Setelah c *= 2, c =", c)
c /= 4  # Sama dengan c = c / 4
print("Setelah c /= 4, c =", c)`}
                    language="python"
                  />

                  <InfoBox type="info">
                    <p>
                      Python juga mendukung operator identitas (<code>is</code>,{' '}
                      <code>is not</code>) untuk memeriksa apakah dua variabel
                      merujuk ke objek yang sama dalam memori, dan operator
                      keanggotaan (<code>in</code>, <code>not in</code>) untuk
                      memeriksa keanggotaan dalam sebuah sequence (string, list,
                      tuple, dll).
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 4,
              title: 'Struktur Kendali: Percabangan',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Struktur kendali digunakan untuk mengontrol alur eksekusi
                    program. Mari belajar tentang percabangan.
                  </p>

                  <CodeBlock
                    title="conditionals.py"
                    code={`# Contoh if-else
nilai = int(input("Masukkan nilai (0-100): "))
grade = ""

# If-elif-else
if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"

print(f"Nilai: {nilai}, Grade: {grade}")

# Keterangan kelulusan
if nilai >= 60:
    print("Status: LULUS")
else:
    print("Status: TIDAK LULUS")

# Nested if
print("\\nKeterangan:")
if nilai >= 60:
    if nilai >= 90:
        print("Excellent!")
    elif nilai >= 80:
        print("Great job!")
    else:
        print("Good, keep improving!")
else:
    if nilai >= 40:
        print("Need more practice")
    else:
        print("Need serious attention")

# Ternary operator
status = "LULUS" if nilai >= 60 else "TIDAK LULUS"
print(f"Status (ternary): {status}")

# Multiple conditions
if nilai >= 80 and nilai <= 100:
    print("Nilai sangat baik")
elif nilai >= 60 or nilai == 55:
    print("Nilai cukup")
elif not (nilai < 40):
    print("Nilai di atas 40")`}
                    language="python"
                  />

                  <InfoBox type="info">
                    <p>
                      Python tidak menggunakan kurung kurawal untuk blok kode
                      seperti bahasa lain. Sebagai gantinya, Python menggunakan
                      indentasi (biasanya 4 spasi) untuk mengelompokkan
                      pernyataan dalam blok logika yang sama.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 5,
              title: 'Struktur Kendali: Perulangan',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Python menyediakan dua jenis loop utama: <code>for</code>{' '}
                    dan <code>while</code>. Mari belajar cara menggunakannya.
                  </p>

                  <CodeBlock
                    title="loops.py"
                    code={`# For loop dengan range
print("For loop dengan range:")
for i in range(5):  # 0, 1, 2, 3, 4
    print(i, end=" ")
print()

# Range dengan start, stop, step
print("\\nRange dengan start, stop, step:")
for i in range(2, 10, 2):  # 2, 4, 6, 8
    print(i, end=" ")
print()

# For loop dengan list
print("\\nFor loop dengan list:")
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
for item in buah:
    print(item)

# For loop dengan enumerate (mendapatkan indeks)
print("\\nFor loop dengan enumerate:")
for index, item in enumerate(buah):
    print(f"Index {index}: {item}")

# While loop
print("\\nWhile loop:")
count = 0
while count < 5:
    print(count, end=" ")
    count += 1
print()

# While dengan break
print("\\nWhile dengan break:")
angka = 0
while True:
    print(angka, end=" ")
    angka += 1
    if angka >= 5:
        break
print()

# For loop dengan continue
print("\\nFor loop dengan continue:")
for i in range(10):
    if i % 2 == 0:  # Skip bilangan genap
        continue
    print(i, end=" ")
print()

# Nested loops
print("\\nNested loops (multiplication table):")
for i in range(1, 5):
    for j in range(1, 5):
        print(f"{i}x{j}={i*j}", end="\\t")
    print()

# Loop dengan else
print("\\nLoop dengan else:")
for i in range(5):
    print(i, end=" ")
else:
    print("Loop selesai")

# List comprehension - cara singkat untuk membuat list
print("\\nList comprehension:")
squares = [x**2 for x in range(1, 6)]
print("Squares:", squares)`}
                    language="python"
                  />

                  <InfoBox type="tip">
                    <p>
                      List comprehension adalah fitur Python yang powerful untuk
                      membuat list secara singkat dan efisien. Format dasarnya
                      adalah:{' '}
                      <code>
                        [expression for item in iterable if condition]
                      </code>
                      .
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 6,
              title: 'Fungsi',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Fungsi adalah blok kode yang dapat digunakan kembali yang
                    hanya dijalankan ketika dipanggil. Mari belajar cara membuat
                    dan menggunakan fungsi di Python.
                  </p>

                  <CodeBlock
                    title="functions.py"
                    code={`# Fungsi dasar
def sapa():
    print("Halo, selamat datang!")

# Memanggil fungsi
print("Memanggil fungsi sapa():")
sapa()

# Fungsi dengan parameter
def sapa_nama(nama):
    print(f"Halo, {nama}! Selamat datang!")

print("\\nFungsi dengan parameter:")
sapa_nama("Budi")
sapa_nama("Ani")

# Fungsi dengan parameter default
def sapa_lengkap(nama, pesan="Selamat datang!"):
    print(f"Halo, {nama}! {pesan}")

print("\\nFungsi dengan parameter default:")
sapa_lengkap("Citra")
sapa_lengkap("Dodi", "Semoga harimu menyenangkan!")

# Fungsi dengan return value
def jumlah(a, b):
    return a + b

print("\\nFungsi dengan return value:")
hasil = jumlah(5, 3)
print(f"5 + 3 = {hasil}")

# Fungsi dengan multiple return values
def operasi_aritmatika(a, b):
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    return tambah, kurang, kali, bagi

print("\\nFungsi dengan multiple return values:")
a, b, c, d = operasi_aritmatika(10, 2)
print(f"10 + 2 = {a}")
print(f"10 - 2 = {b}")
print(f"10 * 2 = {c}")
print(f"10 / 2 = {d}")

# Lambda function (anonymous function)
print("\\nLambda function:")
kuadrat = lambda x: x**2
print(f"Kuadrat dari 5 adalah {kuadrat(5)}")

# Menggunakan lambda dengan built-in functions
angka = [1, 5, 4, 3, 2, 6]
angka_urut = sorted(angka)
print(f"Sorted: {angka_urut}")

# Menggunakan fungsi sebagai argumen
def apply_operation(a, b, operation):
    return operation(a, b)

print("\\nFungsi sebagai argumen:")
add = lambda x, y: x + y
multiply = lambda x, y: x * y

print(f"5 + 3 = {apply_operation(5, 3, add)}")
print(f"5 * 3 = {apply_operation(5, 3, multiply)}")`}
                    language="python"
                  />

                  <InfoBox type="info">
                    <p>
                      Python mendukung berbagai jenis parameter fungsi termasuk
                      positional arguments, keyword arguments, default
                      arguments, variable-length arguments (*args), dan
                      variable-length keyword arguments (**kwargs).
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 7,
              title: 'Struktur Data: List dan Dictionary',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Python memiliki struktur data bawaan yang sangat berguna.
                    Mari kita fokus pada dua yang paling sering digunakan: list
                    dan dictionary.
                  </p>

                  <CodeBlock
                    title="data_structures.py"
                    code={`# List - koleksi data yang terurut dan bisa diubah
print("LIST OPERATIONS")
print("--------------")

# Membuat list
buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
print("List buah:", buah)

# Mengakses elemen list
print("\\nMengakses elemen list:")
print("Buah pertama:", buah[0])
print("Buah terakhir:", buah[-1])  # Indeks negatif menghitung dari belakang

# Slicing list
print("\\nSlicing list:")
print("Dua buah pertama:", buah[0:2])  # Indeks 0 dan 1
print("Dua buah terakhir:", buah[-2:])  # Dua terakhir

# Mengubah elemen list
print("\\nMengubah elemen list:")
buah[1] = "Strawberry"
print("Setelah mengubah buah[1]:", buah)

# Metode list
print("\\nMetode list:")

# Menambah elemen
buah.append("Anggur")
print("Setelah append Anggur:", buah)

buah.insert(2, "Durian")
print("Setelah insert Durian di indeks 2:", buah)

# Menghapus elemen
removed = buah.pop()
print(f"Elemen yang dihapus dengan pop(): {removed}")
print("List setelah pop():", buah)

buah.remove("Durian")
print("List setelah remove('Durian'):", buah)

# List operations
print("\\nList operations:")
print("Jumlah elemen:", len(buah))
print("Apel di indeks:", buah.index("Apel"))

# Sorting list
angka = [3, 1, 4, 1, 5, 9, 2]
print("\\nList angka:", angka)

angka.sort()
print("Setelah sort():", angka)

angka.reverse()
print("Setelah reverse():", angka)

# Nested list
print("\\nNested list:")
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("Matrix:", matrix)
print("matrix[1][2]:", matrix[1][2])  # Mengakses elemen baris 1, kolom 2 (nilai 6)

# Dictionary - koleksi key-value yang tidak berurutan
print("\\n\\nDICTIONARY OPERATIONS")
print("--------------------")

# Membuat dictionary
mahasiswa = {
    "nama": "Budi Santoso",
    "nim": "20210001",
    "jurusan": "Teknik Informatika",
    "usia": 20
}
print("Dictionary mahasiswa:", mahasiswa)

# Mengakses nilai dengan key
print("\\nMengakses nilai dengan key:")
print("Nama:", mahasiswa["nama"])
print("NIM:", mahasiswa["nim"])

# Mengakses dengan get() (lebih aman)
print("\\nMengakses dengan get():")
print("Jurusan:", mahasiswa.get("jurusan"))
print("IPK:", mahasiswa.get("ipk", "Data tidak tersedia"))  # Default jika key tidak ada

# Mengubah nilai
print("\\nMengubah nilai:")
mahasiswa["usia"] = 21
print("Setelah mengubah usia:", mahasiswa)

# Menambah pasangan key-value baru
mahasiswa["ipk"] = 3.75
print("Setelah menambah IPK:", mahasiswa)

# Menghapus item
print("\\nMenghapus item:")
del mahasiswa["usia"]
print("Setelah menghapus usia:", mahasiswa)

# Dictionary methods
print("\\nDictionary methods:")
print("Keys:", list(mahasiswa.keys()))
print("Values:", list(mahasiswa.values()))
print("Items:", list(mahasiswa.items()))

# Looping dictionary
print("\\nLooping dictionary:")
for key in mahasiswa:
    print(f"{key}: {mahasiswa[key]}")

print("\\nLooping items:")
for key, value in mahasiswa.items():
    print(f"{key}: {value}")

# Nested dictionary
print("\\nNested dictionary:")
kampus = {
    "fakultas": {
        "FTIK": ["Informatika", "Sistem Informasi"],
        "FTI": ["Teknik Elektro", "Teknik Mesin"]
    },
    "alamat": "Jl. Pendidikan No. 1"
}
print("Kampus:", kampus)
print("Prodi di FTIK:", kampus["fakultas"]["FTIK"])`}
                    language="python"
                  />

                  <InfoBox type="tip">
                    <p>
                      List dan dictionary adalah dua struktur data yang paling
                      sering digunakan di Python. List digunakan untuk menyimpan
                      koleksi data terurut, sedangkan dictionary digunakan untuk
                      menyimpan data dalam format key-value.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 8,
              title: 'Menggunakan Modul Python',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Modul Python adalah file yang berisi definisi dan pernyataan
                    Python. Modul memungkinkan kita untuk mengorganisir kode
                    dalam file terpisah yang dapat digunakan kembali.
                  </p>

                  <p className="text-gray-700">
                    Mari kita membuat modul Python sederhana dan menggunakannya
                    dalam program lain.
                  </p>

                  <CodeBlock
                    title="my_module.py"
                    code={`# Modul matematika sederhana

# Variabel dalam modul
pi = 3.14159

# Fungsi untuk menghitung luas lingkaran
def hitung_luas_lingkaran(radius):
    return pi * radius * radius

# Fungsi untuk menghitung keliling lingkaran
def hitung_keliling_lingkaran(radius):
    return 2 * pi * radius

# Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
def fahrenheit_ke_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9`}
                    language="python"
                  />

                  <p className="text-gray-700">
                    Sekarang, mari kita buat program yang menggunakan modul
                    tersebut:
                  </p>

                  <CodeBlock
                    title="use_module.py"
                    code={`# Mengimpor modul yang telah kita buat
import my_module

# Menggunakan variabel dari modul
print(f"Nilai Pi: {my_module.pi}")

# Menggunakan fungsi dari modul
radius = 5
luas = my_module.hitung_luas_lingkaran(radius)
keliling = my_module.hitung_keliling_lingkaran(radius)

print(f"Lingkaran dengan radius {radius}")
print(f"Luas: {luas:.2f}")
print(f"Keliling: {keliling:.2f}")

# Mengimpor fungsi tertentu dari modul
from my_module import celsius_ke_fahrenheit, fahrenheit_ke_celsius

# Menggunakan fungsi yang diimpor
celsius = 25
fahrenheit = celsius_ke_fahrenheit(celsius)
print(f"\\n{celsius}°C = {fahrenheit:.2f}°F")

fahrenheit = 98.6
celsius = fahrenheit_ke_celsius(fahrenheit)
print(f"{fahrenheit}°F = {celsius:.2f}°C")

# Mengimpor semua dari modul (umumnya tidak disarankan)
# from my_module import *

# Mengimpor modul dengan alias
import my_module as mm
print(f"\\nMenggunakan alias: Pi = {mm.pi}")`}
                    language="python"
                  />

                  <InfoBox type="info">
                    <p>Ada beberapa cara untuk mengimpor modul di Python:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <code>import modul</code> - Mengimpor seluruh modul
                      </li>
                      <li>
                        <code>from modul import fungsi</code> - Mengimpor fungsi
                        tertentu dari modul
                      </li>
                      <li>
                        <code>from modul import *</code> - Mengimpor semua dari
                        modul (tidak disarankan)
                      </li>
                      <li>
                        <code>import modul as alias</code> - Mengimpor modul
                        dengan alias
                      </li>
                    </ul>
                  </InfoBox>

                  <InfoBox type="tip">
                    <p>
                      Python juga memiliki banyak modul bawaan yang dapat Anda
                      gunakan, seperti:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <code>math</code> - Fungsi matematika
                      </li>
                      <li>
                        <code>random</code> - Menghasilkan angka acak
                      </li>
                      <li>
                        <code>datetime</code> - Bekerja dengan tanggal dan waktu
                      </li>
                      <li>
                        <code>os</code> - Berinteraksi dengan sistem operasi
                      </li>
                      <li>
                        <code>sys</code> - Fungsi dan variabel yang digunakan
                        oleh interpreter
                      </li>
                    </ul>
                  </InfoBox>

                  <CodeBlock
                    title="built_in_modules.py"
                    code={`# Menggunakan modul bawaan Python
import math
import random
import datetime
import os

# Menggunakan math module
print("Modul math:")
print(f"Nilai Pi: {math.pi}")
print(f"Akar kuadrat dari 16: {math.sqrt(16)}")
print(f"Cos(0): {math.cos(0)}\\n")

# Menggunakan random module
print("Modul random:")
print(f"Angka acak antara 1 dan 10: {random.randint(1, 10)}")
print(f"Pilihan acak dari list: {random.choice(['apel', 'jeruk', 'mangga'])}\\n")

# Menggunakan datetime module
print("Modul datetime:")
today = datetime.datetime.now()
print(f"Tanggal dan waktu saat ini: {today}")
print(f"Hanya tanggal: {today.date()}")
print(f"Hanya waktu: {today.time()}\\n")

# Menggunakan os module
print("Modul os:")
print(f"Direktori saat ini: {os.getcwd()}")
print(f"List file dalam direktori: {os.listdir()[:5]}")  # Menampilkan 5 item pertama`}
                    language="python"
                  />
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
            Setelah menyelesaikan semua langkah praktikum, kalian seharusnya
            telah:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Mengenal dasar-dasar bahasa pemrograman Python</li>
            <li>Menggunakan variabel, tipe data, dan operator</li>
            <li>
              Mengimplementasikan struktur kendali seperti if-else dan loops
            </li>
            <li>Membuat dan menggunakan fungsi</li>
            <li>Bekerja dengan struktur data list dan dictionary</li>
            <li>Menangani file dan exception</li>
            <li>
              Mengembangkan aplikasi sederhana (Todo List) menggunakan konsep
              OOP
            </li>
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
              <li>
                Buat repository dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_web_itera_[NIM]
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_web_itera_119140001
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Struktur Folder:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Buat folder per pertemuan dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  [NAMA]_[NIM]_pertemuan[X]
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  johndoe_119140001_pertemuan4
                </code>
              </li>
              <li>
                Setiap folder berisi semua file praktikum dan tugas untuk
                pertemuan tersebut
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Deadline Pengumpulan:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Deadline:{' '}
                <span className="font-medium">
                  Minggu, 27 April 2025, pukul 23:59 WIB
                </span>
              </li>
              <li>
                Keterlambatan pengumpulan akan dikenakan pengurangan nilai
                sebesar 10% per hari
              </li>
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
            Untuk menguji pemahaman kalian, kerjakan tugas berikut:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tugas:
              </h3>
              <ol className="pl-6 space-y-2 text-gray-700 list-decimal">
                <li>
                  Buatlah program penghitung BMI (Body Mass Index) sederhana:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Buatlah variabel untuk menyimpan berat badan (kg) dan
                      tinggi badan (m)
                    </li>
                    <li>
                      Hitung BMI dengan rumus: BMI = berat / (tinggi * tinggi)
                    </li>
                    <li>
                      Gunakan percabangan if-elif-else untuk menampilkan
                      kategori BMI:
                      <ul className="list-disc pl-6 mt-1">
                        <li>BMI &lt; 18.5: Berat badan kurang</li>
                        <li>18.5 &lt;= BMI &lt; 25: Berat badan normal</li>
                        <li>25 &lt;= BMI &lt; 30: Berat badan berlebih</li>
                        <li>BMI &gt;= 30: Obesitas</li>
                      </ul>
                    </li>
                    <li>Print hasil perhitungan dan kategori BMI</li>
                  </ul>
                  <p className="mt-2 text-gray-600 text-sm">
                    <strong>Bobot:</strong> 30% dari nilai tugas
                  </p>
                </li>
                <li>
                  Buatlah program pengelolaan data nilai mahasiswa:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Buat list berisi minimal 5 dictionary data mahasiswa
                      (nama, nim, nilai_uts, nilai_uas, nilai_tugas)
                    </li>
                    <li>
                      Hitung nilai akhir setiap mahasiswa dengan rumus: (30% UTS
                      + 40% UAS + 30% Tugas)
                    </li>
                    <li>
                      Tentukan grade setiap mahasiswa berdasarkan nilai akhir:
                      <ul className="list-disc pl-6 mt-1">
                        <li>A: nilai akhir 80 atau lebih</li>
                        <li>B: nilai akhir 70 sampai 79</li>
                        <li>C: nilai akhir 60 sampai 69</li>
                        <li>D: nilai akhir 50 sampai 59</li>
                        <li>E: nilai akhir kurang dari 50</li>
                      </ul>
                    </li>
                    <li>
                      Tampilkan data mahasiswa lengkap dengan nilai akhir dan
                      grade dalam format tabel
                    </li>
                    <li>
                      Tampilkan mahasiswa dengan nilai tertinggi dan terendah
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-600 text-sm">
                    <strong>Bobot:</strong> 40% dari nilai tugas
                  </p>
                </li>
                <li>
                  Buatlah modul matematika Python dan program yang
                  menggunakannya:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Buat file <code>math_operations.py</code> yang berisi:
                      <ul className="list-disc pl-6 mt-1">
                        <li>
                          Fungsi untuk menghitung luas dan keliling bentuk
                          geometri (minimal 3 bentuk: persegi, persegi panjang,
                          lingkaran)
                        </li>
                        <li>
                          Fungsi untuk konversi suhu (minimal 2 konversi:
                          Celsius-Fahrenheit, Celsius-Kelvin)
                        </li>
                        <li>
                          Minimal 1 variabel konstanta (misal: PI = 3.14159)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Buat file <code>main.py</code> yang:
                      <ul className="list-disc pl-6 mt-1">
                        <li>
                          Mengimpor modul <code>math_operations</code> yang
                          telah dibuat
                        </li>
                        <li>
                          Menggunakan semua fungsi dari modul tersebut dengan
                          berbagai nilai input
                        </li>
                        <li>
                          Menampilkan hasil perhitungan dengan format yang rapi
                        </li>
                        <li>
                          Menggunakan minimal 2 cara berbeda untuk mengimpor
                          modul/fungsi
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-600 text-sm">
                    <strong>Bobot:</strong> 30% dari nilai tugas
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <SubmissionLink
            title="Submit Tugas Praktikum Python"
            href="https://forms.gle/qM3Xj8HVqFp7mQKX8"
          ></SubmissionLink>
        </div>
      </SectionWrapper>
    </PraktikumLayout>
  );
}
