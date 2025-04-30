import React from 'react';
import { Terminal, PackageOpen, FolderTree, Settings, Command, Info, Coffee, UserCheck, Server } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex items-center mb-4">
                <div className="p-3 rounded-md bg-blue-100 mr-4">
                    <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

interface CodeSnippetProps {
    code: string;
    title?: string | null;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, title = null }) => {
    return (
        <div className="mb-6">
            {title && <h4 className="text-lg font-medium mb-2 text-blue-700">{title}</h4>}
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const PyramidInstallation = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                        Instalasi dan Konfigurasi Pyramid
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <Terminal size={28} className="text-blue-600 mr-3" />
                        <span>Memulai dengan framework web Python yang fleksibel dan skalabel</span>
                    </div>
                </header>

                {/* Prerequisites Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Info size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Prasyarat Instalasi</h2>
                            <p className="text-gray-700 mb-6">
                                Sebelum menginstal Pyramid, pastikan sistem Anda memenuhi persyaratan berikut untuk pengalaman pengembangan yang optimal.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <FeatureCard
                                    title="Python 3.7+"
                                    description="Pyramid 2.0+ membutuhkan Python versi 3.7 atau lebih baru. Disarankan menggunakan Python 3.9 atau 3.10 untuk kompatibilitas terbaik."
                                    icon={Coffee}
                                />
                                <FeatureCard
                                    title="Pip & Setuptools"
                                    description="Package installer Python (pip) versi terbaru dan setuptools diperlukan untuk mengelola dependensi Pyramid."
                                    icon={PackageOpen}
                                />
                                <FeatureCard
                                    title="Virtual Environment"
                                    description="Sangat direkomendasikan menggunakan virtual environment untuk mengisolasi dependensi proyek Anda."
                                    icon={FolderTree}
                                />
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                                <h3 className="text-xl font-semibold mb-2">Mengapa Virtual Environment?</h3>
                                <p className="text-gray-700">
                                    Virtual environment memungkinkan Anda membuat lingkungan Python terisolasi untuk setiap proyek,
                                    mencegah konflik dependensi antar proyek, dan memudahkan pengelolaan versi package.
                                    Ini adalah praktik standar dalam pengembangan Python modern.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Installation Process Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Command size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Proses Instalasi</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid dapat diinstal dengan berbagai cara, tetapi metode yang paling umum adalah menggunakan pip dalam virtual environment.
                                Berikut adalah langkah-langkah detail untuk menginstal Pyramid dengan benar.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">1. Mempersiapkan Lingkungan</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <CodeSnippet
                                            title="Membuat Virtual Environment"
                                            code={`# Windows/macOS/Linux
python -m venv venv

# Aktivasi virtual environment
# Windows:
venv\\Scripts\\activate

# macOS/Linux:
source venv/bin/activate

# Memperbarui pip & setuptools
pip install --upgrade pip setuptools`}
                                        />
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Indikator Virtual Environment Aktif</h4>
                                        <p className="text-gray-700 mb-4">
                                            Saat virtual environment aktif, Anda akan melihat nama environment (biasanya "venv")
                                            di awal prompt shell Anda:
                                        </p>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md">
                                            <code>(venv) user@hostname:~/myproject$</code>
                                        </pre>
                                        <p className="text-gray-700 mt-4">
                                            Untuk menonaktifkan virtual environment, cukup ketik:
                                        </p>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md mt-2">
                                            <code>deactivate</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">2. Menginstal Pyramid</h3>

                                <div className="grid md:grid-cols-1 gap-6">
                                    <CodeSnippet
                                        title="Instalasi Dasar"
                                        code={`# Instalasi Pyramid versi terbaru
pip install "pyramid"

# Instalasi Pyramid versi spesifik
pip install "pyramid==2.0.2"

# Instalasi dengan extras untuk memulai proyek
pip install "pyramid[starter]"`}
                                    />

                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Pilihan "Extras" Instalasi</h4>
                                        <p className="text-gray-700 mb-4">
                                            Pyramid menyediakan beberapa kumpulan dependensi opsional yang dapat diinstal berdasarkan kebutuhan:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>pyramid[starter]</strong>: Dependensi untuk memulai proyek Pyramid dasar</li>
                                            <li><strong>pyramid[testing]</strong>: Alat untuk testing aplikasi Pyramid</li>
                                            <li><strong>pyramid[docs]</strong>: Dependensi untuk membangun dokumentasi Pyramid</li>
                                            <li><strong>pyramid[dev]</strong>: Semua dependensi untuk pengembangan Pyramid (termasuk testing dan docs)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">3. Membuat Proyek Pyramid</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <CodeSnippet
                                            title="Menggunakan Cookiecutter (Direkomendasikan)"
                                            code={`# Menginstal cookiecutter
pip install cookiecutter

# Membuat proyek dengan Cookiecutter Starter
cookiecutter gh:Pylons/pyramid-cookiecutter-starter

# ATAU menggunakan Cookiecutter SQLAlchemy
cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}
                                        />

                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                                            <p className="text-gray-700 text-sm">
                                                Cookiecutter akan menanyakan beberapa pertanyaan seperti nama proyek,
                                                template engine yang digunakan, dan opsi lainnya untuk menyesuaikan
                                                proyek dengan kebutuhan Anda.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <CodeSnippet
                                            title="Menggunakan pcreate (Cara Lama)"
                                            code={`# Metode pcreate (deprecating)
pcreate -s starter myproject

# Menginstal proyek dalam mode editable
cd myproject
pip install -e ".[dev]"`}
                                        />

                                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                                            <p className="text-gray-700 text-sm">
                                                <strong>Catatan:</strong> pcreate sedang dalam proses deprecated dan akan
                                                dihapus di versi mendatang. Direkomendasikan menggunakan cookiecutter sebagai gantinya.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">4. Menjalankan Proyek</h3>

                                <CodeSnippet
                                    title="Memulai Server Pengembangan"
                                    code={`# Di direktori proyek
cd myproject

# Menjalankan server dengan auto-reload
pserve development.ini --reload

# ATAU menggunakan waitress (untuk produksi)
pip install waitress
waitress-serve --port=6543 myproject:app`}
                                />

                                <div className="mt-4 p-6 bg-green-50 rounded-lg border border-green-200">
                                    <h4 className="text-lg font-medium mb-2 text-green-700">Server Berjalan!</h4>
                                    <p className="text-gray-700">
                                        Aplikasi Pyramid Anda kini berjalan dan dapat diakses di:
                                    </p>
                                    <div className="mt-2 p-3 bg-white rounded-md border border-gray-200 font-mono text-green-600">
                                        http://localhost:6543
                                    </div>
                                    <p className="text-gray-700 mt-3">
                                        Flag <code className="bg-gray-100 px-1 rounded">--reload</code> memungkinkan server memuat ulang
                                        secara otomatis saat ada perubahan kode, sangat berguna selama pengembangan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Structure Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <FolderTree size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Struktur Direktori Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Memahami struktur direktori standar Pyramid sangat penting untuk pengembangan yang efisien.
                                Berikut adalah eksplorasi struktur direktori yang dihasilkan oleh scaffold Pyramid standar.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Struktur Direktori Dasar</h3>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                                        <code>{`myproject/
│
├── CHANGES.txt              # Log perubahan proyek
├── MANIFEST.in              # Instruksi packaging
├── README.txt               # Dokumentasi proyek
├── development.ini          # Konfigurasi pengembangan
├── production.ini           # Konfigurasi produksi
├── pytest.ini               # Konfigurasi pengujian
├── setup.py                 # Script instalasi package
│
└── myproject/               # Package Python utama
    ├── __init__.py          # Entry point aplikasi
    ├── routes.py            # Definisi rute
    ├── static/              # File statis (CSS, JS, dsb)
    │   ├── theme.css
    │   └── app.js
    ├── templates/           # Template HTML
    │   ├── layout.jinja2
    │   └── home.jinja2
    ├── views/               # View functions/callables
    │   ├── __init__.py
    │   ├── default.py
    │   └── notfound.py
    └── models/              # Model data (bila ada)
        └── __init__.py`}</code>
                                    </pre>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">File-file Penting</h3>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-blue-700 mb-1">setup.py</h4>
                                            <p className="text-gray-700 text-sm">
                                                Mendefinisikan metadata proyek dan dependensi. Ini adalah file yang digunakan
                                                pip untuk menginstal proyek Anda dengan <code className="bg-gray-100 px-1 rounded">pip install -e .</code>
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-blue-700 mb-1">__init__.py</h4>
                                            <p className="text-gray-700 text-sm">
                                                Entry point utama aplikasi yang berisi factory function untuk membuat aplikasi WSGI.
                                                Biasanya berisi fungsi <code className="bg-gray-100 px-1 rounded">main()</code> yang dikonfigurasi di setup.py.
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-blue-700 mb-1">development.ini & production.ini</h4>
                                            <p className="text-gray-700 text-sm">
                                                File konfigurasi yang digunakan untuk menjalankan aplikasi pada mode pengembangan atau produksi.
                                                Berisi pengaturan server, logging, dan konfigurasi aplikasi.
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-blue-700 mb-1">routes.py</h4>
                                            <p className="text-gray-700 text-sm">
                                                Mendefinisikan pemetaan URL dengan fungsi view yang akan menangani request.
                                                Biasanya berisi fungsi <code className="bg-gray-100 px-1 rounded">includeme()</code> yang
                                                dipanggil melalui <code className="bg-gray-100 px-1 rounded">config.include('.routes')</code>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                        <h4 className="font-medium text-blue-700 mb-2">Struktur yang Dapat Disesuaikan</h4>
                                        <p className="text-gray-700 text-sm">
                                            Penting untuk dicatat bahwa Pyramid tidak memaksakan struktur direktori tertentu.
                                            Struktur di atas adalah konvensi umum, tetapi Anda bebas menyesuaikannya sesuai kebutuhan proyek.
                                            Untuk aplikasi yang sangat sederhana, semua kode bahkan dapat ditempatkan dalam satu file.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Struktur Konfigurasi INI</h3>

                                <CodeSnippet
                                    title="Contoh File development.ini"
                                    code={`[app:main]
use = egg:myproject

pyramid.reload_templates = true
pyramid.debug_authorization = false
pyramid.debug_notfound = false
pyramid.debug_routematch = false
pyramid.default_locale_name = en
pyramid.includes =
    pyramid_debugtoolbar
    pyramid_jinja2

# Database URL if using SQLAlchemy
sqlalchemy.url = sqlite:///%(here)s/myproject.sqlite

[server:main]
use = egg:waitress#main
listen = localhost:6543

# Logging configuration
[loggers]
keys = root, myproject

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = INFO
handlers = console

[logger_myproject]
level = DEBUG
handlers =
qualname = myproject

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(asctime)s %(levelname)-5.5s [%(name)s:%(lineno)s][%(threadName)s] %(message)s`}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                    <h3 className="text-xl font-semibold mb-3">Struktur untuk Aplikasi Kompleks</h3>
                                    <p className="text-gray-700 mb-4">
                                        Untuk aplikasi yang lebih besar, Pyramid mendukung struktur modular dengan pemisahan
                                        berdasarkan fitur atau fungsi bisnis:
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm">
                                        <code>{`myproject/
├── setup.py
└── myproject/
    ├── __init__.py
    ├── core/             # Fungsi-fungsi inti
    ├── auth/             # Autentikasi & pengguna
    │   ├── __init__.py
    │   ├── models.py
    │   ├── views.py
    │   └── templates/
    ├── blog/             # Fitur blog
    │   ├── __init__.py
    │   ├── models.py
    │   ├── views.py
    │   └── templates/
    └── admin/            # Panel admin
        ├── __init__.py
        ├── views.py
        └── templates/`}</code>
                                    </pre>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                                    <h3 className="text-xl font-semibold mb-3">Praktik Terbaik Struktur Proyek</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Kelompokkan fitur-fitur terkait dalam subpackage</li>
                                        <li>Pakai <code className="bg-gray-100 px-1 rounded">includeme()</code> di setiap package untuk registrasi konfigurasi</li>
                                        <li>Gunakan namespace templates untuk mencegah konflik</li>
                                        <li>Terapkan "asset specifications" untuk mereferensikan resource</li>
                                        <li>Pisahkan konfigurasi ke bagian-bagian logis</li>
                                        <li>Buat struktur direktori yang mencerminkan domain bisnis</li>
                                        <li>Tetap konsisten dengan konvensi penamaan</li>
                                    </ul>
                                    <p className="mt-4 text-gray-700">
                                        Gunakan <code className="bg-gray-100 px-1 rounded">config.include('myproject.modulename')</code> di
                                        file <code className="bg-gray-100 px-1 rounded">__init__.py</code> untuk menyertakan submodul ke dalam konfigurasi utama.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Configuration Details Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Settings size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konfigurasi Mendalam</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid menyediakan sistem konfigurasi yang komprehensif dan fleksibel. Berikut adalah detail
                                tentang cara mengkonfigurasi berbagai aspek aplikasi Pyramid Anda.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Konfigurasi Dasar Aplikasi</h3>
                                    <CodeSnippet
                                        code={`# myproject/__init__.py
from pyramid.config import Configurator

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application. """
    with Configurator(settings=settings) as config:
        # Includes
        config.include('pyramid_jinja2')
        config.include('.routes')
        
        # Static views
        config.add_static_view('static', 'static', cache_max_age=3600)
        
        # Session configuration
        config.set_session_factory(...)
        
        # Authentication and authorization
        config.set_authentication_policy(...)
        config.set_authorization_policy(...)
        
        # Scan for view decorators
        config.scan()
        
        return config.make_wsgi_app()`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">File INI vs Settings Programatik</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid menggunakan kombinasi file konfigurasi INI dan kode Python untuk menerapkan konfigurasi.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium text-blue-700 mb-2">File INI</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Konfigurasi server dan lingkungan</li>
                                            <li>Pengaturan logging</li>
                                            <li>Parameter konfigurasi aplikasi</li>
                                            <li>URL database dan pengaturan koneksi</li>
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-medium text-blue-700 mb-2">Kode Python</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Definisi routes dan views</li>
                                            <li>Registrasi renderers</li>
                                            <li>Middleware dan tweens</li>
                                            <li>Event subscribers</li>
                                            <li>Authentication & authorization policies</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <p className="text-gray-700 text-sm">
                                            <strong>Pro Tip:</strong> Pengaturan di file INI dapat diakses sebagai dictionary
                                            melalui parameter <code className="bg-gray-100 px-1 rounded">settings</code> yang diteruskan
                                            ke fungsi <code className="bg-gray-100 px-1 rounded">main()</code>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Konfigurasi Route & View</h3>

                                <div className="grid md:grid-cols-1 gap-6">
                                    <CodeSnippet
                                        code={`# routes.py
def includeme(config):
    # Basic routes
    config.add_route('home', '/')
    config.add_route('about', '/about')
    
    # Route with path variables
    config.add_route('user_profile', '/users/{username}')
    
    # Route with regex constraint
    config.add_route('article', '/article/{id:\\d+}')
    
    # Route with HTTP method predicate
    config.add_route('api_users', '/api/users', 
                     request_method='GET')
    config.add_route('api_create_user', '/api/users', 
                     request_method='POST')
    
    # Route with custom predicate
    config.add_route('admin', '/admin',
                     custom_predicates=[is_admin])
                     
# views.py
from pyramid.view import view_config

@view_config(route_name='home', renderer='templates/home.jinja2')
def home(request):
    return {'project': 'MyProject'}

# View with permission
@view_config(route_name='admin', renderer='templates/admin.jinja2',
             permission='admin')
def admin_panel(request):
    return {'admin_tools': get_tools()}`}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <FeatureCard
                                    title="Renderers"
                                    description="Mengkonfigurasi output format untuk view Anda, seperti Jinja2, JSON, atau custom renderers untuk format output khusus."
                                    icon={Server}
                                />
                                <FeatureCard
                                    title="Authentication"
                                    description="Sistem untuk mengidentifikasi user, biasanya dikonfigurasi dengan `set_authentication_policy()` menggunakan berbagai policy seperti session-based atau JWT."
                                    icon={UserCheck}
                                />
                                <FeatureCard
                                    title="Environment Variables"
                                    description="Gunakan variabel lingkungan untuk menyimpan konfigurasi sensitif seperti kredensial database dan kunci API alih-alih di kode."
                                    icon={Settings}
                                />
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
                                <h3 className="text-xl font-semibold mb-2">Praktik Konfigurasi Terbaik</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li><strong>Modularitas:</strong> Pisahkan konfigurasi menjadi modul yang dapat digunakan kembali</li>
                                    <li><strong>Konfigurasi Berbasis Lingkungan:</strong> Gunakan file .ini yang berbeda untuk dev/staging/prod</li>
                                    <li><strong>Settings Dictionary:</strong> Akses pengaturan melalui request.registry.settings</li>
                                    <li><strong>Environment Variables:</strong> Gunakan untuk kredensial dan konfigurasi sensitif</li>
                                    <li><strong>Bootstrapping Bertahap:</strong> Mulai dengan konfigurasi minimal, tambahkan sesuai kebutuhan</li>
                                    <li><strong>Package Config:</strong> Gunakan config.include() untuk konfigurasi berbasis paket</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Contoh Konfigurasi Menyeluruh</h3>

                                <CodeSnippet
                                    code={`# myproject/__init__.py
import os
from pyramid.config import Configurator
from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy
from pyramid.session import SignedCookieSessionFactory

def main(global_config, **settings):
    """ Fungsi ini mengembalikan aplikasi WSGI Pyramid. """
    
    # Variabel lingkungan dapat mengoverride settings dari file INI
    settings['sqlalchemy.url'] = os.environ.get('DATABASE_URL', 
                                settings['sqlalchemy.url'])
    
    # Konfigurasi session
    session_factory = SignedCookieSessionFactory(
        settings['session.secret'],
        timeout=3600,
        reissue_time=300
    )
    
    # Konfigurasi autentikasi
    authn_policy = SessionAuthenticationPolicy(
        callback=groupfinder,
        debug=settings.get('pyramid.debug_authorization', False)
    )
    
    # Konfigurasi authorization
    authz_policy = ACLAuthorizationPolicy()
    
    with Configurator(
        settings=settings,
        session_factory=session_factory,
        authentication_policy=authn_policy,
        authorization_policy=authz_policy
    ) as config:
        # Includes
        config.include('pyramid_jinja2')
        config.include('pyramid_tm')
        config.include('.routes')
        config.include('.security')
        config.include('.models')
        
        # Static assets
        config.add_static_view('static', 'static', cache_max_age=3600)
        config.add_static_view('uploads', 'var/uploads')
        
        # Base route
        config.add_route('home', '/')
        
        # Error views
        config.add_notfound_view(renderer='templates/404.jinja2')
        config.add_forbidden_view(renderer='templates/403.jinja2')
        
        # Scan untuk dekorator @view_config
        config.scan('.views')
        
        return config.make_wsgi_app()`}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PyramidInstallation;