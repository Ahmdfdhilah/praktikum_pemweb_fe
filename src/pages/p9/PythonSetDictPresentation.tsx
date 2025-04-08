import React from 'react';
import {
  Code,
  Layers,
  Zap,
  Package,
  ArrowRight,
  Database,
  Hash,
  GitMerge,
  Key,
  Check,
  RefreshCw,
} from 'lucide-react';

const PythonSetDictPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            Koleksi Data: Set dan Dictionary
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Database size={28} className="text-purple-500 mr-3" />
            <span>Struktur data unik dan pasangan key-value dalam Python</span>
          </div>
        </header>

        {/* Slide 2: Pengenalan Set dan Dictionary */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers
              size={28}
              className="text-purple-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Struktur Data Non-Sekuensial
              </h2>
              <p className="text-gray-700 mb-4">
                Selain list dan tuple, Python menyediakan struktur data
                non-sekuensial untuk kasus penggunaan yang lebih spesifik.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <Hash size={24} className="text-purple-600 mr-2" />
                    <h3 className="font-semibold text-lg text-purple-700">
                      Set
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Koleksi{' '}
                    <span className="font-bold text-purple-600">
                      tidak berurutan
                    </span>{' '}
                    dengan item{' '}
                    <span className="font-bold text-purple-600">unik</span>.
                    Ideal untuk menghilangkan duplikasi dan uji keanggotaan.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg text-sm">
                    <code>fruits = {"{'apple', 'banana', 'orange'}"}</code>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <Key size={24} className="text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg text-blue-700">
                      Dictionary
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Koleksi pasangan{' '}
                    <span className="font-bold text-blue-600">key-value</span>{' '}
                    yang tidak berurutan. Menyimpan data dengan pengidentifikasi
                    unik.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg text-sm">
                    <code>user = {"{'name': 'Budi', 'age': 25}"}</code>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-700 flex items-center">
                    <Check size={18} className="text-purple-600 mr-2" />
                    Karakteristik Set
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Tidak berurutan (tidak ada indeks)</li>
                    <li>• Menghilangkan duplikasi secara otomatis</li>
                    <li>• Mutable (dapat diubah)</li>
                    <li>• Item harus hashable (immutable)</li>
                    <li>• Pencarian sangat cepat O(1)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
                    <Check size={18} className="text-blue-600 mr-2" />
                    Karakteristik Dictionary
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Pasangan key-value</li>
                    <li>• Key harus unik dan hashable</li>
                    <li>• Value dapat berupa tipe data apapun</li>
                    <li>• Akses cepat berdasarkan key O(1)</li>
                    <li>• Menyimpan urutan insersi (Python 3.7+)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Membuat dan Mengakses Set dan Dictionary */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code
              size={28}
              className="text-purple-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Membuat dan Mengakses
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700 border-b pb-2">
                    Set
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# Membuat set
angka = {1, 2, 3, 2, 1}  # {1, 2, 3}

# Set kosong (harus pakai set())
empty_set = set()  # {} adalah dict kosong

# Dari iterable lain
list_to_set = set([1, 2, 2, 3, 3])  # {1, 2, 3}

# Set comprehension
squares = {x**2 for x in range(5)}  # {0, 1, 4, 9, 16}

# Cek keanggotaan (sangat cepat!)
print(2 in angka)  # True`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 border-b pb-2">
                    Dictionary
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# Membuat dictionary
person = {"name": "Andi", "age": 30}

# Dict kosong
empty_dict = {}

# Dari pasangan key-value
dict_from_pairs = dict([("a", 1), ("b", 2)])

# Dict comprehension
squares = {x: x**2 for x in range(5)}

# Akses nilai dengan key
print(person["name"])  # "Andi"

# Akses aman dengan get()
print(person.get("email", "N/A"))  # "N/A"`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-purple-100 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">
                    Catatan Penting:
                  </h3>
                  <p className="text-gray-700">
                    Set tidak dapat berisi item mutable seperti list:{' '}
                    <code className="bg-purple-50 px-1 rounded text-sm">
                      {'{1, [2, 3]}'}
                    </code>{' '}
                    akan menghasilkan{' '}
                    <code className="bg-red-50 px-1 rounded text-sm">
                      TypeError
                    </code>
                  </p>
                </div>

                <div className="bg-blue-100 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">
                    Catatan Penting:
                  </h3>
                  <p className="text-gray-700">
                    Key dalam dictionary harus immutable: string, angka, tuple -
                    tetapi tidak list
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Operasi pada Set */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Hash
              size={28}
              className="text-purple-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Operasi pada Set
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700 flex items-center">
                    <RefreshCw size={20} className="text-purple-600 mr-2" />
                    Modifikasi Set
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`fruits = {"apple", "banana", "orange"}

# Menambah satu item
fruits.add("mango")

# Menambah banyak item
fruits.update(["grape", "kiwi"])

# Menghapus item (error jika tidak ada)
fruits.remove("banana")

# Menghapus jika ada (aman)
fruits.discard("pear")

# Mengambil & menghapus item acak
item = fruits.pop()

# Menghapus semua item
fruits.clear()`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-700 flex items-center">
                    <GitMerge size={20} className="text-purple-600 mr-2" />
                    Operasi Himpunan
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Union (gabungan)
print(A | B)  # {1, 2, 3, 4, 5, 6}
# atau A.union(B)

# Intersection (irisan)
print(A & B)  # {3, 4}
# atau A.intersection(B)

# Difference (selisih)
print(A - B)  # {1, 2}
# atau A.difference(B)

# Symmetric Difference
print(A ^ B)  # {1, 2, 5, 6}
# atau A.symmetric_difference(B)`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-purple-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-700">
                      Ilustrasi Operasi Set
                    </h3>
                    <div className="bg-white p-4 rounded border border-purple-200 text-center">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-800">
                          <div className="font-bold mb-1">Set A</div>
                          <div className="text-sm">{'{1, 2, 3, 4}'}</div>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-800">
                          <div className="font-bold mb-1">Set B</div>
                          <div className="text-sm">{'{3, 4, 5, 6}'}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-100 p-3 rounded-lg text-green-800">
                          <div className="font-bold mb-1">
                            A ∩ B (Intersection)
                          </div>
                          <div className="text-sm">{'{3, 4}'}</div>
                        </div>
                        <div className="bg-amber-100 p-3 rounded-lg text-amber-800">
                          <div className="font-bold mb-1">A ∪ B (Union)</div>
                          <div className="text-sm">{'{1, 2, 3, 4, 5, 6}'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-700">
                      Contoh Penggunaan Praktis
                    </h3>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                      <pre>
                        {`# Menghilangkan duplikat dalam list
data = [1, 2, 3, 2, 1, 4, 5, 4]
unique_data = list(set(data))  # [1, 2, 3, 4, 5]

# Menemukan item unik di beberapa list
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

# Item yang ada di kedua list
common = set(list1) & set(list2)  # {3, 4}

# Item yang hanya ada di list1
only_in_list1 = set(list1) - set(list2)  # {1, 2}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Operasi pada Dictionary */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Key size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Operasi pada Dictionary
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
                    <RefreshCw size={20} className="text-blue-600 mr-2" />
                    Modifikasi Dictionary
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`user = {"name": "Andi", "age": 30}

# Menambah/mengubah pasangan key-value
user["email"] = "andi@example.com"
user["age"] = 31

# Menambah banyak pasangan
user.update({"phone": "123456", "city": "Jakarta"})

# Menghapus pasangan (error jika key tidak ada)
del user["email"]

# Mengambil & menghapus pasangan (dengan default)
phone = user.pop("phone", "N/A")

# Menghapus & return pasangan terakhir (Python 3.7+)
last_item = user.popitem()

# Menghapus semua pasangan
user.clear()`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
                    <GitMerge size={20} className="text-blue-600 mr-2" />
                    Iterasi dan Akses
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`grades = {"Andi": 85, "Budi": 90, "Cindy": 78}

# Iterasi key (default)
for name in grades:
    print(name)

# Iterasi values
for score in grades.values():
    print(score)

# Iterasi key-value pairs
for name, score in grades.items():
    print(f"{name}: {score}")

# Mengakses semua keys dan values
names = list(grades.keys())  # ["Andi", "Budi", "Cindy"]
scores = list(grades.values())  # [85, 90, 78]`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-700">
                      Dictionary Nested
                    </h3>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                      <pre>
                        {`# Dictionary dengan struktur bersarang
students = {
    "A001": {
        "name": "Andi",
        "courses": {"math": 85, "physics": 90}
    },
    "A002": {
        "name": "Budi",
        "courses": {"math": 78, "physics": 85}
    }
}

# Akses data bersarang
math_score = students["A001"]["courses"]["math"]
print(math_score)  # 85

# Update data bersarang
students["A001"]["courses"]["math"] = 88`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-700">
                      Kasus Penggunaan Praktis
                    </h3>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                      <pre>
                        {`# Menghitung frekuensi dalam list
words = ["apple", "banana", "apple", "orange", "banana"]

# Cara simpel menghitung frekuensi
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

print(freq)  # {'apple': 2, 'banana': 2, 'orange': 1}

# Menggunakan collections.Counter (lebih praktis)
from collections import Counter
count = Counter(words)
print(count)  # Counter({'apple': 2, 'banana': 2, ...})`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Set vs Dictionary */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitMerge
              size={28}
              className="text-purple-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Set vs Dictionary: Kapan Menggunakan?
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">
                        Aspek
                      </th>
                      <th className="border border-gray-300 p-3 text-left text-purple-600">
                        Set
                      </th>
                      <th className="border border-gray-300 p-3 text-left text-blue-600">
                        Dictionary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Tujuan Utama
                      </td>
                      <td className="border border-gray-300 p-3">
                        Menyimpan item unik
                      </td>
                      <td className="border border-gray-300 p-3">
                        Menyimpan pasangan key-value
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Kasus Penggunaan
                      </td>
                      <td className="border border-gray-300 p-3">
                        Menghilangkan duplikat, operasi himpunan
                      </td>
                      <td className="border border-gray-300 p-3">
                        Mapping, lookup cepat, data terstruktur
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Akses Item
                      </td>
                      <td className="border border-gray-300 p-3">
                        Hanya uji keanggotaan (in)
                      </td>
                      <td className="border border-gray-300 p-3">
                        Langsung via key
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">
                        Contoh
                      </td>
                      <td className="border border-gray-300 p-3">
                        Daftar kategori, filter duplikat
                      </td>
                      <td className="border border-gray-300 p-3">
                        Profil pengguna, konfigurasi, counter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">
                    Gunakan Set Ketika:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Perlu menyimpan koleksi item unik</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>
                        Melakukan operasi himpunan (union, intersection)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Hanya perlu cek keanggotaan (in) dengan cepat</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Menghilangkan duplikat dari koleksi lain</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Gunakan Dictionary Ketika:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Perlu memetakan key ke value</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Menyimpan data dengan identifier unik</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Perlu akses cepat berdasarkan key</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Menghitung kemunculan/frekuensi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Ringkasan dan Tips */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap
              size={28}
              className="text-purple-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ringkasan dan Tips
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-700">
                    Key Points: Set
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Koleksi item unik tanpa urutan</span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>
                        Operasi himpunan yang cepat (union, intersection)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Item harus immutable (hashable)</span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-purple-500 mr-2 flex-shrink-0"
                      />
                      <span>Lebih cepat dari list untuk cek keanggotaan</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Key Points: Dictionary
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Struktur key-value untuk akses cepat</span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Key harus unik dan immutable</span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Dapat menyimpan data bersarang (nested)</span>
                    </li>
                    <li className="flex items-center">
                      <Check
                        size={18}
                        className="text-blue-500 mr-2 flex-shrink-0"
                      />
                      <span>Gunakan .get() untuk akses aman</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Tips Praktis
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">
                      Dictionary Lebih Fleksibel
                    </h4>
                    <p className="text-sm text-gray-600">
                      Dictionary dapat menyimpan berbagai tipe data, termasuk
                      set dan dictionary lain
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Set untuk Kecepatan</h4>
                    <p className="text-sm text-gray-600">
                      Gunakan set untuk pencarian keanggotaan yang lebih cepat
                      daripada list
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Collections Module</h4>
                    <p className="text-sm text-gray-600">
                      Gunakan Counter, defaultdict dan OrderedDict untuk kasus
                      khusus
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  Code Snippets Berguna
                </h3>
                <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                  <pre>
                    {`# Set: Menghapus duplikat dari list
data = [1, 2, 3, 1, 2, 4]
unique = list(set(data))  # [1, 2, 3, 4]

# Dict: Menghitung frekuensi dengan get()
words = ["apple", "banana", "apple"]
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

# Dict: Default values dengan defaultdict
from collections import defaultdict
count = defaultdict(int)  # Default: 0
count["apple"] += 1  # Tidak perlu cek keberadaan key`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 8: Aplikasi Dunia Nyata */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Package
              size={28}
              className="text-blue-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Aplikasi Dunia Nyata
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-800">
                    Set: Analisis Pengunjung Web
                  </h3>
                  <div className="bg-white p-4 rounded-lg mb-3">
                    <p className="text-gray-700 text-sm">
                      Set sangat berguna untuk menyimpan data unik seperti
                      pengunjung website dan melakukan analisis overlapping
                      visitor.
                    </p>
                  </div>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Pengunjung halaman website
page_a_visitors = {"user1", "user2", "user3", "user4"}
page_b_visitors = {"user2", "user3", "user5", "user6"}

# Siapa yang mengunjungi kedua halaman?
both_pages = page_a_visitors & page_b_visitors
print(both_pages)  # {'user2', 'user3'}

# Berapa total pengunjung unik?
unique_visitors = page_a_visitors | page_b_visitors
print(len(unique_visitors))  # 6`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">
                    Dictionary: Sistem Caching
                  </h3>
                  <div className="bg-white p-4 rounded-lg mb-3">
                    <p className="text-gray-700 text-sm">
                      Dictionary sering digunakan untuk caching data, karena
                      memungkinkan akses cepat berdasarkan key.
                    </p>
                  </div>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                    <pre>
                      {`# Simple cache system menggunakan dictionary
cache = {}

def get_data(key):
    # Cek apakah data ada di cache
    if key in cache:
        print(f"Cache hit for {key}")
        return cache[key]
    
    # Simulasi pengambilan data dari database
    print(f"Cache miss for {key}, fetching data...")
    data = f"Data for {key}"  # Normally from DB/API
    
    # Simpan di cache untuk penggunaan berikutnya
    cache[key] = data
    return data

# Test cache system
print(get_data("user1"))  # Cache miss
print(get_data("user1"))  # Cache hit`}
                    </pre>
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

export default PythonSetDictPresentation;
