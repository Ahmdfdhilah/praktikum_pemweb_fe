import React, {  } from 'react';
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

const ComponentsPropsStatePresentation: React.FC = () => {

  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Components, Props, dan State
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Zap size={28} className="text-purple-500 mr-3" />
            <span>Blok pembangun UI dengan props untuk data eksternal dan state untuk data internal</span>
          </div>
        </header>

        {/* Slide 2: Pengenalan Components */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu Components?</h2>
              <p className="text-gray-700 mb-6">
                Components adalah blok pembangun utama aplikasi React. Mereka memungkinkan Anda membagi UI menjadi 
                bagian-bagian independen dan reusable, sehingga Anda dapat memikirkan setiap bagian secara terpisah.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    Jenis Component
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-700">Functional Components</h4>
                      <p className="text-gray-700">
                        Function JavaScript biasa yang menerima props dan me-return JSX. Modern dan lebih disarankan.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700">Class Components</h4>
                      <p className="text-gray-700">
                        Kelas JavaScript yang meng-extend React.Component. Pendekatan tradisional.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Keuntungan Components</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Reusable — Dapat digunakan kembali</li>
                    <li>Separation of concerns — Pemisahan fokus</li>
                    <li>Maintainable — Mudah dipelihara</li>
                    <li>Testable — Mudah diuji</li>
                    <li>Composable — Dapat dikomposisi menjadi UI kompleks</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <CodeExample
                  title="Contoh Functional Component"
                  description="Modern dan menggunakan Hooks untuk state dan lifecycle"
                  code={`import React from 'react';\n\ntype ButtonProps = {\n  text: string;\n  onClick: () => void;\n};\n\nconst Button: React.FC<ButtonProps> = ({ text, onClick }) => {\n  return (\n    <button\n      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"\n      onClick={onClick}\n    >\n      {text}\n    </button>\n  );\n};\n\nexport default Button;`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Props */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Props: Data Eksternal</h2>
              <p className="text-gray-700 mb-6">
                Props (kependekan dari "properties") adalah cara untuk meneruskan data dari parent component
                ke child component. Props bersifat read-only (immutable) dan mengalir satu arah (one-way data flow).
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Karakteristik Props</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Immutable (tidak dapat diubah)</li>
                    <li>Diteruskan dari parent ke child</li>
                    <li>Dapat berupa tipe data apapun</li>
                    <li>Diakses melalui parameter di functional component</li>
                    <li>Bisa memiliki default values</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">TypeScript dengan Props</h3>
                  <p className="text-gray-700 mb-2">
                    Dengan TypeScript, Anda dapat mendefinisikan tipe untuk props:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`type CardProps = {
  title: string;
  description?: string; // Optional
  imageUrl: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = (props) => {
  // ...
};`}</code>
                  </pre>
                </div>
              </div>
              
              <CodeExample
                title="Passing & Receiving Props"
                description="Contoh penerapan props dalam React components"
                code={`// Parent Component
import React from 'react';
import ProfileCard from './ProfileCard';

const UserProfile: React.FC = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <ProfileCard
        name="John Doe"
        role="Software Engineer"
        avatarUrl="/images/john.jpg"
        socialLinks={[
          { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
          { platform: 'GitHub', url: 'https://github.com/johndoe' }
        ]}
        isVerified={true}
      />
    </div>
  );
};

// Child Component
type SocialLink = {
  platform: string;
  url: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  isVerified: boolean;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatarUrl,
  socialLinks,
  isVerified
}) => {
  return (
    <div className="card">
      <img src={avatarUrl} alt={name} />
      <h2>{name} {isVerified && '✓'}</h2>
      <p>{role}</p>
      <div className="social-links">
        {socialLinks.map(link => (
          <a key={link.platform} href={link.url}>
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};`}
              />
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Penggunaan Props</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gunakan destructuring untuk membuat kode lebih rapi</li>
                  <li>Tetapkan default values untuk props opsional</li>
                  <li>Validasi props dengan PropTypes (JavaScript) atau TypeScript</li>
                  <li>Hindari mengubah nilai props secara langsung</li>
                  <li>Manfaatkan children props untuk komposisi fleksibel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: State */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <RefreshCw size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">State: Data Internal</h2>
              <p className="text-gray-700 mb-6">
                State adalah data yang dikelola secara internal oleh component. Tidak seperti props, state dapat 
                berubah seiring waktu, biasanya sebagai respons terhadap interaksi pengguna atau events.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Karakteristik State</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Mutable (dapat diubah)</li>
                    <li>Privat dan sepenuhnya dikontrol oleh component</li>
                    <li>Ketika state berubah, component di-render ulang</li>
                    <li>Asynchronous — setState tidak langsung mengubah nilai</li>
                    <li>Dapat diturunkan ke child components sebagai props</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">useState Hook</h3>
                  <p className="text-gray-700 mb-2">
                    Hook dasar untuk mengelola state dalam functional component:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import { useState } from 'react';

function Counter() {
  // Deklarasi variabel state dan setter
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
              
             
              <CodeExample
                title="Contoh State Kompleks"
                description="Menggunakan useReducer untuk state yang lebih kompleks"
                code={`import React, { useReducer } from 'react';

// Tipe untuk state
type TodoState = {
  todos: { id: number; text: string; completed: boolean }[];
  filter: 'all' | 'active' | 'completed';
};

// Tipe untuk actions
type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

// Reducer function untuk mengubah state
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload 
            ? { ...todo, completed: !todo.completed } 
            : todo
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

const TodoApp: React.FC = () => {
  // Initial state
  const initialState: TodoState = {
    todos: [],
    filter: 'all'
  };

  // useReducer hook untuk state management
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  // Component logic...
  // ...
};`}
              />
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Best Practices State Management</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Simpan state seminimal mungkin</li>
                  <li>Hindari redundansi dalam state</li>
                  <li>Gunakan useState untuk state sederhana</li>
                  <li>Gunakan useReducer untuk state kompleks</li>
                  <li>Pecah state menjadi bagian-bagian yang logis</li>
                  <li>Pertimbangkan penggunaan context API untuk state global</li>
                  <li>Gunakan libraries seperti Redux, Zustand, atau Jotai untuk aplikasi besar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Props vs State */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-purple-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Props vs State: Kapan Menggunakan?</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-purple-200 p-3 text-left">Aspek</th>
                      <th className="border border-purple-200 p-3 text-left">Props</th>
                      <th className="border border-purple-200 p-3 text-left">State</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-purple-200 p-3 font-medium">Mutabilitas</td>
                      <td className="border border-purple-200 p-3">Immutable (read-only)</td>
                      <td className="border border-purple-200 p-3">Mutable (dapat diubah)</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3 font-medium">Asal</td>
                      <td className="border border-purple-200 p-3">Parent component</td>
                      <td className="border border-purple-200 p-3">Didefinisikan dalam component sendiri</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3 font-medium">Kontroler</td>
                      <td className="border border-purple-200 p-3">Parent component</td>
                      <td className="border border-purple-200 p-3">Component itu sendiri</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3 font-medium">Tujuan</td>
                      <td className="border border-purple-200 p-3">Konfigurasi component; komunikasi dari parent</td>
                      <td className="border border-purple-200 p-3">Melacak informasi yang berubah sepanjang waktu</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3 font-medium">Re-render</td>
                      <td className="border border-purple-200 p-3">Ketika parent me-render ulang</td>
                      <td className="border border-purple-200 p-3">Ketika setState/dispatch dipanggil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Gunakan Props Ketika:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Meneruskan data dari parent ke child</li>
                    <li>Mengkonfigurasi perilaku komponen</li>
                    <li>Meneruskan callbacks untuk komunikasi ke atas</li>
                    <li>Membuat komponen yang reusable</li>
                    <li>Membuat "pure component" tanpa state</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Gunakan State Ketika:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Melacak data yang berubah seiring waktu</li>
                    <li>Menyimpan input pengguna</li>
                    <li>Mengontrol UI (seperti modal terbuka/tertutup)</li>
                    <li>Menangani respons dari API/layanan eksternal</li>
                    <li>Mengelola proses yang memiliki beberapa tahap</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h3 className="text-xl font-semibold mb-2">Tips Alur Data dalam React</h3>
                <p className="text-gray-700 mb-2">
                  React mengikuti aliran data satu arah (one-way data flow):
                </p>
                <ul className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>State dikelola pada level komponen yang sesuai</li>
                  <li>Data mengalir ke bawah sebagai props ke child components</li>
                  <li>Untuk komunikasi ke atas, teruskan callbacks sebagai props</li>
                  <li>Untuk data yang dibutuhkan oleh banyak components, gunakan state lifting atau context</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Pola ini membuat aplikasi Anda lebih mudah diprediksi dan di-debug.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsPropsStatePresentation;