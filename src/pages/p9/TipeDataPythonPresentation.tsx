import React from 'react';
import { Code, Database, List, Hash, Braces, ToggleLeft, Box, Type, Package, BookOpen } from 'lucide-react';

export const TipeDataPythonPresentation: React.FC = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Slide 1: Judul Tipe Data */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                        Tipe Data dalam Python
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <Database size={28} className="text-blue-500 mr-3" />
                        <span>Memahami struktur data fundamental yang menjadi landasan pemrograman Python</span>
                    </div>
                </header>

                {/* Slide 2: Pengenalan Tipe Data */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Type size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tipe Data dalam Python</h2>
                            <p className="text-gray-700 mb-4">
                                Python adalah bahasa dengan tipe data dinamis, artinya Anda tidak perlu mendeklarasikan tipe variabel secara eksplisit. Tipe data akan ditentukan secara otomatis saat program dijalankan.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <p className="text-gray-700">
                                    Python memiliki beragam tipe data built-in yang terintegrasi dengan bahasa, memungkinkan pengembang untuk memanipulasi berbagai jenis data dengan mudah dan efisien.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 3: Tipe Data None dan Boolean */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <ToggleLeft size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">None dan Boolean</h2>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">None</h3>
                                    <p className="text-gray-700 mb-3">
                                        Merepresentasikan ketiadaan nilai atau nilai null. Ini adalah tipe data untuk objek NoneType.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh penggunaan None
result = None
print(result)  # Output: None
print(type(result))  # Output: <class 'NoneType'>

# Memeriksa None dengan identity operator
if result is None:
    print("Nilai adalah None")
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Boolean</h3>
                                    <p className="text-gray-700 mb-3">
                                        Tipe data yang menyatakan nilai kebenaran: True atau False. Digunakan untuk operasi logika.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh penggunaan Boolean
is_active = True
has_permission = False

# Operasi logika
can_access = is_active and has_permission
print(can_access)  # Output: False

# Konversi ke Boolean
print(bool(0))     # Output: False
print(bool(1))     # Output: True
print(bool(""))    # Output: False
print(bool("text"))  # Output: True
`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 4: Tipe Data Numerik */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Hash size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tipe Data Numerik</h2>
                            <p className="text-gray-700 mb-4">
                                Python mendukung berbagai tipe data numerik untuk merepresentasikan bilangan dalam berbagai bentuk.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Integer (int)</h3>
                                    <p className="text-gray-700 mb-3">
                                        Bilangan bulat tanpa desimal, bisa positif atau negatif, dengan presisi tak terbatas.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh integer
a = 10
b = -5
besar = 10**100  # Integer sangat besar
print(type(a))  # Output: <class 'int'>

# Sistem bilangan
biner = 0b1010   # 10 dalam biner
oktal = 0o12     # 10 dalam oktal
heksa = 0xA      # 10 dalam heksadesimal
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Float</h3>
                                    <p className="text-gray-700 mb-3">
                                        Bilangan desimal untuk merepresentasikan angka real dengan presisi terbatas.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh float
x = 3.14
y = -0.001
z = 2e3      # Notasi saintifik: 2000.0
print(type(x))  # Output: <class 'float'>

# Pembulatan
print(round(3.14159, 2))  # Output: 3.14

# Batas presisi
print(0.1 + 0.2)  # Output: 0.30000000000000004
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Complex</h3>
                                    <p className="text-gray-700 mb-3">
                                        Bilangan kompleks dengan bagian real dan imajiner, ditulis dengan j atau J sebagai unit imajiner.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh bilangan kompleks
c1 = 3 + 4j
c2 = complex(2, -3)
print(type(c1))  # Output: <class 'complex'>

# Bagian real dan imajiner
print(c1.real)   # Output: 3.0
print(c1.imag)   # Output: 4.0

# Operasi kompleks
print(c1 * c2)   # Output: (18+5j)
`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 5: Tipe Data Sequence */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <List size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tipe Data Sequence</h2>
                            <p className="text-gray-700 mb-4">
                                Tipe data sequence adalah kumpulan data yang dapat diakses berdasarkan indeks urutan. Python memiliki tiga tipe sequence utama.
                            </p>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">String (str)</h3>
                                    <p className="text-gray-700 mb-3">
                                        Urutan karakter yang digunakan untuk merepresentasikan teks, tidak dapat diubah (immutable).
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh string
s1 = "Hello, World!"
s2 = 'Python'
s3 = """String multi-baris
dapat dibuat dengan
tiga tanda kutip"""

# Operasi string
print(len(s1))        # Output: 13
print(s1[0])          # Output: H
print(s1[7:12])       # Output: World
print(s1 + " " + s2)  # Output: Hello, World! Python

# String methods
print(s1.upper())     # Output: HELLO, WORLD!
print(s2.replace('P', 'J'))  # Output: Jython
print(" python ".strip())    # Output: python

# Format string
nama = "Alice"
umur = 25
print(f"{nama} berusia {umur} tahun")  # Output: Alice berusia 25 tahun
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-1 gap-6 mt-6">
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2 text-blue-700">List</h3>
                                        <p className="text-gray-700 mb-3">
                                            Koleksi berurutan yang dapat diubah (mutable) dan dapat menyimpan berbagai tipe data.
                                        </p>
                                        <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                            <pre>
                                                {`# Contoh list
buah = ["apel", "pisang", "jeruk"]
campuran = [1, "dua", 3.0, [4, 5]]

# Mengakses dan memodifikasi
print(buah[1])        # Output: pisang
buah[0] = "mangga"    # Mengubah item
buah.append("anggur") # Menambah item
print(buah)           # Output: ['mangga', 'pisang', 'jeruk', 'anggur']

# Operasi list
print(len(buah))      # Output: 4
print(buah + ["durian"])  # Output: ['mangga', 'pisang', 'jeruk', 'anggur', 'durian']
print(buah[1:3])      # Output: ['pisang', 'jeruk']

# List comprehension
angka = [1, 2, 3, 4, 5]
kuadrat = [x**2 for x in angka]
print(kuadrat)        # Output: [1, 4, 9, 16, 25]
`}
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2 text-blue-700">Tuple</h3>
                                        <p className="text-gray-700 mb-3">
                                            Koleksi berurutan yang tidak dapat diubah (immutable), lebih cepat dan aman dari list.
                                        </p>
                                        <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                            <pre>
                                                {`# Contoh tuple
koordinat = (10, 20)
rgb = (255, 0, 0)
singleton = (42,)  # Tuple dengan satu elemen perlu koma

# Mengakses (tidak bisa dimodifikasi)
print(koordinat[0])   # Output: 10
# koordinat[0] = 5   # Error: 'tuple' object does not support item assignment

# Unpacking
x, y = koordinat
print(f"x = {x}, y = {y}")  # Output: x = 10, y = 20

# Tuple methods
numbers = (1, 2, 2, 3, 4, 2)
print(numbers.count(2))  # Output: 3
print(numbers.index(3))  # Output: 3
`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 6: Set dan Dictionary */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Braces size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Set dan Dictionary</h2>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Set</h3>
                                    <p className="text-gray-700 mb-3">
                                        Koleksi tidak berurutan dari item unik, mendukung operasi matematika seperti union dan intersection.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh set
buah = {"apel", "pisang", "jeruk"}
angka = {1, 2, 3, 4, 5}

# Set otomatis menghilangkan duplikat
duplikat = {1, 2, 2, 3, 3, 3}
print(duplikat)  # Output: {1, 2, 3}

# Operasi set
buah.add("mangga")  # Menambah item
buah.remove("pisang")  # Menghapus item
print("apel" in buah)  # Output: True

# Operasi matematika set
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(set1.union(set2))          # Output: {1, 2, 3, 4, 5, 6}
print(set1.intersection(set2))   # Output: {3, 4}
print(set1.difference(set2))     # Output: {1, 2}
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Dictionary</h3>
                                    <p className="text-gray-700 mb-3">
                                        Koleksi pasangan kunci-nilai tidak berurutan, digunakan untuk struktur data yang menghubungkan objek dengan objek lain.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh dictionary
siswa = {
    "nama": "Alice",
    "umur": 20,
    "jurusan": "Informatika",
    "aktif": True
}

# Mengakses dan memodifikasi
print(siswa["nama"])     # Output: Alice
siswa["umur"] = 21       # Mengubah nilai
siswa["alamat"] = "Jakarta"  # Menambah key-value baru

# Method dictionary
print(siswa.keys())      # Output: dict_keys(['nama', 'umur', 'jurusan', 'aktif', 'alamat'])
print(siswa.values())    # Output: dict_values(['Alice', 21, 'Informatika', True, 'Jakarta'])
print(siswa.get("hobi", "Tidak ada"))  # Output: Tidak ada (default jika key tidak ada)

# Dictionary comprehension
angka = {x: x**2 for x in range(5)}
print(angka)             # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 7: Tipe Data Biner */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Box size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tipe Data Biner</h2>
                            <p className="text-gray-700 mb-4">
                                Python juga menyediakan tipe data biner untuk merepresentasikan urutan byte, berguna untuk manipulasi data biner seperti file dan komunikasi jaringan.
                            </p>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">bytes</h3>
                                    <p className="text-gray-700 mb-3">
                                        Urutan byte immutable, mirip dengan string tetapi untuk data biner.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh bytes
b1 = b"hello"
b2 = bytes([104, 101, 108, 108, 111])  # ASCII untuk "hello"
print(b1 == b2)  # Output: True

# bytes tidak dapat diubah
# b1[0] = 72  # TypeError: 'bytes' object does not support item assignment

# Konversi string ke bytes
text = "Pythön"
encoded = text.encode('utf-8')
print(encoded)  # Output: b'Pyth\\xc3\\xb6n'
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">bytearray</h3>
                                    <p className="text-gray-700 mb-3">
                                        Serupa dengan bytes tetapi dapat diubah (mutable), memungkinkan modifikasi konten.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh bytearray
ba = bytearray(b"hello")
print(ba)  # Output: bytearray(b'hello')

# bytearray dapat diubah
ba[0] = 72  # Mengubah 'h' menjadi 'H'
print(ba)  # Output: bytearray(b'Hello')

# Menambah ke bytearray
ba.extend(b" world")
print(ba)  # Output: bytearray(b'Hello world')
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">memoryview</h3>
                                    <p className="text-gray-700 mb-3">
                                        Menyediakan akses ke buffer memori internal objek tanpa menyalin data.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Contoh memoryview
data = bytearray(b"Python")
view = memoryview(data)
print(view.tolist())  # Output: [80, 121, 116, 104, 111, 110]

# Modifikasi melalui view
view[0] = 74  # Mengubah 'P' menjadi 'J'
print(data)  # Output: bytearray(b'Jython')

# Slicing lebih efisien
print(view[1:4].tobytes())  # Output: b'yth'
`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 8: Konversi Tipe Data */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konversi Tipe Data</h2>
                            <p className="text-gray-700 mb-4">
                                Python menyediakan fungsi bawaan untuk mengkonversi antara berbagai tipe data. Ini memungkinkan fleksibilitas dalam manipulasi data.
                            </p>
                            <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                <pre>
                                    {`# Konversi tipe data numerik
print(int(5.7))      # Output: 5
print(float(5))      # Output: 5.0
print(complex(3, 4)) # Output: (3+4j)

# Konversi ke dan dari string
print(str(42))       # Output: "42"
print(int("42"))     # Output: 42
print(float("3.14")) # Output: 3.14

# Konversi koleksi
my_list = [1, 2, 3, 4]
print(tuple(my_list))   # Output: (1, 2, 3, 4)
print(set(my_list))     # Output: {1, 2, 3, 4}
print(list("Python"))   # Output: ['P', 'y', 't', 'h', 'o', 'n']

# Dictionary dari pasangan key-value
print(dict([("a", 1), ("b", 2)]))  # Output: {'a': 1, 'b': 2}

# Konversi ke Boolean
print(bool(0))   # Output: False
print(bool(42))  # Output: True
print(bool(""))  # Output: False
print(bool("0")) # Output: True (string non-kosong)

# Konversi byte
text = "Python"
print(bytes(text, 'utf-8'))       # Output: b'Python'
print(bytearray(text, 'utf-8'))   # Output: bytearray(b'Python')
`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 9: Pemeriksaan Tipe Data */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Database size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pemeriksaan Tipe Data</h2>
                            <p className="text-gray-700 mb-4">
                                Python menyediakan beberapa cara untuk memeriksa tipe data dari suatu objek, yang sangat berguna untuk pemrograman dinamis.
                            </p>
                            <div className="grid md:grid-cols-1 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Fungsi type()</h3>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Menggunakan fungsi type()
print(type(42))            # Output: <class 'int'>
print(type(3.14))          # Output: <class 'float'>
print(type("Hello"))       # Output: <class 'str'>
print(type([1, 2, 3]))     # Output: <class 'list'>
print(type({"a": 1}))      # Output: <class 'dict'>

# Membandingkan tipe
x = 42
print(type(x) is int)      # Output: True
print(type(x) == float)    # Output: False
`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">Fungsi isinstance()</h3>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                        <pre>
                                            {`# Menggunakan isinstance() - lebih baik untuk inheritance
x = 42
print(isinstance(x, int))       # Output: True
print(isinstance(x, (int, float)))  # Output: True (multiple types)

# Inheritance checking
class Animal:
    pass

class Dog(Animal):
    pass

fido = Dog()
print(isinstance(fido, Dog))     # Output: True
print(isinstance(fido, Animal))  # Output: True (inheritance)
`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2 text-blue-700">Duck Typing</h3>
                                <p className="text-gray-700 mb-3">
                                    Python mendukung duck typing: "Jika berjalan seperti bebek dan bersuara seperti bebek, maka itu adalah bebek". Artinya, Python lebih peduli pada perilaku objek daripada tipe eksplisitnya.
                                </p>
                                <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                    <pre>
                                        {`def cetak_panjang(objek):
    try:
        # Tidak peduli tipe objek, selama memiliki len()
        print(f"Panjang: {len(objek)}")
    except (TypeError, AttributeError):
        print("Objek tidak memiliki panjang")

# Berfungsi untuk berbagai tipe dengan metode len()
cetak_panjang("Python")    # Output: Panjang: 6
cetak_panjang([1, 2, 3])   # Output: Panjang: 3
cetak_panjang({"a": 1})    # Output: Panjang: 1
cetak_panjang(42)          # Output: Objek tidak memiliki panjang
`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 10: Tipe Data Khusus dalam Standard Library */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Package size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tipe Data Khusus dalam Standard Library</h2>
                            <p className="text-gray-700 mb-4">
                                Python memiliki berbagai modul standar yang mengimplementasikan tipe data khusus untuk kasus penggunaan tertentu.
                            </p>
                            <div className="flex flex-col gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2 text-blue-700">collections</h3>
                                    <p className="text-gray-700 mb-3">
                                        Modul yang menyediakan tipe data kontainer alternatif seperti namedtuple, defaultdict, Counter, dan deque.
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg ">
                                        <pre>{`# Contoh penggunaan collections
from collections import namedtuple, defaultdict, Counter, deque

# Namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, y=20)
print(p.x, p.y)  # Output: 10 20

# Defaultdict
word_counts = defaultdict(int)
for word in ['apple', 'banana', 'apple', 'orange']:
    word_counts[word] += 1
print(word_counts)  # Output: defaultdict(<class 'int'>, {'apple': 2, 'banana': 1, 'orange': 1})

# Counter
counts = Counter(['apple', 'banana', 'apple', 'orange'])
print(counts)  # Output: Counter({'apple': 2, 'banana': 1, 'orange': 1})

# Deque
d = deque([1, 2, 3])
d.appendleft(0)
d.append(4)
print(d)  # Output: deque([0, 1, 2, 3, 4])
`}
                                        </pre>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2 text-blue-700">datetime</h3>
                                        <p className="text-gray-700 mb-3">
                                            Modul untuk bekerja dengan tanggal dan waktu, termasuk date, time, datetime, dan timedelta.
                                        </p>
                                        <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                            <pre>
                                                {`# Contoh penggunaan datetime
from datetime import date, datetime, timedelta

# Date
today = date.today()
print(today)  # Output: 2023-11-15 (contoh)
print(today.year, today.month, today.day)

# Datetime
now = datetime.now()
print(now)  # Output: 2023-11-15 14:30:45.123456 (contoh)

# Timedelta
one_week = timedelta(days=7)
next_week = today + one_week
print(next_week)  # Output: 2023-11-22 (contoh)
`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 grid md:grid-cols-1 gap-6">
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2 text-blue-700">enum</h3>
                                        <p className="text-gray-700 mb-3">
                                            Mendukung pembuatan enumerasi dengan nama dan nilai yang tetap.
                                        </p>
                                        <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                            <pre>
                                                {`# Contoh penggunaan enum
from enum import Enum, auto

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Color.RED)        # Output: Color.RED
print(Color.RED.value)  # Output: 1

# Enum otomatis
class Status(Enum):
    PENDING = auto()
    RUNNING = auto()
    COMPLETED = auto()

print(Status.RUNNING.value)  # Output: 2
`}
                                            </pre>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2 text-blue-700">typing</h3>
                                        <p className="text-gray-700 mb-3">
                                            Mendukung type hints untuk dokumentasi dan pemeriksaan statis.
                                        </p>
                                        <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto">
                                            <pre>
                                                {`# Contoh penggunaan typing
from typing import List, Dict, Tuple, Optional

def process_items(
    items: List[str],
    counts: Dict[str, int],
    limits: Tuple[int, int],
    flag: Optional[bool] = None
) -> int:
    """Contoh fungsi dengan type hints"""
    return len(items) + sum(counts.values())

# Type aliases
Vector = List[float]
Matrix = List[Vector]

def scale(scalar: float, vector: Vector) -> Vector:
    return [scalar * num for num in vector]
`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 11: Kesimpulan */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Database size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                                    <li>Python memiliki sistem tipe data yang dinamis namun kuat</li>
                                    <li>Tipe data built-in mencakup numerik, sequence, mapping, dan biner</li>
                                    <li>Setiap tipe data memiliki karakteristik dan kegunaan khusus</li>
                                    <li>Python mendukung konversi antar tipe data secara fleksibel</li>
                                    <li>Standard library menyediakan tipe data khusus untuk berbagai kebutuhan</li>
                                    <li>Pemahaman mendalam tentang tipe data penting untuk menulis kode Python yang efektif</li>
                                </ul>
                            </div>
                            <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="font-semibold text-lg mb-2 text-yellow-700">Tips Praktis</h3>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Gunakan tipe data yang tepat untuk kebutuhan spesifik</li>
                                    <li>Pahami perbedaan antara mutable dan immutable types</li>
                                    <li>Manfaatkan type hints untuk dokumentasi yang lebih baik</li>
                                    <li>Pelajari tipe data khusus di standard library untuk kasus penggunaan tertentu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 12: Referensi */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <BookOpen size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Referensi</h2>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Python Documentation: <a href="https://docs.python.org/3/library/stdtypes.html" className="text-blue-600 hover:underline">Built-in Types</a></span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Fluent Python, 2nd Edition by Luciano Ramalho</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Python Cookbook, 3rd Edition by David Beazley and Brian K. Jones</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Effective Python, 2nd Edition by Brett Slatkin</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TipeDataPythonPresentation;

