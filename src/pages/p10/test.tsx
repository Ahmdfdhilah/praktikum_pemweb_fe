import { Code, BookOpen,  Database, FileCode, RefreshCw } from 'lucide-react';
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

export const PythonClassObjectPresentation = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Slide 1: Title */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
                        Class dan Object dalam Python
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <BookOpen size={28} className="text-blue-500 mr-3" />
                        <span>Fondasi untuk Pemrograman Berorientasi Objek dengan Python</span>
                    </div>
                </header>


                {/* Slide 3: Classes in Python */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <FileCode size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Class dalam Python</h2>
                            <p className="text-gray-700 mb-6">
                                Class adalah blueprint atau template untuk menciptakan object. Class mendefinisikan atribut (data) dan metode (fungsi)
                                yang akan dimiliki oleh semua instance dari class tersebut.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Komponen Class</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Class name</span> — Konvensi: CamelCase</li>
                                        <li><span className="font-semibold">Attributes</span> — Variabel yang menyimpan data</li>
                                        <li><span className="font-semibold">Methods</span> — Fungsi yang berada dalam class</li>
                                        <li><span className="font-semibold">Constructor</span> — __init__() untuk inisialisasi</li>
                                        <li><span className="font-semibold">Self parameter</span> — Referensi ke instance saat ini</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Jenis Atribut</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-blue-700">Instance Attributes</h4>
                                            <p className="text-gray-700">
                                                Spesifik untuk setiap instance object. Didefinisikan dalam __init__().
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-blue-700">Class Attributes</h4>
                                            <p className="text-gray-700">
                                                Dibagi oleh semua instance class. Didefinisikan di luar metode.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Python Class Naming Conventions</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Nama class menggunakan <strong>CamelCase</strong> (huruf besar pada awal setiap kata)</li>
                                    <li>Nama metode dan atribut menggunakan <strong>snake_case</strong> (huruf kecil dengan underscore)</li>
                                    <li>Metode "private" diawali dengan single underscore <strong>_method_name</strong></li>
                                    <li>Atribut "private" diawali dengan single underscore <strong>_attribute_name</strong></li>
                                    <li>Name mangling (sangat private) diawali dengan double underscore <strong>__very_private</strong></li>
                                </ul>
                            </div>
                            <CodeExample
                                title="Definisi Class dalam Python"
                                description="Contoh dasar mendefinisikan class dengan atribut dan metode"
                                code={`class Student:
    # Class attribute
    school = "Python University"
    
    # Constructor (initializer)
    def __init__(self, name, student_id, age):
        # Instance attributes
        self.name = name
        self.student_id = student_id
        self.age = age
        self.courses = []  # Empty list to store courses
    
    # Instance method
    def enroll(self, course):
        self.courses.append(course)
        print(f"{self.name} enrolled in {course}")
    
    def display_info(self):
        print(f"Student: {self.name}, ID: {self.student_id}, Age: {self.age}")
        print(f"School: {self.school}")
        print(f"Enrolled courses: {', '.join(self.courses) if self.courses else 'None'}")
        
    # Class method - works with class attributes
    @classmethod
    def change_school(cls, new_school):
        cls.school = new_school
        print(f"School changed to {cls.school}")
        
    # Static method - doesn't access instance or class attributes
    @staticmethod
    def is_adult(age):
        return age >= 18`}
                            />

                        </div>
                    </div>
                </section>

                {/* Slide 4: Objects in Python */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Database size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Object dalam Python</h2>
                            <p className="text-gray-700 mb-6">
                                Object adalah instance konkret dari suatu class. Object memiliki state (nilai atribut) dan
                                behavior (metode) yang didefinisikan oleh class-nya. Setiap object memiliki identitas unik di Python.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Membuat dan Menggunakan Object</h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                                        <code>{`# Membuat object
student1 = Student("Alice", "A12345", 20)
student2 = Student("Bob", "B67890", 22)

# Mengakses atribut
print(student1.name)  # Output: Alice
print(student2.age)   # Output: 22

# Memanggil metode
student1.enroll("Python 101")
student1.enroll("Data Structures")
student1.display_info()

# Mengakses class attribute
print(Student.school)  # Output: Python University
print(student1.school) # Output: Python University

# Memanggil class method
Student.change_school("Python College")
print(student2.school) # Output: Python College`}</code>
                                    </pre>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Karakteristik Object</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Identity</span> — Lokasi unik di memori (id())</li>
                                        <li><span className="font-semibold">State</span> — Nilai atribut pada suatu waktu</li>
                                        <li><span className="font-semibold">Behavior</span> — Metode yang dapat dilakukan</li>
                                        <li><span className="font-semibold">Dynamic</span> — Atribut dapat diubah saat runtime</li>
                                    </ul>
                                    <div className="mt-4">
                                        <h4 className="font-medium text-blue-700">Built-in Object Functions</h4>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
                                            <code>{`# Mendapatkan ID unik object
print(id(student1))  # Contoh: 140371329356752

# Mendapatkan tipe object
print(type(student1))  
# Output: <class '__main__.Student'>

# Memeriksa apakah object adalah instance dari class
print(isinstance(student1, Student))  # Output: True

# Mendapatkan atribut object
print(dir(student1))  # Menampilkan semua atribut

# Mendapatkan dokumentasi
help(Student)  # Menampilkan dokumentasi class`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <CodeExample
                                title="Contoh Kasus: Sistem Manajemen Perpustakaan"
                                description="Penerapan class dan object dalam aplikasi praktis"
                                code={`class Book:
    def __init__(self, title, author, isbn, copies=1):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.copies = copies
        self.available = copies
        
    def borrow(self):
        if self.available > 0:
            self.available -= 1
            return True
        return False
        
    def return_book(self):
        if self.available < self.copies:
            self.available += 1
            return True
        return False
        
    def __str__(self):
        return f"{self.title} by {self.author}, ISBN: {self.isbn}, Available: {self.available}/{self.copies}"


class Library:
    def __init__(self, name):
        self.name = name
        self.books = {}  # ISBN -> Book
        
    def add_book(self, book):
        if book.isbn in self.books:
            self.books[book.isbn].copies += book.copies
            self.books[book.isbn].available += book.copies
        else:
            self.books[book.isbn] = book
        
    def find_book(self, isbn):
        return self.books.get(isbn)
    
    def borrow_book(self, isbn):
        book = self.find_book(isbn)
        if book:
            return book.borrow()
        return False
    
    def return_book(self, isbn):
        book = self.find_book(isbn)
        if book:
            return book.return_book()
        return False
        
    def display_inventory(self):
        print(f"Library: {self.name}")
        print(f"Total unique books: {len(self.books)}")
        for book in self.books.values():
            print(f"- {book}")
            
# Usage example
library = Library("City Library")
book1 = Book("Python Crash Course", "Eric Matthes", "978-1593279288", 5)
book2 = Book("Clean Code", "Robert C. Martin", "978-0132350884", 3)

library.add_book(book1)
library.add_book(book2)

library.display_inventory()
print("\\nBorrowing 'Python Crash Course'...")
library.borrow_book("978-1593279288")
library.display_inventory()`}
                            />

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Tips Penggunaan Object</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Gunakan metode untuk mengubah state object, jangan ubah atribut secara langsung</li>
                                    <li>Gunakan "__str__" dan "__repr__" untuk representasi string yang bermakna</li>
                                    <li>Jika dua object logically equivalent, implementasikan "__eq__" untuk perbandingan</li>
                                    <li>Hindari terlalu banyak atribut dalam satu class (maksimum sekitar 7 atribut)</li>
                                    <li>Gunakan "property" untuk mengontrol akses ke atribut</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slide 5: Special Methods */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Special Methods (Magic Methods)</h2>
                            <p className="text-gray-700 mb-6">
                                Python memiliki metode khusus (dunder methods) yang memungkinkan class kita merespons
                                terhadap operator dan fungsi bawaan. Metode ini dikenal sebagai "magic methods" karena
                                diawali dan diakhiri dengan double underscore.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse mb-6">
                                    <thead>
                                        <tr className="bg-blue-100">
                                            <th className="border border-blue-200 p-3 text-left">Metode</th>
                                            <th className="border border-blue-200 p-3 text-left">Deskripsi</th>
                                            <th className="border border-blue-200 p-3 text-left">Trigger</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__init__(self, ...)</td>
                                            <td className="border border-blue-200 p-3">Constructor, inisialisasi object</td>
                                            <td className="border border-blue-200 p-3">object = Class()</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__str__(self)</td>
                                            <td className="border border-blue-200 p-3">Representasi string informal</td>
                                            <td className="border border-blue-200 p-3">print(object), str(object)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__repr__(self)</td>
                                            <td className="border border-blue-200 p-3">Representasi string official</td>
                                            <td className="border border-blue-200 p-3">repr(object)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__len__(self)</td>
                                            <td className="border border-blue-200 p-3">Panjang object</td>
                                            <td className="border border-blue-200 p-3">len(object)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__add__(self, other)</td>
                                            <td className="border border-blue-200 p-3">Penjumlahan</td>
                                            <td className="border border-blue-200 p-3">object + other</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__eq__(self, other)</td>
                                            <td className="border border-blue-200 p-3">Perbandingan sama dengan</td>
                                            <td className="border border-blue-200 p-3">object == other</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__getitem__(self, key)</td>
                                            <td className="border border-blue-200 p-3">Akses item dengan indeks/key</td>
                                            <td className="border border-blue-200 p-3">object[key]</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-blue-200 p-3 font-medium">__call__(self, ...)</td>
                                            <td className="border border-blue-200 p-3">Memanggil object sebagai fungsi</td>
                                            <td className="border border-blue-200 p-3">object()</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <CodeExample
                                title="Implementasi Special Methods"
                                description="Contoh class dengan berbagai magic methods"
                                code={`class Vector:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z
    
    # String representation for end users
    def __str__(self):
        return f"Vector({self.x}, {self.y}, {self.z})"
    
    # String representation for debugging/development
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y}, z={self.z})"
    
    # Vector addition
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y, self.z + other.z)
        else:
            raise TypeError("Can only add Vector objects")
    
    # Vector multiplication (dot product)
    def __mul__(self, other):
        if isinstance(other, Vector):
            return (self.x * other.x + self.y * other.y + self.z * other.z)
        elif isinstance(other, (int, float)):
            return Vector(self.x * other, self.y * other, self.z * other)
        else:
            raise TypeError("Multiplication only supported with Vector or scalar")
    
    # Vector equality
    def __eq__(self, other):
        if not isinstance(other, Vector):
            return False
        return self.x == other.x and self.y == other.y and self.z == other.z
    
    # Vector length (magnitude)
    def __abs__(self):
        return (self.x**2 + self.y**2 + self.z**2) ** 0.5
    
    # For len()
    def __len__(self):
        # Could return dimensions (always 3 in this case) or calculated length
        return 3
    
    # Make Vector callable - returns magnitude
    def __call__(self):
        return abs(self)

# Usage
v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)

print(v1)                # Vector(1, 2, 3)
print(repr(v2))          # Vector(x=4, y=5, z=6)
print(v1 + v2)           # Vector(5, 7, 9)
print(v1 * v2)           # 32 (dot product)
print(v1 * 2)            # Vector(2, 4, 6)
print(v1 == Vector(1, 2, 3))  # True
print(abs(v1))           # 3.7416573867739413 (magnitude)
print(len(v1))           # 3
print(v1())              # 3.7416573867739413 (calling the vector)`}
                            />
                        </div>
                    </div>
                </section>

                {/* Slide 6: Inheritance and Polymorphism */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <RefreshCw size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Inheritance dan Polymorphism</h2>
                            <p className="text-gray-700 mb-6">
                                Inheritance (pewarisan) dan polymorphism (polimorfisme) adalah dua konsep penting dalam OOP
                                yang memungkinkan kita membangun hirarki class dan memperluas fungsi class yang ada.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Inheritance (Pewarisan)</h3>
                                    <p className="text-gray-700 mb-2">
                                        Memungkinkan class baru (child/subclass) mewarisi atribut dan metode dari class yang ada (parent/base class).
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
                                        <code>{`class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        
    def make_sound(self):
        pass
    
    def __str__(self):
        return f"{self.name} ({self.species})"
        
# Dog inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent class constructor
        super().__init__(name, "Canis familiaris")
        self.breed = breed
        
    def make_sound(self):
        return "Woof!"
        
    def fetch(self, item):
        return f"{self.name} fetched the {item}!"
        
# Cat inherits from Animal
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Felis catus")
        self.color = color
        
    def make_sound(self):
        return "Meow!"
        
    def chase(self):
        return f"{self.name} is chasing a toy!"`}</code>
                                    </pre>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Polymorphism (Polimorfisme)</h3>
                                    <p className="text-gray-700 mb-2">
                                        Kemampuan untuk menggunakan interface yang sama untuk berbagai tipe data.
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mt-2">
                                        <code>{`# Create animal objects
fluffy = Cat("Fluffy", "white")
buddy = Dog("Buddy", "Golden Retriever")

# Polymorphism in action
def animal_sound(animal):
    return animal.make_sound()

# Same function works for different classes
print(animal_sound(fluffy))  # Output: Meow!
print(animal_sound(buddy))   # Output: Woof!

# List of different animals
animals = [
    Dog("Rex", "German Shepherd"),
    Cat("Whiskers", "orange"),
    Dog("Max", "Beagle")
]

# Polymorphic behavior
for animal in animals:
    print(f"{animal} says {animal.make_sound()}")`}</code>
                                    </pre>
                                </div>
                            </div>

                            <CodeExample
                                title="Multiple Inheritance"
                                description="Python mendukung pewarisan berganda"
                                code={`class Flyable:
    def __init__(self, wings_type):
        self.wings_type = wings_type
        
    def fly(self):
        return f"Flying with {self.wings_type} wings"

class Swimmable:
    def __init__(self, swimming_ability):
        self.swimming_ability = swimming_ability
        
    def swim(self):
        return f"Swimming with {self.swimming_ability} ability"

# Multiple inheritance
class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name, wings_type="feathered", swimming_ability="excellent"):
        Animal.__init__(self, name, "Anas platyrhynchos")
        Flyable.__init__(self, wings_type)
        Swimmable.__init__(self, swimming_ability)
        
    def make_sound(self):
        return "Quack!"
        
# Using the Duck class
donald = Duck("Donald")
print(donald)                  # Donald (Anas platyrhynchos)
print(donald.make_sound())     # Quack!
print(donald.fly())            # Flying with feathered wings
print(donald.swim())           # Swimming with excellent ability

# Method Resolution Order (MRO)
print(Duck.__mro__)  # Shows the order in which methods are resolved`}
                            />

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}