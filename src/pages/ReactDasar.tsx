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


export default function ReactDasar() {
    return (
        <PraktikumLayout
            title="Praktikum React Basics"
            subtitle="Memahami konsep dasar React dan membangun aplikasi interaktif dengan Component-Based Architecture"
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
                            Memahami filosofi dan konsep dasar React (Component-Based Architecture)
                        </li>
                        <li>
                            Membuat dan menggunakan functional components dengan hooks
                        </li>
                        <li>
                            Mengelola state dan props dalam aplikasi React
                        </li>
                        <li>
                            Menerapkan event handling dan conditional rendering
                        </li>
                        <li>
                            Membuat form interaktif dengan controlled components
                        </li>
                        <li>
                            Mengelola daftar data dengan keys dan rendering lists
                        </li>
                        <li>
                            Memahami lifecycle components melalui useEffect
                        </li>
                        <li>
                            Mengimplementasikan routing dasar dengan React Router
                        </li>
                    </ul>
                </div>
            </SectionWrapper>

            <SectionWrapper
                id="pengenalan"
                title="Pengenalan React"
                icon={<BookOpen className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        React adalah library JavaScript yang dikembangkan oleh Facebook (sekarang Meta) untuk membangun antarmuka pengguna (UI) yang interaktif dan efisien. Berbeda dengan framework monolitik, React berfokus pada satu hal dan melakukannya dengan sangat baik: membangun UI dengan pendekatan component-based.
                    </p>

                    <p className="text-gray-700">
                        Beberapa konsep kunci yang membuat React powerful:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Component-Based</strong>: Memecah UI menjadi komponen-komponen yang reusable dan independent</li>
                        <li><strong>Declarative</strong>: Anda menentukan seperti apa UI seharusnya pada kondisi tertentu, dan React akan memperbarui DOM secara efisien</li>
                        <li><strong>Virtual DOM</strong>: Representasi memori dari DOM yang memungkinkan perubahan cepat dan efisien</li>
                        <li><strong>Unidirectional Data Flow</strong>: Data mengalir satu arah, membuat aplikasi lebih mudah di-debug</li>
                        <li><strong>JSX</strong>: Ekstensi sintaks JavaScript yang memungkinkan Anda menulis struktur UI dengan sintaks yang mirip HTML</li>
                        <li><strong>Hooks</strong>: Fitur yang memungkinkan functional components menggunakan state dan fitur React lainnya</li>
                    </ul>

                    <InfoBox type="info" title="React vs Framework Lain">
                        <p>
                            React hanya menangani layer view dalam aplikasi. Ini berbeda dengan framework seperti Angular atau Vue yang lebih comprehensive. Dengan React, Anda bebas memilih libraries tambahan untuk state management (Redux, Zustand), routing (React Router), dan lainnya sesuai kebutuhan project.
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
                            <strong>Node.js dan npm</strong>: Versi terbaru (LTS) untuk menjalankan React dan tools development
                        </li>
                        <li>
                            <strong>Code Editor</strong>: Visual Studio Code dengan ekstensi React/JSX
                        </li>
                        <li>
                            <strong>Browser Modern</strong>: Chrome/Firefox dengan React DevTools terinstal
                        </li>
                        <li>
                            <strong>Git</strong>: Untuk version control dan submission praktikum
                        </li>
                    </ul>

                    <InfoBox type="tip" title="Rekomendasi Ekstensi VS Code">
                        <p>
                            Ekstensi berikut akan meningkatkan produktivitas pengembangan React:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>ES7+ React/Redux/React-Native snippets - Snippets untuk React</li>
                            <li>ESLint - Untuk menemukan dan memperbaiki masalah dalam kode</li>
                            <li>Prettier - Untuk memformat kode secara otomatis</li>
                            <li>Auto Import - Mengimpor modul secara otomatis</li>
                            <li>React Developer Tools - Ekstensi browser untuk inspect komponen React</li>
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
                            title: 'Mempersiapkan Project React',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Kita akan menggunakan Create React App (CRA) untuk membuat project baru. CRA adalah tool resmi yang membantu setup React project tanpa konfigurasi build yang rumit.
                                    </p>

                                    <CodeBlock
                                        title="Membuat Project Baru"
                                        code={`# Buat project React baru
npx create-react-app my-react-app

# Masuk ke direktori project
cd my-react-app

# Jalankan application dalam development mode
npm start`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Struktur project yang dihasilkan:
                                    </p>

                                    <CodeBlock
                                        title="Struktur Project"
                                        code={`my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
└── README.md`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Mari modifikasi struktur folder untuk praktikum kita:
                                    </p>

                                    <CodeBlock
                                        title="Struktur Folder yang Lebih Baik"
                                        code={`my-react-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── TaskItem/
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskItem.css
│   │   └── TaskForm/
│   │       ├── TaskForm.jsx
│   │       └── TaskForm.css
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   └── About/
│   │       └── About.jsx
│   ├── hooks/             # Custom hooks
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Hapus konten default <code className="bg-gray-100 px-1 py-0.5 rounded">App.js</code> dan ganti dengan component App yang lebih sederhana:
                                    </p>

                                    <CodeBlock
                                        title="src/App.jsx"
                                        code={`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Task Manager</h1>
        <p>Selamat datang di aplikasi Task Manager!</p>
      </header>
    </div>
  );
}

export default App;`}
                                        language="jsx"
                                    />

                                    <InfoBox type="tip">
                                        <p>
                                            Dalam pengembangan modern React, kita menggunakan functional components dengan Hooks daripada class components. Pendekatan ini membuat kode lebih ringkas dan mudah dipahami.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 2,
                            title: 'Membuat Component Pertama',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Component adalah blok pembangun utama aplikasi React. Mari kita buat beberapa komponen dasar untuk aplikasi Task Manager kita.
                                    </p>

                                    <p className="text-gray-700">
                                        Pertama, buat komponen Header:
                                    </p>

                                    <CodeBlock
                                        title="src/components/Header/Header.jsx"
                                        code={`import React from 'react';
import './Header.css';

function Header({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export default Header;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/components/Header/Header.css"
                                        code={`.header {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.header p {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Selanjutnya, buat komponen TaskItem untuk menampilkan satu tugas:
                                    </p>

                                    <CodeBlock
                                        title="src/components/TaskItem/TaskItem.jsx"
                                        code={`import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={\`task-item \${task.completed ? 'completed' : ''}\`}>
      <div className="task-content">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggleComplete(task.id)} 
        />
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-actions">
        <button 
          className="delete-btn" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/components/TaskItem/TaskItem.css"
                                        code={`.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.task-item.completed {
  background-color: #e9ecef;
  opacity: 0.7;
}

.task-content {
  display: flex;
  align-items: center;
}

.task-title {
  margin-left: 0.5rem;
}

.completed .task-title {
  text-decoration: line-through;
  color: #6c757d;
}

.task-actions {
  display: flex;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #c82333;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Buat komponen form untuk menambahkan task baru:
                                    </p>

                                    <CodeBlock
                                        title="src/components/TaskForm/TaskForm.jsx"
                                        code={`import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    // Buat task baru
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    
    // Kirim task ke parent component
    onAddTask(newTask);
    
    // Reset form
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TaskForm;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/components/TaskForm/TaskForm.css"
                                        code={`.task-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.task-form input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.task-form button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.task-form button:hover {
  background-color: #218838;
}`}
                                        language="css"
                                    />

                                    <InfoBox type="info" title="Props dalam React">
                                        <p>
                                            Props (properties) adalah cara kita mengirim data dari parent component ke child component. Props bersifat read-only dan membantu membuat komponen menjadi reusable. Perhatikan bagaimana kita menerima dan menggunakan props dalam komponen di atas.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 3,
                            title: 'Mengelola State dengan Hooks',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        State adalah data yang dikelola dalam component dan dapat berubah sepanjang lifecycle component. Dengan Hooks, kita bisa mengelola state dalam functional components.
                                    </p>

                                    <p className="text-gray-700">
                                        Mari buat Home page component yang mengintegrasikan semua komponen sebelumnya dan mengelola state:
                                    </p>

                                    <CodeBlock
                                        title="src/pages/Home/Home.jsx"
                                        code={`import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import './Home.css';

function Home() {
  // State untuk menyimpan daftar tasks
  const [tasks, setTasks] = useState([]);
  
  // Load tasks dari localStorage saat component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  // Simpan tasks ke localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/pages/Home/Home.css"
                                        code={`.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.stats {
  display: flex;
  justify-content: space-between;
  background-color: #f1f8ff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.empty-message {
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  color: #6c757d;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Perbarui App.jsx untuk menggunakan komponen Home:
                                    </p>

                                    <CodeBlock
                                        title="src/App.jsx"
                                        code={`import React from 'react';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;`}
                                        language="jsx"
                                    />

                                    <InfoBox type="info" title="React Hooks">
                                        <p>
                                            Pada contoh di atas, kita menggunakan dua hooks penting:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li><code>useState</code> - Untuk menambahkan state ke functional component</li>
                                            <li><code>useEffect</code> - Untuk melakukan side effects dalam functional component, seperti data fetching atau interaksi dengan DOM</li>
                                        </ul>
                                        <p className="mt-2">
                                            Perhatikan array dependensi pada useEffect yang memungkinkan kita mengontrol kapan effect dijalankan.
                                        </p>
                                    </InfoBox>
                                </div>
                            )
                        },
                        {
                            id: 4,
                            title: 'Menerapkan Routing dengan React Router',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        React Router memungkinkan kita membangun aplikasi dengan navigasi tanpa memuat ulang halaman (single-page application).
                                    </p>

                                    <p className="text-gray-700">
                                        Pertama, install React Router:
                                    </p>

                                    <CodeBlock
                                        title="Install React Router"
                                        code={`npm install react-router-dom`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Buat komponen About page:
                                    </p>

                                    <CodeBlock
                                        title="src/pages/About/About.jsx"
                                        code={`import React from 'react';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  return (
    <div className="about">
      <Header 
        title="About Task Manager" 
        description="Learn more about our app" 
      />
      
      <main className="container">
        <div className="about-content">
          <h2>Welcome to Task Manager</h2>
          <p>
            Task Manager adalah aplikasi sederhana yang dibuat dengan React untuk membantu
            Anda mengelola tugas sehari-hari dengan mudah dan efisien.
          </p>
          
          <h3>Fitur:</h3>
          <ul>
            <li>Tambah, hapus, dan tandai tugas sebagai selesai</li>
            <li>Penyimpanan lokal di browser Anda</li>
            <li>Antarmuka pengguna yang responsif dan intuitif</li>
            <li>Statistik tugas real-time</li>
          </ul>
          
          <h3>Teknologi:</h3>
          <p>
            Aplikasi ini dibangun menggunakan React dengan functional components dan Hooks.
            Kami juga menggunakan localStorage untuk menyimpan data Anda secara lokal.
          </p>
          
          <h3>Tentang Developer:</h3>
          <p>
            Task Manager dikembangkan sebagai bagian dari praktikum React Basics.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/pages/About/About.css"
                                        code={`.about-content {
  background-color: white;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-content h2 {
  color: #3498db;
  margin-top: 0;
}

.about-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.about-content ul {
  padding-left: 1.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Buat komponen navigasi:
                                    </p>

                                    <CodeBlock
                                        title="src/components/Navbar/Navbar.jsx"
                                        code={`import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;`}
                                        language="jsx"
                                    />

                                    <CodeBlock
                                        title="src/components/Navbar/Navbar.css"
                                        code={`.navbar {
  background-color: #2c3e50;
  padding: 1rem 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #3498db;
}`}
                                        language="css"
                                    />

                                    <p className="text-gray-700">
                                        Update App.jsx untuk mengimplementasikan routing:
                                    </p>

                                    <CodeBlock
                                        title="src/App.jsx"
                                        code={`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`}
                                        language="jsx"
                                    />

                                    <p className="text-gray-700">
                                        Perbarui App.css:
                                    </p>

                                    <CodeBlock
                                        title="src/App.css"
                                        code={`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f7f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}`}
                                        language="css"
                                    />

                                    <InfoBox type="tip" title="React Router">
                                        <p>
                                            React Router menggunakan client-side routing, yang berarti navigasi antar halaman tidak memerlukan permintaan ke server untuk halaman baru. Hal ini membuat navigasi sangat cepat dan memberikan pengalaman yang lebih baik.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        }, {
                            id: 5,
                            title: 'Membuat Custom Hook',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Custom Hook memungkinkan kita mengekstrak logika komponen ke fungsi yang dapat digunakan kembali. Mari buat custom hook untuk mengelola state tasks dengan localStorage.
                                    </p>

                                    <CodeBlock
                                        title="src/hooks/useLocalStorage.js"
                                        code={`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State untuk menyimpan value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Dapatkan dari localStorage berdasarkan key
      const item = window.localStorage.getItem(key);
      // Parse JSON jika ada, jika tidak return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Jika error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Effect untuk update localStorage ketika storedValue berubah
  useEffect(() => {
    try {
      // Simpan ke localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Sekarang kita bisa memodifikasi Home component untuk menggunakan custom hook ini:
                                    </p>

                                    <CodeBlock
                                        title="src/pages/Home/Home.jsx (Updated)"
                                        code={`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  // Gunakan custom hook untuk tasks
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}
                                        language="jsx"
                                    />

                                    <InfoBox type="info" title="Custom Hooks">
                                        <p>
                                            Custom Hook adalah mekanisme untuk mengekstrak logika stateful dari komponen sehingga bisa digunakan kembali. Dengan membuat custom hook, kita bisa:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Mengurangi duplikasi kode</li>
                                            <li>Membuat logika yang kompleks lebih mudah dipahami</li>
                                            <li>Memisahkan concern dengan lebih baik</li>
                                        </ul>
                                        <p className="mt-2">
                                            Nama custom hook harus dimulai dengan "use" agar React tahu bahwa itu adalah hook dan bisa menerapkan aturan hooks padanya.
                                        </p>
                                    </InfoBox>
                                </div>
                            )
                        },
                        {
                            id: 6,
                            title: 'Menerapkan Context API',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Context API memungkinkan kita berbagi state antar komponen tanpa harus mengoper props secara manual di setiap level. Mari buat TaskContext untuk mengelola state tasks.
                                    </p>

                                    <CodeBlock
                                        title="src/context/TaskContext.jsx"
                                        code={`import React, { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  const dispatch = (action) => {
    setTasks(taskReducer(tasks, action));
  };

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
                        }`}
                                        language="jsx"
                                    />

                                    <p className="text-gray-700">
                                        Update App.jsx untuk menyediakan TaskContext:
                                    </p>

                                    <CodeBlock
                                        title="src/App.jsx (Updated)"
                                        code={`import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;`}
                                        language="jsx"
                                    />

                                    <p className="text-gray-700">
                                        Sekarang kita bisa memodifikasi Home component untuk menggunakan TaskContext:
                                    </p>

                                    <CodeBlock
                                        title="src/pages/Home/Home.jsx (Updated with Context)"
                                        code={`import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './Home.css';

function Home() {
  const { tasks, dispatch } = useTasks();
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: taskId });
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;`}
                                        language="jsx"
                                    />

                                    <InfoBox type="info" title="Context API">
                                        <p>
                                            Context API sangat berguna untuk state yang perlu diakses oleh banyak komponen di berbagai level dalam aplikasi. Dengan Context:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Kita menghindari "prop drilling" (mengoper props melalui banyak level komponen)</li>
                                            <li>State management menjadi lebih terpusat</li>
                                            <li>Komponen menjadi lebih bersih karena tidak perlu menerima props yang tidak digunakan</li>
                                        </ul>
                                        <p className="mt-2">
                                            Untuk state management yang lebih kompleks, kita bisa mempertimbangkan Redux, tetapi Context API seringkali cukup untuk banyak kasus penggunaan.
                                        </p>
                                    </InfoBox>
                                </div>
                            )
                        },
                        {
                            id: 7,
                            title: 'Testing Komponen dengan Jest dan React Testing Library',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Testing adalah bagian penting dari pengembangan aplikasi. Mari kita buat beberapa test untuk komponen kita.
                                    </p>

                                    <p className="text-gray-700">
                                        Pertama, pastikan testing library sudah terinstall (sudah termasuk dalam Create React App):
                                    </p>

                                    <CodeBlock
                                        title="Install Testing Library (jika belum ada)"
                                        code={`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event`}
                                        language="bash"
                                    />

                                    <p className="text-gray-700">
                                        Buat test untuk TaskItem component:
                                    </p>

                                    <CodeBlock
                                        title="src/components/TaskItem/TaskItem.test.jsx"
                                        code={`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    completed: false
  };

  const mockOnDelete = jest.fn();
  const mockOnToggleComplete = jest.fn();

  it('renders task title', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggleComplete when checkbox is clicked', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

 it('shows completed style when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(
      <TaskItem 
        task={completedTask} 
        onDelete={mockOnDelete}
        onToggleComplete={mockOnToggleComplete}
      />
    );
  
    const taskItem = screen.getByText('Test Task').closest('.task-item');
    expect(taskItem).toHaveClass('completed');
  });  
});`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Buat test untuk TaskForm component:
                                    </p>

                                    <CodeBlock
                                        title="src/components/TaskForm/TaskForm.test.jsx"
                                        code={`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();

  beforeEach(() => {
    mockOnAddTask.mockClear();
  });

  it('renders form with input and button', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    expect(screen.getByPlaceholderText('Tambahkan tugas baru...')).toBeInTheDocument();
    expect(screen.getByText('Tambah')).toBeInTheDocument();
  });

  it('calls onAddTask with new task when form is submitted', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
    expect(mockOnAddTask.mock.calls[0][0]).toEqual({
      id: expect.any(Number),
      title: 'New Task',
      completed: false
    });
  });

  it('does not call onAddTask when input is empty', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const button = screen.getByText('Tambah');
    fireEvent.click(button);
    
    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  it('clears input after form submission', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Tambahkan tugas baru...');
    const button = screen.getByText('Tambah');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });
});`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Jalankan test dengan perintah:
                                    </p>

                                    <CodeBlock
                                        title="Run Tests"
                                        code={`npm test`}
                                        language="bash"
                                    />

                                    <InfoBox type="tip" title="Testing Best Practices">
                                        <p>
                                            Beberapa praktik terbaik dalam testing React components:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Fokus pada pengujian perilaku, bukan implementasi</li>
                                            <li>Gunakan React Testing Library yang mendorong praktik testing yang lebih baik</li>
                                            <li>Test interaksi pengguna, bukan state internal</li>
                                            <li>Buat test yang kecil dan terfokus</li>
                                            <li>Gunakan mock untuk dependensi eksternal</li>
                                        </ul>
                                        <p className="mt-2">
                                            Testing membantu memastikan komponen kita bekerja seperti yang diharapkan dan mencegah regresi saat melakukan perubahan.
                                        </p>
                                    </InfoBox>
                                </div>
                            )
                        }]} />
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
                        <li><strong>Memahami</strong> filosofi dan konsep dasar React (Component-Based Architecture).</li>
                        <li><strong>Membuat</strong> functional components dengan JSX dan hooks.</li>
                        <li><strong>Mengelola</strong> state dengan <code>useState</code> dan side effects dengan <code>useEffect</code>.</li>
                        <li><strong>Menerapkan</strong> props untuk komunikasi antar komponen.</li>
                        <li><strong>Membuat</strong> form interaktif dengan controlled components.</li>
                        <li><strong>Mengimplementasikan</strong> event handling dan conditional rendering.</li>
                        <li><strong>Mengelola</strong> daftar data dengan keys dan rendering lists.</li>
                        <li><strong>Membuat</strong> aplikasi multi-halaman dengan React Router.</li>
                        <li><strong>Mendesain</strong> struktur folder yang modular untuk aplikasi React.</li>
                        <li><strong>Membuat</strong> custom hooks untuk logika yang reusable.</li>
                        <li><strong>Menggunakan</strong> Context API untuk state management global.</li>
                        <li><strong>Menulis</strong> test unit untuk komponen dengan Jest dan React Testing Library.</li>
                        <li><strong>Mengoptimalkan</strong> performa dengan proper penggunaan dependencies array di useEffect.</li>
                        <li><strong>Menyimpan data</strong> secara lokal dengan localStorage.</li>
                        <li><strong>Menerapkan</strong> styling modular dengan CSS per komponen.</li>
                        <li><strong>Membuat</strong> reusable UI components (Header, TaskItem, TaskForm).</li>
                        <li><strong>Menggunakan</strong> proper TypeScript/PropTypes untuk type checking (opsional).</li>
                        <li><strong>Menerapkan</strong> clean code principles dalam struktur komponen.</li>
                        <li><strong>Memahami</strong> lifecycle komponen melalui useEffect hook.</li>
                        <li><strong>Mengimplementasikan</strong> navigation bar dengan React Router Link.</li>
                    </ul>

                    <InfoBox title='Aplikasi yang Dibangun' type='tip' >
                        <p className="mt-2">
                            Kalian telah berhasil membangun sebuah <strong>Task Manager Application</strong> dengan fitur:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Menambah, menghapus, dan menandai tugas sebagai selesai</li>
                            <li>Penyimpanan data tugas di localStorage</li>
                            <li>Statistik tugas real-time (total, selesai, belum selesai)</li>
                            <li>Navigasi multi-halaman (Home dan About)</li>
                            <li>Responsive UI dengan styling modular</li>
                            <li>Form validasi sederhana</li>
                        </ul>
                    </InfoBox>

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

                {/* Tugas */}
                <div className="border rounded-lg p-6 bg-white shadow-sm mb-8">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Tugas: Aplikasi Manajemen Buku Pribadi</h3>

                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Buatlah aplikasi manajemen buku pribadi yang memungkinkan pengguna mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli.
                        </p>

                        <div className="mt-6">
                            <h4 className="font-medium text-gray-800 mb-2">Persyaratan Wajib:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Fitur Dasar:</strong>
                                    <ul className="list-circle pl-6 mt-1">
                                        <li>Menambah buku baru (judul, penulis, status: milik/baca/beli)</li>
                                        <li>Mengedit dan menghapus buku</li>
                                        <li>Filter buku berdasarkan status</li>
                                        <li>Pencarian buku</li>
                                    </ul>
                                </li>
                                <li><strong>Teknologi React:</strong>
                                    <ul className="list-circle pl-6 mt-1">
                                        <li>Gunakan <code>useState</code> dan <code>useEffect</code></li>
                                        <li>Buat minimal 3 komponen reusable</li>
                                        <li>Implementasikan Context API untuk state management</li>
                                        <li>Gunakan React Router untuk navigasi multi-halaman</li>
                                    </ul>
                                </li>
                                <li><strong>Penyimpanan:</strong> Gunakan localStorage untuk menyimpan data</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-800 mb-2">Persyaratan Teknis:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Gunakan functional components dengan Hooks</li>
                                <li>Implementasikan minimal 2 custom hooks</li>
                                <li>Gunakan PropTypes untuk type checking</li>
                                <li>Buat minimal 5 test unit dengan React Testing Library</li>
                                <li>Terapkan error handling untuk form input</li>
                            </ul>
                        </div>

                        <InfoBox type="tip" title="Tips Implementasi">
                            <p>
                                Struktur folder yang disarankan:
                                <CodeBlock
                                    code={`src/
├── components/
│   ├── BookForm/
│   ├── BookList/
│   └── BookFilter/
├── pages/
│   ├── Home/
│   └── Stats/
├── hooks/
│   ├── useLocalStorage.js
│   └── useBookStats.js
├── context/
│   └── BookContext.js
└── App.js`}
                                    language="bash"
                                    showLineNumbers={false}
                                />
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
                                        <td className="px-4 py-2">Fungsi dasar aplikasi</td>
                                        <td className="px-4 py-2">30%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200 bg-gray-50">
                                        <td className="px-4 py-2">Penerapan konsep React</td>
                                        <td className="px-4 py-2">25%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="px-4 py-2">Struktur kode dan organisasi</td>
                                        <td className="px-4 py-2">20%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200 bg-gray-50">
                                        <td className="px-4 py-2">Testing dan error handling</td>
                                        <td className="px-4 py-2">15%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="px-4 py-2">Dokumentasi</td>
                                        <td className="px-4 py-2">10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-medium text-gray-800 mb-2">Dokumentasi yang Diperlukan:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                <li>README.md berisi:
                                    <ul className="list-circle pl-6 mt-1">
                                        <li>Deskripsi aplikasi</li>
                                        <li>Instruksi instalasi dan menjalankan</li>
                                        <li>Screenshot antarmuka</li>
                                        <li>Penjelasan fitur React yang digunakan</li>
                                    </ul>
                                </li>
                                <li>Komentar dalam kode untuk bagian penting</li>
                                <li>Laporan testing (screenshots hasil test)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <SubmissionLink
                        title="Submit Tugas Praktikum 3"
                        href='#'
                    />
                </div>
            </SectionWrapper>

        </PraktikumLayout>
    )
};