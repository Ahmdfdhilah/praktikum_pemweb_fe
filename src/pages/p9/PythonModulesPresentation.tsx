import React from 'react';
import {
  Layers,
  Zap,
  Package,
  ArrowRight,
  FileCode,
  Boxes,
  Download,
  Upload,
  Settings,
} from 'lucide-react';

const PythonModulesPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Modul dalam Python
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Package size={28} className="text-teal-500 mr-3" />
            <span>
              File berisi definisi, fungsi, dan kelas yang dapat digunakan
              kembali
            </span>
          </div>
        </header>

        {/* Slide 2: Apa itu Modul? */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <FileCode
              size={28}
              className="text-teal-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Konsep Modul dalam Python
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <FileCode size={24} className="text-teal-600 mr-2" />
                    <h3 className="font-semibold text-lg text-teal-700">
                      Modul
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        File Python tunggal (
                        <code className="bg-teal-50 px-1 rounded">.py</code>)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Berisi kode yang dapat diimpor</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Menghindari konflik namespace</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Boxes size={24} className="text-blue-600 mr-2" />
                    <h3 className="font-semibold text-lg text-blue-700">
                      Package
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Direktori berisi modul-modul terkait</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Berisi file{' '}
                        <code className="bg-blue-50 px-1 rounded">
                          __init__.py
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Struktur hierarkis untuk organisasi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  Ilustrasi Struktur
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <h4 className="font-medium mb-2 text-teal-700">
                      Contoh Modul
                    </h4>
                    <pre className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      {`# math_utils.py
def add(a, b):
    return a + b
    
PI = 3.14159`}
                    </pre>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <h4 className="font-medium mb-2 text-blue-700">
                      Contoh Package
                    </h4>
                    <pre className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                      {`mypackage/
├── __init__.py
├── module1.py
└── subpackage/
    ├── __init__.py
    └── module2.py`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Menggunakan Modul */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Download
              size={28}
              className="text-teal-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Mengimpor dan Menggunakan Modul
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">
                    Cara Mengimpor
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# Impor seluruh modul
import math
print(math.sqrt(16))  # 4.0

# Impor item spesifik dari modul
from math import sqrt, pi
print(sqrt(16))  # 4.0

# Impor dengan alias
import math as m
print(m.sqrt(16))  # 4.0

# Impor dari subpackage
from package.submodule import function`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-700 border-b pb-2">
                    Contoh Penggunaan
                  </h3>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <pre>
                      {`# File: math_utils.py
def add(a, b):
    return a + b
PI = 3.14159

# File: main.py
import math_utils

# Menggunakan fungsi dari modul
result = math_utils.add(5, 3)  # 8

# Menggunakan variabel dari modul
area = math_utils.PI * 5**2  # 78.53975`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-semibold text-lg mb-2 text-yellow-800">
                  Tips Import
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-yellow-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Letakkan semua import di awal file</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-yellow-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Urutkan import: standard library, third-party, local
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-yellow-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Hindari <code>from module import *</code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-yellow-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Gunakan alias yang bermakna</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Membuat Modul */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Upload
              size={28}
              className="text-teal-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Membuat Modul Sendiri
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-teal-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-teal-700">
                    Langkah-langkah
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Buat file Python baru (.py)</li>
                    <li>Tulis fungsi, kelas, variabel</li>
                    <li>Simpan di lokasi yang dapat diakses</li>
                    <li>Impor dan gunakan dalam script lain</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">
                    Praktik Terbaik
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Gunakan docstring untuk dokumentasi</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Grup fungsi terkait bersama</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Gunakan <code>__all__</code> untuk kontrol ekspor
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                <pre>
                  {`# geometry.py - Modul untuk kalkulasi geometri

"""Modul untuk perhitungan geometri dasar."""

# Konstanta
PI = 3.14159

# Fungsi untuk bentuk persegi
def square_area(side):
    """Menghitung luas persegi."""
    return side ** 2

# Fungsi untuk bentuk lingkaran
def circle_area(radius):
    """Menghitung luas lingkaran."""
    return PI * radius ** 2

# Daftar fungsi yang diekspos saat 'from geometry import *'
__all__ = ['square_area', 'circle_area']

# Kode yang hanya dijalankan saat modul dijalankan langsung
if __name__ == "__main__":
    print(f"Area of square with side 5: {square_area(5)}")`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Menggunakan Standard Library */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers
              size={28}
              className="text-teal-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Modul Standard Library Python
              </h2>
              <p className="text-gray-700 mb-4">
                Python dilengkapi dengan "batteries included" - pustaka standar
                yang kaya.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    math
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Fungsi matematika dan konstanta
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>sqrt(), sin(), cos(), pi</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    random
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Pembangkit angka acak
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>randint(), choice(), shuffle()</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    datetime
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Manipulasi tanggal dan waktu
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>date, time, datetime, timedelta</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    os
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Fungsi sistem operasi
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>path, listdir(), mkdir()</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    json
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Enkode dan dekode JSON
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>dumps(), loads()</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-md mb-2 text-teal-700">
                    re
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Regular expressions
                  </p>
                  <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
                    <code>search(), match(), findall()</code>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre>
                    {`# Contoh modul standard library

# math - operasi matematika
import math
print(math.sqrt(16))       # 4.0

# random - pembangkit angka acak
import random
print(random.randint(1, 10))  # Angka acak 1-10

# datetime - manipulasi tanggal dan waktu
from datetime import datetime
now = datetime.now()       # Waktu saat ini

# os - operasi sistem
import os
files = os.listdir('.')`}{' '}
                    # List file di direktori
                  </pre>
                </div>

                <div className="bg-teal-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-teal-700">
                    Module Selection Tips
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mr-2 flex-shrink-0"
                      />
                      <span>Cek standard library sebelum membuat</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mr-2 flex-shrink-0"
                      />
                      <span>Cek PyPI untuk paket third-party</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mr-2 flex-shrink-0"
                      />
                      <span>Pilih modul yang aktif dikembangkan</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mr-2 flex-shrink-0"
                      />
                      <span>Pertimbangkan kinerja untuk kasus penggunaan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Virtual Environment */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Settings
              size={28}
              className="text-teal-500 mt-1 mr-4 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Virtual Environment dan Package Management
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <h3 className="font-semibold text-lg mb-3 text-gray-100">
                    Membuat Virtual Environment
                  </h3>
                  <pre>
                    {`# Membuat virtual environment
python -m venv myenv

# Aktivasi di Windows
myenv\\Scripts\\activate

# Aktivasi di macOS/Linux
source myenv/bin/activate

# Nonaktifkan
deactivate`}
                  </pre>
                </div>

                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <h3 className="font-semibold text-lg mb-3 text-gray-100">
                    Menggunakan pip
                  </h3>
                  <pre>
                    {`# Menginstal package
pip install package_name

# Melihat package terinstal
pip list

# Menyimpan dependensi
pip freeze > requirements.txt

# Menginstal dari requirements.txt
pip install -r requirements.txt`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-lg mb-2 text-blue-800">
                  Mengapa Menggunakan Virtual Environment?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Mengisolasi dependensi proyek</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Menghindari konflik versi paket</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Memudahkan reproduksi lingkungan</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-blue-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Mendukung kolaborasi tim</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Ringkasan */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Zap size={28} className="text-teal-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ringkasan dan Best Practices
              </h2>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-800">
                  Key Takeaways
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        <strong>Modul</strong> - File Python (.py) dengan kode
                        reusable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        <strong>Import</strong> - Cara menggunakan kode dari
                        modul lain
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        <strong>Packages</strong> - Koleksi modul dalam
                        direktori
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        <strong>Virtual environments</strong> - Isolasi proyek
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-lg mb-3 text-teal-700">
                    Best Practices
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Gunakan nama modul yang deskriptif</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Sertakan docstring untuk dokumentasi</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Gunakan <code>if __name__ == "__main__"</code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Hindari circular imports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
                  <h3 className="font-semibold text-lg mb-3 text-teal-700">
                    Kasus Penggunaan
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Utility Functions - fungsi umum</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>API Wrappers - interface ke API eksternal</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Data Processing - manipulasi data</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight
                        size={18}
                        className="text-teal-500 mt-1 mr-2 flex-shrink-0"
                      />
                      <span>Configuration - pengaturan terpisah</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-teal-700 text-white p-5 rounded-lg">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">
                    Filosofi Python: "Batteries Included"
                  </h3>
                  <p className="text-teal-100 italic">
                    Python hadir dengan library standar yang komprehensif, namun
                    modular
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-teal-600 p-3 rounded">
                    <h4 className="font-medium mb-1">Modularitas</h4>
                    <p className="text-sm text-teal-100">
                      Pecah program jadi bagian kecil
                    </p>
                  </div>
                  <div className="bg-teal-600 p-3 rounded">
                    <h4 className="font-medium mb-1">Reusabilitas</h4>
                    <p className="text-sm text-teal-100">
                      Tulis kode sekali, gunakan di mana saja
                    </p>
                  </div>
                  <div className="bg-teal-600 p-3 rounded">
                    <h4 className="font-medium mb-1">Pemeliharaan</h4>
                    <p className="text-sm text-teal-100">
                      Lebih mudah diperbaiki dan ditingkatkan
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

export default PythonModulesPresentation;
