import { SectionWrapper } from '../SectionWrapper'
import { BookOpen, CheckCircle } from 'lucide-react'
import { InfoBox } from '../InfoBox'

const JavascriptDasar = () => {
    return (
        <>
            <SectionWrapper
                id="dasar-teori"
                title="Dasar Teori"
                icon={<BookOpen className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-6">
                    <InfoBox type="info" title="Apa itu JavaScript?">
                        <p>
                            JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan
                            serbaguna yang memungkinkan Kalian untuk menambahkan
                            interaktivitas ke halaman web. Sejak diciptakan oleh Brendan Eich
                            pada tahun 1995, JavaScript telah menjadi salah satu bahasa
                            pemrograman paling populer di dunia.
                        </p>
                        <p className="mt-2">
                            Menurut survey Stack Overflow Developer Survey 2024, JavaScript
                            tetap menjadi bahasa pemrograman yang paling banyak digunakan
                            untuk tahun kesepuluh berturut-turut, dengan lebih dari 67%
                            developer menggunakannya secara reguler.
                        </p>
                        <p className="mt-2">
                            JavaScript awalnya dikembangkan untuk browser Netscape Navigator
                            dengan nama "Mocha", kemudian diubah menjadi "LiveScript", dan
                            akhirnya menjadi "JavaScript" sebagai strategi pemasaran untuk
                            memanfaatkan popularitas Java pada saat itu.
                        </p>
                    </InfoBox>

                    <div className="overflow-x-auto">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">
                            Karakteristik Utama JavaScript
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
                                        Client-side scripting
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Berjalan di browser pengguna, tidak memerlukan kompilasi
                                    </td>
                                    <td className="px-4 py-2">
                                        <code>
                                            document.getElementById('demo').innerHTML = 'Hello World';
                                        </code>
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
                                            let x = 5; // x adalah number
                                            <br />x = "John"; // sekarang x adalah string
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Berorientasi objek
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Berbasis prototipe alih-alih kelas
                                    </td>
                                    <td className="px-4 py-2">
                                        <code>
                                            <pre>{`
const person = {name: 'John', age: 30};
                  `}</pre>
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Event-driven
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Dapat merespons tindakan pengguna
                                    </td>
                                    <td className="px-4 py-2">
                                        <code>
                                            <pre>{`
button.addEventListener('click', function() {alert('Clicked!'); });
`}</pre>
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        First-class functions
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Fungsi dapat diperlakukan sebagai variabel
                                    </td>
                                    <td className="px-4 py-2">
                                        <code>
                                            <pre>
                                                {`
const greeting = function(name) { return \`Hello ${name}\`; };`}
                                            </pre>
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Engine JavaScript
                        </h3>
                        <p>
                            Engine JavaScript adalah program yang mengeksekusi kode
                            JavaScript. Browser web modern memiliki engine JavaScript
                            terintegrasi.
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>
                                <strong>V8</strong>: Dikembangkan oleh Google, digunakan di
                                Chrome dan Node.js
                            </li>
                            <li>
                                <strong>SpiderMonkey</strong>: Engine pertama, dikembangkan oleh
                                Netscape, sekarang digunakan di Firefox
                            </li>
                            <li>
                                <strong>JavaScriptCore</strong>: Dikembangkan oleh Apple untuk
                                Safari
                            </li>
                            <li>
                                <strong>Chakra</strong>: Dikembangkan oleh Microsoft untuk Edge
                                (versi lama)
                            </li>
                        </ul>
                    </div>

                    {/* Dasar-dasar JavaScript */}
                    <div className="flex flex-col mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Dasar-dasar JavaScript
                        </h3>

                        <div>
                            <p>JavaScript memiliki 3 cara untuk mendeklarasikan variabel:</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>
                                    <code>var</code>: Cara lama, memiliki cakupan fungsi atau
                                    global
                                </li>
                                <li>
                                    <code>let</code>: Diperkenalkan di ES6, memiliki cakupan blok
                                </li>
                                <li>
                                    <code>const</code>: Diperkenalkan di ES6, untuk nilai yang
                                    tidak berubah
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-700">Tipe Data Primitif</h4>
                            <p>
                                Number, String, Boolean, Undefined, Null, Symbol, dan BigInt
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg font-medium text-gray-800">
                            JavaScript modern tidak hanya terbatas pada browser, tetapi telah
                            berkembang menjadi ekosistem lengkap untuk pengembangan berbagai
                            platform:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                            {[
                                {
                                    title: 'Server-side',
                                    tech: 'Node.js, Deno',
                                    color: 'bg-blue-50',
                                },
                                {
                                    title: 'Mobile',
                                    tech: 'React Native, Ionic',
                                    color: 'bg-green-50',
                                },
                                {
                                    title: 'Desktop',
                                    tech: 'Electron, NW.js',
                                    color: 'bg-yellow-50',
                                },
                                {
                                    title: 'IoT',
                                    tech: 'Johnny-Five, Cylon.js',
                                    color: 'bg-purple-50',
                                },
                                { title: 'Game', tech: 'Phaser, Three.js', color: 'bg-red-50' },
                                {
                                    title: 'AI/ML',
                                    tech: 'TensorFlow.js, Brain.js',
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

                    <div className="mt-12">
                        <div className="overflow-x-auto">
                            <h3 className="text-lg font-semibold text-gray-800 my-4">
                                Fitur JavaScript Modern
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
                                            Arrow Functions
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Sintaks ringkas untuk fungsi
                                        </td>
                                        <td className="px-4 py-2">
                                            <code>
                                                <pre>{`
const add = (a, b) => a + b;
`}</pre>
                                            </code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Template Literals
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            String yang mendukung interpolasi
                                        </td>
                                        <td className="px-4 py-2">
                                            <code>
                                                <pre>{`\`Hello, ${name}!\``}</pre>
                                            </code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Destructuring
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Ekstraksi nilai dari objek/array
                                        </td>
                                        <td className="px-4 py-2">
                                            <code>
                                                <pre>{`
const {name, age} = person;
                     `}</pre>
                                            </code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Promises
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Penanganan operasi asinkron
                                        </td>
                                        <td className="px-4 py-2">
                                            <code>
                                                <pre>{`
fetch(url).then(response => response.json())
`}</pre>
                                            </code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Async/Await
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap font-medium">
                                            Sintaks untuk kode asinkron
                                        </td>
                                        <td className="px-4 py-2">
                                            <code>
                                                <pre>{`
async function getData() {... }
`}</pre>
                                            </code>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex flex-col pt-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Document Object Model (DOM)
                        </h3>
                        <p>
                            DOM adalah representasi terstruktur dari dokumen HTML yang
                            memungkinkan JavaScript untuk berinteraksi dengan dan memanipulasi
                            konten halaman web.
                        </p>
                        <div className="mt-2 bg-gray-100 p-3 md:p-5 rounded-md overflow-x-auto">
                            <code className="text-sm md:text-base">
                                <pre className="whitespace-pre-wrap md:whitespace-pre">{`
// Mengakses elemen
const element = document.getElementById('myId');

// Mengubah konten
element.innerHTML = 'New content';

// Menambah event listener
element.addEventListener('click', function() {
alert('Element clicked!');
});
    `}</pre>
                            </code>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mt-8">
                            API Web Modern
                        </h3>
                        <p className="text-lg font-medium text-gray-800">
                            JavaScript modern menawarkan berbagai API Web yang memungkinkan
                            pengembangan aplikasi yang kaya fitur:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                            {[
                                {
                                    title: 'Fetch API',
                                    tech: 'Mengirim permintaan jaringan',
                                    color: 'bg-blue-50',
                                },
                                {
                                    title: 'Web Storage',
                                    tech: 'Menyimpan data di browser',
                                    color: 'bg-green-50',
                                },
                                {
                                    title: 'Geolocation',
                                    tech: 'Mendapatkan lokasi pengguna',
                                    color: 'bg-yellow-50',
                                },
                                {
                                    title: 'Canvas',
                                    tech: 'Menggambar grafik dinamis',
                                    color: 'bg-purple-50',
                                },
                                {
                                    title: 'WebSockets',
                                    tech: 'Komunikasi dua arah real-time',
                                    color: 'bg-red-50',
                                },
                                {
                                    title: 'IndexedDB',
                                    tech: 'Database di sisi klien',
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
                id="prasyarat"
                title="Prasyarat"
                icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Sebelum memulai praktikum ini, pastikan Kalian memiliki pengetahuan
                        dasar tentang:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>HTML dan CSS dasar</li>
                        <li>Konsep logika pemrograman</li>
                        <li>Penggunaan browser modern (Chrome, Firefox, dll.)</li>
                    </ul>
                </div>
            </SectionWrapper>
        </>
    )
}

export default JavascriptDasar