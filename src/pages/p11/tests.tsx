import { Route, Link, Globe, Hash, Code, Server, ArrowRight, Map, List, AlertTriangle, FilePlus, UserCheck } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
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

const CodeSnippet = ({ code, title = null }: CodeSnippetProps) => {
    return (
        <div className="mb-6">
            {title && <h4 className="text-lg font-medium mb-2 text-blue-700">{title}</h4>}
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const PyramidRouting = () => {
    return (
        <div className="min-h-screen p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                        Routing dan URL Dispatch di Pyramid
                    </h1>
                    <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
                        <Route size={28} className="text-blue-600 mr-3" />
                        <span>Sistem routing untuk menangani permintaan HTTP dengan pola URL fleksibel</span>
                    </div>
                </header>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Globe size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pengenalan Routing di Pyramid</h2>
                            <p className="text-gray-700 mb-6">
                                Routing adalah mekanisme yang menghubungkan URL yang diminta oleh pengguna dengan kode Python yang akan dieksekusi (view) untuk menangani permintaan tersebut. Pyramid menyediakan sistem routing yang fleksibel dan kuat yang disebut URL Dispatch.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <FeatureCard
                                    title="Pattern Matching"
                                    description="Mendukung pencocokan pola URL sederhana hingga pola kompleks dengan ekspresi reguler untuk kebutuhan routing yang canggih."
                                    icon={Hash}
                                />
                                <FeatureCard
                                    title="Route Predicates"
                                    description="Memungkinkan pembatasan rute berdasarkan metode HTTP, domain, header, dan kondisi kustom lainnya."
                                    icon={Code}
                                />
                                <FeatureCard
                                    title="URL Generation"
                                    description="Membuat URL secara dinamis berdasarkan nama rute dan parameter yang diberikan, untuk pembuatan link dalam aplikasi."
                                    icon={Link}
                                />
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                                <h3 className="text-xl font-semibold mb-2">Dua Sistem Routing di Pyramid</h3>
                                <p className="text-gray-700">
                                    Pyramid sebenarnya memiliki dua sistem routing yang berbeda:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                    <li><strong>URL Dispatch</strong> - Sistem berbasis rute yang akan kita bahas dalam materi ini</li>
                                    <li><strong>Traversal</strong> - Pendekatan berbasis hierarki resource untuk aplikasi yang sangat berorientasi pada konten</li>
                                </ul>
                                <p className="text-gray-700 mt-2">
                                    URL Dispatch adalah sistem yang paling sering digunakan karena kesederhanaan dan kecepatannya, serta kemiripannya dengan framework web lain.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Route Definition Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Map size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pendefinisian Rute</h2>
                            <p className="text-gray-700 mb-6">
                                Dalam Pyramid, rute didefinisikan menggunakan metode <code className="bg-gray-100 px-1 rounded">config.add_route()</code>.
                                Metode ini mengaitkan nama rute dengan pola URL dan opsional parameter tambahan.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Definisi Dasar Rute</h3>

                                <CodeSnippet
                                    title="Pendefinisian Rute Dasar"
                                    code={`# Dalam file routes.py atau __init__.py
def includeme(config):
    # Rute sederhana - pola statis
    config.add_route('home', '/')
    config.add_route('about', '/about')
    config.add_route('contact', '/contact-us')
    
    # Rute dengan variabel path
    config.add_route('user_profile', '/users/{username}')
    config.add_route('blog_post', '/blog/{year}/{month}/{slug}')
    
    # Rute dengan tipe variabel (menggunakan pattern)
    config.add_route('article', '/article/{id:\\d+}')  # id harus berupa digit
    config.add_route('category', '/category/{name:[a-z0-9-]+}')`}
                                />

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Anatomi add_route()</h4>
                                        <p className="text-gray-700 mb-4">
                                            Metode <code className="bg-gray-100 px-1 rounded">add_route()</code> memiliki dua parameter wajib:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li><strong>name</strong> - Nama unik untuk route (digunakan untuk URL generation)</li>
                                            <li><strong>pattern</strong> - Pola URL yang akan dicocokkan</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            Nama route digunakan untuk menghasilkan URL secara programatis menggunakan fungsi
                                            <code className="bg-gray-100 px-1 rounded">request.route_url()</code> atau <code className="bg-gray-100 px-1 rounded">request.route_path()</code>.
                                        </p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Variabel Path</h4>
                                        <p className="text-gray-700 mb-4">
                                            Format umum untuk variabel path adalah <code className="bg-gray-100 px-1 rounded">{"{nama_variabel}"}</code> atau
                                            <code className="bg-gray-100 px-1 rounded">{"{nama_variabel:pola_regex}"}</code>
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Variabel tanpa regex akan mencocokkan semua karakter hingga slash berikutnya</li>
                                            <li>Variabel dengan regex hanya mencocokkan pola yang ditentukan</li>
                                            <li>Nilai variabel path tersedia di <code className="bg-gray-100 px-1 rounded">request.matchdict</code></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Route Predicates</h3>
                                <p className="text-gray-700 mb-4">
                                    Pyramid memungkinkan Anda membatasi kapan sebuah rute cocok dengan menggunakan predikat.
                                    Predikat adalah kata kunci tambahan yang diberikan ke <code className="bg-gray-100 px-1 rounded">add_route()</code>.
                                </p>

                                <CodeSnippet
                                    title="Penggunaan Route Predicates"
                                    code={`# Predikat berdasarkan metode HTTP
config.add_route('api_users_get', '/api/users', request_method='GET')
config.add_route('api_users_post', '/api/users', request_method='POST')

# Predikat berdasarkan header permintaan
config.add_route('mobile_home', '/', request_header='X-Device=mobile')
config.add_route('desktop_home', '/', request_header='X-Device=desktop')

# Predikat berdasarkan parameter query string
config.add_route('search_products', '/search', request_param='type=product')
config.add_route('search_users', '/search', request_param='type=user')

# Menggabungkan beberapa predikat
config.add_route('api_v1', '/api/data',
                request_method='GET',
                request_param='version=1')`}
                                />

                                <div className="grid md:grid-cols-3 gap-6 mt-6">
                                    <FeatureCard
                                        title="request_method"
                                        description="Membatasi route agar hanya cocok dengan metode HTTP tertentu (GET, POST, PUT, DELETE, dll)."
                                        icon={Server}
                                    />
                                    <FeatureCard
                                        title="request_param"
                                        description="Route hanya cocok jika query string memiliki parameter tertentu atau nilai tertentu."
                                        icon={List}
                                    />
                                    <FeatureCard
                                        title="custom_predicates"
                                        description="Fungsi yang mengevaluasi permintaan dan mengembalikan True atau False untuk menentukan apakah route cocok."
                                        icon={Code}
                                    />
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
                                <h3 className="text-xl font-semibold mb-2">Urutan Rute Penting!</h3>
                                <div className="flex items-start">
                                    <AlertTriangle size={24} className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">
                                        Urutan pendefinisian rute sangat penting. Pyramid akan mencocokkan rute dalam urutan mereka didefinisikan.
                                        Rute yang lebih spesifik harus didefinisikan sebelum rute yang lebih umum untuk mencegah "penyembunyian rute".
                                        Misalnya,
                                        <code className="bg-gray-100 px-1 rounded">
                                            '/pages/about'
                                        </code>
                                        harus didefinisikan sebelum
                                        <code className="bg-gray-100 px-1 rounded">
                                            {`/pages/{name}`}
                                        </code>
                                        , jika tidak
                                        <code className="bg-gray-100 px-1 rounded">
                                            {'/pages/about'}
                                        </code>
                                        tidak akan pernah dicocokkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* View Configuration Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Code size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Konfigurasi View dengan Dekorator</h2>
                            <p className="text-gray-700 mb-6">
                                Setelah rute didefinisikan, Anda perlu mengaitkannya dengan fungsi view yang akan dijalankan ketika rute cocok.
                                Pyramid menyediakan dekorator <code className="bg-gray-100 px-1 rounded">@view_config</code> untuk memetakan view ke rute.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Dekorator View Config</h3>

                                <CodeSnippet
                                    title="Menghubungkan View dengan Route"
                                    code={`# views.py
from pyramid.view import view_config
from pyramid.response import Response

# View sederhana yang dikaitkan dengan route 'home'
@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'page_title': 'Beranda'}

# View dengan variabel path dari URL
@view_config(route_name='user_profile', renderer='templates/profile.jinja2')
def user_profile(request):
    username = request.matchdict['username']
    user_data = get_user_data(username)  # fungsi hypotetis
    return {'user': user_data}

# View dengan renderer JSON
@view_config(route_name='api_users_get', renderer='json')
def api_get_users(request):
    users = get_all_users()  # fungsi hypotetis
    return {'status': 'success', 'users': users}

# View yang menanggapi permintaan POST dengan parameter JSON
@view_config(route_name='api_users_post', renderer='json', request_method='POST')
def api_create_user(request):
    user_data = request.json_body
    user_id = create_user(user_data)  # fungsi hypotetis
    return {'status': 'success', 'id': user_id}`}
                                />

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Parameter @view_config</h3>
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">route_name</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Nama rute yang akan dikaitkan dengan view. Ini harus cocok dengan nama yang diberikan di
                                                    <code className="bg-gray-100 px-1 rounded">config.add_route()</code>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">renderer</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Template atau format output. Bisa berupa path template ('templates/home.jinja2'),
                                                    format ('json'), atau renderer kustom.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">permission</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Permission yang diperlukan untuk mengakses view ini. Digunakan bersama dengan
                                                    sistem authorization Pyramid.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">context</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Kelas atau objek konteks yang harus cocok untuk view ini untuk dijalankan.
                                                    Berguna saat menggunakan traversal atau resource trees.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Opsi Dekorator Tambahan</h3>
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">request_method</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Membatasi view untuk metode HTTP tertentu ('GET', 'POST', 'PUT', dll).
                                                    Bisa berupa string atau daftar string.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">request_param</h4>
                                                <p className="text-gray-700 text-sm">
                                                    View hanya dijalankan jika parameter query string tertentu ada atau memiliki nilai tertentu.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">xhr</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Jika True, view hanya dipanggil untuk permintaan AJAX.
                                                    Jika False, view tidak akan dipanggil untuk permintaan AJAX.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <h4 className="font-medium text-blue-700 mb-1">header</h4>
                                                <p className="text-gray-700 text-sm">
                                                    View hanya dipanggil jika header permintaan HTTP tertentu ada atau cocok dengan nilai tertentu.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Mengakses Parameter URL</h3>

                                <CodeSnippet
                                    title="Mengakses Parameter di View"
                                    code={`@view_config(route_name='blog_post', renderer='templates/post.jinja2')
def blog_post_view(request):
    # Mengakses variabel path dari URL
    year = request.matchdict['year']
    month = request.matchdict['month']
    slug = request.matchdict['slug']
    
    # Mengakses parameter query string
    show_comments = request.params.get('comments', 'true').lower() == 'true'
    page = int(request.params.get('page', 1))
    
    # Logika untuk mendapatkan post
    post = get_blog_post(year, month, slug)
    comments = get_comments(post.id) if show_comments else []
    
    return {
        'post': post,
        'comments': comments,
        'show_comments': show_comments,
        'page': page
    }`}
                                />

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">request.matchdict</h4>
                                        <p className="text-gray-700 mb-4">
                                            Dictionary yang berisi semua variabel path yang diekstrak dari URL berdasarkan pola rute.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Untuk rute <code className="bg-gray-100 px-1 rounded">{`/users/{username}`}</code></li>
                                            <li>URL <code className="bg-gray-100 px-1 rounded">{`/users/john`}</code></li>
                                            <li><code className="bg-gray-100 px-1 rounded">request.matchdict['username'] == 'john'</code></li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">request.params</h4>
                                        <p className="text-gray-700 mb-4">
                                            MultiDict yang berisi parameter query string dan parameter form POST.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Untuk URL <code className="bg-gray-100 px-1 rounded">'/search?q=python&sort=date'</code></li>
                                            <li><code className="bg-gray-100 px-1 rounded">request.params['q'] == 'python'</code></li>
                                            <li><code className="bg-gray-100 px-1 rounded">request.params['sort'] == 'date'</code></li>
                                            <li>Gunakan <code className="bg-gray-100 px-1 rounded">.get(key, default)</code> untuk nilai default</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* URL Generation Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <Link size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pembentukan URL</h2>
                            <p className="text-gray-700 mb-6">
                                Fitur penting dari sistem routing Pyramid adalah kemampuan untuk membentuk URL secara dinamis berdasarkan nama rute dan parameter.
                                Ini memungkinkan Anda menghasilkan link tanpa hardcoding URL, membuat aplikasi lebih mudah dikelola.
                            </p>

                            <div className="mb-8">
                                <CodeSnippet
                                    title="Membentuk URL dari Nama Route"
                                    code={`# Di dalam fungsi view
@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    # URL lengkap termasuk domain
    user_url = request.route_url(
        'user_profile',             # nama route
        username='john',            # variabel path
        _query={'tab': 'photos'},   # parameter query string
        _anchor='bio'               # fragment (bagian setelah #)
    )
    # Menghasilkan: http://example.com/users/john?tab=photos#bio
    
    # Hanya path URL tanpa domain
    article_path = request.route_path(
        'article',
        id=42
    )
    # Menghasilkan: /article/42
    
    return {
        'user_url': user_url,
        'article_path': article_path
    }`}
                                />

                                <CodeSnippet
                                    title="Membentuk URL di Template Jinja2"
                                    code={`{# Dalam template Jinja2 #}
<nav>
  <a href="{{ request.route_path('home') }}">Beranda</a>
  <a href="{{ request.route_path('about') }}">Tentang</a>
  <a href="{{ request.route_path('user_profile', username=current_user.username) }}">
    Profil Saya
  </a>
  <a href="{{ request.route_path('search', _query={'q': 'pyramid'}) }}">
    Pencarian Pyramid
  </a>
</nav>`}
                                />

                                <div className="grid md:grid-cols-3 gap-6 mt-6">
                                    <FeatureCard
                                        title="route_url()"
                                        description="Menghasilkan URL absolut lengkap termasuk skema, domain, dan port. Ideal untuk email dan komunikasi eksternal."
                                        icon={Globe}
                                    />
                                    <FeatureCard
                                        title="route_path()"
                                        description="Menghasilkan path URL relatif (tanpa domain). Ideal untuk link internal dalam aplikasi web."
                                        icon={Link}
                                    />
                                    <FeatureCard
                                        title="current_route_(url|path)()"
                                        description="Menghasilkan URL/path ke rute saat ini, berguna untuk membuat varian dari halaman saat ini."
                                        icon={ArrowRight}
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
                                <h3 className="text-xl font-semibold mb-2">Parameter Tambahan route_url dan route_path</h3>
                                <p className="text-gray-700 mb-4">
                                    Kedua fungsi pembentuk URL menerima parameter tambahan khusus:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li><strong>_query</strong> - dict atau daftar tuple untuk parameter query string</li>
                                    <li><strong>_anchor</strong> - fragment identifier (bagian setelah #)</li>
                                    <li><strong>_scheme</strong> - skema URL (http, https) untuk route_url</li>
                                    <li><strong>_host</strong> - override hostname untuk route_url</li>
                                    <li><strong>_port</strong> - override port untuk route_url</li>
                                    <li><strong>_app_url</strong> - base application URL untuk route_url</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Techniques Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <FilePlus size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Teknik Routing Lanjutan</h2>
                            <p className="text-gray-700 mb-6">
                                Pyramid menyediakan beberapa fitur routing lanjutan yang dapat membantu dalam kasus yang lebih kompleks.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Predikat Kustom</h3>

                                <CodeSnippet
                                    title="Membuat dan Menggunakan Predikat Kustom"
                                    code={`# Mendefinisikan fungsi predikat
def is_admin(info, request):
    """Mencocokkan hanya jika pengguna adalah admin."""
    return request.user and request.user.is_admin

def api_version_at_least(version):
    """Factory untuk predikat berdasarkan versi API."""
    def predicate(info, request):
        req_version = request.headers.get('X-API-Version', '1.0')
        return float(req_version) >= float(version)
    return predicate

# Menggunakan predikat kustom
config.add_route('admin_dashboard', '/admin',
                custom_predicates=[is_admin])

config.add_route('api_v2', '/api/data',
                custom_predicates=[api_version_at_least('2.0')])`}
                                />

                                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-6">
                                    <h4 className="text-lg font-medium mb-2 text-yellow-700">Catatan tentang custom_predicates</h4>
                                    <div className="flex items-start">
                                        <AlertTriangle size={24} className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                                        <p className="text-gray-700">
                                            Parameter <code className="bg-gray-100 px-1 rounded">custom_predicates</code> sedang dalam proses deprecated di versi terbaru Pyramid.
                                            Cara yang lebih baru dan lebih direkomendasikan adalah dengan mendaftarkan predikat kustom menggunakan
                                            <code className="bg-gray-100 px-1 rounded">config.add_route_predicate()</code> dan kemudian menggunakannya sebagai
                                            kata kunci dalam <code className="bg-gray-100 px-1 rounded">add_route()</code>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Route Factories</h3>

                                <p className="text-gray-700 mb-4">
                                    Route factories memungkinkan Anda memisahkan logika pemuatan resource dari view.
                                </p>
                                <CodeSnippet
                                    title="Menggunakan Route Factories"
                                    code={`# Definisi factory
class BlogPostFactory:
    def __init__(self, request):
        self.request = request
    
    def __call__(self):
        post_id = self.request.matchdict['post_id']
        post = get_blog_post(post_id)  # Fungsi hypotetis
        if not post:
            raise HTTPNotFound()
        return post

# Konfigurasi route dengan factory
config.add_route('blog_post', '/blog/{post_id}', 
                factory=BlogPostFactory)

# View yang menggunakan konteks dari factory
@view_config(route_name='blog_post', renderer='templates/post.jinja2')
def blog_post_view(request):
    # Objek post sudah tersedia dari factory
    post = request.context
    return {'post': post}`}
                                />

                                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-6">
                                    <h4 className="text-lg font-medium mb-2 text-blue-700">Keuntungan Route Factories</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Memisahkan logika pemuatan resource dari view</li>
                                        <li>Memungkinkan penggunaan yang sama dengan traversal</li>
                                        <li>Dapat melakukan otorisasi awal sebelum view dipanggil</li>
                                        <li>Dapat mengembalikan 404 jika resource tidak ditemukan</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Route Prefixes</h3>
                                <CodeSnippet
                                    title="Menggunakan Route Prefixes untuk API Versioning"
                                    code={`# routes.py
def includeme(config):
    # API v1 routes
    config.add_route('api_v1_users', '/api/v1/users')
    config.add_route('api_v1_posts', '/api/v1/posts')
    
    # API v2 routes dengan prefix
    config.add_route('api_v2_users', '/users', 
                    factory=APIV2Factory,
                    header='X-API-Version=2.0')
    config.add_route('api_v2_posts', '/posts',
                    factory=APIV2Factory,
                    header='X-API-Version=2.0')

    # Frontend routes
    config.add_route('home', '/')
    config.add_route('about', '/about')

# application.py
def main(global_config, **settings):
    config = Configurator(settings=settings)
    
    # Include API v1 routes dengan prefix
    config.include('myapp.routes', route_prefix='/api/v1')
    
    # Include API v2 routes tanpa prefix di URL
    config.include('myapp.routes', route_prefix='/api/v2')
    
    # Include frontend routes tanpa prefix
    config.include('myapp.routes')
    
    return config.make_wsgi_app()`}
                                />

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Route Prefix vs URL Prefix</h4>
                                        <p className="text-gray-700">
                                            <strong>Route Prefix</strong> diterapkan saat konfigurasi routing dan mempengaruhi bagaimana URL dicocokkan.
                                            <br /><br />
                                            <strong>URL Prefix</strong> biasanya diterapkan di level WSGI (misal melalui proxy) dan tidak mempengaruhi routing Pyramid.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="text-lg font-medium mb-3 text-blue-700">Kapan Menggunakan Route Prefix</h4>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Versioning API</li>
                                            <li>Multi-tenant applications</li>
                                            <li>Modular applications dengan route namespace</li>
                                            <li>Ketika ingin memisahkan route secara logis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Static Routes</h3>
                                <CodeSnippet
                                    title="Menambahkan Static Routes untuk Assets"
                                    code={`# Menambahkan route untuk static assets
config.add_static_view(name='static', path='myapp:static')

# Dengan cache control
config.add_static_view(name='static', path='myapp:static',
                     cache_max_age=3600)

# Dengan route prefix
config.add_static_view(name='media', path='/var/www/media',
                     route_prefix='uploads')

# Menggunakan static route di template
<link rel="stylesheet" href="{{ request.static_url('myapp:static/css/style.css') }}">`}
                                />
                                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mt-6">
                                    <h4 className="text-lg font-medium mb-2 text-green-700">Best Practices Static Files</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Gunakan <code className="bg-gray-100 px-1 rounded">request.static_url()</code> untuk menghasilkan URL assets</li>
                                        <li>Setel <code className="bg-gray-100 px-1 rounded">cache_max_age</code> yang sesuai untuk assets</li>
                                        <li>Untuk production, pertimbangkan untuk menggunakan CDN atau web server statis (Nginx)</li>
                                        <li>Gunakan package name (misal <code className="bg-gray-100 px-1 rounded">myapp:static</code>) untuk menghindari konflik</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices Section */}
                <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start mb-6">
                        <UserCheck size={28} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Best Practices Routing</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-700">Organisasi Route</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Kelompokkan route terkait dalam file/modul terpisah</li>
                                        <li>Gunakan <code className="bg-gray-100 px-1 rounded">config.include()</code> untuk modularitas</li>
                                        <li>Pisahkan API routes dari frontend routes</li>
                                        <li>Gunakan prefix untuk versioning API</li>
                                        <li>Dokumentasikan route dengan komentar</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-700">Desain URL</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Gunakan URL yang deskriptif dan bermakna</li>
                                        <li>Hindari penggunaan parameter query untuk resource utama</li>
                                        <li>Gunakan hyphen (-) bukan underscore (_) untuk URL</li>
                                        <li>Pertahankan konsistensi dalam penamaan</li>
                                        <li>Hindari perubahan URL setelah dipublikasikan</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-700">Keamanan Routing</h3> <ul className="list-disc list-inside text-gray-700 space-y-2"> <li>Selalu validasi input dari URL (matchdict dan params)</li> <li>Gunakan route predicates untuk pembatasan akses awal</li> <li>Hindari mengekspose ID internal dalam URL jika memungkinkan</li> <li>Gunakan permission dengan sistem ACL Pyramid</li> <li>Pertimbangkan rate limiting untuk API endpoints</li> </ul> </div>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-700">Optimasi Routing</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Letakkan route yang sering diakses di atas</li>
                                        <li>Gunakan regex yang efisien untuk pola kompleks</li>
                                        <li>Hindari terlalu banyak predikat yang tidak perlu</li>
                                        <li>Pertimbangkan menggunakan traversal untuk hierarki kompleks</li>
                                        <li>Monitor dan uji performa routing</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-8">
                                <h3 className="text-xl font-semibold mb-2">Mengelola Perubahan URL</h3>
                                <p className="text-gray-700 mb-4">
                                    Ketika Anda perlu mengubah URL yang sudah ada, pertimbangkan strategi berikut untuk mempertahankan kompatibilitas:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li><strong>Redirect:</strong> Tambahkan route lama yang mengarahkan ke route baru</li>
                                    <li><strong>Alias:</strong> Definisikan route alternatif yang mengarah ke view yang sama</li>
                                    <li><strong>Versioning:</strong> Tambahkan versi baru sambil mempertahankan versi lama</li>
                                    <li><strong>Custom Predicate:</strong> Gunakan predikat untuk menangani URL lama dan baru</li>
                                </ul>
                                <CodeSnippet
                                    title="Contoh Redirect untuk URL Lama"
                                    code={`# Menambahkan redirect untuk URL yang diubah
                                    # Route lama yang redirect ke baru
config.add_route('old_route', '/old-path/{id}')

@view_config(route_name='old_route')
def old_route_redirect(request):
    new_url = request.route_url('new_route', id=request.matchdict['id'])
    return HTTPMovedPermanently(new_url)`}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PyramidRouting;