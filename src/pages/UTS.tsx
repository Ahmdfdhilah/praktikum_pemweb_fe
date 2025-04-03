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

export default function UTSReact() {
    return (
        <PraktikumLayout
            title="Ujian Tengah Semester tentang Web Development Menggunakan React JS"
            subtitle="Implementasi komponen, hooks, dan state management dalam aplikasi React"
        >
            <SectionWrapper
                id="komponen-penilaian"
                title="Komponen Penilaian"
                isBordered={false}
                icon={<Target className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Berikut adalah komponen penilaian untuk UTS ini:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Implementasi Komponen (20%)</strong>: Struktur, penggunaan props, dan komposisi komponen yang tepat
                        </li>
                        <li>
                            <strong>Penggunaan Hooks (20%)</strong>: Implementasi React Hooks yang sesuai dengan kebutuhan aplikasi
                        </li>
                        <li>
                            <strong>State Management (15%)</strong>: Pengelolaan state yang efisien dan sesuai dengan kompleksitas aplikasi
                        </li>
                        <li>
                            <strong>Routing (15%)</strong>: Implementasi React Router yang benar untuk navigasi antar halaman
                        </li>
                        <li>
                            <strong>Data Fetching (15%)</strong>: Pengambilan dan pengelolaan data dari API eksternal
                        </li>
                        <li>
                            <strong>Desain UI dan UX (10%)</strong>: Tampilan yang responsif dan user-friendly
                        </li>
                        <li>
                            <strong>Kode yang Bersih dan Terorganisir (5%)</strong>: Struktur folder, penamaan, dan format kode
                        </li>
                        <li>
                            <strong>BONUS (10%)</strong>: Berhasil melakukan deploy di vercel.
                        </li>
                    </ul>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id='deskripsi-tugas'
                title='Deskripsi Tugas'
                isBordered={false}
                icon={<BookOpen className="w-6 h-6 text-blue-500" />}
            >
                <>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Pada UTS ini, Anda akan mengembangkan aplikasi React yang menerapkan berbagai konsep fundamental React seperti komponen, props, state, lifecycle, hooks, routing, dan state management. Fokus utama adalah implementasi fetching data dari API di sisi klien.
                        </p>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Fokus Implementasi</h3>
                            <p className="text-gray-700">
                                Penilaian utama akan difokuskan pada kemampuan aplikasi Anda untuk:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li><strong>Fetching Data:</strong> Mengambil data dari API eksternal menggunakan method HTTP GET</li>
                                <li><strong>State Management:</strong> Mengelola state aplikasi dengan baik (Context API atau Redux)</li>
                                <li><strong>Routing:</strong> Implementasi navigasi antar halaman dengan React Router</li>
                                <li><strong>Component Organization:</strong> Struktur komponen yang rapi dan dapat digunakan kembali</li>
                                <li><strong>UI/UX:</strong> Tampilan yang responsif dan user-friendly</li>
                                <li><strong>Error Handling:</strong> Penanganan error saat fetching data</li>
                                <li><strong>Loading States:</strong> Menampilkan indikator loading saat fetching data</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pilihan API</h3>
                            <p className="text-gray-700">
                                Anda bebas memilih untuk membuat salah satu dari API berikut:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                                <li><strong>Fake Store API:</strong> <code>https://fakestoreapi.com/</code> - Ideal untuk aplikasi e-commerce</li>
                                <li><strong>JSON Placeholder:</strong> <code>https://jsonplaceholder.typicode.com/todos</code> - Cocok untuk task management</li>
                                <li><strong>DummyJSON:</strong> <code>https://dummyjson.com/</code> - Menyediakan data untuk berbagai jenis aplikasi</li>
                                <li><strong>MockAPI.io:</strong> <code>https://mockapi.io/</code> - Untuk membuat API kustom</li>
                                <li><strong>JSON Server:</strong> Untuk membuat API lokal dengan file JSON</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                Semua API di atas mendukung method HTTP GET untuk mengambil data yang diperlukan dalam tugas ini.
                            </p>
                        </div>
                    </div>
                </>
            </SectionWrapper>
            <SectionWrapper
                id="detail-penugasan"
                title="Detail Penugasan"
                isBordered={false}
                icon={<Award className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Implementasi Komponen yang Diharapkan
                    </h3>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">1. Komponen, Props, dan State</h4>
                        <div className="pl-4 border-l-2 border-blue-500 mb-4">
                            <p className="text-gray-700 mb-2">
                                Implementasikan berbagai jenis komponen dengan manajemen props dan state yang sesuai:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                                <li>Minimal 5 komponen fungsional yang berbeda</li>
                                <li>Penggunaan props untuk komunikasi antar komponen</li>
                                <li>Implementasi prop validation dengan PropTypes</li>
                                <li>Pembuatan komponen yang memiliki state lokal</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-3 pl-4">
                            Komponen fungsional adalah standar modern dalam pengembangan React dan memungkinkan penggunaan hooks. Penggunaan props memungkinkan aliran data yang jelas antar komponen, sedangkan PropTypes membantu dokumentasi dan validasi yang lebih baik.
                        </p>

                        <CodeBlock
                            title="Contoh Komponen dengan Props dan PropTypes"
                            code={`import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold">\${product.price}</span>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;`}
                            language="jsx"
                        />
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">2. React Lifecycle dan Hooks</h4>
                        <div className="pl-4 border-l-2 border-green-500 mb-4">
                            <p className="text-gray-700 mb-2">
                                Implementasikan berbagai hooks React untuk mengelola lifecycle dan state:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                                <li>useState untuk state management dalam komponen</li>
                                <li>useEffect untuk side effects dan simulasi lifecycle methods</li>
                                <li>useRef untuk referensi DOM dan nilai yang persisten</li>
                                <li>useCallback untuk memoize functions</li>
                                <li>useMemo untuk memoize nilai-nilai yang membutuhkan komputasi tinggi</li>
                                <li>Minimal 1 custom hook yang Anda buat sendiri</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-3 pl-4">
                            Hooks menyederhanakan logika React dan memungkinkan penggunaan state dan fitur React lainnya tanpa menulis kelas. Hooks juga meningkatkan reusabilitas kode dan membuatnya lebih mudah ditest.
                        </p>

                        <CodeBlock
                            title="Contoh Custom Hook untuk Data Fetching"
                            code={`import { useState, useEffect } from 'react';

// Custom hook untuk fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url]); // Re-run effect if URL changes

  return { data, loading, error };
}

export default useFetch;`}
                            language="jsx"
                        />
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">3. Pengambilan Data (Data Fetching)</h4>
                        <div className="pl-4 border-l-2 border-purple-500 mb-4">
                            <p className="text-gray-700 mb-2">
                                Implementasikan pengambilan data dari API eksternal:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                                <li>Gunakan fetch API atau Axios untuk mengambil data</li>
                                <li>Implementasi loading states saat data sedang diambil</li>
                                <li>Penanganan error yang baik</li>
                                <li>Integrasi data yang diambil dengan state aplikasi</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-3 pl-4">
                            Hampir semua aplikasi modern perlu berkomunikasi dengan API. Pengambilan data yang efisien dan penanganan error yang baik sangat penting untuk pengalaman pengguna yang optimal.
                        </p>

                        <InfoBox type="tip" title="API Gratis untuk Digunakan">
                            <p>
                                Anda dapat menggunakan API gratis yang sudah tertera diatas.
                            </p>
                        </InfoBox>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">4. React Router</h4>
                        <div className="pl-4 border-l-2 border-yellow-500 mb-4">
                            <p className="text-gray-700 mb-2">
                                Implementasikan navigasi dan routing dalam aplikasi:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                                <li>Minimal 3 halaman/rute berbeda</li>
                                <li>Implementasi dynamic routing dengan parameter</li>
                                <li>Penggunaan nested routes (jika sesuai)</li>
                                <li>Navigasi programatis menggunakan hooks dari React Router</li>
                                <li>Implementasi error page untuk rute yang tidak ditemukan</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 mb-3 pl-4">
                            React Router memungkinkan navigasi yang mulus tanpa refresh halaman, yang merupakan salah satu keunggulan utama Single Page Applications (SPA).
                        </p>

                        <CodeBlock
                            title="Contoh Setup React Router"
                            code={`import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;`}
                            language="jsx"
                        />
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">5. State Management</h4>
                        <div className="pl-4 border-l-2 border-red-500 mb-4">
                            <p className="text-gray-700 mb-2">
                                Implementasikan state management sesuai dengan kebutuhan, disertai dengan alasan. Pilihlah di antara pilihan berikut:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <h5 className="font-medium text-blue-800 mb-1">Use Context</h5>
                                    <p className="text-gray-700">
                                        Gunakan Context API jika state bersifat global tetapi tidak sering berubah, seperti tema atau autentikasi.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <h5 className="font-medium text-blue-800 mb-1">Use Reducer</h5>
                                    <p className="text-gray-700">
                                        Gunakan useReducer jika state memiliki logika perubahan yang kompleks dalam satu komponen atau sekelompok kecil komponen.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                    <h5 className="font-medium text-green-800 mb-1">Use Redux</h5>
                                    <p className="text-gray-700">
                                        Gunakan Redux Toolkit jika aplikasi memiliki state yang besar, sering berubah, dan digunakan di banyak komponen secara luas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SubmissionLink href="https://forms.gle/rDGk3s8psbq3edxv9"></SubmissionLink>
                </div>
            </SectionWrapper>
            <SectionWrapper
                id="rekomendasi-api"
                isBordered={false}
                title="Rekomendasi API dan Tips Penggunaan"
                icon={<Target className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Berikut adalah rekomendasi API gratis yang dapat digunakan untuk pengembangan aplikasi React, baik untuk Task Management System maupun E-Commerce Product Catalog.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Fake Store API</h3>
                    <p className="text-gray-700">
                        API ini ideal untuk aplikasi e-commerce dengan data produk lengkap.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                        <li>URL: <code>https://fakestoreapi.com/</code></li>
                        <li>Mendapatkan semua produk: <code>GET https://fakestoreapi.com/products</code></li>
                        <li>Mendapatkan produk berdasarkan ID: <code>GET https://fakestoreapi.com/products/1</code></li>
                        <li>Filter berdasarkan kategori: <code>GET https://fakestoreapi.com/products/category/electronics</code></li>
                    </ul>

                    <InfoBox type="tip">
                        <p>
                            <strong>Tips Penggunaan:</strong> Gunakan <code>useEffect</code> untuk memanggil API saat komponen dimuat dan <code>useState</code> untuk menyimpan data produk.
                            Contoh: <code>{`useEffect(() => { fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProducts(data)) }, [])`}</code>
                        </p>
                    </InfoBox>

                    <CodeBlock
                        title="Contoh Fetch Fake Store API"
                        code={`import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk fetch data
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h3 className="font-bold mt-2">{product.title}</h3>
          <p className="text-green-600 font-bold">\${product.price}</p>
          <p>{product.category}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}`}
                        language="jsx"
                    />

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">2. JSON Placeholder</h3>
                    <p className="text-gray-700">
                        API sederhana yang cocok untuk task management dengan operasi dasar.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                        <li>URL: <code>https://jsonplaceholder.typicode.com/</code></li>
                        <li>Mendapatkan semua tugas: <code>GET https://jsonplaceholder.typicode.com/todos</code></li>
                        <li>Mendapatkan tugas berdasarkan ID: <code>GET https://jsonplaceholder.typicode.com/todos/1</code></li>
                        <li>Filter berdasarkan user: <code>GET https://jsonplaceholder.typicode.com/todos?userId=1</code></li>
                    </ul>

                    <InfoBox type="tip">
                        <p>
                            <strong>Tips Penggunaan:</strong> Meskipun API ini mendukung POST/PUT/DELETE, perubahan tidak disimpan secara permanen di server. Gunakan <code>Context API</code> atau <code>Redux</code> untuk menyimpan state aplikasi.
                        </p>
                    </InfoBox>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">3. DummyJSON</h3>
                    <p className="text-gray-700">
                        API dengan data dummy yang kaya dan mendukung banyak endpoint.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                        <li>URL: <code>https://dummyjson.com/</code></li>
                        <li>Produk: <code>GET https://dummyjson.com/products</code></li>
                        <li>Keranjang: <code>GET https://dummyjson.com/carts</code></li>
                        <li>Pencarian produk: <code>GET https://dummyjson.com/products/search?q=phone</code></li>
                        <li>Filter berdasarkan kategori: <code>GET https://dummyjson.com/products/category/smartphones</code></li>
                    </ul>

                    <InfoBox type="tip">
                        <p>
                            <strong>Tips Penggunaan:</strong> DummyJSON mendukung pagination dengan parameter <code>limit</code> dan <code>skip</code>.
                            Contoh: <code>GET https://dummyjson.com/products?limit=10&skip=10</code> untuk halaman kedua.
                        </p>
                    </InfoBox>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">4. MockAPI.io</h3>
                    <p className="text-gray-700">
                        Platform untuk membuat dan mengelola API palsu kustom.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>URL: <code>https://mockapi.io/</code></li>
                        <li>Memungkinkan pembuatan struktur data sendiri</li>
                        <li>Mendukung semua operasi CRUD</li>
                        <li>Data disimpan secara persisten</li>
                    </ul>

                    <InfoBox type="tip">
                        <p>
                            <strong>Tips Penggunaan:</strong> Daftar akun gratis, buat project baru, definisikan resource (seperti "tasks" atau "products"), dan gunakan endpoint yang dihasilkan. Ideal untuk menyimpan perubahan selama pengembangan.
                        </p>
                    </InfoBox>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">5. JSON Server (Local Development)</h3>
                    <p className="text-gray-700">
                        Tool untuk membuat REST API lokal menggunakan file JSON.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 overflow-x-scroll">
                        <li>Instalasi: <code>npm install -g json-server</code></li>
                        <li>Buat file <code>db.json</code> dengan data Anda</li>
                        <li>Jalankan: <code>json-server --watch db.json --port 3001</code></li>
                    </ul>

                    <CodeBlock
                        title="Contoh file db.json"
                        code={`{
  "tasks": [
    { "id": 1, "title": "Learn React", "completed": false },
    { "id": 2, "title": "Build Task App", "completed": false }
  ],
  "products": [
    { "id": 1, "title": "Smartphone", "price": 499, "category": "electronics" },
    { "id": 2, "title": "Laptop", "price": 999, "category": "electronics" }
  ]
}`}
                        language="json"
                    />

                    <InfoBox type="tip">
                        <p>
                            <strong>Tips Penggunaan:</strong> JSON Server ideal untuk pengembangan lokal dan pengujian karena data akan disimpan di file local. Tambahkan delay dengan <code>--delay 1000</code> untuk mensimulasikan jaringan lambat dan menguji loading state.
                        </p>
                    </InfoBox>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Tips Umum Penggunaan API</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll">
                        <li><strong>Gunakan Custom Hook:</strong> Buat hook seperti <code>useFetch</code> untuk mengelola pemanggilan API dan status loading/error.</li>
                        <li><strong>Implementasikan Caching:</strong> Gunakan state management untuk menyimpan respons API, mengurangi permintaan berulang.</li>
                        <li><strong>Error Handling:</strong> Selalu tangani kemungkinan error dan tampilkan pesan yang sesuai kepada pengguna.</li>
                        <li><strong>Loading States:</strong> Tampilkan spinner atau skeleton loader saat menunggu respons API.</li>
                        <li><strong>Debouncing:</strong> Untuk fitur pencarian, terapkan debouncing untuk mengurangi permintaan API.</li>
                    </ul>

                    <CodeBlock
                        title="Contoh Custom Hook useFetch"
                        code={`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: abortController.signal });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}

// Penggunaan:
// const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');`}
                        language="jsx"
                    />
                </div>
            </SectionWrapper>


            <SectionWrapper
                id="prasyarat"
                title="Prasyarat"
                isBordered={false}
                icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Sebelum mengerjakan UTS ini, pastikan Anda telah memahami dan menguasai:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll">
                        <li>
                            <strong>Dasar JavaScript Modern</strong>: Arrow functions, destructuring, spread operator, dan konsep ES6 lainnya
                        </li>
                        <li>
                            <strong>Fundamental React</strong>: JSX, komponen, props, dan state
                        </li>
                        <li>
                            <strong>Node.js dan npm/yarn</strong>: Instalasi dan penggunaan package manager
                        </li>
                        <li>
                            <strong>Git</strong>: Dasar-dasar version control untuk mengumpulkan tugas
                        </li>
                    </ul>

                    <InfoBox type="tip" title="Persiapan">
                        <p>
                            Sebelum memulai, pastikan Anda telah menginstal Node.js versi terbaru dan create-react-app atau Vite untuk membuat proyek React baru dengan mudah.
                        </p>
                    </InfoBox>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="alat-bahan"
                title="Alat dan Bahan"
                isBordered={false}
                icon={<Layers className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Untuk mengikuti praktikum ini, Kalian memerlukan:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll">
                        <li>
                            <strong>Browser Web</strong>: Chrome, Firefox, atau Edge
                        </li>
                        <li>
                            <strong>Code Editor</strong>: Visual Studio Code dengan ekstensi ES7+ React/Redux/React-Native snippets
                        </li>
                        <li>
                            <strong>Node.js dan npm</strong>: Versi terbaru untuk mengelola paket
                        </li>
                        <li>
                            <strong>Git</strong>: Untuk version control dan pengumpulan tugas
                        </li>
                        <li>
                            <strong>React Developer Tools</strong>: Ekstensi browser untuk debugging
                        </li>
                    </ul>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Paket dan Library yang Dibutuhkan:
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll">
                            <li>
                                <strong>React</strong>: Library utama
                            </li>
                            <li>
                                <strong>React Router</strong>: Untuk navigasi antar halaman
                            </li>
                            <li>
                                <strong>Axios</strong>: Untuk mengambil data dari API (opsional: bisa menggunakan fetch API)
                            </li>
                            <li>
                                <strong>Styling</strong>: CSS, Tailwind CSS, atau library styling lainnya
                            </li>
                        </ul>
                    </div>

                    <InfoBox type="tip" title="Rekomendasi">
                        <p>
                            Kami menyarankan menggunakan Visual Studio Code dengan ekstensi
                            JavaScript (ES6) code snippets, ESLint, dan Prettier untuk pengalaman
                            pengembangan yang lebih baik.
                        </p>
                    </InfoBox>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="tutorial-hosting-react-di-vercel"
                title="Tutorial Hosting React di Vercel"
                isBordered={false}
                icon={<PlayCircle className="w-6 h-6 text-blue-500" />}
            >
                <StepGuide
                    steps={[
                        {
                            id: 1,
                            title: 'Persiapan Project untuk Deployment',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Pastikan project React Anda sudah siap untuk di-deploy dengan memperhatikan hal-hal berikut:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 overflow-x-scroll">
                                        <li>Project telah berjalan tanpa error di lingkungan development</li>
                                        <li>Package.json sudah berisi script build yang benar</li>
                                        <li>Environment variables sudah dikonfigurasi dengan benar</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            id: 2,
                            title: 'Membuat Akun dan Repositori GitHub',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Sebelum deploy ke Vercel, Anda memerlukan repositori GitHub:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                        <li>Buat akun GitHub jika belum memiliki</li>
                                        <li>Buat repositori baru sesuai format pengumpulan</li>
                                        <li>Push project React Anda ke repositori tersebut</li>
                                    </ol>

                                    <CodeBlock
                                        title="Push ke GitHub"
                                        code={`# Inisialisasi Git di folder project
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit"

# Tambahkan remote repository baru di github
git remote add origin https://github.com/username/uts_pemrograman_web_[NIM].git

# Push ke branch main
git push -u origin main`}
                                        language="bash"
                                    />

                                    <InfoBox type="info">
                                        <p>
                                            Pastikan Anda mengganti <code className="bg-gray-100 px-1 py-0.5 rounded">username</code> dan <code className="bg-gray-100 px-1 py-0.5 rounded">[NIM]</code> dengan username GitHub dan NIM Anda.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 3,
                            title: 'Mendaftar dan Connect ke Vercel',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Langkah-langkah untuk mendaftar dan connect ke Vercel:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                        <li>Kunjungi <a href="https://vercel.com/" className="text-blue-600 hover:underline">vercel.com</a> dan daftar dengan GitHub</li>
                                        <li>Setelah login, klik "Add New..." dan pilih "Project"</li>
                                        <li>Pilih repositori GitHub yang berisi project React Anda</li>
                                        <li>Vercel akan otomatis mendeteksi bahwa ini adalah project React</li>
                                    </ol>

                                    <InfoBox type="tip" title="Tip">
                                        <p>
                                            Vercel secara otomatis mendeteksi framework yang Anda gunakan. Untuk project React, Anda biasanya tidak perlu mengubah konfigurasi default.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 4,
                            title: 'Konfigurasi Project',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Konfigurasikan project Anda sebelum deployment:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                        <li>Pada halaman konfigurasi, verifikasi Build and Output Settings</li>
                                        <li>Tambahkan Environment Variables jika diperlukan</li>
                                        <li>Konfigurasi pengaturan domain jika Anda ingin menggunakan domain kustom</li>
                                    </ol>

                                    <InfoBox type="warning" title="Perhatian">
                                        <p>
                                            Untuk aplikasi React yang menggunakan React Router dengan mode browser history, Anda perlu menambahkan file <code className="bg-gray-100 px-1 py-0.5 rounded">vercel.json</code> di root project:
                                        </p>
                                    </InfoBox>

                                    <CodeBlock
                                        title="vercel.json"
                                        code={`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}
                                        language="json"
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 5,
                            title: 'Deploy Project',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Langkah terakhir untuk deploy project:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                                        <li>Klik tombol "Deploy" untuk memulai proses deployment</li>
                                        <li>Vercel akan melakukan proses build dan deployment</li>
                                        <li>Setelah selesai, Anda akan mendapatkan URL untuk aplikasi yang sudah di-deploy</li>
                                    </ol>

                                    <InfoBox type="success" title="Continuous Deployment">
                                        <p>
                                            Setiap kali Anda push perubahan ke repositori GitHub, Vercel akan otomatis men-deploy perubahan tersebut. Ini disebut Continuous Deployment (CD).
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        }
                    ]}
                />
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
                                <li>Buat repository dengan format: <code className="bg-gray-100 px-2 py-1 rounded">uts_pemrograman_web_[NIM]</code></li>
                                <li>Contoh: <code className="bg-gray-100 px-2 py-1 rounded">uts_pemrograman_web_119140001</code></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Struktur Folder:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Setiap folder berisi folder  aplikasi  react</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Deadline Pengumpulan:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Deadline: <span className="font-medium">Minggu, 23 Maret 2025, pukul 23:59 WIB</span></li>
                                <li>Keterlambatan pengumpulan akan dikenakan pengurangan nilai sebesar 10% per hari</li>
                            </ul>
                        </div>
                    </div>
                </SectionWrapper>
                <SubmissionLink href="https://forms.gle/rDGk3s8psbq3edxv9"></SubmissionLink>
            </SectionWrapper>
        </PraktikumLayout>
    );
}
