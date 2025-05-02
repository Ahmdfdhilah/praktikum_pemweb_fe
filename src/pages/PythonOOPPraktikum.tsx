import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import { CodeBlock } from '@/components/praktikum/CodeBlock';
import { StepGuide } from '@/components/praktikum/StepGuide';
import { InfoBox } from '@/components/praktikum/InfoBox';
import { SubmissionLink } from '@/components/praktikum/SubmissionLink';

import {
  BookOpen,
  Target,
  PlayCircle,
  Layers,
  CheckCircle,
  Award,
  FolderTree,
} from 'lucide-react';

export default function PythonOOPPraktikum() {
  return (
    <PraktikumLayout
      title="Praktikum Python OOP"
      subtitle="Pemrograman Berorientasi Objek dengan Python"
    >
      {/* Tujuan Praktikum */}
      <SectionWrapper
        id="tujuan"
        title="Tujuan Praktikum"
        icon={<Target className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, Anda diharapkan mampu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Memahami konsep dasar Object-Oriented Programming (OOP)</li>
            <li>Mengimplementasikan Class dan Object dalam Python</li>
            <li>Menerapkan Atribut dan Metode dalam Class</li>
            <li>Menggunakan Constructor dan Self dalam Python</li>
            <li>Implementasi Inheritance (Pewarisan) antar Class</li>
            <li>Menerapkan Encapsulation dan Access Modifiers</li>
            <li>Memahami Polymorphism dan Method Overriding</li>
            <li>Implementasi Abstract Class dan Interface</li>
          </ul>
        </div>
      </SectionWrapper>
      {/* Dasar Teori */}
      <SectionWrapper
        id="dasar-teori"
        title="Dasar Teori"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-6">
          <InfoBox type="info" title="Apa itu OOP?">
            <p>
              Object-Oriented Programming (OOP) adalah paradigma pemrograman
              yang menggunakan konsep "objek" yang memiliki atribut dan metode.
              Python sepenuhnya mendukung OOP, dan memungkinkan kita untuk
              mendefinisikan class, membuat objek, dan menerapkan konsep
              inheritance, encapsulation, dan polymorphism.
            </p>
          </InfoBox>

          <div className="overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-800 my-4">
              Konsep Utama OOP
            </h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                    Konsep
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                    Deskripsi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Class
                  </td>
                  <td className="px-4 py-2">
                    Blueprint untuk membuat objek yang mendefinisikan atribut
                    dan metode yang dimiliki oleh semua instance
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Object
                  </td>
                  <td className="px-4 py-2">
                    Instance dari sebuah class yang memiliki state dan behavior
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Inheritance
                  </td>
                  <td className="px-4 py-2">
                    Kemampuan class untuk mewarisi atribut dan metode dari class
                    lain
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Encapsulation
                  </td>
                  <td className="px-4 py-2">
                    Menyembunyikan detail implementasi dan membatasi akses
                    langsung ke atribut class
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Polymorphism
                  </td>
                  <td className="px-4 py-2">
                    Kemampuan objek yang berbeda untuk merespons metode dengan
                    nama yang sama
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap font-medium">
                    Abstraction
                  </td>
                  <td className="px-4 py-2">
                    Menyederhanakan kompleksitas dengan menyembunyikan detail
                    yang tidak perlu
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <InfoBox type="tip" title="Tips Memahami OOP">
            <p>
              Bayangkan class seperti cetakan kue dan objek adalah kue yang
              dihasilkan. Setiap kue memiliki bentuk yang sama (metode) tapi
              bisa memiliki isian berbeda (atribut). Inheritance seperti membuat
              cetakan kue baru berdasarkan cetakan yang sudah ada, dengan
              tambahan fitur baru.
            </p>
          </InfoBox>
        </div>
      </SectionWrapper>
      {/* Alat dan Bahan */}
      <SectionWrapper
        id="alat-bahan"
        title="Alat dan Bahan"
        icon={<Layers className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Untuk mengikuti praktikum ini, Anda memerlukan:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Python 3.x</strong>: Pastikan Python sudah terpasang
            </li>
            <li>
              <strong>Code Editor</strong>: Visual Studio Code, PyCharm, atau
              editor teks lainnya
            </li>
            <li>
              <strong>Terminal</strong>: Untuk menjalankan program Python
            </li>
          </ul>

          <InfoBox type="tip" title="Rekomendasi">
            <p>
              Kami menyarankan menggunakan Visual Studio Code dengan ekstensi
              Python. Pastikan untuk menggunakan virtual environment jika ingin
              menginstal package tambahan.
            </p>
          </InfoBox>
        </div>
      </SectionWrapper>
      {/* Langkah Praktikum */}
      <SectionWrapper
        id="langkah-praktikum"
        title="Langkah Praktikum"
        icon={<PlayCircle className="w-6 h-6 text-blue-500" />}
      >
        <StepGuide
          steps={[
            {
              id: 1,
              title: 'Membuat Class dan Object Sederhana',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Mari kita mulai dengan membuat class dan object sederhana
                    untuk memahami konsep dasar OOP.
                  </p>

                  <CodeBlock
                    title="mahasiswa.py"
                    code={`# Membuat class Mahasiswa
class Mahasiswa:
    # Atribut Class (shared by all instances)
    jurusan = "Teknik Informatika"
    
    # Constructor/initializer
    def __init__(self, nama, nim):
        # Atribut Instance (unique for each instance)
        self.nama = nama
        self.nim = nim
        
    # Method
    def display_info(self):
        print(f"Nama: {self.nama}")
        print(f"NIM: {self.nim}")
        print(f"Jurusan: {self.jurusan}")
        
    def update_nama(self, nama_baru):
        self.nama = nama_baru
        print(f"Nama berhasil diubah menjadi {nama_baru}")

# Membuat object (instance) dari class Mahasiswa
mhs1 = Mahasiswa("Budi Santoso", "TI12345")
mhs2 = Mahasiswa("Ani Wijaya", "TI67890")

# Mengakses atribut
print(f"Mahasiswa 1: {mhs1.nama}, NIM: {mhs1.nim}")
print(f"Mahasiswa 2: {mhs2.nama}, NIM: {mhs2.nim}")

# Memanggil method
print("\\nInformasi Mahasiswa 1:")
mhs1.display_info()

print("\\nInformasi Mahasiswa 2:")
mhs2.display_info()

# Mengubah atribut
mhs1.update_nama("Budi Prakoso")

# Mengubah class attribute (berlaku untuk semua instance)
Mahasiswa.jurusan = "Informatika"
print("\\nSetelah perubahan jurusan:")
mhs1.display_info()
mhs2.display_info()`}
                    language="python"
                  />

                  <InfoBox type="info" title="Penjelasan">
                    <p>Pada contoh ini:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <code>class Mahasiswa</code>: Mendefinisikan blueprint
                        untuk membuat objek mahasiswa
                      </li>
                      <li>
                        <code>__init__</code>: Constructor/initializer yang
                        dipanggil saat objek dibuat
                      </li>
                      <li>
                        <code>self</code>: Referensi ke instance objek yang
                        sedang berjalan
                      </li>
                      <li>
                        <code>jurusan</code>: Class attribute yang dibagikan ke
                        semua instance
                      </li>
                      <li>
                        <code>nama, nim</code>: Instance attributes yang unik
                        untuk setiap objek
                      </li>
                      <li>
                        <code>display_info(), update_nama()</code>: Methods yang
                        memanipulasi data objek
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 2,
              title: 'Inheritance (Pewarisan)',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Inheritance memungkinkan kita untuk mendefinisikan class
                    yang mewarisi atribut dan metode dari class lain.
                  </p>

                  <CodeBlock
                    title="inheritance.py"
                    code={`# Class dasar
class Kendaraan:
    def __init__(self, merek, tahun):
        self.merek = merek
        self.tahun = tahun
        self.odometer = 0
        
    def deskripsi(self):
        return f"{self.merek} ({self.tahun})"
    
    def baca_odometer(self):
        return f"Kendaraan ini telah berjalan sejauh {self.odometer} kilometer"
    
    def update_odometer(self, km):
        if km >= self.odometer:
            self.odometer = km
        else:
            print("Anda tidak dapat mengubah odometer!")

# Class turunan (inherited)
class Mobil(Kendaraan):
    def __init__(self, merek, tahun, tipe):
        # Memanggil constructor class parent
        super().__init__(merek, tahun)
        # Attribute tambahan
        self.tipe = tipe
        self.bensin = 100  # capacity in liters
        
    # Method tambahan
    def isi_bensin(self, liter):
        self.bensin += liter
        return f"Bensin diisi sebanyak {liter} liter. Total: {self.bensin} liter"
    
    # Method overriding
    def deskripsi(self):
        # Extend method dari parent class
        base_desc = super().deskripsi()
        return f"{base_desc} - {self.tipe}"

# Class turunan kedua
class Motor(Kendaraan):
    def __init__(self, merek, tahun, cc):
        super().__init__(merek, tahun)
        self.cc = cc
    
    def deskripsi(self):
        return f"{self.merek} ({self.tahun}) - {self.cc}cc"

# Membuat instance
kendaraan1 = Kendaraan("Generic", 2020)
mobil1 = Mobil("Toyota", 2022, "SUV")
motor1 = Motor("Honda", 2021, 150)

# Menggunakan method dari class dasar
print(kendaraan1.deskripsi())
print(mobil1.deskripsi())  # Method yang di-override
print(motor1.deskripsi())  # Method yang di-override

# Menggunakan method dari class dasar yang diwarisi
mobil1.update_odometer(1500)
print(mobil1.baca_odometer())

# Menggunakan method dari class turunan
print(mobil1.isi_bensin(20))`}
                    language="python"
                  />

                  <InfoBox type="info" title="Penjelasan">
                    <p>Pada contoh ini:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <code>class Mobil(Kendaraan)</code>: Mobil adalah
                        subclass dari Kendaraan
                      </li>
                      <li>
                        <code>super().__init__(merek, tahun)</code>: Memanggil
                        constructor dari class parent
                      </li>
                      <li>
                        <code>deskripsi()</code> dalam class Mobil dan Motor:
                        Method Overriding, mengubah implementasi method parent
                      </li>
                      <li>
                        Instance Mobil dan Motor dapat mengakses semua method
                        milik Kendaraan
                      </li>
                      <li>
                        Class turunan dapat menambahkan atribut dan method baru
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 3,
              title: 'Encapsulation dan Access Modifiers',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Encapsulation berarti menyembunyikan detail implementasi dan
                    membatasi akses langsung ke atribut. Python menggunakan
                    konvensi untuk access modifiers.
                  </p>

                  <CodeBlock
                    title="encapsulation.py"
                    code={`class Student:
                def __init__(self, name, nim):
                    self.name = name           # Public attribute
                    self._program = "Teknik"   # Protected attribute (konvensi)
                    self.__id = "2023-" + nim  # Private attribute
                
                # Public method
                def display_info(self):
                    return f"Name: {self.name}, Program: {self._program}, ID: {self.__id}"
                
                # Property decorator
                @property
                def program(self):
                    return self._program
                
                @program.setter
                def program(self, value):
                    if value in ["Teknik", "Sains", "Bisnis"]:
                        self._program = value
                    else:
                        print("Program tidak valid")
            
            # Membuat instance
            student1 = Student("Budi", "12345")
            
            # Mengakses public attribute
            print(f"Nama: {student1.name}")
            
            # Mengakses protected attribute (dapat diakses, tapi secara konvensi seharusnya tidak)
            print(f"Program (protected): {student1._program}")
            
            # Mencoba mengakses private attribute (akan error)
            try:
                print(student1.__id)  # Error!
            except AttributeError as e:
                print(f"Error: {e}")
            
            # Menggunakan name mangling untuk mengakses private attribute (tidak disarankan)
            print(f"ID (dengan name mangling): {student1._Student__id}")
            
            # Menggunakan property
            print(f"Program via property: {student1.program}")
            
            # Menggunakan property setter
            student1.program = "Sains"
            print(f"Program setelah diubah: {student1.program}")
            
            # Mencoba mengubah dengan nilai yang tidak valid
            student1.program = "Hukum"  # Akan menampilkan "Program tidak valid"
            print(f"Program tetap: {student1.program}")
            `}
                    language="python"
                  />

                  <InfoBox
                    type="info"
                    title="Penjelasan Access Modifiers di Python"
                  >
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Public</strong>: Atribut/metode tanpa awalan
                        underscore (misalnya <code>name</code>). Dapat diakses
                        dari mana saja.
                      </li>
                      <li>
                        <strong>Protected</strong>: Diawali dengan single
                        underscore (misalnya <code>_program</code>). Ini hanya
                        konvensi, masih bisa diakses dari luar.
                      </li>
                      <li>
                        <strong>Private</strong>: Diawali dengan double
                        underscore (misalnya <code>__id</code>). Python
                        melakukan "name mangling" sehingga sulit diakses dari
                        luar.
                      </li>
                      <li>
                        <code>@property</code>: Decorator untuk membuat getter
                        dan setter yang lebih pythonic.
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 4,
              title: 'Polymorphism dan Method Overriding',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Polymorphism memungkinkan objek dari class yang berbeda
                    merespons method dengan nama yang sama dengan cara yang
                    berbeda.
                  </p>

                  <CodeBlock
                    title="polymorphism.py"
                    code={`# Class dasar
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        # Method yang akan di-override oleh class turunan
        pass

# Class turunan
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Cow(Animal):
    def speak(self):
        return f"{self.name} says Moo!"

# Fungsi yang mendemonstrasikan polymorphism
def animal_sound(animal):
    # Fungsi ini bisa menerima objek apa pun yang memiliki method speak()
    return animal.speak()

# Membuat instances dari berbagai class
dog = Dog("Buddy")
cat = Cat("Whiskers")
cow = Cow("Milly")

# Memanggil fungsi yang sama dengan objek yang berbeda
print(animal_sound(dog))  # Output: Buddy says Woof!
print(animal_sound(cat))  # Output: Whiskers says Meow!
print(animal_sound(cow))  # Output: Milly says Moo!

# Demonstrasi polymorphism dengan list
animals = [Dog("Rex"), Cat("Felix"), Cow("Betty")]

# Iterating melalui list objek yang berbeda
for animal in animals:
    print(animal.speak())`}
                    language="python"
                  />

                  <InfoBox type="info" title="Penjelasan">
                    <p>Pada contoh ini:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Semua class memiliki method <code>speak()</code> tapi
                        dengan implementasi berbeda
                      </li>
                      <li>
                        Fungsi <code>animal_sound()</code> bisa menerima objek
                        apa pun yang memiliki method <code>speak()</code>
                      </li>
                      <li>
                        Duck typing: Python tidak peduli tipe objek apa yang
                        diberikan, selama objek tersebut memiliki method yang
                        dipanggil
                      </li>
                      <li>
                        Polymorphism sangat berguna untuk membuat kode yang
                        fleksibel dan dapat diperluas
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 5,
              title: 'Abstract Classes dan Interface',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Python tidak memiliki abstract classes dan interface secara
                    bawaan seperti bahasa lain, tetapi kita bisa
                    mengimplementasikannya menggunakan module <code>abc</code>{' '}
                    (Abstract Base Classes).
                  </p>

                  <CodeBlock
                    title="abstract_class.py"
                    code={`from abc import ABC, abstractmethod

# Abstract Base Class
class Shape(ABC):
    @abstractmethod
    def area(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass
    
    @abstractmethod
    def perimeter(self):
        """Method ini harus diimplementasikan oleh subclass"""
        pass
    
    def describe(self):
        """Method non-abstract (tidak wajib di-override)"""
        return "Ini adalah bentuk geometris"

# Concrete class (mengimplementasikan abstract methods)
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    # Override method non-abstract
    def describe(self):
        return f"Ini adalah persegi panjang dengan lebar {self.width} dan tinggi {self.height}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        import math
        return 2 * math.pi * self.radius

# Error jika mencoba instantiate abstract class
try:
    shape = Shape()  # Akan menghasilkan TypeError
except TypeError as e:
    print(f"Error saat membuat instance dari Shape: {e}")

# Membuat instance dari concrete classes
rectangle = Rectangle(5, 4)
circle = Circle(3)

# Menggunakan method
print(f"Luas persegi panjang: {rectangle.area()}")
print(f"Keliling persegi panjang: {rectangle.perimeter()}")
print(f"Deskripsi persegi panjang: {rectangle.describe()}")

print(f"Luas lingkaran: {circle.area():.2f}")
print(f"Keliling lingkaran: {circle.perimeter():.2f}")
print(f"Deskripsi lingkaran: {circle.describe()}")`}
                    language="python"
                  />

                  <InfoBox type="info" title="Implementasi Interface di Python">
                    <p>
                      Python tidak memiliki keyword "interface" seperti Java,
                      tetapi konsep interface dapat diimplementasikan dengan
                      abstract base classes di mana semua method adalah
                      abstract. Ini memaksa subclass untuk mengimplementasikan
                      semua method yang ditentukan.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
          ]}
        />
      </SectionWrapper>
      {/* Tugas Praktikum */}
      <SectionWrapper
        id="tugas-praktikum"
        title="Tugas Praktikum"
        icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">
            Tugas: Sistem Manajemen Perpustakaan Sederhana
          </h3>

          <div className="space-y-4">
            <p className="text-gray-700">
              Buatlah sistem manajemen perpustakaan sederhana menggunakan konsep
              OOP Python yang telah dipelajari. Fokus pada implementasi konsep
              class, inheritance, encapsulation, dan polymorphism.
            </p>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Persyaratan:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Buatlah abstract class <code>LibraryItem</code> yang menjadi
                  dasar untuk semua item di perpustakaan
                </li>
                <li>
                  Implementasikan minimal 2 subclass (contoh: <code>Book</code>{' '}
                  dan <code>Magazine</code>) yang mewarisi dari{' '}
                  <code>LibraryItem</code>
                </li>
                <li>
                  Setiap subclass harus mengimplementasikan minimal satu method
                  abstract dari parent class
                </li>
                <li>
                  Buatlah class <code>Library</code> untuk menyimpan dan
                  mengelola koleksi item perpustakaan
                </li>
                <li>
                  Terapkan encapsulation menggunakan access modifiers
                  (protected/private) untuk melindungi data penting
                </li>
                <li>
                  Gunakan property decorator untuk minimal satu atribut di salah
                  satu class
                </li>
                <li>
                  Sistem minimal harus dapat:
                  <ul className="list-circle pl-6 mt-1">
                    <li>Menambahkan item ke perpustakaan</li>
                    <li>Menampilkan daftar item yang tersedia</li>
                    <li>Mencari item berdasarkan judul atau id</li>
                  </ul>
                </li>
              </ul>
            </div>

            <InfoBox type="tip" title="Tips Pengerjaan">
              <p>
                Buatlah struktur program yang sederhana namun menerapkan konsep
                OOP dengan benar. Pastikan untuk membuat dokumentasi berupa
                komentar di setiap class dan method penting untuk menjelaskan
                fungsinya.
              </p>
            </InfoBox>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">
                Kriteria Penilaian:
              </h4>
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Aspek
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Bobot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">
                      Penggunaan Abstract Class dan Inheritance
                    </td>
                    <td className="px-4 py-2">30%</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-2">Implementasi Encapsulation</td>
                    <td className="px-4 py-2">25%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Penerapan Polymorphism</td>
                    <td className="px-4 py-2">20%</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-2">Fungsionalitas Program</td>
                    <td className="px-4 py-2">15%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Dokumentasi Kode</td>
                    <td className="px-4 py-2">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <SubmissionLink
          title="Submit Tugas Praktikum OOP"
          href="https://forms.gle/exampleSubmissionLink123"
        />
      </SectionWrapper>
      {/* Hasil Praktikum */}
      <SectionWrapper
        id="hasil-praktikum"
        title="Hasil Praktikum"
        icon={<Award className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, Anda seharusnya telah:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Memahami dan menerapkan konsep dasar Object-Oriented Programming
            </li>
            <li>Mampu membuat class dan object dalam Python</li>
            <li>Menguasai penggunaan atribut dan metode dalam class</li>
            <li>Mampu mengimplementasikan inheritance antar class</li>
            <li>Menerapkan encapsulation untuk melindungi data</li>
            <li>Memahami polymorphism dan method overriding</li>
            <li>Menggunakan abstract class dan interface</li>
            <li>
              Membuat aplikasi berbasis OOP yang lebih terstruktur dan mudah
              dipelihara
            </li>
          </ul>
        </div>
      </SectionWrapper>
      {/* Format Pengumpulan */}
      <SectionWrapper
        id="format-pengumpulan"
        title="Format Pengumpulan"
        icon={<FolderTree className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Direktori GitHub:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Buat repository dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_python_itera_[NIM]
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_python_itera_119140001
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
                Buat folder dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  [NAMA]_[NIM]_praktikum10
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  johndoe_119140001_praktikum10
                </code>
              </li>
              <li>
                File tugas diberi nama{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  online_shop.py
                </code>
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
                  Rabu, 7 Mei 2025, pukul 23:59 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </PraktikumLayout>
  );
}
