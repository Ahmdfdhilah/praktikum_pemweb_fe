import React from 'react';
import { Code, RefreshCw, Layers, Database, ArrowRight, Check } from 'lucide-react';

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

interface ComparisonTableProps {
    title: string;
    headers: string[];
    rows: (string | number)[][];
  }
  
  const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, headers, rows }) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {headers.map((header, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-2 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  interface StateManagementCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    pros: string[];
    cons: string[];
    renderingImpact: string;
  }
  
  const StateManagementCard: React.FC<StateManagementCardProps> = ({
    title,
    icon,
    description,
    pros,
    cons,
    renderingImpact,
  }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-3">{title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Kelebihan:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Kekurangan:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Dampak pada Rendering:</h4>
          <p className="text-gray-700">{renderingImpact}</p>
        </div>
      </div>
    );
  };
  
const ReactRenderingPresentation = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            React Rendering & State Management
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <RefreshCw size={28} className="text-blue-500 mr-3" />
            <span>Memahami bagaimana React merender komponen dan mengelola state</span>
          </div>
        </header>

        {/* Slide 2: Konsep Dasar React Rendering */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Layers size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konsep Dasar React Rendering</h2>
              <p className="text-gray-700 mb-6">
                React menggunakan mekanisme rendering yang efisien untuk memperbarui User Interface (UI). 
                Memahami dasar rendering React sangat penting untuk membangun aplikasi yang performant.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Proses Rendering React</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-3">
                    <li>
                      <span className="font-medium">Trigger:</span> Rendering dimulai ketika ada perubahan state/props
                    </li>
                    <li>
                      <span className="font-medium">Render Phase:</span> React memanggil fungsi komponen dan membandingkan hasil
                    </li>
                    <li>
                      <span className="font-medium">Reconciliation:</span> React membandingkan Virtual DOM lama dan baru
                    </li>
                    <li>
                      <span className="font-medium">Commit Phase:</span> Perubahan diterapkan ke DOM browser
                    </li>
                  </ol>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Kapan Komponen Re-render?</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ketika state komponen berubah (<code className="bg-gray-200 px-1 rounded">useState</code>, <code className="bg-gray-200 px-1 rounded">useReducer</code>)</li>
                    <li>Ketika props yang diterima berubah</li>
                    <li>Ketika parent component melakukan re-render</li>
                    <li>Ketika context yang digunakan berubah (<code className="bg-gray-200 px-1 rounded">useContext</code>)</li>
                    <li>Setelah memanggil <code className="bg-gray-200 px-1 rounded">forceUpdate()</code> (dalam class components)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold mb-2">Virtual DOM & Reconciliation</h3>
                <p className="text-gray-700 mb-4">
                  React menggunakan Virtual DOM untuk meningkatkan efisiensi. Alih-alih memanipulasi DOM browser secara langsung 
                  (yang mahal secara komputasi), React:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Memelihara representasi ringan dari DOM di memori (Virtual DOM)</li>
                  <li>Saat ada perubahan, React membuat Virtual DOM baru</li>
                  <li>React membandingkan (diff) Virtual DOM baru dan lama</li>
                  <li>Hanya perubahan yang diperlukan yang diterapkan ke DOM asli</li>
                  <li>Algoritma ini disebut "Reconciliation" atau "Diffing Algorithm"</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Perbandingan State Management */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Database size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Perbandingan State Management</h2>
              <p className="text-gray-700 mb-6">
                Berbagai metode pengelolaan state memiliki dampak yang berbeda terhadap rendering React. Mari kita bandingkan:
              </p>
              
              <StateManagementCard 
                title="useState"
                icon={<Code size={24} className="text-blue-500" />}
                description="Hook dasar untuk mengelola state lokal dalam komponen fungsi."
                pros={[
                  "Sederhana dan mudah dipahami",
                  "Ideal untuk state lokal yang sederhana",
                  "Terintegrasi langsung dengan React"
                ]}
                cons={[
                  "Tidak cocok untuk state yang kompleks",
                  "Bisa menyebabkan prop drilling",
                  "Re-render terjadi pada seluruh komponen"
                ]}
                renderingImpact="Saat setState dipanggil, komponen (dan semua child-nya) akan melakukan re-render. Jika tidak menggunakan React.memo, useState dapat menyebabkan re-render yang tidak perlu pada komponen anak."
              />
              
              <StateManagementCard 
                title="useReducer"
                icon={<RefreshCw size={24} className="text-purple-500" />}
                description="Hook yang digunakan untuk mengelola state kompleks dengan pola reducer (mirip Redux)."
                pros={[
                  "Lebih baik untuk state yang kompleks",
                  "Logic state terpusat dalam reducer",
                  "Memudahkan testing dan debugging"
                ]}
                cons={[
                  "Boilerplate code lebih banyak",
                  "Masih menyebabkan prop drilling",
                  "Kurva belajar lebih tinggi"
                ]}
                renderingImpact="Seperti useState, ketika dispatch dipanggil, komponen dan semua turunannya akan re-render. Perbedaannya adalah pada pengelolaan logika state yang lebih terstruktur."
              />
              
              <StateManagementCard 
                title="useContext"
                icon={<Layers size={24} className="text-green-500" />}
                description="Hook untuk mengakses data context tanpa prop drilling melalui komponen perantara."
                pros={[
                  "Menghindari prop drilling",
                  "Menyediakan state global/semi-global",
                  "Ideal untuk tema, preferensi, data pengguna"
                ]}
                cons={[
                  "Re-render berlebihan jika tidak dioptimalkan",
                  "Tidak direkomendasikan untuk state yang sering berubah",
                  "Bisa membuat testing menjadi lebih kompleks"
                ]}
                renderingImpact="Semua komponen yang mengonsumsi context akan re-render ketika nilai context berubah. Jika context berisi banyak data tetapi komponen hanya membutuhkan sebagian, ini bisa menyebabkan re-render yang tidak perlu."
              />
              
              <StateManagementCard 
                title="Redux"
                icon={<Database size={24} className="text-red-500" />}
                description="Library state management untuk aplikasi berskala besar dengan store terpusat."
                pros={[
                  "State global terpusat",
                  "Developer tools yang powerful",
                  "Middleware untuk side effects",
                  "Time-travel debugging"
                ]}
                cons={[
                  "Boilerplate code yang banyak",
                  "Kurva belajar yang curam",
                  "Overhead untuk aplikasi kecil",
                  "Setup awal kompleks"
                ]}
                renderingImpact="Dengan connect atau useSelector yang tepat, Redux menawarkan rendering yang optimal karena hanya komponen yang berlangganan data tertentu yang akan re-render. Redux Toolkit dan hooks modern seperti useSelector membuat optimasi lebih mudah."
              />
            </div>
          </div>
        </section>

        {/* Slide 4: Perbandingan Dampak Rendering */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Perbandingan Detail Dampak Rendering</h2>
              
              <ComparisonTable
                title="Perbandingan State Management & Rendering"
                headers={["State Management", "Cakupan Re-render", "Optimasi", "Kompleksitas", "Use Case Ideal"]}
                rows={[
                  [
                    "useState", 
                    "Komponen dan semua turunannya", 
                    "React.memo, useMemo, useCallback", 
                    "Rendah", 
                    "State lokal sederhana, form inputs, toggles"
                  ],
                  [
                    "useReducer", 
                    "Komponen dan semua turunannya", 
                    "React.memo, useMemo, useCallback", 
                    "Sedang", 
                    "State kompleks dengan beberapa aksi terkait"
                  ],
                  [
                    "useContext", 
                    "Semua konsumen context", 
                    "Context splitting, memoization", 
                    "Sedang", 
                    "Data global seperti tema, autentikasi"
                  ],
                  [
                    "Redux", 
                    "Hanya komponen yang berlangganan", 
                    "Selector yang tepat, memoized selectors", 
                    "Tinggi", 
                    "Aplikasi besar dengan state kompleks"
                  ]
                ]}
              />
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">Dampak Pattern Re-render pada Performa</h3>
                <p className="text-gray-700 mb-4">
                  Setiap pendekatan state management memiliki dampak berbeda pada frekuensi dan cakupan re-render.
                  Berikut adalah perbandingan lebih mendalam:
                </p>
                
                <CodeExample
                  title="useState - Re-render Pattern"
                  description="Ketika state berubah, komponen dan semua children akan re-render"
                  code={`// Parent.jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  
  console.log('Parent rendering'); // Akan dijalankan saat re-render
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
      <Child /> {/* Child akan re-render meskipun tidak menggunakan count */}
    </div>
  );
};

// Child.jsx
const Child = () => {
  console.log('Child rendering'); // Juga dijalankan saat Parent re-render
  return <div>Child Component</div>;
};

// Solusi: Gunakan React.memo untuk mencegah re-render yang tidak perlu
const MemoizedChild = React.memo(Child);`}
                />
                
                <CodeExample
                  title="useContext - Re-render Pattern"
                  description="Semua komponen yang menggunakan useContext akan re-render saat context berubah"
                  code={`// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'John' });
  
  // Kedua nilai dalam value akan memicu re-render saat berubah
  return (
    <ThemeContext.Provider value={{ theme, setTheme, user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemedButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  // Komponen ini akan re-render jika theme ATAU user berubah
  // meskipun hanya menggunakan theme
  const { theme } = useContext(ThemeContext);
  
  console.log('ThemedButton rendering');
  
  return <button className={theme}>Themed Button</button>;
};

// Solusi: Pisahkan context untuk mengurangi re-render yang tidak perlu
// Atau gunakan useMemo untuk memisahkan value object`}
                />
                
                <CodeExample
                  title="Redux - Re-render Pattern"
                  description="Hanya komponen yang menggunakan data yang berubah yang akan re-render"
                  code={`// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, user: { name: 'John' } },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

// Counter.js dengan useSelector optimal
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const Counter = () => {
  // Hanya re-render saat counter.value berubah
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  console.log('Counter component rendering');
  
  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  );
};

// UserProfile.js - tidak re-render saat counter berubah
const UserProfile = () => {
  // Hanya re-render saat user berubah
  const user = useSelector(state => state.counter.user);
  
  console.log('UserProfile component rendering');
  
  return <div>User: {user.name}</div>;
};`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Praktik Terbaik Optimasi Rendering */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Check size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Praktik Terbaik Optimasi Rendering</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Memoization</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><code className="bg-gray-200 px-1 rounded">React.memo</code> - Mencegah re-render komponen jika props tidak berubah</li>
                    <li><code className="bg-gray-200 px-1 rounded">useMemo</code> - Menyimpan hasil kalkulasi yang mahal</li>
                    <li><code className="bg-gray-200 px-1 rounded">useCallback</code> - Menyimpan referensi fungsi yang stabil</li>
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <pre className="text-sm">
                      <code>{`// Menggunakan React.memo
const MemoizedComponent = React.memo(ExpensiveComponent);

// Menggunakan useMemo
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b), 
  [a, b]
);

// Menggunakan useCallback
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
);`}</code>
                    </pre>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Struktur Komponen</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pecah komponen besar menjadi komponen yang lebih kecil</li>
                    <li>Turunkan state ke level terendah yang diperlukan</li>
                    <li>Gunakan children props untuk menghindari re-render</li>
                    <li>Hindari anonymous function dalam JSX</li>
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <pre className="text-sm">
                      <code>{`// Menggunakan children props
function Wrapper({ children }) {
  const [state, setState] = useState(false);
  
  return (
    <div onClick={() => setState(!state)}>
      {state ? 'On' : 'Off'}
      {children} 
      {/* Tidak re-render saat state berubah */}
    </div>
  );
}

// Penggunaan:
<Wrapper>
  <ExpensiveComponent />
</Wrapper>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-6">
                <h3 className="text-xl font-semibold mb-2">Bagaimana Memilih State Management?</h3>
                <p className="text-gray-700 mb-4">
                  Pilihan state management harus didasarkan pada kebutuhan spesifik aplikasi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><span className="font-medium">Aplikasi kecil-sedang:</span> useState + useReducer + useContext biasanya cukup</li>
                  <li><span className="font-medium">Aplikasi besar dengan banyak state terkait:</span> Redux atau alternatif seperti Zustand</li>
                  <li><span className="font-medium">Untuk data server:</span> Pertimbangkan React Query, SWR, atau RTK Query</li>
                  <li><span className="font-medium">Kombinasikan pendekatan:</span> State lokal dengan useState, state global dengan Redux/Context</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tools Debugging Rendering</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">React DevTools Profiler</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Visualisasi flamegraph</li>
                      <li>Rekam dan analisis rendering</li>
                      <li>Identifikasi re-render yang tidak perlu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">why-did-you-render</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Library untuk debugging re-render</li>
                      <li>Notifikasi ketika komponen re-render</li>
                      <li>Menunjukkan alasan specific re-render</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Setup why-did-you-render
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

// Menandai komponen untuk di-track
function MyComponent() {
  // ...
}
MyComponent.whyDidYouRender = true;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReactRenderingPresentation;