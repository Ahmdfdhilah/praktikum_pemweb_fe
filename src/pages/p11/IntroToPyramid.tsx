import React from 'react';
import { Code, Zap, GitBranch, ArrowRight, Check, RefreshCw, Globe, Server, Database, Shield } from 'lucide-react';

interface CodeExampleProps {
    title: string;
    description: string;
    code: string;
    language?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, description, code}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const PyramidPresentation: React.FC = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        Pengenalan Framework Pyramid
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <Zap size={28} className="text-red-500 mr-3" />
                        <span>Framework web Python fleksibel dengan filosofi "mulai kecil, berakhir besar"</span>
                    </div>
                </header>

                {/* Introduction to Pyramid */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Globe size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa itu Pyramid?</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid adalah framework web Python yang fleksibel, minimalis, dan pragmatis. Dirancang untuk
                                bekerja dengan berbagai macam aplikasi web dari yang sederhana hingga yang kompleks.
                                Pyramid menggunakan konsep "start small, finish big" yang memungkinkan developer untuk
                                memulai dengan aplikasi sederhana dan berkembang sesuai kebutuhan tanpa harus mengganti framework.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                                        <Check size={20} className="text-green-500 mr-2" />
                                        Keunggulan Pyramid
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-red-700">Fleksibilitas</h4>
                                            <p className="text-gray-700">
                                                Tidak memaksakan cara tertentu untuk menyelesaikan masalah, bebas menggunakan template engine, database, dan teknologi apapun.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-red-700">Skalabilitas</h4>
                                            <p className="text-gray-700">
                                                Dapat berkembang dari aplikasi sederhana menjadi aplikasi enterprise yang kompleks tanpa perlu refactor besar-besaran.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-red-700">Dokumentasi Lengkap</h4>
                                            <p className="text-gray-700">
                                                Memiliki dokumentasi yang komprehensif dan mudah dipahami untuk developer dari segala tingkat keahlian.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Sejarah Singkat</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid dikembangkan oleh tim Pylons Project dan pertama kali dirilis pada tahun 2010.
                                        Framework ini didesain berdasarkan pengalaman dari framework Pylons sebelumnya dengan
                                        tujuan menyediakan framework yang bisa tumbuh sesuai kebutuhan aplikasi.
                                    </p>
                                    <div className="bg-white p-4 rounded-md border border-gray-200">
                                        <h4 className="font-medium text-orange-700 mb-2">Filosofi Pyramid</h4>
                                        <p className="text-gray-700">
                                            "Kami tidak memaksakan struktur yang menghalangi, tetapi kami menyediakan panduan
                                            yang membantu. Kami tidak memaksakan pendapat, tetapi kami memiliki pendapat."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <CodeExample
                                    title="Aplikasi Pyramid Sederhana"
                                    description="Contoh aplikasi Hello World dengan Pyramid"
                                    code={`from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response

def hello_world(request):
    return Response('Hello World!')

if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('hello', '/')
        config.add_view(hello_world, route_name='hello')
        app = config.make_wsgi_app()
    
    server = make_server('0.0.0.0', 6543, app)
    print('Web server started on http://0.0.0.0:6543')
    server.serve_forever()`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Concepts */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <GitBranch size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konsep Inti Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid dibangun berdasarkan beberapa konsep inti yang memberikan fleksibilitas namun tetap mempertahankan struktur.
                                Berikut adalah konsep-konsep utama yang perlu dipahami dalam pengembangan aplikasi dengan Pyramid.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Routes & Views</h3>
                                    <p className="text-gray-700 mb-4">
                                        Routes menghubungkan URL dengan view yang akan menangani request. Views mengembalikan response untuk ditampilkan kepada pengguna.
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                        <code>{`# Definisi route dan view
config.add_route('home', '/')
config.add_view(my_view_callable, route_name='home')`}</code>
                                    </pre>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Configuration</h3>
                                    <p className="text-gray-700 mb-4">
                                        Configurator adalah komponen sentral yang mengatur semua aspek aplikasi Pyramid.
                                    </p>
                                    <div className="bg-white p-4 rounded-md border border-gray-200">
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Mendaftarkan routes</li>
                                            <li>Menambahkan views</li>
                                            <li>Mengatur renderers</li>
                                            <li>Mengkonfigurasi static assets</li>
                                            <li>Mendaftarkan event subscribers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <Server size={20} className="text-yellow-600 mr-2" />
                                        Renderers
                                    </h3>
                                    <p className="text-gray-700">
                                        Menerjemahkan data Python menjadi format yang dapat dikirim ke browser seperti JSON, HTML
                                        melalui template engines (Jinja2, Mako, Chameleon).
                                    </p>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <Database size={20} className="text-green-600 mr-2" />
                                        Models & Persistence
                                    </h3>
                                    <p className="text-gray-700">
                                        Pyramid tidak memaksakan ORM tertentu, bisa menggunakan SQLAlchemy, MongoDB, atau
                                        penyimpanan data lainnya sesuai kebutuhan.
                                    </p>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <Shield size={20} className="text-blue-600 mr-2" />
                                        Security
                                    </h3>
                                    <p className="text-gray-700">
                                        Sistem authentication dan authorization yang robust dengan dukungan untuk
                                        ACLs (Access Control Lists) dan permission-based security.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <CodeExample
                                    title="Definisi View dengan Decorator"
                                    description="Mendefinisikan view menggunakan decorator sebagai alternatif konfigurasi imperatif"
                                    code={`from pyramid.view import view_config
from pyramid.response import Response

@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'project': 'My Awesome Pyramid App'}

@view_config(route_name='api', renderer='json')
def api_view(request):
    return {'status': 'success', 'data': ['item1', 'item2', 'item3']}`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Structure */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <ArrowRight size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Struktur Aplikasi Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid tidak memaksakan struktur proyek tertentu, namun menyediakan scaffolds (template proyek)
                                yang dapat membantu developer memulai dengan cepat. Berikut adalah struktur proyek yang umum digunakan.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                                <h3 className="text-xl font-semibold mb-4">Struktur Folder Pyramid Dasar</h3>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                                    <code>{`myproject/
│
├── setup.py                 # Package setup file
├── setup.cfg               # Package configuration
├── MANIFEST.in             # Package manifest
├── README.txt              # README for the project
├── development.ini         # Development configuration
├── production.ini          # Production configuration
│
└── myproject/              # Actual Python package
    ├── __init__.py         # Package initialization, app factory
    ├── routes.py           # Route definitions
    ├── views/              # View callables
    │   ├── __init__.py
    │   ├── default.py
    │   └── api.py
    ├── models/             # Data models
    │   ├── __init__.py
    │   └── mymodel.py
    ├── scripts/            # Command line scripts
    │   ├── __init__.py
    │   └── initialize_db.py
    ├── static/             # Static assets
    │   ├── css/
    │   ├── js/
    │   └── img/
    └── templates/          # Template files
        ├── layout.jinja2
        └── home.jinja2`}</code>
                                </pre>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Bootstrapping Aplikasi</h3>
                                    <p className="text-gray-700 mb-2">
                                        Aplikasi Pyramid dimulai dari file __init__.py yang berisi app factory:
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                        <code>{`# myproject/__init__.py
from pyramid.config import Configurator

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application. """
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.routes')
        config.scan()
        return config.make_wsgi_app()`}</code>
                                    </pre>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Definisi Routes</h3>
                                    <p className="text-gray-700 mb-2">
                                        Routes didefinisikan dalam file terpisah untuk memudahkan pengelolaan:
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                        <code>{`# myproject/routes.py
def includeme(config):
    """Add routes to the config."""
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('about', '/about')
    config.add_route('api', '/api/{action}')`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                <h3 className="text-xl font-semibold mb-2">Tips Struktur Proyek</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Gunakan cookiecutter-pyramid untuk membuat template proyek custom</li>
                                    <li>Buat struktur yang sesuai dengan ukuran dan kompleksitas proyek</li>
                                    <li>Aplikasi kecil bisa menggunakan single-file approach</li>
                                    <li>Aplikasi besar sebaiknya menggunakan modular approach dengan package terpisah</li>
                                    <li>Organisasikan view berdasarkan fungsi atau resource</li>
                                    <li>Manfaatkan fitur namespace package untuk aplikasi yang sangat besar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Features */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <RefreshCw size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Fitur Lanjutan Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid dilengkapi dengan fitur-fitur lanjutan yang membuatnya cocok untuk aplikasi skala besar
                                dan enterprise. Berikut adalah beberapa fitur yang membedakan Pyramid dari framework web Python lainnya.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Traversal vs URL Dispatch</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid mendukung dua paradigma routing berbeda yang dapat digunakan sesuai kebutuhan:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-md border border-gray-200">
                                            <h4 className="font-medium text-red-700">URL Dispatch</h4>
                                            <p className="text-gray-700">
                                                Pattern matching sederhana antara URL dan view, cocok untuk situs dengan struktur URL statis.
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-gray-200">
                                            <h4 className="font-medium text-red-700">Traversal</h4>
                                            <p className="text-gray-700">
                                                Menggunakan struktur hirarki objek untuk resolusi URL, sangat berguna untuk CMS dan
                                                aplikasi dengan struktur data nested seperti folder dan file.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Event System</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid memiliki sistem event yang kuat untuk menangkap berbagai momen dalam siklus hidup request:
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                        <code>{`from pyramid.events import NewRequest
from pyramid.events import subscriber

@subscriber(NewRequest)
def my_request_callback(event):
    request = event.request
    request.start_time = time.time()`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2">Predicates</h3>
                                    <p className="text-gray-700">
                                        Mekanisme untuk menyaring view berdasarkan kriteria seperti metode HTTP,
                                        parameter permintaan, tipe konten, dll.
                                    </p>
                                    <div className="mt-4">
                                        <code className="bg-gray-100 text-gray-800 p-2 rounded-md text-sm">
                                            @view_config(route_name='api', request_method='POST', renderer='json')
                                        </code>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2">Asset Specifications</h3>
                                    <p className="text-gray-700">
                                        Cara yang jelas dan konsisten untuk mereferensikan resource di seluruh
                                        aplikasi dan di dalam package Python.
                                    </p>
                                    <div className="mt-4">
                                        <code className="bg-gray-100 text-gray-800 p-2 rounded-md text-sm">
                                            mypackage:static/logo.png
                                        </code>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2">Tweens</h3>
                                    <p className="text-gray-700">
                                        Middleware yang dioptimalkan Pyramid untuk memproses request dan response,
                                        digunakan untuk logging, sesi, dan fitur lintas request lainnya.
                                    </p>
                                    <div className="mt-4">
                                        <code className="bg-gray-100 text-gray-800 p-2 rounded-md text-sm">
                                            config.add_tween('mypackage.tweens.timing_tween')
                                        </code>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <CodeExample
                                    title="Authentikasi dan Authorization dengan ACL"
                                    description="Contoh implementasi keamanan dengan Pyramid menggunakan ACL"
                                    code={`from pyramid.security import Allow, Everyone, Authenticated
from pyramid.authentication import SessionAuthenticationPolicy
from pyramid.authorization import ACLAuthorizationPolicy

class Root:
    __acl__ = [
        (Allow, Everyone, 'view'),
        (Allow, Authenticated, 'edit'),
        (Allow, 'group:admin', 'admin'),
    ]
    
    def __init__(self, request):
        self.request = request

def main(global_config, **settings):
    with Configurator(settings=settings) as config:
        # Setup security policies
        authn_policy = SessionAuthenticationPolicy()
        authz_policy = ACLAuthorizationPolicy()
        
        config.set_authentication_policy(authn_policy)
        config.set_authorization_policy(authz_policy)
        config.set_root_factory(Root)
        
        # Add protected view
        config.add_route('admin', '/admin')
        config.add_view(admin_view, route_name='admin', permission='admin')
        
        # The rest of your configuration...
        return config.make_wsgi_app()`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ecosystem & Comparison */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Code size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ekosistem dan Perbandingan</h2>

                            <p className="text-gray-700 mb-6">
                                Pyramid memiliki ekosistem yang solid dengan berbagai add-on dan integrasi.
                                Mari bandingkan Pyramid dengan framework web Python populer lainnya.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Add-ons dan Package Populer</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_jinja2</h4>
                                        <p className="text-gray-700 text-sm">Integrasi dengan template engine Jinja2</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_tm</h4>
                                        <p className="text-gray-700 text-sm">Transaction management otomatis</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_debugtoolbar</h4>
                                        <p className="text-gray-700 text-sm">Toolbar interaktif untuk debugging</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_mailer</h4>
                                        <p className="text-gray-700 text-sm">Utilitas untuk mengirim email</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_jwt</h4>
                                        <p className="text-gray-700 text-sm">Autentikasi berbasis JSON Web Token</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-red-700 mb-2">pyramid_openapi3</h4>
                                        <p className="text-gray-700 text-sm">Validasi OpenAPI specification</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" mb-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-red-100">
                                            <th className="border border-red-200 p-3 text-left">Fitur</th>
                                            <th className="border border-red-200 p-3 text-left">Pyramid</th>
                                            <th className="border border-red-200 p-3 text-left">Django</th>
                                            <th className="border border-red-200 p-3 text-left">Flask</th>
                                            <th className="border border-red-200 p-3 text-left">FastAPI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-red-200 p-3 font-medium">Filosofi</td>
                                            <td className="border border-red-200 p-3">Start small, finish big</td>
                                            <td className="border border-red-200 p-3">Batteries included</td>
                                            <td className="border border-red-200 p-3">Microframework</td>
                                            <td className="border border-red-200 p-3">Modern, fast API</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-red-200 p-3 font-medium">Kurva Belajar</td>
                                            <td className="border border-red-200 p-3">Sedang</td>
                                            <td className="border border-red-200 p-3">Curam</td>
                                            <td className="border border-red-200 p-3">Landai</td>
                                            <td className="border border-red-200 p-3">Landai</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-red-200 p-3 font-medium">ORM Default</td>
                                            <td className="border border-red-200 p-3">Tidak ada (SQLAlchemy direkomendasikan)</td>
                                            <td className="border border-red-200 p-3">Django ORM</td>
                                            <td className="border border-red-200 p-3">Tidak ada</td>
                                            <td className="border border-red-200 p-3">Tidak ada (SQLAlchemy)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-red-200 p-3 font-medium">Template Engine</td>
                                            <td className="border border-red-200 p-3">Fleksibel (Jinja2, Mako, Chameleon)</td>
                                            <td className="border border-red-200 p-3">Django Templates</td>
                                            <td className="border border-red-200 p-3">Jinja2</td>
                                            <td className="border border-red-200 p-3">Jinja2</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-red-200 p-3 font-medium">Skalabilitas</td>
                                            <td className="border border-red-200 p-3">Sangat baik</td>
                                            <td className="border border-red-200 p-3">Baik</td>
                                            <td className="border border-red-200 p-3">Sedang</td>
                                            <td className="border border-red-200 p-3">Sangat baik</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Kapan menggunakan Pyramid?</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Aplikasi yang membutuhkan fleksibilitas maksimal</li>
                                        <li>Saat kebutuhan bisa berkembang dari sederhana menjadi kompleks</li>
                                        <li>Proyek yang membutuhkan kontrol penuh atas komponen framework</li>
                                        <li>Aplikasi enterprise dengan kebutuhan keamanan kompleks</li>
                                        <li>Saat ingin menggunakan teknologi yang tidak didukung framework lain</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Kapan tidak menggunakan Pyramid?</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Untuk proyek kecil yang membutuhkan solusi cepat (gunakan Flask/FastAPI)</li>
                                        <li>Ketika ingin menggunakan fitur siap pakai seperti admin panel (Django lebih cocok)</li>
                                        <li>Jika tim belum berpengalaman dengan konsep WSGI dan web Python</li>
                                        <li>Untuk proyek yang membutuhkan dukungan komunitas sangat besar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Started */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Zap size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Memulai dengan Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Mari lihat bagaimana memulai proyek Pyramid baru dan menjalankannya di lingkungan pengembangan.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Instalasi</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid dapat diinstal menggunakan pip. Disarankan menggunakan virtual environment.
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                                        <code>{`# Membuat virtual environment
python -m venv venv

# Mengaktifkan virtual environment
# Windows:
venv\\Scripts\\activate
# Unix/macOS:
source venv/bin/activate

# Menginstal Pyramid
pip install "pyramid==2.0"`}</code>
                                    </pre>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Membuat Proyek Baru</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid menyediakan scaffolds (template proyek) untuk memulai dengan cepat.
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                                        <code>{`# Menginstal cookiecutter untuk template proyek
pip install cookiecutter

# Membuat proyek Pyramid baru
cookiecutter gh:Pylons/pyramid-cookiecutter-starter

# Atau menggunakan scaffold bawaan
pip install "pyramid[starter]"
pcreate -s starter myproject`}</code>
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-semibold mb-2">Menjalankan Aplikasi</h3>
                                <p className="text-gray-700 mb-4">
                                    Setelah proyek dibuat, Anda dapat menjalankan server pengembangan:
                                </p>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
                                    <code>{`# Masuk ke direktori proyek
cd myproject

# Install dalam mode development
pip install -e ".[dev]"

# Menjalankan server pengembangan
pserve development.ini --reload`}</code>
                                </pre>
                                <p className="text-gray-700 mt-4">
                                    Server akan berjalan di <code className="bg-gray-100 px-1 rounded">http://localhost:6543</code>
                                    dengan auto-reload saat ada perubahan kode.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Testing Pyramid</h3>
                                    <p className="text-gray-700 mb-4">
                                        Pyramid mendukung pengujian dengan berbagai framework testing Python.
                                    </p>
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                        <code>{`# Contoh test dengan pytest
from pyramid import testing
import pytest

def test_home_view():
    from myproject.views.default import home_view
    request = testing.DummyRequest()
    response = home_view(request)
    assert response['project'] == 'My Awesome Pyramid App'`}</code>
                                    </pre>
                                </div>

                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                                    <p className="text-gray-700 mb-4">
                                        Aplikasi Pyramid dapat dideploy dengan berbagai server WSGI seperti:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Waitress (direkomendasikan untuk development/produksi kecil)</li>
                                        <li>Gunicorn</li>
                                        <li>uWSGI</li>
                                        <li>mod_wsgi (Apache)</li>
                                    </ul>
                                    <div className="mt-4">
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md  text-sm">
                                            <code>{`# Install waitress
pip install waitress

# Menjalankan dengan waitress
waitress-serve --port=8080 myproject:app`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Check size={28} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kesimpulan</h2>


                            <div className="bg-red-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">Keunggulan Pyramid</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Fleksibilitas tinggi dengan pendekatan "pay only for what you use"</li>
                                    <li>Dapat berkembang dari aplikasi sederhana ke kompleks tanpa perubahan besar</li>
                                    <li>Sistem keamanan yang robust dengan ACL dan permission-based security</li>
                                    <li>Dukungan untuk berbagai paradigma routing (URL dispatch dan traversal)</li>
                                    <li>Kompatibilitas dengan berbagai database dan teknologi lainnya</li>
                                    <li>Dokumentasi yang sangat baik dan komprehensif</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default PyramidPresentation;