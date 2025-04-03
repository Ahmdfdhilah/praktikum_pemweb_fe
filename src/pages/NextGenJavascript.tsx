import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import { CodeBlock } from '@/components/praktikum/CodeBlock';
import { StepGuide } from '@/components/praktikum/StepGuide';
import { InfoBox } from '@/components/praktikum/InfoBox';
import { SubmissionLink } from '@/components/praktikum/SubmissionLink';

import {
    Target,
    PlayCircle,
    Layers,
    BookOpen,
    CheckCircle,
    Award,
    FolderTree,
} from 'lucide-react';


export default function JavaScriptNextGen() {
    return (
        <PraktikumLayout
            title="Praktikum JavaScript Next Gen"
            subtitle="Mengenal fitur modern JavaScript (ES6+) dan penerapannya dalam pengembangan web"
        >
            <SectionWrapper
                id="tujuan"
                title="Tujuan Praktikum"
                icon={<Target className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Setelah menyelesaikan praktikum ini, Kalian diharapkan mampu:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            Memahami fitur-fitur modern JavaScript (ES6+)
                        </li>
                        <li>
                            Menguasai penggunaan let dan const untuk deklarasi variabel
                        </li>
                        <li>
                            Mengimplementasikan arrow functions dalam kode JavaScript
                        </li>
                        <li>
                            Menerapkan destructuring, rest dan spread operators
                        </li>
                        <li>
                            Menggunakan template literals dengan efektif
                        </li>
                        <li>
                            Mengenal dan mengimplementasikan modules dan import/export
                        </li>
                        <li>
                            Menguasai metode array modern dan higher-order functions
                        </li>
                        <li>
                            Menggunakan Promise dan async/await untuk operasi asinkron
                        </li>
                    </ul>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="pengenalan"
                title="Pengenalan JavaScript Next Gen"
                icon={<BookOpen className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        JavaScript Next Gen mengacu pada fitur-fitur modern dari JavaScript yang diperkenalkan dalam ECMAScript 2015 (ES6) dan versi-versi berikutnya. Fitur-fitur ini telah merevolusi cara pengembang menulis kode JavaScript, membuat kode menjadi lebih bersih, ekspresif, dan mudah dipelihara.
                    </p>

                    <p className="text-gray-700">
                        Beberapa fitur utama yang akan kita pelajari dalam praktikum ini:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Let dan Const</strong>: Cara baru untuk mendeklarasikan variabel dengan scope yang lebih baik</li>
                        <li><strong>Arrow Functions</strong>: Sintaks yang lebih ringkas untuk mendefinisikan fungsi</li>
                        <li><strong>Template Literals</strong>: Cara baru untuk membuat string dengan interpolasi</li>
                        <li><strong>Destructuring</strong>: Ekstraksi nilai dari array dan objek dengan cara yang efisien</li>
                        <li><strong>Spread dan Rest Operators</strong>: Cara baru untuk bekerja dengan array dan objek</li>
                        <li><strong>Default Parameters</strong>: Nilai default untuk parameter fungsi</li>
                        <li><strong>Classes</strong>: Sintaks berorientasi objek untuk JavaScript</li>
                        <li><strong>Modules</strong>: Sistem untuk mengimpor dan mengekspor kode</li>
                        <li><strong>Promise dan Async/Await</strong>: Cara baru untuk menangani operasi asinkron</li>
                    </ul>

                    <InfoBox type="info" title="JavaScript Compatibility">
                        <p>
                            Meskipun sebagian besar browser modern telah mendukung fitur ES6+, beberapa browser lama mungkin tidak mendukungnya. Dalam lingkungan produksi, sering digunakan transpiler seperti Babel untuk mengkonversi kode ES6+ menjadi ES5 yang memiliki kompatibilitas lebih luas.
                        </p>
                    </InfoBox>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="alat-bahan"
                title="Alat dan Bahan"
                icon={<Layers className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Untuk mengikuti praktikum ini, Kalian memerlukan:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Browser Web</strong>: Chrome, Firefox, atau Edge (versi terbaru)
                        </li>
                        <li>
                            <strong>Code Editor</strong>: Visual Studio Code, Sublime Text, atau editor kode lainnya
                        </li>
                        <li>
                            <strong>Node.js</strong>: (Opsional) Untuk menjalankan JavaScript di luar browser
                        </li>
                    </ul>

                    <InfoBox type="tip" title="Rekomendasi">
                        <p>
                            Kami menyarankan menggunakan Visual Studio Code dengan ekstensi-ekstensi berikut untuk pengalaman pengembangan yang lebih baik:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>ESLint - Untuk membantu menemukan dan memperbaiki masalah dalam kode JavaScript</li>
                            <li>Prettier - Untuk memformat kode secara otomatis</li>
                            <li>JavaScript (ES6) code snippets - Untuk mempercepat penulisan kode ES6</li>
                            <li>LiveServer - Untuk melihat perubahan langsung di browser</li>
                        </ul>
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
                            title: 'Membuat Project dan Struktur File',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Pertama, buat direktori project baru dengan struktur file berikut:
                                    </p>

                                    <CodeBlock
                                        title="Struktur Direktori"
                                        code={`project-js-nextgen/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── modules/
│   │   ├── utils.js
│   │   └── data.js
│   └── app.js`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Buat file <code className="bg-gray-100 px-1 py-0.5 rounded">index.html</code> dengan konten dasar:
                                    </p>

                                    <CodeBlock
                                        title="index.html"
                                        code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Next Gen</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <header class="mb-8">
            <h1 class="text-3xl font-bold text-blue-600 mb-2">JavaScript Next Gen Praktikum</h1>
            <p class="text-gray-600">Belajar fitur modern JavaScript (ES6+)</p>
        </header>
        
        <main class="bg-white p-6 rounded-lg shadow-md">
            <div id="output" class="space-y-4">
                <!-- Output akan ditampilkan di sini -->
            </div>
            
            <div class="flex space-x-4 mt-8">
                <button id="runBtn" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Run Demo
                </button>
                <button id="clearBtn" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                    Clear Output
                </button>
            </div>
        </main>
    </div>

    <!-- Type module penting untuk mendukung ES modules -->
    <script type="module" src="js/main.js"></script>
</body>
</html>`}
                                        language="html"
                                    />

                                    <p className="text-gray-700">
                                        Buat file CSS dasar:
                                    </p>

                                    <CodeBlock
                                        title="css/style.css"
                                        code={`.output-item {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.375rem;
}

.output-item:nth-child(odd) {
    background-color: #f3f4f6;
}

.output-item:nth-child(even) {
    background-color: #e5e7eb;
}

.output-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1e40af;
}

.code {
    font-family: monospace;
    background-color: #f1f5f9;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
}

.result {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #dbeafe;
    border-radius: 0.25rem;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Buat file JavaScript utama:
                                    </p>

                                    <CodeBlock
                                        title="js/main.js"
                                        code={`// Import dari module lain
import { formatDate, capitalizeString } from './modules/utils.js';
import { sampleData } from './modules/data.js';

// DOM elements
const outputElement = document.getElementById('output');
const runButton = document.getElementById('runBtn');
const clearButton = document.getElementById('clearBtn');

// Fungsi untuk menambahkan output ke DOM
function addOutput(title, code, result) {
    const outputItem = document.createElement('div');
    outputItem.className = 'output-item';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'output-title';
    titleEl.textContent = title;
    
    const codeEl = document.createElement('div');
    codeEl.className = 'code';
    codeEl.textContent = code;
    
    const resultEl = document.createElement('div');
    resultEl.className = 'result';
    
    if (typeof result === 'object') {
        resultEl.textContent = JSON.stringify(result, null, 2);
    } else {
        resultEl.textContent = result;
    }
    
    outputItem.appendChild(titleEl);
    outputItem.appendChild(codeEl);
    outputItem.appendChild(resultEl);
    
    outputElement.appendChild(outputItem);
}

// Event listener untuk tombol Run
runButton.addEventListener('click', () => {
    clearOutput();
    runAllDemos();
});

// Event listener untuk tombol Clear
clearButton.addEventListener('click', clearOutput);

function clearOutput() {
    outputElement.innerHTML = '';
}

// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
    // Demo akan diimplementasikan pada langkah berikutnya
    console.log('Demo akan dijalankan di sini');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Next Gen Demo Ready!');
});;`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Buat modul utils:
                                    </p>

                                    <CodeBlock
                                        title="js/modules/utils.js"
                                        code={`// Utility functions

// Format date to locale string
export function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Capitalize first letter of each word
export function capitalizeString(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Calculate years between dates
export function calculateYears(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const yearDiff = end.getFullYear() - start.getFullYear();
    
    // Adjust for months and days
    if (
        end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
    ) {
        return yearDiff - 1;
    }
    
    return yearDiff;
}`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Buat modul data:
                                    </p>

                                    <CodeBlock
                                        title="js/modules/data.js"
                                        code={`// Sample data for demos

export const sampleData = {
    users: [
        {
            id: 1,
            name: "john doe",
            email: "johndoe@example.com",
            age: 28,
            joinDate: "2022-03-15",
            active: true,
            skills: ["JavaScript", "React", "Node.js"]
        },
        {
            id: 2,
            name: "jane smith",
            email: "janesmith@example.com",
            age: 32,
            joinDate: "2021-11-07",
            active: true,
            skills: ["Python", "Django", "JavaScript"]
        },
        {
            id: 3,
            name: "bob johnson",
            email: "bobjohnson@example.com",
            age: 24,
            joinDate: "2023-01-20",
            active: false,
            skills: ["Java", "Spring", "SQL"]
        },
        {
            id: 4,
            name: "alice williams",
            email: "alicewilliams@example.com",
            age: 35,
            joinDate: "2020-09-30",
            active: true,
            skills: ["JavaScript", "Vue", "CSS", "HTML"]
        },
        {
            id: 5,
            name: "charlie brown",
            email: "charliebrown@example.com",
            age: 22,
            joinDate: "2023-04-10",
            active: false,
            skills: ["PHP", "Laravel", "MySQL"]
        }
    ],
    products: [
        { id: 1, name: "Laptop", price: 12000000, stock: 15 },
        { id: 2, name: "Smartphone", price: 5000000, stock: 25 },
        { id: 3, name: "Headphones", price: 800000, stock: 30 },
        { id: 4, name: "Monitor", price: 2500000, stock: 10 },
        { id: 5, name: "Keyboard", price: 350000, stock: 20 }
    ]
};`}
                                        language="javascript"
                                    />

                                    <InfoBox type="tip">
                                        <p>
                                            Memahami struktur proyek yang baik akan membantu Anda mengelola kode JavaScript modern dengan lebih terstruktur. Penggunaan modules memungkinkan pemisahan kode yang lebih baik dan lebih maintainable.
                                        </p>
                                    </InfoBox>

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
                        Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya
                        telah:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Memahami perbedaan</strong> <code>let</code>, <code>const</code>, dan <code>var</code> beserta scope-nya.</li>
                        <li><strong>Menggunakan</strong> arrow function untuk penulisan fungsi yang lebih ringkas.</li>
                        <li><strong>Menerapkan</strong> template literals untuk string dinamis dan multi-baris.</li>
                        <li><strong>Mengaplikasikan</strong> destructuring pada objek dan array.</li>
                        <li><strong>Memanfaatkan</strong> spread operator (<code>...</code>) dan rest parameter.</li>
                        <li><strong>Menambahkan</strong> default parameter pada fungsi.</li>
                        <li><strong>Membuat class</strong> dengan sintaks ES6 dan <code>inheritance</code> (<code>extends</code>).</li>
                        <li><strong>Menggunakan</strong> enhanced object literals (shorthand property/method).</li>
                        <li><strong>Memisahkan kode</strong> dengan module system (<code>import/export</code>).</li>
                        <li><strong>Mengimplementasikan</strong> array modern methods (<code>map</code>, <code>filter</code>, <code>reduce</code>, dll.).</li>
                        <li><strong>Menangani</strong> operasi asinkron dengan <code>Promise</code> dan <code>async/await</code>.</li>
                        <li><strong>Membuat proyek</strong> dengan struktur folder modular.</li>
                        <li><strong>Menghubungkan</strong> file HTML dengan JavaScript modern (<code>type="module"</code>).</li>
                        <li><strong>Memanipulasi DOM</strong> menggunakan sintaks ES6+.</li>
                        <li><strong>Mengambil data eksternal</strong> via <code>Fetch API</code>.</li>
                    </ul>
                </div>
            </SectionWrapper>

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
                            <li>Buat repository dengan format: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_[NIM]</code></li>
                            <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_119140001</code></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Struktur Folder:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Buat folder per pertemuan dengan format: <code className="bg-gray-100 px-2 py-1 rounded">[NAMA]_[NIM]_pertemuan[X]</code></li>
                            <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">johndoe_119140001_pertemuan3</code></li>
                            <li>Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Deadline Pengumpulan:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Deadline: <span className="font-medium">-</span></li>
                            <li>Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="tugas-praktikum"
                title="Tugas Praktikum"
                icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
            >

                {/* Tugas*/}
                <div className="border rounded-lg p-6 bg-white shadow-sm mb-8">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Tugas: Aplikasi Personal Dashboard</h3>

                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Buatlah aplikasi personal dashboard sederhana yang menampilkan informasi yang Kalian pilih sendiri
                            (misalnya jadwal kuliah, daftar tugas, catatan, atau informasi cuaca/waktu).
                        </p>

                        <div className="mt-6">
                            <h4 className="font-medium text-gray-800 mb-2">Persyaratan:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Interaktif:</strong> Pengguna harus dapat menambah, mengedit, atau menghapus informasi</li>
                                <li><strong>Penyimpanan Lokal:</strong> Gunakan localStorage untuk menyimpan data pengguna</li>
                                <li><strong>Fitur ES6+ Wajib:</strong>
                                    <ul className="list-circle pl-6 mt-1">
                                        <li>Gunakan <code>let</code> dan <code>const</code> secara tepat untuk deklarasi variabel</li>
                                        <li>Implementasikan minimal 3 arrow functions</li>
                                        <li>Gunakan template literals untuk rendering dinamis</li>
                                        <li>Gunakan Fungsi Asinkron (Pilih salah satu Async Await atau Promises) </li>
                                        <li>Ada implementasi Classes</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <InfoBox type="tip" title="Tantangan Kreatif">
                            <p>
                                Daripada membuat aplikasi generik, pikirkan kebutuhan spesifik Kalian sebagai mahasiswa.
                                Aplikasi apa yang akan membantu produktivitas atau organisasi Kalian sehari-hari?
                            </p>
                        </InfoBox>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-800 mb-2">Dokumentasi yang Diperlukan di Readme:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Penjelasan singkat tentang fungsi aplikasi dan fitur-fiturnya</li>
                                <li>Screenshot aplikasi yang sudah jadi</li>
                                <li>Daftar fitur ES6+ yang diimplementasikan</li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <SubmissionLink
                        title="Submit Tugas Praktikum 2"
                        href='#'
                    />
                </div>
            </SectionWrapper>
            <SectionWrapper
                id="hasil-praktikum"
                title="Hasil Praktikum"
                icon={<Award className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Setelah menyelesaikan semua langkah praktikum, Kalian seharusnya
                        telah:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Memahami perbedaan</strong> <code>let</code>, <code>const</code>, dan <code>var</code> beserta scope-nya.</li>
                        <li><strong>Menggunakan</strong> arrow function untuk penulisan fungsi yang lebih ringkas.</li>
                        <li><strong>Menerapkan</strong> template literals untuk string dinamis dan multi-baris.</li>
                        <li><strong>Mengaplikasikan</strong> destructuring pada objek dan array.</li>
                        <li><strong>Memanfaatkan</strong> spread operator (<code>...</code>) dan rest parameter.</li>
                        <li><strong>Menambahkan</strong> default parameter pada fungsi.</li>
                        <li><strong>Membuat class</strong> dengan sintaks ES6 dan <code>inheritance</code> (<code>extends</code>).</li>
                        <li><strong>Menggunakan</strong> enhanced object literals (shorthand property/method).</li>
                        <li><strong>Memisahkan kode</strong> dengan module system (<code>import/export</code>).</li>
                        <li><strong>Mengimplementasikan</strong> array modern methods (<code>map</code>, <code>filter</code>, <code>reduce</code>, dll.).</li>
                        <li><strong>Menangani</strong> operasi asinkron dengan <code>Promise</code> dan <code>async/await</code>.</li>
                        <li><strong>Membuat proyek</strong> dengan struktur folder modular.</li>
                        <li><strong>Menghubungkan</strong> file HTML dengan JavaScript modern (<code>type="module"</code>).</li>
                        <li><strong>Memanipulasi DOM</strong> menggunakan sintaks ES6+.</li>
                        <li><strong>Mengambil data eksternal</strong> via <code>Fetch API</code>.</li>
                    </ul>
                </div>
            </SectionWrapper>

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
                            <li>Buat repository dengan format: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_[NIM]</code></li>
                            <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">pemrograman_web_itera_119140001</code></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Struktur Folder:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Buat folder per pertemuan dengan format: <code className="bg-gray-100 px-2 py-1 rounded">[NAMA]_[NIM]_pertemuan[X]</code></li>
                            <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">johndoe_119140001_pertemuan3</code></li>
                            <li>Setiap folder berisi semua file praktikum dan tugas untuk pertemuan tersebut</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Deadline Pengumpulan:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Deadline: <span className="font-medium">-</span></li>
                            <li>Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="tugas-praktikum"
                title="Tugas Praktikum"
                icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
            >

                {/* Tugas*/}
                <div className="border rounded-lg p-6 bg-white shadow-sm mb-8">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Tugas: Aplikasi Personal Dashboard</h3>

                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Buatlah aplikasi personal dashboard sederhana yang menampilkan informasi yang Kalian pilih sendiri
                            (misalnya jadwal kuliah, daftar tugas, catatan, atau informasi cuaca/waktu).
                        </p>

                        <div className="mt-6">
                            <h4 className="font-medium text-gray-800 mb-2">Persyaratan:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Interaktif:</strong> Pengguna harus dapat menambah, mengedit, atau menghapus informasi</li>
                                <li><strong>Penyimpanan Lokal:</strong> Gunakan localStorage untuk menyimpan data pengguna</li>
                                <li><strong>Fitur ES6+ Wajib:</strong>
                                    <ul className="list-circle pl-6 mt-1">
                                        <li>Gunakan <code>let</code> dan <code>const</code> secara tepat untuk deklarasi variabel</li>
                                        <li>Implementasikan minimal 3 arrow functions</li>
                                        <li>Gunakan template literals untuk rendering dinamis</li>
                                        <li>Gunakan Fungsi Asinkron (Pilih salah satu Async Await atau Promises) </li>
                                        <li>Ada implementasi Classes</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <InfoBox type="tip" title="Tantangan Kreatif">
                            <p>
                                Daripada membuat aplikasi generik, pikirkan kebutuhan spesifik Kalian sebagai mahasiswa.
                                Aplikasi apa yang akan membantu produktivitas atau organisasi Kalian sehari-hari?
                            </p>
                        </InfoBox>

                        <div className="mt-6">
                            <h4 className="font-medium text-gray-800 mb-2">Kriteria Penilaian:</h4>
                            <table className="min-w-full border border-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Aspek</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Bobot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="px-4 py-2">Fungsionalitas dan interaktivitas aplikasi</td>
                                        <td className="px-4 py-2">30%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200 bg-gray-50">
                                        <td className="px-4 py-2">Implementasi fitur ES6+</td>
                                        <td className="px-4 py-2">25%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="px-4 py-2">Penggunaan localStorage dan pengelolaan data</td>
                                        <td className="px-4 py-2">20%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200 bg-gray-50">
                                        <td className="px-4 py-2">Desain UI dan UX</td>
                                        <td className="px-4 py-2">15%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="px-4 py-2">Dokumentasi dan kerapian kode</td>
                                        <td className="px-4 py-2">10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-800 mb-2">Dokumentasi yang Diperlukan di Readme:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>Penjelasan singkat tentang fungsi aplikasi dan fitur-fiturnya</li>
                                <li>Screenshot aplikasi yang sudah jadi</li>
                                <li>Daftar fitur ES6+ yang diimplementasikan</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <SubmissionLink
                        title="Submit Tugas Praktikum 2"
                        href='#'
                    />
                </div>
            </SectionWrapper>

        </PraktikumLayout>
    )
};