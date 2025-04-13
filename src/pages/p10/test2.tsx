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

const PythonAttributePresentation: React.FC = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Slide Judul */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
                        Atribut dan Metode dalam Python OOP
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <Zap size={28} className="text-blue-500 mr-3" />
                        <span>Komponen dasar pemrograman berorientasi objek di Python</span>
                    </div>
                </header>

                {/* Bagian 1: Pengenalan Atribut */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu Atribut dalam Python?</h2>
                            <p className="text-gray-700 mb-6">
                                Atribut adalah komponen data dari sebuah kelas yang mendefinisikan keadaan (state) suatu objek.
                                Dalam Python, atribut sangat fleksibel dan dapat dibuat secara dinamis selama runtime.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                                        <Check size={20} className="text-green-500 mr-2" />
                                        Jenis Atribut
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-blue-700">Atribut Instance</h4>
                                            <p className="text-gray-700">
                                                Milik objek individual, unik untuk setiap instance kelas. Didefinisikan dengan self.nama_atribut.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-700">Atribut Kelas</h4>
                                            <p className="text-gray-700">
                                                Dibagi oleh semua instance kelas. Didefinisikan di luar metode dalam definisi kelas.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Karakteristik Atribut Python</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Dinamis - dapat ditambah/hapus saat runtime</li>
                                        <li>Tidak perlu dideklarasikan di awal</li>
                                        <li>Dapat diakses dengan notasi titik (obj.atribut)</li>
                                        <li>Dapat diakses dengan getattr/setattr/hasattr</li>
                                        <li>Mendukung konsep encapsulation dengan konvensi (_)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8">
                                <CodeExample
                                    title="Contoh Atribut Instance vs Atribut Kelas"
                                    description="Perbedaan antara atribut instance dan atribut kelas"
                                    code={`class Mahasiswa:
    # Atribut kelas
    universitas = "Universitas Indonesia"
    jumlah_mahasiswa = 0
    
    def __init__(self, nama, nim):
        # Atribut instance
        self.nama = nama
        self.nim = nim
        Mahasiswa.jumlah_mahasiswa += 1

# Membuat instance
mahasiswa1 = Mahasiswa("Budi", "12345")
mahasiswa2 = Mahasiswa("Ani", "67890")

# Akses atribut instance
print(mahasiswa1.nama)  # Output: Budi
print(mahasiswa2.nim)   # Output: 67890

# Akses atribut kelas
print(Mahasiswa.universitas)     # Output: Universitas Indonesia
print(mahasiswa1.universitas)    # Output: Universitas Indonesia
print(Mahasiswa.jumlah_mahasiswa)  # Output: 2`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bagian 2: Property dan Descriptor */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <ArrowRight size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Property dan Descriptor</h2>
                            <p className="text-gray-700 mb-6">
                                Python menyediakan cara canggih untuk mengontrol akses, validasi, dan komputasi atribut
                                melalui property dan descriptor.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Property</h3>
                                    <p className="text-gray-700 mb-2">
                                        Property adalah atribut khusus yang menggunakan method getter, setter, dan deleter:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Mengontrol akses ke atribut privat</li>
                                        <li>Memvalidasi nilai saat assignment</li>
                                        <li>Komputasi otomatis (calculated attributes)</li>
                                        <li>Memberikan "interface" yang konsisten</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Descriptor</h3>
                                    <p className="text-gray-700 mb-2">
                                        Descriptor adalah objek dengan protokol __get__, __set__, atau __delete__:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Dapat digunakan kembali di beberapa kelas</li>
                                        <li>Lebih powerful dari property sederhana</li>
                                        <li>Mendukung validasi kompleks</li>
                                        <li>Basis untuk fitur seperti @classmethod dan @staticmethod</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Praktik Terbaik untuk Atribut</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Gunakan underscore (_) untuk atribut yang tidak dimaksudkan untuk akses publik</li>
                                    <li>Gunakan double underscore (__) untuk "name mangling" dan menghindari konflik nama</li>
                                    <li>Implementasikan property untuk validasi data dan kontrol akses</li>
                                    <li>Gunakan descriptor untuk logika atribut yang dapat digunakan kembali</li>
                                    <li>Dokumentasikan perilaku atribut yang diharapkan dengan docstring</li>
                                </ul>
                            </div>
                            <CodeExample
                                title="Contoh Penggunaan Property"
                                description="Implementasi property untuk memvalidasi nilai"
                                code={`class Mahasiswa:
    def __init__(self, nama, nilai=0):
        self._nama = nama
        self._nilai = 0  # Nilai awal
        self.nilai = nilai  # Menggunakan setter property
    
    @property
    def nilai(self):
        """Getter untuk nilai"""
        return self._nilai
    
    @nilai.setter
    def nilai(self, nilai_baru):
        """Setter dengan validasi"""
        if not isinstance(nilai_baru, (int, float)):
            raise TypeError("Nilai harus berupa angka")
        if nilai_baru < 0 or nilai_baru > 100:
            raise ValueError("Nilai harus antara 0 dan 100")
        self._nilai = nilai_baru
    
    @property
    def status(self):
        """Property yang dihitung (computed property)"""
        if self._nilai >= 70:
            return "Lulus"
        return "Tidak Lulus"

# Penggunaan
mahasiswa = Mahasiswa("Budi", 85)
print(mahasiswa.nilai)  # Output: 85
print(mahasiswa.status)  # Output: Lulus

try:
    mahasiswa.nilai = 120  # Error: Nilai harus antara 0 dan 100
except ValueError as e:
    print(str(e))  # Output: Nilai harus antara 0 dan 100`}
                            />

                        </div>
                    </div>
                </section>

                {/* Bagian 3: Metode dalam Python */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <RefreshCw size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Metode dalam Python OOP</h2>
                            <p className="text-gray-700 mb-6">
                                Metode adalah fungsi yang didefinisikan dalam kelas dan merepresentasikan perilaku (behavior) dari objek.
                                Python memiliki beberapa jenis metode yang berbeda dengan karakteristik unik.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Jenis-jenis Metode</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-blue-700">Instance Method</h4>
                                            <p className="text-gray-700">
                                                Metode yang beroperasi pada instance objek dan dapat mengakses serta memodifikasi atribut instance.
                                                Parameter pertama selalu 'self'.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-700">Class Method</h4>
                                            <p className="text-gray-700">
                                                Metode yang beroperasi pada kelas dan bukan pada instance. Ditandai dengan @classmethod
                                                dan parameter pertama adalah 'cls'.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-700">Static Method</h4>
                                            <p className="text-gray-700">
                                                Metode yang tidak beroperasi pada instance maupun kelas. Ditandai dengan @staticmethod
                                                dan tidak memerlukan parameter khusus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Special Methods (Magic/Dunder Methods)</h3>
                                    <p className="text-gray-700 mb-2">
                                        Metode dengan nama diawali dan diakhiri double underscore. Memodifikasi perilaku bawaan.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><strong>__init__</strong>: Konstruktor</li>
                                        <li><strong>__str__</strong>: Representasi string yang mudah dibaca</li>
                                        <li><strong>__repr__</strong>: Representasi string teknis</li>
                                        <li><strong>__len__</strong>: Panjang objek (misal untuk koleksi)</li>
                                        <li><strong>__add__, __sub__, dst</strong>: Operator overloading</li>
                                        <li><strong>__getitem__, __setitem__</strong>: Akses indeks/kunci</li>
                                    </ul>
                                </div>
                            </div>

                           

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Kapan Menggunakan Tipe Metode yang Berbeda?</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li><strong>Instance Method</strong>: Saat memerlukan akses ke atribut instance (sebagian besar kasus)</li>
                                    <li><strong>Class Method</strong>: Untuk operasi yang terkait dengan kelas secara keseluruhan, factory method, atau mengakses/memodifikasi atribut kelas</li>
                                    <li><strong>Static Method</strong>: Untuk fungsi utilitas yang terkait dengan kelas secara logis, tetapi tidak memerlukan akses ke atribut kelas atau instance</li>
                                </ul>
                            </div>
                            <CodeExample
                                title="Contoh Tipe-tipe Metode"
                                description="Implementasi instance, class, dan static method"
                                code={`class Kalkulator:
    # Atribut kelas
    nama_aplikasi = "PyCalc"
    versi = "1.0"
    
    def __init__(self, mode="standar"):
        # Instance method - konstruktor
        self.mode = mode
        self.hasil_terakhir = 0
    
    def tambah(self, a, b):
        # Instance method biasa
        hasil = a + b
        self.hasil_terakhir = hasil
        return hasil
    
    @classmethod
    def info(cls):
        # Class method - beroperasi pada kelas
        return f"{cls.nama_aplikasi} versi {cls.versi}"
    
    @classmethod
    def buat_kalkulator_scientific(cls):
        # Class method sebagai factory
        return cls(mode="scientific")
    
    @staticmethod
    def validasi_angka(nilai):
        # Static method - tidak terikat instance atau kelas
        if not isinstance(nilai, (int, float)):
            raise TypeError("Input harus berupa angka")
        return True
    
    def __str__(self):
        # Special method untuk string representation
        return f"Kalkulator {self.mode}, hasil terakhir: {self.hasil_terakhir}"

# Penggunaan
calc = Kalkulator()
print(calc.tambah(5, 3))  # Output: 8 (Instance method)
print(Kalkulator.info())  # Output: PyCalc versi 1.0 (Class method)

# Menggunakan class method sebagai factory
calc_scientific = Kalkulator.buat_kalkulator_scientific()
print(calc_scientific.mode)  # Output: scientific

# Menggunakan static method
try:
    Kalkulator.validasi_angka("bukan angka")
except TypeError as e:
    print(str(e))  # Output: Input harus berupa angka

# Menggunakan special method
print(str(calc))  # Output: Kalkulator standar, hasil terakhir: 8`}
                            />
                        </div>
                    </div>
                </section>

                {/* Bagian 4: Inheritance dan Method Resolution Order */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Method Resolution Order</h2>
                            <p className="text-gray-700 mb-6">
                                Salah satu kekuatan utama OOP adalah inheritance (pewarisan). Dalam Python, pemahaman tentang
                                Method Resolution Order (MRO) sangat penting untuk mengelola inheritance dengan benar.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Method Resolution Order (MRO)</h3>
                                    <p className="text-gray-700 mb-2">
                                        MRO menentukan urutan pencarian metode ketika sebuah metode dipanggil dalam hirarki pewarisan:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Python menggunakan algoritma C3 linearization</li>
                                        <li>Dapat dilihat dengan Class.__mro__ atau Class.mro()</li>
                                        <li>Resolusi dimulai dari kelas instance sendiri</li>
                                        <li>Mencari ke dalam kelas induk secara mendalam (depth-first)</li>
                                        <li>Menghindari duplikasi dalam pencarian</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Method Overriding dan Super()</h3>
                                    <p className="text-gray-700 mb-2">
                                        Konsep penting dalam pewarisan metode:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><strong>Method Overriding</strong>: Menimpa metode dari kelas induk</li>
                                        <li><strong>super()</strong>: Memanggil metode dari kelas induk</li>
                                        <li>Pola umum: override + extend, bukan mengganti sepenuhnya</li>
                                        <li>Mendukung multiple inheritance dengan aman</li>
                                    </ul>
                                </div>
                            </div>

                           

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Praktik Terbaik untuk Inheritance</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Gunakan komposisi daripada pewarisan jika memungkinkan ("Composition over inheritance")</li>
                                    <li>Hindari hirarki pewarisan yang terlalu dalam (lebih dari 2-3 level)</li>
                                    <li>Selalu gunakan super() untuk memanggil metode kelas induk</li>
                                    <li>Berhati-hatilah dengan multiple inheritance dan "diamond problem"</li>
                                    <li>Desain interface kelas yang jelas dan konsisten</li>
                                    <li>Gunakan abstract base classes untuk mendefinisikan "contract" yang jelas</li>
                                </ul>
                            </div>
                            <CodeExample
                                title="Contoh MRO"
                                description="Pewarisan metode dan atribut dengan super()"
                                code={`class Kendaraan:
    jumlah_kendaraan = 0
    
    def __init__(self, nama, kecepatan_maks):
        self.nama = nama
        self.kecepatan_maks = kecepatan_maks
        self.kecepatan = 0
        Kendaraan.jumlah_kendaraan += 1
    
    def percepat(self, tambahan):
        self.kecepatan = min(self.kecepatan + tambahan, self.kecepatan_maks)
        return self.kecepatan
        
    def info(self):
        return f"{self.nama}, kecepatan: {self.kecepatan}/{self.kecepatan_maks} km/jam"

        
class Mobil(Kendaraan):
    def __init__(self, nama, kecepatan_maks, jumlah_pintu):
        # Memanggil __init__ kelas induk
        super().__init__(nama, kecepatan_maks)
        self.jumlah_pintu = jumlah_pintu
        
    def info(self):
        # Override dan extend metode dari kelas induk
        info_dasar = super().info()
        return f"{info_dasar}, pintu: {self.jumlah_pintu}"
        
    def klakson(self):
        return "Beep! Beep!"

        
class MobilListrik(Mobil):
    def __init__(self, nama, kecepatan_maks, jumlah_pintu, kapasitas_baterai):
        super().__init__(nama, kecepatan_maks, jumlah_pintu)
        self.kapasitas_baterai = kapasitas_baterai
        self.level_baterai = 100
        
    def info(self):
        info_mobil = super().info()
        return f"{info_mobil}, baterai: {self.level_baterai}%"
        
# Demonstrasi MRO
print(MobilListrik.__mro__)
# Output: (<class '__main__.MobilListrik'>, <class '__main__.Mobil'>, 
#          <class '__main__.Kendaraan'>, <class 'object'>)

# Penggunaan
tesla = MobilListrik("Tesla Model 3", 250, 4, 75)
tesla.percepat(100)  # Metode dari Kendaraan
print(tesla.info())   # Metode yang di-override
print(tesla.klakson())  # Metode dari Mobil`}
                            />
                        </div>
                    </div>
                </section>

                {/* Bagian 5: Ringkasan dan Best Practices */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Zap size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse mb-6">
                                    <thead>
                                        <tr className="bg-blue-100">
                                            <th className="border border-blue-200 p-3 text-left">Konsep</th>
                                            <th className="border border-blue-200 p-3 text-left">Penggunaan</th>
                                            <th className="border border-blue-200 p-3 text-left">Contoh</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Atribut Instance</td>
                                            <td className="border border-blue-200 p-3">Data khusus setiap objek</td>
                                            <td className="border border-blue-200 p-3"><code>self.nama = "Budi"</code></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Atribut Kelas</td>
                                            <td className="border border-blue-200 p-3">Data yang dibagi oleh semua instance</td>
                                            <td className="border border-blue-200 p-3"><code>Kelas.counter = 0</code></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Property</td>
                                            <td className="border border-blue-200 p-3">Getter/setter dengan validasi</td>
                                            <td className="border border-blue-200 p-3"><code>@property def nilai(self)</code></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Instance Method</td>
                                            <td className="border border-blue-200 p-3">Operasi pada objek instance</td>
                                            <td className="border border-blue-200 p-3"><code>def hitung(self, x)</code></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Class Method</td>
                                            <td className="border border-blue-200 p-3">Operasi pada kelas</td>
                                            <td className="border border-blue-200 p-3"><code>@classmethod def create(cls)</code></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">Static Method</td>
                                            <td className="border border-blue-200 p-3">Utilitas yang terkait kelas</td>
                                            <td className="border border-blue-200 p-3"><code>@staticmethod def helper()</code></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Kelebihan Pendekatan Python</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Fleksibilitas tinggi dan sintaks yang ekspresif</li>
                                        <li>Duck typing: "jika berjalan seperti bebek..."</li>
                                        <li>Metaprogramming yang kuat</li>
                                        <li>Pendekatan "we're all consenting adults here"</li>
                                        <li>Kombinasi OOP dan paradigma fungsional</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Praktik Terbaik OOP Python</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Ikuti prinsip DRY (Don't Repeat Yourself)</li>
                                        <li>Gunakan encapsulation dengan konvensi underscore</li>
                                        <li>Menulis docstring yang jelas untuk kelas dan metode</li>
                                        <li>Manfaatkan property untuk validasi dan computed values</li>
                                        <li>Gunakan inheritance dengan bijak</li>
                                        <li>Pertimbangkan type hints untuk kode yang lebih aman</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Kesimpulan</h3>
                                <p className="text-gray-700">
                                    Atribut dan metode adalah blok pembangun fundamental dalam OOP Python yang memungkinkan pemrograman yang modular,
                                    teroganisir, dan dapat digunakan kembali. Python menawarkan fleksibilitas besar dengan berbagai jenis atribut
                                    dan metode yang dapat disesuaikan dengan kebutuhan aplikasi Anda.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    Dengan memahami konsep-konsep ini dengan baik, Anda dapat menciptakan hirarki kelas yang efektif dan
                                    memanfaatkan sepenuhnya paradigma berorientasi objek dalam Python.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PythonAttributePresentation;