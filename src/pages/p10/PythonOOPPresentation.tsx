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

const PythonOOPPresentation: React.FC = () => {

  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
            Pengantar Pemrograman Berorientasi Objek dalam Python
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-blue-500 mr-3" />
            <span>Paradigma pemrograman yang mengorganisasi kode melalui "objek" daripada fungsi dan logika</span>
          </div>
        </header>

        {/* Slide 2: Pengenalan OOP */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konsep Dasar OOP</h2>
              <p className="text-gray-700 mb-6">
                Pemrograman Berorientasi Objek (Object-Oriented Programming/OOP) adalah paradigma pemrograman yang 
                menggunakan konsep "objek" yang memiliki data (atribut) dan kode (metode). Python dirancang dengan 
                dukungan OOP yang kuat dan intuitif.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    Mengapa OOP?
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">Modularitas</h4>
                      <p className="text-gray-700">
                        Objek dapat dipelihara secara terpisah, memudahkan debugging dan kolaborasi.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700">Reusabilitas</h4>
                      <p className="text-gray-700">
                        Objek dapat digunakan kembali di berbagai bagian program atau aplikasi lain.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700">Kemudahan Pengembangan</h4>
                      <p className="text-gray-700">
                        OOP menyediakan struktur yang membuat software skala besar lebih mudah dikelola.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Fitur Utama OOP</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Encapsulation — Menyembunyikan detail implementasi</li>
                    <li>Inheritance — Pewarisan sifat dari kelas induk</li>
                    <li>Polymorphism — Berbagai bentuk dari metode yang sama</li>
                    <li>Abstraction — Menyembunyikan kompleksitas</li>
                    <li>Association — Hubungan antar objek</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <CodeExample
                  title="Struktur Dasar Class di Python"
                  description="Contoh paling sederhana mendefinisikan class dalam Python"
                  code={`class MyFirstClass:
    """Ini adalah dokumentasi class yang menjelaskan tujuan class ini"""
    
    # Variabel class (shared oleh semua instance)
    class_variable = "Saya adalah variabel class"
    
    # Constructor/initializer
    def __init__(self, name, age):
        # Instance variables (unik untuk setiap instance)
        self.name = name  # Public attribute
        self.age = age    # Public attribute
        self._private = "Ini atribut dengan konvensi private"
    
    # Method instance (memerlukan instance untuk dipanggil)
    def greet(self):
        return f"Halo, nama saya {self.name} dan saya berusia {self.age} tahun"
        
    # Method class (bisa dipanggil tanpa instance)
    @classmethod
    def create_anonymous(cls):
        return cls("Anonymous", 0)

# Membuat instance dari class
person1 = MyFirstClass("Alice", 25)
print(person1.greet())  # Output: Halo, nama saya Alice dan saya berusia 25 tahun`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Classes dan Objects */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Classes dan Objects</h2>
              <p className="text-gray-700 mb-6">
                Class adalah "blueprint" atau "template" yang mendefinisikan struktur dan perilaku objek, 
                sementara object adalah instance dari class tersebut. Sebuah class mendefinisikan atribut 
                (data) dan metode (fungsi) yang akan dimiliki objek.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Karakteristik Class</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Blueprint untuk menciptakan objek</li>
                    <li>Mendefinisikan atribut dan metode</li>
                    <li>Dapat memiliki konstruktor (__init__)</li>
                    <li>Dapat mewarisi dari class lain</li>
                    <li>Dapat mendefinisikan atribut class maupun instance</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Special Methods</h3>
                  <p className="text-gray-700 mb-2">
                    Python memiliki "dunder methods" (double underscore) yang memungkinkan customisasi perilaku objek:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        return f"{self.title} by {self.author}"
        
    def __eq__(self, other):
        if not isinstance(other, Book):
            return False
        return (self.title == other.title and 
                self.author == other.author)`}</code>
                  </pre>
                </div>
              </div>
      
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Class & Object Design</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Ikuti Single Responsibility Principle — setiap class hanya memiliki satu tanggung jawab</li>
                  <li>Implementasikan getter/setter untuk atribut yang memerlukan validasi</li>
                  <li>Gunakan docstrings untuk mendokumentasikan perilaku class dan method</li>
                  <li>Hindari class yang terlalu besar atau kompleks</li>
                  <li>Gunakan nama yang jelas dan deskriptif untuk class dan metode</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Inheritance dan Polymorphism */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <RefreshCw size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Inheritance dan Polymorphism</h2>
              <p className="text-gray-700 mb-6">
                Inheritance (pewarisan) memungkinkan class untuk mewarisi atribut dan metode dari class lain. 
                Polymorphism memungkinkan penggunaan interface yang sama untuk berbagai tipe atau class yang berbeda.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Inheritance dalam Python</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Mendefinisikan class dasar (parent/super class)</li>
                    <li>Membuat class turunan (child/subclass)</li>
                    <li>Method overriding untuk mengubah implementasi</li>
                    <li>Multiple inheritance didukung penuh</li>
                    <li>Menggunakan super() untuk memanggil method parent</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Polymorphism</h3>
                  <p className="text-gray-700 mb-2">
                    Polymorphism memungkinkan metode dengan nama yang sama berperilaku berbeda tergantung pada objeknya:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`# Contoh Polymorphism
def describe_animal(animal):
    # Memanggil metode yang sama pada objek berbeda
    animal.make_sound()
    
cat = Cat()
dog = Dog()

describe_animal(cat)  # Output: Meow
describe_animal(dog)  # Output: Woof`}</code>
                  </pre>
                </div>
              </div>
              
             
              
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Penggunaan Inheritance</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gunakan inheritance jika ada hubungan "is-a" yang jelas</li>
                  <li>Hindari hierarchies inheritance yang terlalu dalam</li>
                  <li>Pertimbangkan composition sebagai alternatif (has-a relationship)</li>
                  <li>Selalu gunakan super() untuk memanggil constructor parent</li>
                  <li>Hindari multiple inheritance kompleks untuk mencegah "diamond problem"</li>
                  <li>Manfaatkan Method Resolution Order (MRO) di Python untuk memahami urutan pewarisan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Encapsulation dan Abstraction */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Encapsulation dan Abstraction</h2>
              
              <p className="text-gray-700 mb-6">
                Encapsulation menyembunyikan detail implementasi internal dan melindungi integritas data. 
                Abstraction menyederhanakan kompleksitas dengan menyembunyikan detail yang tidak perlu diketahui.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Encapsulation dalam Python</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Konvensi nama untuk atribut private (_name, __name)</li>
                    <li>Property untuk mengakses dan memvalidasi atribut</li>
                    <li>Getter dan setter methods</li>
                    <li>Mencegah modifikasi data secara tidak sah</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Abstraction</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Menyembunyikan kompleksitas implementasi</li>
                    <li>Mengekspos hanya interface yang diperlukan</li>
                    <li>Abstract Base Classes (module abc)</li>
                    <li>Mendefinisikan metode yang harus diimplementasikan</li>
                  </ul>
                </div>
              </div>
              
             
              
              <div className="overflow-x-auto mt-8">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-3 text-left">Konsep</th>
                      <th className="border border-blue-200 p-3 text-left">Definisi</th>
                      <th className="border border-blue-200 p-3 text-left">Implementasi di Python</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Encapsulation</td>
                      <td className="border border-blue-200 p-3">Menyembunyikan detail implementasi dan melindungi data</td>
                      <td className="border border-blue-200 p-3">Konvensi (_var, __var), properties, getter/setter</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Abstraction</td>
                      <td className="border border-blue-200 p-3">Menyembunyikan kompleksitas, menunjukkan hanya yang esensial</td>
                      <td className="border border-blue-200 p-3">Abstract base classes (ABC), interface</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Inheritance</td>
                      <td className="border border-blue-200 p-3">Mewarisi atribut dan metode dari class lain</td>
                      <td className="border border-blue-200 p-3">class Child(Parent), super()</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-200 p-3 font-medium">Polymorphism</td>
                      <td className="border border-blue-200 p-3">Interface yang sama untuk tipe/class berbeda</td>
                      <td className="border border-blue-200 p-3">Method overriding, duck typing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Design OOP yang Baik</h3>
                <p className="text-gray-700 mb-2">
                  Beberapa prinsip untuk mendesain kode OOP yang efektif:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>SOLID Principles</strong>: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion</li>
                  <li><strong>DRY</strong>: Don't Repeat Yourself - hindari duplikasi kode</li>
                  <li><strong>KISS</strong>: Keep It Simple, Stupid - kesederhanaan adalah kunci</li>
                  <li><strong>Composition over Inheritance</strong>: Lebih baik memiliki object daripada mewarisi dari parent class yang kompleks</li>
                  <li><strong>Program to an interface, not an implementation</strong>: Fokus pada apa yang dilakukan, bukan bagaimana melakukannya</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PythonOOPPresentation;