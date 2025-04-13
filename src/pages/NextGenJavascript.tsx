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
                        {
                            id: 2,
                            title: 'Let dan Const, Arrow Functions, Template Literals',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Buat file <code className="bg-gray-100 px-1 py-0.5 rounded">js/app.js</code> untuk implementasi fitur ES6 dasar:
                                    </p>

                                    <CodeBlock
                                        title="js/app.js"
                                        code={`// JavaScript Next Gen Demo Code
                
// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariables() {
// Menggunakan var (cara lama)
var oldVar = "Old variable";
{
var oldVar = "Changed inside block";
}

// Menggunakan let (ES6)
let newLet = "New let variable";
{
let newLet = "Different variable inside block";
console.log("newLet inside block:", newLet);
}

// Menggunakan const (ES6)
const PI = 3.14159;
const user = { name: "John", age: 30 };
// PI = 3.15; // Error! Tidak bisa mengubah nilai const
user.age = 31; // Ini valid! Konten objek const dapat diubah

return {
oldVar,
newLet,
PI,
user
};
}

// ----------------------------
// Arrow Functions
// ----------------------------
export function demoArrowFunctions() {
// Fungsi reguler
function regularSum(a, b) {
return a + b;
}

// Arrow function dasar
const arrowSum = (a, b) => {
return a + b;
};

// Arrow function dengan implicit return
const shortArrowSum = (a, b) => a + b;

// Arrow function tanpa parameter
const sayHello = () => "Hello World!";

// Arrow function dengan satu parameter (kurung opsional)
const square = x => x * x;

return {
regularSum: regularSum(5, 3),
arrowSum: arrowSum(5, 3),
shortArrowSum: shortArrowSum(5, 3),
sayHello: sayHello(),
square: square(4)
};
}

// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiterals() {
const name = "John";
const age = 30;

// String concatenation cara lama
const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";

// Template literals (ES6)
const newWay = \`Nama saya \${name} dan umur saya \${age} tahun.\`;

// Template literals multi-baris
const multiLine = \`
Ini adalah string multi-baris.
Sangat berguna untuk HTML template.
Nama: \${name}
Umur: \${age}
\`;

// Template literals dengan ekspresi
const expression = \`Tahun lahir: \${new Date().getFullYear() - age}\`;

return {
oldWay,
newWay,
multiLine,
expression
};
}`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Sekarang update <code className="bg-gray-100 px-1 py-0.5 rounded">main.js</code> untuk mengimpor dan menjalankan demo:
                                    </p>

                                    <CodeBlock
                                        title="Tambahkan import ini ke js/main.js"
                                        code={`import { demoVariables, demoArrowFunctions, demoTemplateLiterals } from './app.js';`}
                                        language="javascript"
                                    />

                                    <CodeBlock
                                        title="Tambahkan fungsi runAllDemos di js/main.js"
                                        code={`// Fungsi utama untuk menjalankan semua demo
function runAllDemos() {
// Demo Let dan Const
const varResults = demoVariables();
addOutput(
"1. Let dan Const",
"var vs let/const dan block scope",
\`var (function scope): \${varResults.oldVar}
let (block scope): \${varResults.newLet}
const (immutable): \${varResults.PI}
const object (mutable content): \${JSON.stringify(varResults.user)}\`
);

// Demo Arrow Functions
const arrowResults = demoArrowFunctions();
addOutput(
"2. Arrow Functions",
"Perbandingan fungsi reguler dan arrow functions",
\`Regular function: \${arrowResults.regularSum}
Arrow function: \${arrowResults.arrowSum}
Short arrow: \${arrowResults.shortArrowSum}
No params: \${arrowResults.sayHello}
Single param: \${arrowResults.square}\`
);

// Demo Template Literals
const templateResults = demoTemplateLiterals();
addOutput(
"3. Template Literals",
"String concatenation vs template literals",
\`Old way: \${templateResults.oldWay}
New way: \${templateResults.newWay}
With expression: \${templateResults.expression}
Multi-line: \${templateResults.multiLine}\`
);
}`}
                                        language="javascript"
                                    />

                                    <InfoBox type="info">
                                        <p>
                                            <strong>let dan const</strong> memecahkan masalah hoisting dan scope dalam JavaScript. Penggunaan <strong>arrow functions</strong> tidak hanya membuat kode lebih ringkas, tetapi juga mengatasi masalah <em>this</em> binding. <strong>Template literals</strong> membuat interpolasi string jauh lebih mudah dan readable.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 3,
                            title: 'Destructuring, Spread dan Rest Operators',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Tambahkan fungsi-fungsi berikut ke file <code className="bg-gray-100 px-1 py-0.5 rounded">js/app.js</code>:
                                    </p>

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
// Object destructuring
const person = {
firstName: "John",
lastName: "Doe",
age: 30,
email: "john@example.com",
address: {
city: "Jakarta",
postalCode: "12345"
}
};

// Basic destructuring
const { firstName, lastName } = person;

// Destructuring dengan nama variabel baru
const { firstName: fName, lastName: lName } = person;

// Destructuring dengan nilai default
const { hobby = "coding" } = person;

// Nested destructuring
const { address: { city, postalCode } } = person;

// Array destructuring
const colors = ["red", "green", "blue", "yellow", "purple"];

// Basic array destructuring
const [firstColor, secondColor] = colors;

// Skip elements
const [, , thirdColor] = colors;

// Rest pattern dalam array destructuring
const [primary, secondary, ...restColors] = colors;

// Swap variables menggunakan destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];

return {
objectBasic: { firstName, lastName },
objectRenamed: { fName, lName },
objectDefault: hobby,
objectNested: { city, postalCode },
arrayBasic: { firstColor, secondColor },
arraySkipped: thirdColor,
arrayRest: { primary, secondary, restColors },
swapped: { a, b }
};
}

// ----------------------------
// Spread dan Rest Operators
// ----------------------------
export function demoSpreadRest() {
// Spread operator dengan array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// Copy array dengan spread
const numbersCopy = [...numbers];

// Merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

// Spread operator dengan objek
const person = {
name: "John",
age: 30
};

// Copy objek
const personCopy = { ...person };

// Extend objek
const extendedPerson = {
...person,
email: "john@example.com",
age: 31 // Override properti yang ada
};

// Rest parameter dalam fungsi
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

// Rest parameter dengan parameter reguler
function process(first, second, ...rest) {
return {
first,
second,
rest
};
}

return {
spreadArray: moreNumbers,
copyArray: numbersCopy,
mergedArrays: mergedArray,
spreadObject: extendedPerson,
restSum: sum(1, 2, 3, 4, 5),
restProcess: process("a", "b", "c", "d", "e")
};
}`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-700">
                                        Update <code className="bg-gray-100 px-1 py-0.5 rounded">main.js</code> untuk menjalankan demo-demo baru:
                                    </p>

                                    <CodeBlock
                                        title="Update import di js/main.js"
                                        code={`import { demoVariables, demoArrowFunctions, demoTemplateLiterals, demoDestructuring, demoSpreadRest } from './app.js';`}
                                        language="javascript"
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke awal fungsi runAllDemos di js/main.js"
                                        code={`// Demo Destructuring
const destructuringResults = demoDestructuring();
addOutput(
"4. Destructuring",
"Ekstraksi nilai dari objek dan array",
\`Object basic: \${JSON.stringify(destructuringResults.objectBasic)}
Object renamed: \${JSON.stringify(destructuringResults.objectRenamed)}
Object default: \${destructuringResults.objectDefault}
Object nested: \${JSON.stringify(destructuringResults.objectNested)}
Array basic: \${JSON.stringify(destructuringResults.arrayBasic)}
Array skipped: \${destructuringResults.arraySkipped}
Array with rest: \${JSON.stringify(destructuringResults.arrayRest)}
Swapped variables: \${JSON.stringify(destructuringResults.swapped)}\`
);

// Demo Spread dan Rest Operators
const spreadRestResults = demoSpreadRest();
addOutput(
"5. Spread dan Rest Operators",
"Pengggunaan ... untuk array dan objek",
\`Spread in array: \${JSON.stringify(spreadRestResults.spreadArray)}
Copy array: \${JSON.stringify(spreadRestResults.copyArray)}
Merged arrays: \${JSON.stringify(spreadRestResults.mergedArrays)}
Spread in object: \${JSON.stringify(spreadRestResults.spreadObject)}
Rest in function (sum): \${spreadRestResults.restSum}
Rest with regular params: \${JSON.stringify(spreadRestResults.restProcess)}\`
);`}
                                        language="javascript"
                                    />

                                    <InfoBox type="info">
                                        <p>
                                            <strong>Destructuring</strong> adalah cara efisien untuk mengekstrak nilai dari array dan objek. <strong>Spread operator</strong> (...) memungkinkan untuk memperluas array atau objek, sementara <strong>rest parameter</strong> memungkinkan untuk mengumpulkan elemen yang tersisa ke dalam array tunggal.
                                        </p>
                                    </InfoBox>

                                </div>
                            ),
                        },
                        {
                            id: 4,
                            title: 'Default Parameters, Classes, Object Literals',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Tambahkan fungsi-fungsi berikut ke file <code className="bg-gray-100 px-1 py-0.5 rounded">js/app.js</code>:
                                    </p>

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Default Parameters
// ----------------------------
export function demoDefaultParams() {
// Cara lama (ES5)
function greetOld(name, greeting) {
  name = name || "Guest";
  greeting = greeting || "Hello";
  return \`\${greeting}, \${name}!\`;
}

// Dengan default parameters (ES6)
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Default parameters dengan ekspresi
function createUser(name, role = "user", createdAt = new Date().toISOString()) {
  return { name, role, createdAt };
}

// Default parameters bisa menggunakan parameter sebelumnya
function createOrder(product, quantity = 1, price, total = price * quantity) {
  return { product, quantity, price, total };
}

return {
  oldWay: greetOld(),
  oldWayParams: greetOld("John", "Hi"),
  newWay: greet(),
  newWayParams: greet("John", "Hi"),
  withExpression: createUser("Alice"),
  usingPrevious: createOrder("Laptop", 2, 1000000)
};
}`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Classes
// ----------------------------
export function demoClasses() {
// Definisi class
class User {
  // Constructor
  constructor(name, email) {
      this.name = name;
      this.email = email;
      this.createdAt = new Date();
  }
  
  // Methods
  getInfo() {
      return \`\${this.name} (\${this.email})\`;
  }
  
  getCreatedDate() {
      return this.createdAt.toLocaleDateString();
  }
}

// Inheritance
class Admin extends User {
  constructor(name, email, role = "admin") {
      // Memanggil constructor parent class
      super(name, email);
      this.role = role;
  }
  
  // Override method
  getInfo() {
      return \`\${this.name} (\${this.email}) - \${this.role}\`;
  }
  
  // Admin method
  hasAccess(module) {
      return true; // Untuk contoh, admin selalu punya akses
  }
}

// Instances
const user = new User("John Doe", "john@example.com");
const admin = new Admin("Admin User", "admin@example.com");

return {
  user: {
      info: user.getInfo(),
      createdDate: user.getCreatedDate()
  },
  admin: {
      info: admin.getInfo(),
      createdDate: admin.getCreatedDate(),
      hasAccess: admin.hasAccess("dashboard")
  },
  isUserInstance: user instanceof User,
  isAdminInstance: admin instanceof User // true karena inheritance
};
}`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Enhanced Object Literals
// ----------------------------
export function demoObjectLiterals() {
// Property shorthand
const name = "John";
const age = 30;

// Cara lama
const oldPerson = {
  name: name,
  age: age,
  sayHello: function() {
      return "Hello!";
  }
};

// Object literal modern (ES6)
const newPerson = {
  name,
  age,
  // Method shorthand
  sayHello() {
      return "Hello!";
  },
  // Computed property names
  ["skill_" + 1]: "JavaScript",
  ["skill_" + 2]: "React"
};

// Combining with other features
const prefix = "user";
const userData = {
    [\`\${prefix}_id\`]: 123,   // Properti dengan template literal harus dalam []
    [\`\${prefix}_name\`]: "john_doe",
    [Date.now()]: "timestamp" // Properti dengan nilai timestamp
};

return {
  oldWay: oldPerson,
  newWay: newPerson,
  methods: {
      old: oldPerson.sayHello(),
      new: newPerson.sayHello()
  },
  computedProps: {
      skill1: newPerson.skill_1,
      skill2: newPerson.skill_2
  },
  dynamicProps: userData
};
}`}
                                    />

                                    <p className="text-gray-700">
                                        Update main.js untuk menjalankan demo-demo baru:
                                    </p>

                                    <CodeBlock
                                        title="Update import di js/main.js"
                                        code={`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals
} from './app.js';`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke awal fungsi runAllDemos di js/main.js"
                                        code={`// Demo Default Parameters
const defaultParamsResults = demoDefaultParams();
addOutput(
  "6. Default Parameters",
  "Nilai default untuk parameter fungsi",
  \`Old way: \${defaultParamsResults.oldWay}
Old way with params: \${defaultParamsResults.oldWayParams}
New way: \${defaultParamsResults.newWay}
New way with params: \${defaultParamsResults.newWayParams}
With expression: \${JSON.stringify(defaultParamsResults.withExpression)}
Using previous params: \${JSON.stringify(defaultParamsResults.usingPrevious)}\`
);

// Demo Classes
const classesResults = demoClasses();
addOutput(
  "7. Classes",
  "Penggunaan class dan inheritance",
  \`User: \${classesResults.user.info}
User created: \${classesResults.user.createdDate}
Admin: \${classesResults.admin.info}
Admin created: \${classesResults.admin.createdDate}
Admin has access: \${classesResults.admin.hasAccess}
user instanceof User: \${classesResults.isUserInstance}
admin instanceof User: \${classesResults.isAdminInstance}\`
);

// Demo Enhanced Object Literals
const objectLiteralsResults = demoObjectLiterals();
addOutput(
  "8. Enhanced Object Literals",
  "Penulisan objek yang lebih ringkas",
  \`Property shorthand: \${JSON.stringify(objectLiteralsResults.newWay)}
Method shorthand: \${objectLiteralsResults.methods.new}
Computed properties: \${JSON.stringify(objectLiteralsResults.computedProps)}
Dynamic properties: \${JSON.stringify(objectLiteralsResults.dynamicProps)}\`
);`}
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 5,
                            title: 'Array Methods dan Higher-Order Functions',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Tambahkan fungsi-fungsi berikut ke file <code className="bg-gray-100 px-1 py-0.5 rounded">js/app.js</code>:
                                    </p>

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Modern Array Methods dan Higher-Order Functions
// ----------------------------
export function demoArrayMethods() {
// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 30, active: false },
  { id: 3, name: "Bob", age: 22, active: true },
  { id: 4, name: "Alice", age: 28, active: true },
  { id: 5, name: "Charlie", age: 35, active: false }
];

// map
const doubled = numbers.map(num => num * 2);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
const activeUsers = users.filter(user => user.active);

// find
const userJane = users.find(user => user.name === "Jane");

// some dan every
const hasAdult = users.some(user => user.age >= 18);
const allAdults = users.every(user => user.age >= 18);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
const oldest = users.reduce((oldest, user) => 
  user.age > oldest.age ? user : oldest, users[0]);

// Combining methods (chaining)
const activeUsersNames = users
  .filter(user => user.active)
  .map(user => user.name);

const totalActiveAge = users
  .filter(user => user.active)
  .reduce((sum, user) => sum + user.age, 0);

return {
  map: doubled,
  filter: {
      evenNumbers,
      activeUsers: activeUsers.length
  },
  find: userJane,
  some: hasAdult,
  every: allAdults,
  reduce: {
      sum,
      oldest: oldest.name
  },
  chaining: {
      activeUsersNames,
      totalActiveAge
  }
};
}`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Array Destructuring dan Spread in-depth
// ----------------------------
export function demoAdvancedArrays() {
const numbers = [1, 2, 3, 4, 5];

// Clone dan concat
const numbersCopy = [...numbers];
const moreNumbers = [...numbers, 6, 7, 8];
const combinedArrays = [...numbers, ...[6, 7, 8, 9]];

// Array.from
const fromIterable = Array.from("hello");
const withMapFn = Array.from(numbers, n => n * n);

// Array.of
const newArray = Array.of(1, "two", { three: 3 });

// Flat dan FlatMap
const nestedArrays = [1, [2, 3], [[4, 5], 6]];
const flattened = nestedArrays.flat();
const deepFlattened = nestedArrays.flat(2);

const flatMapped = numbers.flatMap(n => [n, n * 2]);

// Includes
const hasThree = numbers.includes(3);

return {
  clone: numbersCopy,
  concat: {
      moreNumbers,
      combinedArrays
  },
  arrayFrom: {
      fromIterable,
      withMapFn
  },
  arrayOf: newArray,
  flatAndFlatMap: {
      flattened,
      deepFlattened,
      flatMapped
  },
  includes: hasThree
};
}`}
                                    />

                                    <p className="text-gray-700">
                                        Update main.js untuk menjalankan demo-demo baru:
                                    </p>

                                    <CodeBlock
                                        title="Update import di js/main.js"
                                        code={`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals,
demoArrayMethods,
demoAdvancedArrays
} from './app.js';`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke awal fungsi runAllDemos di js/main.js"
                                        code={`// Demo Array Methods
const arrayMethodsResults = demoArrayMethods();
addOutput(
  "9. Modern Array Methods",
  "Higher-Order Functions pada array",
  \`map: \${JSON.stringify(arrayMethodsResults.map)}
filter (evenNumbers): \${JSON.stringify(arrayMethodsResults.filter.evenNumbers)}
filter (activeUsers): \${arrayMethodsResults.filter.activeUsers}
find: \${JSON.stringify(arrayMethodsResults.find)}
some (hasAdult): \${arrayMethodsResults.some}
every (allAdults): \${arrayMethodsResults.every}
reduce (sum): \${arrayMethodsResults.reduce.sum}
reduce (oldest): \${arrayMethodsResults.reduce.oldest}
chaining (activeUsersNames): \${JSON.stringify(arrayMethodsResults.chaining.activeUsersNames)}
chaining (totalActiveAge): \${arrayMethodsResults.chaining.totalActiveAge}\`
);

// Demo Advanced Arrays
const advArraysResults = demoAdvancedArrays();
addOutput(
  "10. Advanced Arrays",
  "Fitur array lanjutan",
  \`Clone: \${JSON.stringify(advArraysResults.clone)}
Concat: \${JSON.stringify(advArraysResults.concat.combinedArrays)}
Array.from: \${JSON.stringify(advArraysResults.arrayFrom.withMapFn)}
Array.of: \${JSON.stringify(advArraysResults.arrayOf)}
flat: \${JSON.stringify(advArraysResults.flatAndFlatMap.flattened)}
deepFlat: \${JSON.stringify(advArraysResults.flatAndFlatMap.deepFlattened)}
flatMap: \${JSON.stringify(advArraysResults.flatAndFlatMap.flatMapped)}
includes: \${advArraysResults.includes}\`
);`}
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 6,
                            title: 'Promise dan Async/Await',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Tambahkan fungsi-fungsi berikut ke file <code className="bg-gray-100 px-1 py-0.5 rounded">js/app.js</code>:
                                    </p>

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Promises
// ----------------------------
export function demoPromises() {
// Simulasi operasi asinkron dengan Promise
function fetchData(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (id > 0) {
              resolve({ id, name: \`User \${id}\`, success: true });
          } else {
              reject(new Error("Invalid ID"));
          }
      }, 1000);
  });
}

// Basic Promise usage
let basicPromiseResult = "Loading...";
fetchData(1)
  .then(data => {
      basicPromiseResult = \`Success: \${JSON.stringify(data)}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
  })
  .catch(err => {
      basicPromiseResult = \`Error: \${err.message}\`;
      document.getElementById('promise-basic').textContent = basicPromiseResult;
  });

// Promise chaining
let chainResult = "Loading...";
fetchData(2)
  .then(user => {
      chainResult = \`Got user: \${user.name}\`;
      return fetchData(3); // Return another promise
  })
  .then(secondUser => {
      chainResult += \` and \${secondUser.name}\`;
      document.getElementById('promise-chain').textContent = chainResult;
  })
  .catch(err => {
      chainResult = \`Error: \${err.message}\`;
      document.getElementById('promise-chain').textContent = chainResult;
  });

// Promise.all
let allResult = "Loading...";
Promise.all([fetchData(4), fetchData(5), fetchData(6)])
  .then(results => {
      allResult = \`All completed: \${results.map(r => r.name).join(', ')}\`;
      document.getElementById('promise-all').textContent = allResult;
  })
  .catch(err => {
      allResult = \`Error in one: \${err.message}\`;
      document.getElementById('promise-all').textContent = allResult;
  });

// Promise.race
let raceResult = "Loading...";
Promise.race([
  fetchData(7),
  fetchData(8),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1500))
])
  .then(winner => {
      raceResult = \`Race winner: \${winner.name}\`;
      document.getElementById('promise-race').textContent = raceResult;
  })
  .catch(err => {
      raceResult = \`Race error: \${err.message}\`;
      document.getElementById('promise-race').textContent = raceResult;
  });

// Create elements for promise updates
const outputDiv = document.createElement('div');
outputDiv.className = 'promise-outputs';

const createPromiseElement = (id, label) => {
  const el = document.createElement('div');
  el.className = 'promise-result';
  el.innerHTML = \`<strong>\${label}:</strong> <span id="\${id}">Loading...</span>\`;
  outputDiv.appendChild(el);
};

createPromiseElement('promise-basic', 'Basic Promise');
createPromiseElement('promise-chain', 'Promise Chain');
createPromiseElement('promise-all', 'Promise.all');
createPromiseElement('promise-race', 'Promise.race');

return outputDiv;
}`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke js/app.js"
                                        code={`// ----------------------------
// Async/Await
// ----------------------------
export function demoAsyncAwait() {
// Simulasi API call
function fetchUser(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (id > 0) {
              resolve({ id, name: \`User \${id}\`, email: \`user\${id}@example.com\` });
          } else {
              reject(new Error("Invalid user ID"));
          }
      }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve([
              { id: 1, title: "Post 1", body: "Content for post 1" },
              { id: 2, title: "Post 2", body: "Content for post 2" },
          ]);
      }, 800);
  });
}

// Using async/await
async function getUserData(id) {
  try {
      const user = await fetchUser(id);
      const posts = await fetchUserPosts(user.id);
      return {
          user,
          posts,
          success: true
      };
  } catch (error) {
      return {
          error: error.message,
          success: false
      };
  }
}

// Parallel execution with async/await
async function getMultipleUsers(ids) {
  try {
      // Execute promises in parallel
      const userPromises = ids.map(id => fetchUser(id));
      const users = await Promise.all(userPromises);
      
      // Get posts for all users in parallel
      const postPromises = users.map(user => fetchUserPosts(user.id));
      const allPosts = await Promise.all(postPromises);
      
      // Combine results
      return users.map((user, i) => ({
          user,
          posts: allPosts[i]
      }));
  } catch (error) {
      return { error: error.message };
  }
}

// Create elements to display results
const outputDiv = document.createElement('div');
outputDiv.className = 'async-outputs';

// Basic async/await example
const basicAsyncResult = document.createElement('div');
basicAsyncResult.innerHTML = '<strong>Single User:</strong> Loading...';
basicAsyncResult.className = 'async-result';
outputDiv.appendChild(basicAsyncResult);

// Parallel async/await example
const parallelAsyncResult = document.createElement('div');
parallelAsyncResult.innerHTML = '<strong>Multiple Users:</strong> Loading...';
parallelAsyncResult.className = 'async-result';
outputDiv.appendChild(parallelAsyncResult);

// Execute and update UI
getUserData(42).then(result => {
  if (result.success) {
      basicAsyncResult.innerHTML = \`
          <strong>Single User:</strong> \${result.user.name} | 
          Posts: \${result.posts.length}
      \`;
  } else {
      basicAsyncResult.innerHTML = \`<strong>Error:</strong> \${result.error}\`;
  }
});

getMultipleUsers([101, 102, 103]).then(results => {
  if (!results.error) {
      parallelAsyncResult.innerHTML = \`
          <strong>Multiple Users:</strong> 
          \${results.map(r => r.user.name).join(', ')} |
          Total posts: \${results.reduce((sum, r) => sum + r.posts.length, 0)}
      \`;
  } else {
      parallelAsyncResult.innerHTML = \`<strong>Error:</strong> \${results.error}\`;
  }
});

return outputDiv;
}`}
                                    />

                                    <p className="text-gray-700">
                                        Update main.js untuk menjalankan demo-demo asynchronous:
                                    </p>

                                    <CodeBlock
                                        title="Update import di js/main.js"
                                        code={`import { 
demoVariables, 
demoArrowFunctions, 
demoTemplateLiterals, 
demoDestructuring, 
demoSpreadRest,
demoDefaultParams,
demoClasses,
demoObjectLiterals,
demoArrayMethods,
demoAdvancedArrays,
demoPromises,
demoAsyncAwait
} from './app.js';`}
                                    />

                                    <CodeBlock
                                        title="Tambahkan ke awal fungsi runAllDemos di js/main.js"
                                        code={`// Demo Promises
addOutput(
  "11. Promises",
  "Penanganan operasi asinkron dengan Promise",
  ""
);
const promiseOutput = demoPromises();
document.querySelector('.output-item:last-child .result').appendChild(promiseOutput);

// Demo Async/Await
addOutput(
  "12. Async/Await",
  "Penanganan operasi asinkron dengan syntax yang lebih bersih",
  ""
);
const asyncOutput = demoAsyncAwait();
document.querySelector('.output-item:last-child .result').appendChild(asyncOutput);`}
                                    />
                                </div>
                            ),
                        }
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
                        href='https://forms.gle/Gt26HB44vG3Y2r6d9'
                    />
                </div>
            </SectionWrapper>

        </PraktikumLayout>
    )
};