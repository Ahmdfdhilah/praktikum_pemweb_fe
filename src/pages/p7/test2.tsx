import React from 'react';
import { Code, FileCode, GitBranch, ArrowRight, Check } from 'lucide-react';

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

const JSXPresentation: React.FC = () => {
  return (
    <div className="min-h-screen p-8 font-sans ">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Judul Presentasi */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Memahami File JSX
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <FileCode size={28} className="text-blue-500 mr-3" />
            <span>Ekstensi JavaScript yang memungkinkan penulisan HTML dalam kode JavaScript</span>
          </div>
        </header>

        {/* Slide 2: Apa itu JSX */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa Itu JSX?</h2>
              <p className="text-gray-700 mb-6">
                JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang direkomendasikan oleh React untuk mendeskripsikan 
                tampilan UI. JSX terlihat seperti HTML tapi bekerja dalam JavaScript.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    Kelebihan JSX
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Kode lebih mudah dibaca dan dipahami</li>
                    <li>Struktur komponen lebih jelas</li>
                    <li>Memungkinkan integrasi logika dan tampilan</li>
                    <li>Dukungan IntelliSense dan type checking</li>
                    <li>Error dan warning saat compile time</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Penting Diketahui</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>JSX bukanlah HTML, tapi sintaks JavaScript</li>
                    <li>JSX harus di-transpile sebelum dijalankan browser</li>
                    <li>Menggunakan <code className="bg-gray-200 px-1 rounded">className</code> bukan <code className="bg-gray-200 px-1 rounded">class</code></li>
                    <li>Atribut menggunakan format camelCase</li>
                    <li>Ekspresi JavaScript diapit dengan kurung kurawal {`{}`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Contoh JSX */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <GitBranch size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contoh JSX dalam Kode</h2>
              
              <CodeExample
                title="Dasar JSX"
                description="Contoh sederhana penulisan JSX dalam React"
                code={`// File: Button.jsx atau Button.tsx\nimport React from 'react';\n\nconst Button = () => {\n  return (\n    <button className="bg-blue-500 text-white px-4 py-2 rounded">\n      Klik Saya\n    </button>\n  );\n};\n\nexport default Button;`}
              />
              
              <CodeExample
                title="JSX dengan Ekspresi JavaScript"
                description="Contoh bagaimana mencampur JavaScript dan JSX"
                code={`import React from 'react';\n\nconst Greeting = ({ name, isLoggedIn }) => {\n  return (\n    <div>\n      {/* Menggunakan kondisi dalam JSX */}\n      {isLoggedIn ? (\n        <h1>Selamat Datang, {name}!</h1>\n      ) : (\n        <h1>Silakan Login</h1>\n      )}\n      \n      {/* Memanggil fungsi dalam JSX */}\n      <p>{formatGreeting(name)}</p>\n    </div>\n  );\n};\n\nfunction formatGreeting(name) {\n  return \`Halo ${name}, semoga harimu menyenangkan!\`;\n}\n\nexport default Greeting;`}
              />
              
              <CodeExample
                title="JSX dengan Children"
                description="Contoh penggunaan children props dalam JSX"
                code={`import React from 'react';\n\nconst Card = ({ title, children }) => {\n  return (\n    <div className="border rounded-lg p-4 shadow-md">\n      <h2 className="text-xl font-bold mb-2">{title}</h2>\n      <div className="content">\n        {children}\n      </div>\n    </div>\n  );\n};\n\n// Penggunaan:\n// <Card title="Profil Pengguna">\n//   <p>Ini adalah konten anak yang bisa berisi JSX lainnya.</p>\n// </Card>`}
              />
            </div>
          </div>
        </section>

        {/* Slide 4: JSX vs JavaScript */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <ArrowRight size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">JSX vs JavaScript Murni</h2>
              <p className="text-gray-700 mb-6">
                JSX akan di-transpile menjadi panggilan fungsi <code className="bg-gray-200 px-1 rounded">React.createElement()</code>. 
                Berikut perbandingan menulis komponen dengan JSX dan tanpa JSX:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dengan JSX</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Halo, Dunia!</h1>
      <p>Selamat datang di React</p>
    </div>
  );
};`}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tanpa JSX (Pure JS)</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import React from 'react';

const Welcome = () => {
  return React.createElement(
    'div',
    { className: 'welcome' },
    React.createElement(
      'h1',
      null,
      'Halo, Dunia!'
    ),
    React.createElement(
      'p',
      null,
      'Selamat datang di React'
    )
  );
};`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold mb-2">Apa yang terjadi di belakang layar:</h3>
                <p className="text-gray-700 mb-2">
                  1. JSX ditulis oleh developer untuk memudahkan pengembangan UI
                </p>
                <p className="text-gray-700 mb-2">
                  2. Babel atau TypeScript transpiler mengubah JSX menjadi panggilan <code className="bg-gray-200 px-1 rounded">React.createElement()</code>
                </p>
                <p className="text-gray-700 mb-2">
                  3. Fungsi createElement membuat objek React element
                </p>
                <p className="text-gray-700">
                  4. React menggunakan virtual DOM untuk merender element ke DOM browser
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Aturan Penting JSX */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-start mb-6">
            <Code size={28} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Aturan Penting dalam JSX</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">1. JSX harus memiliki satu root element</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">✓ Benar</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`return (
  <div>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </div>
);`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">✗ Salah</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`return (
  <h1>Judul</h1>
  <p>Paragraf</p>
);`}</code>
                      </pre>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">Alternatif: Gunakan React Fragment <code className="bg-gray-200 px-1 rounded">&lt;&gt;...&lt;/&gt;</code></p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2. Tag harus ditutup</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">✓ Benar</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`<img src="foto.jpg" alt="foto" />
<input type="text" />`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">✗ Salah</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`<img src="foto.jpg" alt="foto">
<input type="text">`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">3. Atribut className bukan class</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-600 mb-1">✓ Benar</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`<div className="container">
  Konten
</div>`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-1">✗ Salah</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`<div class="container">
  Konten
</div>`}</code>
                      </pre>
                    </div>
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

export default JSXPresentation;