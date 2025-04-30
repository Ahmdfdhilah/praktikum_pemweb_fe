import React from 'react';
import { Code, Layers, GitMerge, Package, BoxesIcon, Settings } from 'lucide-react';

interface ArchitectureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-md bg-red-100 mr-4">
          <Icon size={24} className="text-red-500" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 flex-grow">{description}</p>
    </div>
  );
};

const CodeSnippet = ({ code }: { code: string }) => {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md ">
      <code>{code}</code>
    </pre>
  );
};

const PyramidArchitecture = () => {
  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center py-12 bg-white rounded-xl shadow-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Arsitektur Pyramid
          </h1>
          <div className="flex items-center justify-center text-xl text-gray-700 mb-6">
            <Layers size={28} className="text-blue-500 mr-3" />
            <span>Mengadopsi pola MVC dengan komponen modular yang dapat disesuaikan sesuai kebutuhan proyek</span>
          </div>
        </header>

        {/* Main Architecture Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Paradigma Arsitektur Pyramid</h2>
            <p className="text-gray-700 mb-6">
              Pyramid mengadopsi pendekatan arsitektur yang fleksibel, memungkinkan pengembang untuk membangun aplikasi web dengan pola yang sesuai kebutuhan mereka. Meskipun tidak mengharuskan satu pola arsitektur tertentu, Pyramid secara alami mendukung pola Model-View-Controller (MVC) dan variasi lainnya seperti Model-View-Template (MVT) dan Resource-Oriented Architecture (ROA).
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
              <h3 className="text-xl font-semibold mb-2">Berbeda dengan Framework Lain</h3>
              <p className="text-gray-700">
                Tidak seperti Django yang ketat dengan MVT atau Rails dengan MVC, Pyramid memberi kebebasan kepada pengembang untuk memilih pola yang sesuai. Pyramid menyediakan komponen-komponen yang dapat disusun untuk membuat pola arsitektur yang paling masuk akal untuk aplikasi tertentu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ArchitectureCard 
                title="Model" 
                description="Representasi data dan logika bisnis, sering diimplementasikan dengan SQLAlchemy, ZODB, atau sistem database lainnya."
                icon={Package}
              />
              <ArchitectureCard 
                title="View" 
                description="Fungsi atau kelas yang memproses permintaan dan mengembalikan respons, bisa berupa HTML, JSON, atau format lainnya."
                icon={Code}
              />
              <ArchitectureCard 
                title="Controller/Template" 
                description="Bagian yang menangani presentasi dan rendering tampilan, biasanya menggunakan template engine seperti Jinja2, Mako, atau Chameleon."
                icon={Settings}
              />
            </div>
          </div>

          {/* Pyramid's Architectural Components */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Komponen Arsitektur Inti</h2>
            <p className="text-gray-700 mb-6">
              Arsitektur Pyramid dibangun dari komponen-komponen modular yang dapat digunakan bersama atau secara terpisah sesuai kebutuhan. Setiap komponen memiliki tanggung jawab spesifik dalam alur aplikasi.
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="p-2 rounded-md bg-blue-100 mr-3">
                    <Code size={20} className="text-blue-500" />
                  </div>
                  Router & URL Dispatch
                </h3>
                <p className="text-gray-700 mb-4">
                  Komponen routing Pyramid menangani pemetaan antara URL dan kode yang akan dieksekusi. Anda dapat mendefinisikan pola URL dan menghubungkannya dengan fungsi view tertentu.
                </p>
                <CodeSnippet
                  code={`# routes.py
def includeme(config):
    config.add_route('home', '/')
    config.add_route('blog', '/blog/{id}')
    config.add_route('api_users', '/api/users', request_method='GET')
    config.add_route('api_user', '/api/users/{id}', request_method='GET')`}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="p-2 rounded-md bg-blue-100 mr-3">
                    <GitMerge size={20} className="text-blue-500" />
                  </div>
                  Traversal
                </h3>
                <p className="text-gray-700 mb-4">
                  Selain URL Dispatch, Pyramid mendukung Traversal untuk resolusi URL berbasis objek. Sangat berguna untuk aplikasi dengan struktur hierarkis seperti CMS atau sistem file.
                </p>
                <CodeSnippet
                  code={`# resources.py
class Resource:
    def __init__(self, name, parent=None):
        self.__name__ = name
        self.__parent__ = parent
        self.children = {}
    
    def __getitem__(self, key):
        return self.children[key]

class Root(Resource):
    def __init__(self):
        super().__init__('', None)
        self.children['blog'] = BlogCollection(self)
        
class BlogCollection(Resource):
    def __init__(self, parent):
        super().__init__('blog', parent)`}
                />
              </div>
            </div>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="p-2 rounded-md bg-blue-100 mr-3">
                    <BoxesIcon size={20} className="text-blue-500" />
                  </div>
                  Views & Renderers
                </h3>
                <p className="text-gray-700 mb-4">
                  Views dalam Pyramid adalah fungsi atau kelas yang merespons permintaan dan mengembalikan data. Renderers mengubah data dari views menjadi format yang dapat dikonsumsi oleh klien.
                </p>
                <CodeSnippet
                  code={`# views.py
from pyramid.view import view_config

@view_config(route_name='home', renderer='templates/home.jinja2')
def home_view(request):
    return {'project': 'My Pyramid App'}

@view_config(route_name='api_users', renderer='json')
def api_view(request):
    return {
        'users': [
            {'id': 1, 'name': 'Alice'},
            {'id': 2, 'name': 'Bob'}
        ]
    }`}
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="p-2 rounded-md bg-blue-100 mr-3">
                    <Layers size={20} className="text-blue-500" />
                  </div>
                  Models & Database
                </h3>
                <p className="text-gray-700 mb-4">
                  Model merepresentasikan data dan logika bisnis. Pyramid tidak memaksakan ORM tertentu, tetapi umumnya menggunakan SQLAlchemy untuk aplikasi dengan database relasional.
                </p>
                <CodeSnippet
                  code={`# models.py
from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    email = Column(Text, unique=True, nullable=False)
    
    def __repr__(self):
        return f"<User(name='{self.name}', email='{self.email}')>"`}
                />
              </div>
            </div>
          </div>

          {/* Architectural Patterns Section */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Pola Arsitektur yang Didukung</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md border border-blue-100">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Model-View-Controller</h3>
                <p className="text-gray-700 mb-4">
                  Pattern tradisional dengan pemisahan jelas antara model data, logika bisnis, dan presentasi. 
                  Implementasinya bervariasi tergantung kebutuhan.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Models: SQLAlchemy models</li>
                  <li>Views: View functions/classes</li>
                  <li>Controllers: URL dispatch/routing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-md border border-green-100">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Resource-Oriented Architecture</h3>
                <p className="text-gray-700 mb-4">
                  Cocok untuk API REST atau sistem berbasis resource, dengan traversal untuk akses hierarki resource.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Resources: Object dengan __getitem__</li>
                  <li>Representations: Renderers (JSON, XML)</li>
                  <li>State transitions: Views</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">Model-View-Template</h3>
                <p className="text-gray-700 mb-4">
                  Variasi dari MVC dengan penekanan pada template untuk presentasi, mirip dengan Django.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Models: Data models</li>
                  <li>Views: View logic</li>
                  <li>Templates: Jinja2/Mako templates</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold mb-4">Arsitektur Aplikasi Besar</h3>
              <p className="text-gray-700 mb-4">
                Untuk aplikasi skala besar, Pyramid mendukung arsitektur modular dengan komponenisasi lewat beberapa teknik:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Includes</h4>
                  <p className="text-gray-700 mb-3">
                    Memungkinkan aplikasi dibagi menjadi modul-modul terpisah yang dapat disertakan (included) dalam konfigurasi utama.
                  </p>
                  <CodeSnippet
                    code={`# app.py
def main(global_config, **settings):
    config = Configurator(settings=settings)
    
    # Include sub-modules
    config.include('myapp.auth')
    config.include('myapp.blog')
    config.include('myapp.admin')
    
    return config.make_wsgi_app()`}
                  />
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Asset Specifications</h4>
                  <p className="text-gray-700 mb-3">
                    Cara standar untuk mereferensikan resource di seluruh komponen aplikasi dengan format yang konsisten.
                  </p>
                  <CodeSnippet
                    code={`# Using asset specifications
config.add_static_view('static', 'myapp:static')
config.add_renderer('.jinja2', 'myapp.renderers.jinja2_renderer')

# In a view
@view_config(renderer='myapp:templates/home.jinja2')
def home_view(request):
    return {'project': 'My Pyramid App'}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Example */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contoh Implementasi Arsitektur MVC</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-700 mb-6">
                Berikut adalah contoh aplikasi blog sederhana yang menunjukkan implementasi arsitektur MVC dalam Pyramid:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Model (models.py)</h3>
                  <CodeSnippet
                    code={`from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
import datetime

Base = declarative_base()

class BlogPost(Base):
    __tablename__ = 'blog_posts'
    
    id = Column(Integer, primary_key=True)
    title = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    created = Column(DateTime, default=datetime.datetime.utcnow)
    
    def __repr__(self):
        return f"<BlogPost('{self.title}')>"`}
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-700">View (views.py)</h3>
                  <CodeSnippet
                    code={`from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound
from .models import BlogPost

@view_config(route_name='blog_list', 
             renderer='templates/blog_list.jinja2')
def blog_list(request):
    posts = request.dbsession.query(BlogPost).all()
    return {'posts': posts}

@view_config(route_name='blog_view', 
             renderer='templates/blog_detail.jinja2')
def blog_view(request):
    post_id = request.matchdict['id']
    post = request.dbsession.query(BlogPost).get(post_id)
    return {'post': post}`}
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">Controller (routes.py)</h3>
                  <CodeSnippet
                    code={`def includeme(config):
    """Add routes to the config."""
    config.add_route('home', '/')
    config.add_route('blog_list', '/blog')
    config.add_route('blog_view', '/blog/{id}')
    config.add_route('blog_create', '/blog/create')
    config.add_route('blog_edit', '/blog/{id}/edit')
    config.add_route('blog_delete', '/blog/{id}/delete')`}
                  />
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3 text-red-700">Template (blog_list.jinja2)</h3>
                  <CodeSnippet
                    code={`{% extends "layout.jinja2" %}

{% block content %}
  <h1>Blog Posts</h1>
  <div class="blog-list">
    {% for post in posts %}
      <div class="blog-item">
        <h2>{{ post.title }}</h2>
        <div class="created">{{ post.created }}</div>
        <a href="{{ request.route_url('blog_view', id=post.id) }}">
          Read more
        </a>
      </div>
    {% endfor %}
  </div>
{% endblock %}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Best Practices dalam Arsitektur Pyramid</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3">Struktur Proyek</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ikuti prinsip "separation of concerns" dengan memisahkan model, view, dan controller</li>
                <li>Gunakan package terpisah untuk komponen besar (auth, admin, api, dll)</li>
                <li>Hindari cyclic imports dengan meletakkan kode inisialisasi di file __init__.py</li>
                <li>Kelompokkan views berdasarkan fungsionalitas, bukan teknologi</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold mb-3">Flexibility vs. Consistency</h3>
              <p className="text-gray-700 mb-4">
                Pyramid memberikan fleksibilitas tinggi, tetapi sebaiknya tetap konsisten dalam satu proyek:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tentukan standar untuk definisi route (decorator vs. imperativ)</li>
                <li>Pilih satu template engine dan konsisten menggunakannya</li>
                <li>Standardisasi error handling dan response format</li>
                <li>Dokumentasikan keputusan arsitektur untuk memudahkan onboarding</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold mb-3">Memaksimalkan Keuntungan Arsitektur Pyramid</h3>
            <p className="text-gray-700 mb-4">
              Meskipun fleksibel, arsitektur Pyramid memiliki beberapa keunggulan spesifik yang perlu dimanfaatkan:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Modular:</strong> Pisahkan aplikasi menjadi komponen independen dengan config.include()</li>
              <li><strong>Extensible:</strong> Manfaatkan subscribers, tweens, dan hooks untuk modifikasi perilaku</li>
              <li><strong>Scalable:</strong> Mulai dengan struktur sederhana, lalu refactor secara incremental saat aplikasi berkembang</li>
              <li><strong>Testable:</strong> Gunakan pyramid.testing untuk unit testing view tanpa memerlukan server lengkap</li>
              <li><strong>Adaptable:</strong> Sesuaikan pola arsitektur dengan kebutuhan spesifik domain</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PyramidArchitecture;