import {
    BookOpen,
    Target,
    PlayCircle,
    Layers,
    Award,
    FolderTree,
} from 'lucide-react';
import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import { CodeBlock } from '@/components/praktikum/CodeBlock';
import { InfoBox } from '@/components/praktikum/InfoBox';
import { StepGuide } from '@/components/praktikum/StepGuide';
import { SubmissionLink } from '@/components/praktikum/SubmissionLink';


export default function DatabaseWebDevPraktikum() {
    return (
        <PraktikumLayout
            title="Pertemuan Basis Data dan Pengembangan Web"
            subtitle="SQLAlchemy, Alembic, PostgreSQL dan Python Pyramid"
        >
            {/* Tujuan Praktikum */}
            <SectionWrapper
                id="tujuan"
                title="Tujuan Pertemuan"
                isBordered={false}
                icon={<Target className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Setelah menyelesaikan pertemuan ini, Kalian diharapkan mampu:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Mempersiapkan lingkungan pengembangan dengan Python dan PostgreSQL</li>
                        <li>Mengkonfigurasi koneksi basis data menggunakan SQLAlchemy</li>
                        <li>Membuat dan mengelola model data menggunakan SQLAlchemy ORM</li>
                        <li>Menerapkan migrasi basis data dengan Alembic</li>
                        <li>Membuat layanan REST API dengan kerangka kerja Pyramid</li>
                        <li>Mengintegrasikan model data dalam endpoint API</li>
                        <li>Mengimplementasikan validasi data menggunakan Schema</li>
                        <li>Membangun service layer untuk logika bisnis aplikasi</li>
                    </ul>
                </div>
            </SectionWrapper>

            {/* Dasar Teori */}
            <SectionWrapper
                id="dasar-teori"
                title="Dasar Teori"
                isBordered={false}
                icon={<BookOpen className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-6">
                    <InfoBox type="info" title="Tentang SQLAlchemy">
                        <p>
                            SQLAlchemy adalah toolkit SQL Python dan Object-Relational Mapper (ORM) yang memberikan fleksibilitas penuh kepada pengembang database. SQLAlchemy menyediakan serangkaian pola desain yang terkenal dan efisien serta menggunakan Python Database API (DBAPI) untuk berinteraksi dengan database.
                        </p>
                    </InfoBox>

                    <InfoBox type="info" title="Tentang Alembic">
                        <p>
                            Alembic adalah alat migrasi database untuk SQLAlchemy yang memungkinkan evolusi skema database secara bertahap. Dengan Alembic, Kalian dapat mengelola versi database, melakukan upgrade dan downgrade, serta menjaga konsistensi database dalam lingkungan pengembangan tim.
                        </p>
                    </InfoBox>

                    <InfoBox type="info" title="Tentang Pyramid">
                        <p>
                            Pyramid adalah kerangka kerja web Python yang dirancang untuk fleksibilitas dan skalabilitas. Pyramid memungkinkan Kalian membangun aplikasi dari yang sederhana hingga yang kompleks dengan pola yang konsisten, dan sangat cocok untuk membangun layanan RESTful.
                        </p>
                    </InfoBox>

                    <div className="overflow-x-auto">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">
                            Komponen Utama Arsitektur Aplikasi
                        </h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                                        Komponen
                                    </th>
                                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                                        Deskripsi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Models
                                    </td>
                                    <td className="px-4 py-2">
                                        Representasi data aplikasi menggunakan SQLAlchemy ORM, mendefinisikan tabel database dan relasi antar entitas
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Views
                                    </td>
                                    <td className="px-4 py-2">
                                        Endpoint API yang menangani permintaan HTTP dan merespons dengan data yang sesuai
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Schemas
                                    </td>
                                    <td className="px-4 py-2">
                                        Struktur validasi untuk menjamin integritas data masukan dan keluaran
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Services
                                    </td>
                                    <td className="px-4 py-2">
                                        Lapisan logika bisnis yang menghubungkan views dengan models
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap font-medium">
                                        Migration
                                    </td>
                                    <td className="px-4 py-2">
                                        Perubahan skema database yang dikelola oleh Alembic untuk evolusi database yang terkontrol
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <InfoBox type="tip" title="Praktik Terbaik">
                        <p>
                            Pada pertemuan ini, kita akan mengimplementasikan pola arsitektur MVC (Model-View-Controller) dengan sedikit modifikasi untuk RESTful API. Pemisahan concerns antara model data, validasi, logika bisnis, dan presentasi sangat penting untuk membangun aplikasi yang mudah dipelihara dan dikembangkan.
                        </p>
                    </InfoBox>
                </div>
            </SectionWrapper>

            {/* Alat dan Bahan */}
            <SectionWrapper
                id="alat-bahan"
                title="Alat dan Bahan"
                isBordered={false}
                icon={<Layers className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Untuk mengikuti studi kasus ini, Kalian memerlukan:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Python 3.8+</strong>: Pastikan Python sudah terpasang di sistem Kalian
                        </li>
                        <li>
                            <strong>PostgreSQL 12+</strong>: Database relasional yang akan kita gunakan
                        </li>
                        <li>
                            <strong>Code Editor</strong>: Visual Studio Code, PyCharm, atau editor teks lainnya
                        </li>
                        <li>
                            <strong>Terminal/Command Prompt</strong>: Untuk menjalankan perintah-perintah
                        </li>
                        <li>
                            <strong>Git</strong>: Untuk pengelolaan versi kode
                        </li>
                        <li>
                            <strong>Postman/Insomnia</strong>: Untuk menguji API
                        </li>
                    </ul>

                    <InfoBox type="tip" title="Rekomendasi">
                        <p>
                            Kami menyarankan untuk menggunakan Visual Studio Code dengan ekstensi Python dan PostgreSQL. Jika Kalian belum memiliki PostgreSQL terinstal, Kalian bisa menggunakan Docker untuk menjalankan PostgreSQL dalam container, atau menggunakan layanan PostgreSQL cloud seperti ElephantSQL untuk pertemuan ini.
                        </p>
                    </InfoBox>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Paket yang Dibutuhkan:</h3>
                        <CodeBlock
                            title="requirements.txt"
                            code={`# Web Framework
pyramid==2.0.1
pyramid-debugtoolbar==4.9
waitress==2.1.2

# Database
sqlalchemy==2.0.4
psycopg2-binary==2.9.5
alembic==1.9.4

# Schema Validation
marshmallow==3.19.0
pyramid-marshmallow==0.1.0

# Development Tools
pytest==7.2.1
webtest==3.0.0
pyramid-ipython==0.2.1

# Utility
python-dotenv==1.0.0
pydantic==1.10.5
`}
                            language="text"
                        />
                    </div>
                </div>
            </SectionWrapper>

            {/* Langkah Praktikum */}
            <SectionWrapper
                id="langkah-studi-kasus"
                isBordered={false}
                title="Langkah Studi Kasus"
                icon={<PlayCircle className="w-6 h-6 text-blue-500" />}
            >
                <StepGuide
                    steps={[
                        {
                            id: 1,
                            title: 'Persiapan Lingkungan',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Mari kita mulai dengan menyiapkan lingkungan pengembangan dan struktur proyek Pyramid.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">1.1 Membuat Virtual Environment</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`# Buat direktori proyek
mkdir products-api
cd products-api

# Buat lingkungan virtual
python -m venv venv

# Aktifkan lingkungan virtual (Windows)
venv\\Scripts\\activate

# Aktifkan lingkungan virtual (MacOS/Linux)
source venv/bin/activate

# Instal cookiecutter untuk scaffold proyek
pip install cookiecutter`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">1.2 Membuat Scaffold Proyek Pyramid</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`# Gunakan cookiecutter untuk membuat proyek Pyramid
cookiecutter gh:Pylons/pyramid-cookiecutter-starter

# Jawab pertanyaan scaffold sebagai berikut:
# - project_name: ProductsAPI
# - repo_name: products-api
# - Select template_language: 1 - jinja2
# - Select backend: 2 - sqlalchemy`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">1.3 Struktur Proyek yang Dihasilkan</h4>
                                    <CodeBlock
                                        title="Struktur Folder"
                                        code={`products-api/
├── CHANGES.txt
├── MANIFEST.in
├── README.txt
├── development.ini
├── production.ini
├── pytest.ini
├── setup.py
└── products-api/
    ├── __init__.py
    ├── alembic/
    │   ├── env.py
    │   ├── README
    │   ├── script.py.mako
    │   └── versions/
    ├── models/
    │   ├── __init__.py
    │   ├── meta.py
    │   └── mymodel.py
    ├── routes.py
    ├── scripts/
    │   ├── __init__.py
    │   └── initialize_db.py
    ├── static/
    ├── templates/
    └── views/
        ├── __init__.py
        ├── default.py
        └── notfound.py`}
                                        language="text"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">1.4 Masuk ke Direktori Proyek dan Instal Dependencies</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`cd products-api
pip install -e ".[testing]"

# Instal paket tambahan yang dibutuhkan
pip install python-dotenv marshmallow pyramid-marshmallow pydantic`}
                                        language="bash"
                                    />

                                    <InfoBox type="info" title="Penjelasan">
                                        <p>Pada langkah ini, kita telah:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Membuat lingkungan virtual Python untuk isolasi dependensi</li>
                                            <li>Menggunakan cookiecutter untuk menghasilkan scaffold proyek Pyramid dengan SQLAlchemy</li>
                                            <li>Menginstal semua dependensi yang diperlukan untuk pengembangan</li>
                                        </ul>
                                        <p className="mt-2">
                                            Struktur yang dihasilkan sudah mencakup folder <code>alembic</code> untuk migrasi database, <code>models</code> untuk pendefinisian model data, dan <code>views</code> untuk endpoint API.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 2,
                            title: 'Konfigurasi Database',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Selanjutnya, kita akan mengonfigurasi koneksi ke database PostgreSQL menggunakan SQLAlchemy.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">2.1 Membuat File .env untuk Konfigurasi Database</h4>
                                    <CodeBlock
                                        title=".env"
                                        code={`# Konfigurasi Database
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=products-api_db

# Konfigurasi Aplikasi
APP_SECRET=supersecretkey
DEBUG=true`}
                                        language="text"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">2.2 Modifikasi File Inisialisasi untuk Memuat Variabel Lingkungan</h4>
                                    <CodeBlock
                                        title="products-api/__init__.py"
                                        code={`import os
from pyramid.config import Configurator
from dotenv import load_dotenv

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    # Load environment variables from .env file
    load_dotenv()
    
    # Override settings with environment variables
    settings['sqlalchemy.url'] = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
    
    with Configurator(settings=settings) as config:
        # Konfigurasi CORS
        config.add_renderer('json', JSON(indent=4))
        config.add_cors_preflight_handler()
        config.add_route('cors', '{path:.*}')
        config.add_view(cors_options_view, route_name='cors', renderer='json')

        # Konfig model dan routes
        config.include('.models')
        config.include('pyramid_jinja2')
        config.include('.routes')
        config.scan()
    return config.make_wsgi_app()`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">2.3 Membuat Database PostgreSQL</h4>
                                    <CodeBlock
                                        title="Terminal (psql)"
                                        code={`# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE products-api_db;

# Verify database creation
\\l

# Exit psql
\\q`}
                                        language="sql"
                                    />

                                    <InfoBox type="warning" title="Alternatif">
                                        <p>
                                            Jika Kalian tidak memiliki akses langsung ke command psql, Kalian dapat menggunakan pgAdmin atau tools lain untuk membuat database. Alternatif lain adalah menggunakan docker:
                                        </p>
                                        <CodeBlock
                                            title="Docker Command"
                                            code={`docker run --name pg-products-api -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=products-api_db -p 5432:5432 -d postgres:14`}
                                            language="bash"
                                        />
                                    </InfoBox>

                                    <h4 className="text-md font-semibold text-gray-800">2.4 Konfigurasi Alembic untuk Migrasi Database</h4>
                                    <CodeBlock
                                        title="products-api/alembic/env.py (Edit bagian berikut)"
                                        code={`# Tambahkan ini di bagian impor
from dotenv import load_dotenv
import os

# Tambahkan ini sebelum run_migrations_offline()
load_dotenv()
url = config.get_main_option("sqlalchemy.url")
if not url:
    url = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"`}
                                        language="python"
                                    />

                                    <InfoBox type="info" title="Penjelasan">
                                        <p>Pada langkah ini, kita telah:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Membuat file .env untuk menyimpan konfigurasi database secara aman</li>
                                            <li>Memodifikasi file inisialisasi aplikasi untuk memuat variabel lingkungan dan mengonfigurasi SQLAlchemy</li>
                                            <li>Membuat database PostgreSQL yang akan digunakan aplikasi</li>
                                            <li>Mengonfigurasi Alembic untuk menggunakan variabel lingkungan yang sama</li>
                                        </ul>
                                        <p className="mt-2">
                                            Pemisahan konfigurasi database ke file .env adalah praktik yang baik untuk keamanan dan fleksibilitas lingkungan pengembangan.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 3,
                            title: 'Pembuatan Model Data',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Sekarang kita akan mendefinisikan model data untuk aplikasi menggunakan SQLAlchemy ORM.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">3.1 Modifikasi Meta untuk Model</h4>
                                    <CodeBlock
                                        title="products-api/models/meta.py"
                                        code={`from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import MetaData

# Recommended naming convention used by Alembic
NAMING_CONVENTION = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=NAMING_CONVENTION)
Base = declarative_base(metadata=metadata)`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">3.2 Definisi Model Dasar</h4>
                                    <CodeBlock
                                        title="products-api/models/base.py"
                                        code={`from datetime import datetime
from sqlalchemy import Column, DateTime, Integer
from .meta import Base

class BaseModel(Base):
    """Base model class for all models."""
    
    __abstract__ = True
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        """Convert model to dictionary."""
        return {column.name: getattr(self, column.name) 
                for column in self.__table__.columns}`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">3.3 Pembuatan Model Produk</h4>
                                    <CodeBlock
                                        title="products-api/models/product.py"
                                        code={`from sqlalchemy import Column, String, Float, Text, Boolean
from .base import BaseModel

class Product(BaseModel):
    """Model for products."""
    
    __tablename__ = 'products'
    
    name = Column(String(100), nullable=False, index=True)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    sku = Column(String(50), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)
    
    def __repr__(self):
        return f"<Product(name='{self.name}', sku='{self.sku}')>"`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">3.4 Update __init__.py untuk Models</h4>
                                    <CodeBlock
                                        title="products-api/models/__init__.py"
                                        code={`from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# Import models to register them with SQLAlchemy
from .product import Product

# Run configure_mappers after defining all models
configure_mappers()

def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager):
    """
    Get a sqlalchemy session managed by the transaction manager.
    """
    dbsession = session_factory()
    zope.sqlalchemy.register(dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    """
    Initialize the model for a Pyramid app.
    """
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'

    # Use the same engine for migrations
    settings['sqlalchemy.url'] = settings['sqlalchemy.url']

    # Create engine
    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory

    # Register connection with transaction manager
    config.add_request_method(
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )`}
                                        language="python"
                                    />

                                    <InfoBox type="info" title="Penjelasan Model">
                                        <p>Dalam implementasi model kita:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li><strong>BaseModel</strong>: Model abstrak yang menyediakan kolom dasar seperti id, created_at, dan updated_at</li>
                                            <li><strong>Product</strong>: Model konkret untuk produk dengan nama, deskripsi, harga, dan atribut lainnya</li>
                                            <li>SQLAlchemy ORM menerjemahkan class Python ini menjadi tabel database</li>
                                            <li>Kita menggunakan <code>__tablename__</code> untuk menentukan nama tabel di database</li>
                                            <li>Method <code>to_dict()</code> memudahkan konversi model ke format JSON untuk API</li>
                                        </ul>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 4,
                            title: 'Migrasi Database dengan Alembic',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Setelah mendefinisikan model, kita perlu membuat migrasi untuk mengubah skema database.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">4.1 Inisialisasi Skema Migrasi</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`# Buat migrasi awal
alembic -c development.ini revision --autogenerate -m "Create product model"

# Periksa file migrasi yang dihasilkan di products-api/alembic/versions/`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">4.2 Terapkan Migrasi ke Database</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`# Jalankan migrasi
alembic -c development.ini upgrade head

# Verifikasi tabel telah dibuat
psql -U postgres -d products-api_db -c "\\dt"`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">4.3 Contoh File Migrasi yang Dihasilkan</h4>
                                    <CodeBlock
                                        title="products-api/alembic/versions/1234_create_product_model.py"
                                        code={`"""Create product model
                        
Revision ID: 1234
Revises: 
Create Date: 2023-01-01 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic
revision = '1234'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=True),
        sa.Column('updated_at', sa.DateTime(), nullable=True),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('sku', sa.String(length=50), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('sku')
    )
    op.create_index(op.f('ix_products_name'), 'products', ['name'], unique=False)
    # ### end Alembic commands ###

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_products_name'), table_name='products')
    op.drop_table('products')
    # ### end Alembic commands ###`}
                                        language="python"
                                    />

                                    <InfoBox type="info" title="Penjelasan Migrasi">
                                        <p>Alembic bekerja dengan:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li><strong>Autogenerate</strong>: Membandingkan model SQLAlchemy dengan database saat ini</li>
                                            <li><strong>Revisions</strong>: Membuat file migrasi yang berisi perubahan skema</li>
                                            <li><strong>Upgrade/Downgrade</strong>: Menerapkan atau membatalkan perubahan skema</li>
                                        </ul>
                                        <p className="mt-2">
                                            Setiap migrasi memiliki fungsi upgrade() untuk menerapkan perubahan dan downgrade() untuk membatalkannya.
                                        </p>
                                    </InfoBox>

                                    <h4 className="text-md font-semibold text-gray-800">4.4 Menambahkan Data Awal</h4>
                                    <CodeBlock
                                        title="products-api/scripts/initialize_db.py"
                                        code={`import transaction
 from ..models import get_tm_session
 from ..models.product import Product
 
 def main():
     # Get session from config
     from pyramid.paster import get_appsettings, setup_logging
     from sqlalchemy import engine_from_config
     
     config_uri = 'development.ini'
     setup_logging(config_uri)
     settings = get_appsettings(config_uri)
     engine = engine_from_config(settings, 'sqlalchemy.')
     
     session_factory = get_session_factory(engine)
     with transaction.manager:
         dbsession = get_tm_session(session_factory, transaction.manager)
         
         # Add sample products
         products = [
             Product(
                 name='Laptop Premium',
                 description='High performance laptop',
                 price=1299.99,
                 sku='LP1001',
                 is_active=True
             ),
             Product(
                 name='Smartphone Pro',
                 description='Latest model smartphone',
                 price=899.99,
                 sku='SP2002',
                 is_active=True
             )
         ]
         
         dbsession.add_all(products)
 
 if __name__ == '__main__':
     main()`}
                                        language="python"
                                    />

                                    <CodeBlock
                                        title="Terminal - Jalankan script inisialisasi"
                                        code={`python -m products-api.scripts.initialize_db`}
                                        language="bash"
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 5,
                            title: 'Pembuatan Schema Validasi',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Kita akan menggunakan Marshmallow untuk validasi data input/output API.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">5.1 Membuat Direktori Schemas</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`mkdir -p products-api/schemas
touch products-api/schemas/__init__.py
touch products-api/schemas/product.py`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">5.2 Definisi Product Schema</h4>
                                    <CodeBlock
                                        title="products-api/schemas/product.py"
                                        code={`from marshmallow import Schema, fields, validate 
class ProductSchema(Schema):
    """Schema for product data validation."""
    
    id = fields.Integer(dump_only=True)
    name = fields.String(
        required=True,
        validate=validate.Length(min=2, max=100)
    )
    description = fields.String(validate=validate.Length(max=500))
    price = fields.Float(
        required=True,
        validate=validate.Range(min=0.01)
    )
    sku = fields.String(
        required=True,
        validate=validate.Length(min=5, max=50)
    )
    is_active = fields.Boolean()
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

class ProductCreateSchema(ProductSchema):
    """Schema for product creation (without read-only fields)."""
    pass

class ProductUpdateSchema(Schema):
    """Schema for product updates (only updatable fields)."""
    name = fields.String(validate=validate.Length(min=2, max=100))
    description = fields.String(validate=validate.Length(max=500))
    price = fields.Float(validate=validate.Range(min=0.01))
    is_active = fields.Boolean()`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">5.3 Registrasi Schema di Pyramid</h4>
                                    <CodeBlock
                                        title="products-api/__init__.py (tambahkan ini di main())"
                                        code={`# Include pyramid_marshmallow
config.include('pyramid_marshmallow')

# Configure marshmallow
config.add_settings({
    'marshmallow': {
        'strict': True  # Raise errors for unknown fields
    }
})`}
                                        language="python"
                                    />

                                    <InfoBox type="info" title="Penjelasan Schema">
                                        <p>Kita membuat tiga jenis schema:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li><strong>ProductSchema</strong>: Schema lengkap untuk semua field</li>
                                            <li><strong>ProductCreateSchema</strong>: Untuk validasi pembuatan produk baru</li>
                                            <li><strong>ProductUpdateSchema</strong>: Untuk validasi update produk (hanya field yang bisa diupdate)</li>
                                        </ul>
                                        <p className="mt-2">
                                            Marshmallow akan otomatis memvalidasi input sesuai dengan aturan yang kita definisikan.
                                        </p>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 6,
                            title: 'Implementasi Service Layer',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Service layer berisi logika bisnis aplikasi yang terpisah dari views dan models.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">6.1 Membuat Direktori Services</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`mkdir -p products-api/services
touch products-api/services/__init__.py
touch products-api/services/product.py`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">6.2 Product Service Implementation</h4>
                                    <CodeBlock
                                        title="products-api/services/product.py"
                                        code={`from typing import List, Optional
from ..models.product import Product
from ..schemas.product import (
    ProductCreateSchema,
    ProductUpdateSchema,
    ProductSchema
)

class ProductService:
    """Service for product operations."""
    
    @staticmethod
    def get_all_products(dbsession) -> List[Product]:
        """Get all active products."""
        return dbsession.query(Product).filter(Product.is_active == True).all()
    
    @staticmethod
    def get_product_by_id(dbsession, product_id: int) -> Optional[Product]:
        """Get product by ID."""
        return dbsession.query(Product).get(product_id)
    
    @staticmethod
    def get_product_by_sku(dbsession, sku: str) -> Optional[Product]:
        """Get product by SKU."""
        return dbsession.query(Product).filter(Product.sku == sku).first()
    
    @staticmethod
    def create_product(dbsession, product_data: dict) -> Product:
        """Create a new product."""
        product = Product(**product_data)
        dbsession.add(product)
        dbsession.flush()
        return product
    
    @staticmethod
    def update_product(dbsession, product: Product, update_data: dict) -> Product:
        """Update existing product."""
        for field, value in update_data.items():
            setattr(product, field, value)
        dbsession.add(product)
        dbsession.flush()
        return product
    
    @staticmethod
    def delete_product(dbsession, product: Product) -> None:
        """Soft delete a product."""
        product.is_active = False
        dbsession.add(product)
        dbsession.flush()`}
                                        language="python"
                                    />

                                    <InfoBox type="tip" title="Pemisahan Logika Bisnis">
                                        <p>
                                            Dengan memisahkan logika bisnis ke service layer, kita mendapatkan beberapa keuntungan:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Views menjadi lebih sederhana dan fokus pada penanganan HTTP</li>
                                            <li>Logika bisnis dapat di-reuse dari berbagai endpoint</li>
                                            <li>Lebih mudah untuk di-test secara terpisah</li>
                                            <li>Perubahan logika bisnis tidak mempengaruhi struktur API</li>
                                        </ul>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 7,
                            title: 'Pembuatan API Endpoints',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Sekarang kita akan membuat endpoint API untuk operasi CRUD produk.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">7.1 Definisi Routes</h4>
                                    <CodeBlock
                                        title="products-api/routes.py"
                                        code={`def includeme(config):
"""Configure routes."""
config.add_route('home', '/')
config.add_route('api_v1.products', '/api/v1/products')
config.add_route('api_v1.product', '/api/v1/products/{id}')`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">7.2 Product Views</h4>
                                    <CodeBlock
                                        title="products-api/views/product.py"
                                        code={`from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import (
    HTTPNotFound,
    HTTPBadRequest,
    HTTPNoContent
)
from ..models.product import Product
from ..services.product import ProductService
from ..schemas.product import (
    ProductSchema,
    ProductCreateSchema,
    ProductUpdateSchema
)

@view_config(route_name='api_v1.products', request_method='GET', renderer='json')
def get_products(request):
    """Get all active products."""
    products = ProductService.get_all_products(request.dbsession)
    schema = ProductSchema(many=True)
    return schema.dump(products)

@view_config(route_name='api_v1.products', request_method='POST', renderer='json')
def create_product(request):
    """Create a new product."""
    schema = ProductCreateSchema()
    try:
        product_data = schema.load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})
    
    # Check if SKU already exists
    if ProductService.get_product_by_sku(request.dbsession, product_data['sku']):
        raise HTTPBadRequest(json={
            'errors': {'sku': ['Product with this SKU already exists']}
        })
    
    product = ProductService.create_product(request.dbsession, product_data)
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='GET', renderer='json')
def get_product(request):
    """Get product by ID."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    
    if not product or not product.is_active:
        raise HTTPNotFound()
    
    return ProductSchema().dump(product)

@view_config(route_name='api_v1.product', request_method='PUT', renderer='json')
def update_product(request):
    """Update existing product."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    
    if not product or not product.is_active:
        raise HTTPNotFound()
    
    schema = ProductUpdateSchema()
    try:
        update_data = schema.load(request.json_body)
    except ValidationError as err:
        raise HTTPBadRequest(json={'errors': err.messages})
    
    updated_product = ProductService.update_product(
        request.dbsession, 
        product, 
        update_data
    )
    return ProductSchema().dump(updated_product)

@view_config(route_name='api_v1.product', request_method='DELETE')
def delete_product(request):
    """Soft delete a product."""
    product_id = int(request.matchdict['id'])
    product = ProductService.get_product_by_id(request.dbsession, product_id)
    
    if not product or not product.is_active:
        raise HTTPNotFound()
    
    ProductService.delete_product(request.dbsession, product)
    return HTTPNoContent()`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">7.3 Update __init__.py untuk Views</h4>
                                    <CodeBlock
                                        title="products-api/views/__init__.py"
                                        code={`# Import views to register them
from .product import (
    get_products,
    create_product,
    get_product,
    update_product,
    delete_product
)`}
                                        language="python"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">7.4 Buat handler untuk cors  untuk Views</h4>
                                    <CodeBlock
                                        title="products-api/views/cors.py"
                                        code={`from pyramid.view import view_config

@view_config(route_name='cors', renderer='json')
def cors_options_view(request):
    request.response.headers.update({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
        'Access-Control-Max-Age': '1728000',
    })
    return {}
)`}
                                        language="python"
                                    />

                                    <InfoBox type="info" title="Struktur Endpoint">
                                        <p>Kita telah membuat endpoint RESTful untuk:</p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li><strong>GET /api/v1/products</strong>: Daftar semua produk aktif</li>
                                            <li><strong>POST /api/v1/products</strong>: Membuat produk baru</li>
                                            <li><strong>GET /api/v1/products/{`id`}</strong>: Detail produk spesifik</li>
                                            <li><strong>PUT /api/v1/products/{`id`}</strong>: Update produk</li>
                                            <li><strong>DELETE /api/v1/products/{`id`}</strong>: Soft delete produk</li>
                                        </ul>
                                    </InfoBox>
                                </div>
                            ),
                        },
                        {
                            id: 8,
                            title: 'Pengujian API',
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Mari kita uji API yang telah kita buat menggunakan Postman atau curl.
                                    </p>

                                    <h4 className="text-md font-semibold text-gray-800">8.1 Menjalankan Aplikasi</h4>
                                    <CodeBlock
                                        title="Terminal"
                                        code={`pserve development.ini`}
                                        language="bash"
                                    />

                                    <h4 className="text-md font-semibold text-gray-800">8.2 Contoh Permintaan API</h4>
                                    <CodeBlock
                                        title="Mendapatkan semua produk (GET)"
                                        code={`curl -X GET http://localhost:6543/api/v1/products`}
                                        language="bash"
                                    />

                                    <CodeBlock
                                        title="Membuat produk baru (POST)"
                                        code={`curl -X POST http://localhost:6543/api/v1/products \\
-H "Content-Type: application/json" \\
-d '{
  "name": "New Product",
  "description": "A great new product",
  "price": 99.99,
  "sku": "NP1234",
  "is_active": true
}'`}
                                        language="bash"
                                    />

                                    <CodeBlock
                                        title="Update produk (PUT)"
                                        code={`curl -X PUT http://localhost:6543/api/v1/products/1 \\
-H "Content-Type: application/json" \\
-d '{
  "name": "Updated Product Name",
  "price": 109.99
}'`}
                                        language="bash"
                                    />

                                    <CodeBlock
                                        title="Menghapus produk (DELETE)"
                                        code={`curl -X DELETE http://localhost:6543/api/v1/products/1`}
                                        language="bash"
                                    />

                                    <InfoBox type="tip" title="Pengujian Otomatis">
                                        <p>
                                            Untuk pengujian yang lebih komprehensif, Kalian bisa menambahkan unit test menggunakan pytest. Contoh test sederhana:
                                        </p>
                                        <CodeBlock
                                            title="tests/test_products.py"
                                            code={`import pytest
from products-api.models.product import Product

def test_product_model(dbsession):
    """Test product model."""
    product = Product(
        name='Test Product',
        price=10.99,
        sku='TEST123'
    )
    dbsession.add(product)
    dbsession.flush()
    
    assert product.id is not None
    assert product.created_at is not None
    assert product.is_active is True`}
                                            language="python"
                                        />
                                    </InfoBox>
                                </div>
                            ),
                        },
                    ]}
                />
            </SectionWrapper>
            {/* Bonus */}
            {/* Bonus */}
            <SectionWrapper
                id="bonus-frontend"
                isBordered={false}
                title="Bonus: Implementasi Frontend React"
                icon={< Award className="w-6 h-6 text-blue-500" />}
            >
                <StepGuide
                    steps={
                        [
                            {
                                id: 1,
                                title: 'Persiapan Lingkungan React',
                                content: (
                                    <div className="space-y-4" >
                                        <p className="text-gray-700">
                                            Setelah berhasil membangun RESTful API dengan Python Pyramid, kita akan mengintegrasikan API tersebut dengan frontend menggunakan React.
                                        </p>

                                        < h4 className="text-md font-semibold text-gray-800" > Membuat Proyek React</ h4 >
                                        <CodeBlock
                                            title="Terminal"
                                            code={`# Buat proyek React baru
npx create-react-app products-frontend
cd products-frontend

# Instal dependensi yang diperlukan
npm install react-router-dom axios tailwindcss`}
                                            language="bash"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" > Konfigurasi Tailwind CSS </h4>
                                        < CodeBlock
                                            title="Terminal"
                                            code={`# Inisialisasi Tailwind CSS
npx tailwindcss init -p`}
                                            language="bash"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" > Struktur Proyek </h4>
                                        < CodeBlock
                                            title="Struktur Folder"
                                            code={`src/
├── api/
│   └── productApi.js
├── components/
│   ├── product/
│   │   ├── ProductForm.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   └── ui/
│       ├── Button.jsx
│       └── Card.jsx
├── pages/
│   ├── ProductDetailPage.jsx
│   ├── ProductListPage.jsx
│   └── ProductFormPage.jsx
├── types/
│   └── product.js
└── App.jsx`}
                                            language="text"
                                        />

                                        <InfoBox type="info" title="Penjelasan" >
                                            <p>Pada langkah ini, kita telah: </p>
                                            < ul className="list-disc pl-6 mt-2" >
                                                <li>Membuat proyek React </li>
                                                < li > Menginstal dependensi yang diperlukan untuk pengembangan frontend </li>
                                                < li > Menyiapkan struktur folder yang terorganisir untuk aplikasi kita </li>
                                            </ul>
                                        </InfoBox>
                                    </div>
                                ),
                            },
                            {
                                id: 2,
                                title: 'Implementasi API Service',
                                content: (
                                    <div className="space-y-4" >
                                        <p className="text-gray-700" >
                                            Kita akan membuat layanan API untuk berkomunikasi dengan backend Pyramid.
                                        </p>

                                        < CodeBlock
                                            title="src/api/productApi.js"
                                            code={`const API_BASE_URL = 'http://localhost:6543/api/v1';

export const productApi = {
  async getAll(){
    const response = await fetch(\`\${API_BASE_URL}/products\`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async getById(id){
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`);
    if (!response.ok) {
      throw new Error(\`Failed to fetch product with id \${id}\`);
    }
    return response.json();
  },

  async create(product){
    const response = await fetch(\`\${API_BASE_URL}/products\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors ? JSON.stringify(errorData.errors) : 'Failed to create product');
    }
    
    return response.json();
  },

  async update(id, productUpdate) {
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productUpdate),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors ? JSON.stringify(errorData.errors) : \`Failed to update product with id \${id}\`);
    }
    
    return response.json();
  },

  async delete(id) {
    const response = await fetch(\`\${API_BASE_URL}/products/\${id}\`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(\`Failed to delete product with id \${id}\`);
    }
  },
};`}
                                            language="javascript"
                                        />

                                        <InfoBox type="info" title="Penjelasan" >
                                            <p>Service API yang kita buat berisi fungsi - fungsi untuk: </p>
                                            < ul className="list-disc pl-6 mt-2" >
                                                <li>Mengambil semua produk(<code>getAll </code>)</li >
                                                <li>Mengambil produk berdasarkan ID(<code>getById </code>)</li >
                                                <li>Membuat produk baru(<code>create </code>)</li >
                                                <li>Memperbarui produk yang ada(<code>update </code>)</li >
                                                <li>Menghapus produk(<code>delete </code>)</li >
                                            </ul>
                                            < p className="mt-2" >
                                                Setiap fungsi melakukan permintaan HTTP yang sesuai ke endpoint API kita dan menangani respons dengan tepat.
                                            </p>
                                        </InfoBox>
                                    </div>
                                ),
                            },
                            {
                                id: 4,
                                title: 'Komponen Halaman Daftar Produk',
                                content: (
                                    <div className="space-y-4" >
                                        <p className="text-gray-700">
                                            Kita akan membuat halaman untuk menampilkan daftar produk.
                                        </p>

                                        < CodeBlock
                                            title="src/pages/ProductListPage.jsx"
                                            code={`import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productApi } from '../api/productApi';
import ProductList from '../components/product/ProductList';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unexpected error occurred');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.delete(id);
        setProducts(products.filter(product => product.id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete product');
      }
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link 
          to="/products/new" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Product
        </Link>
      </div>
      
      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default ProductListPage;`}
                                            language="javascript"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" > Implementasi Komponen Product List </h4>
                                        < CodeBlock
                                            title="src/components/product/ProductList.jsx"
                                            code={`import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onDelete={() => onDelete(product.id)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;`}
                                            language="javascript"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" > Implementasi Komponen Product Item </h4>
                                        < CodeBlock
                                            title="src/components/product/ProductItem.jsx"
                                            code={`import React from 'react';
import { Link } from 'react-router-dom';


const ProductItem = ({ product, onDelete }) => {
  return (
    <tr>
      <td className="py-4 px-4">
        <Link to={\`/products/\${product.id}\`} className="text-blue-600 hover:text-blue-800">
          {product.name}
        </Link>
      </td>
      <td className="py-4 px-4">{product.sku}</td>
      <td className="py-4 px-4">\${product.price.toFixed(2)}</td>
      <td className="py-4 px-4">
        <span 
          className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            \${product.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}\`}
        >
          {product.is_active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="py-4 px-4 text-right space-x-2">
        <Link 
          to={\`/products/\${product.id}/edit\`}
          className="text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
        <button 
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;`}
                                            language="javascript"
                                        />

                                        <InfoBox type="info" title="Penjelasan" >
                                            <p>Pada langkah ini, kita telah membuat: </p>
                                            < ul className="list-disc pl-6 mt-2" >
                                                <li>Halaman utama untuk menampilkan daftar produk </li>
                                                < li > Komponen < code > ProductList </code> untuk menampilkan tabel produk</li >
                                                <li>Komponen < code > ProductItem </code> untuk menampilkan setiap baris produk</li >
                                            </ul>
                                            < p className="mt-2" >
                                                Komponen - komponen ini bekerja bersama untuk menampilkan daftar produk dari API dan memungkinkan pengguna untuk melihat detail produk, mengedit, atau menghapus produk.
                                            </p>
                                        </InfoBox>
                                    </div>
                                ),
                            },
                            {
                                id: 5,
                                title: 'Halaman Detail dan Edit Produk',
                                content: (
                                    <div className="space-y-4" >
                                        <p className="text-gray-700">
                                            Kita akan membuat halaman untuk melihat detail produk dan halaman form untuk menambah/ mengedit produk.
                                        </p>

                                        < h4 className="text-md font-semibold text-gray-800" > Halaman Detail Produk </h4>
                                        < CodeBlock
                                            title="src/pages/ProductDetailPage.jsx"
                                            code={`import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const data = await productApi.getById(parseInt(id));
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (!product) return;
    
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.delete(product.id);
        navigate('/products');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to delete product');
      }
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="text-center p-4">Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">SKU</p>
            <p>{product.sku}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p>\${product.price.toFixed(2)}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Description</p>
            <p>{product.description || 'No description available'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p>{product.is_active ? 'Active' : 'Inactive'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Created</p>
            <p>{new Date(product.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={() => navigate(\`/products/\${product.id}/edit\`)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => navigate('/products')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;`}
                                            language="javascript"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" > Halaman Form Produk(Create / Edit) </h4>
                                        < CodeBlock
                                            title="src/pages/ProductFormPage.jsx"
                                            code={`import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';

const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    sku: '',
    is_active: true
  });
  
  const [loading, setLoading] = useState(isEditMode);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      if (!isEditMode) return;
      
      try {
        const product = await productApi.getById(parseInt(id!));
        setFormData({
          name: product.name,
          description: product.description || '',
          price: product.price,
          sku: product.sku,
          is_active: product.is_active
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : name === 'price' ? parseFloat(value) : value
    });
    
    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const errors = {};
    
    // Required fields
    if (!formData.name) errors.name = 'Name is required';
    if ('price' in formData && (formData.price <= 0)) errors.price = 'Price must be greater than 0';
    if ('sku' in formData && !formData.sku) errors.sku = 'SKU is required';
    
    // Length validation
    if (formData.name && formData.name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (formData.name && formData.name.length > 100) errors.name = 'Name must be at most 100 characters';
    if (formData.description && formData.description.length > 500) 
      errors.description = 'Description must be at most 500 characters';
    if ('sku' in formData && formData.sku && (formData.sku.length < 5 || formData.sku.length > 50))
      errors.sku = 'SKU must be between 5 and 50 characters';
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setSubmitting(true);
    setError(null);
    
    try {
      if (isEditMode) {
        // Remove sku from update payload
        const { sku, ...updateData } = formData as ProductCreate;
        await productApi.update(parseInt(id!), updateData);
      } else {
        await productApi.create(formData as ProductCreate);
      }
      navigate('/products');
    } catch (err) {
      let errorMessage = 'An error occurred';
      if (err instanceof Error) {
        // Try to parse error message for validation errors
        try {
          const parsedErrors = JSON.parse(err.message);
          if (typeof parsedErrors === 'object') {
            setValidationErrors(
              Object.entries(parsedErrors).reduce((acc, [key, messages]) => {
                acc[key] = Array.isArray(messages) ? messages[0] : messages;
                return acc;
              }, {} as Record<string, string>)
            );
            errorMessage = 'Please fix the validation errors';
          } else {
            errorMessage = err.message;
          }
        } catch {
          errorMessage = err.message;
        }
      }
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? 'Edit' : 'Create'} Product
      </h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={\`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline \${
              validationErrors.name ? 'border-red-500' : ''
            }\`}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-xs italic">{validationErrors.name}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
          />
          {validationErrors.description && (
            <p className="text-red-500 text-xs italic">{validationErrors.description}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price*
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0.01"
            value={formData.price}
            onChange={handleChange}
            className={\`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline \${
              validationErrors.price ? 'border-red-500' : ''
            }\`}
          />
          {validationErrors.price && (
            <p className="text-red-500 text-xs italic">{validationErrors.price}</p>
          )}
        </div>
        
        {!isEditMode && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sku">
              SKU*
            </label>
            <input
              id="sku"
              name="sku"
              type="text"
              value={(formData as ProductCreate).sku || ''}
              onChange={handleChange}
              className={\`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline \${
                validationErrors.sku ? 'border-red-500' : ''
              }\`}
              disabled={isEditMode} // SKU cannot be changed after creation
            />
            {validationErrors.sku && (
              <p className="text-red-500 text-xs italic">{validationErrors.sku}</p>
            )}
          </div>
        )}
        
        <div className="mb-6">
          <label className="flex items-center">
            <input
              id="is_active"
              name="is_active"
              type="checkbox"
              checked={formData.is_active}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700 text-sm font-bold">Active</span>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={submitting}
            className={\`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline \${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }\`}
          >
            {submitting ? 'Saving...' : isEditMode ? 'Update' : 'Create'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormPage;`} language="javascript"
                                        />

                                        <h4 className="text-md font-semibold text-gray-800" >Halaman Produk List </h4>
                                        < CodeBlock
                                            title="src/components/product/ProductList.jsx"
                                            code={`import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onDelete={() => onDelete(product.id)} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
                                                `}
                                        />
                                        <h4 className="text-md font-semibold text-gray-800" >Konfigurasi Router di App.tsx</h4>
                                        < CodeBlock
                                            title="src/components/product/ProductList.jsx"
                                            code={`import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductFormPage from './pages/ProductFormPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-xl font-semibold text-gray-900">Product Management System</h1>
          </div>
        </header>
        
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/products/:id/edit" element={<ProductFormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;`}
                                        />
                                    </div>
                                ),
                            },
                        ]}
                />

            </SectionWrapper>


            {/* Tugas dan Penilaian */}
            <SectionWrapper
                id="tugas-penilaian"
                isBordered={false}
                title="Tugas dan Penilaian"
                icon={<Award className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                            Tugas Pertemuan
                        </h3>
                        <p className="text-yellow-700">
                            Berdasarkan apa yang telah dipelajari, buatlah aplikasi serupa dengan entitas yang berbeda (misalnya: User, Order, Category, dll.) dengan ketentuan:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-yellow-700">
                            <li>Minimal memiliki 2 model yang berelasi</li>
                            <li>Implementasikan semua operasi CRUD</li>
                            <li>Gunakan validasi data dengan Marshmallow</li>
                            <li>Terapkan service layer untuk logika bisnis</li>
                            <li>Buat migrasi database menggunakan Alembic</li>
                            <li>Sertakan unit test minimal untuk 2 endpoint</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">
                            Kriteria Penilaian
                        </h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Komponen
                                    </th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Bobot
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 py-2">Kesesuaian dengan spesifikasi</td>
                                    <td className="px-4 py-2">30%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Implementasi relasi model</td>
                                    <td className="px-4 py-2">20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Validasi data</td>
                                    <td className="px-4 py-2">15%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Struktur kode dan organisasi</td>
                                    <td className="px-4 py-2">15%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Pengujian</td>
                                    <td className="px-4 py-2">10%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Dokumentasi</td>
                                    <td className="px-4 py-2">10%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <SubmissionLink
                        title="Submit Tugas Pertemuan"
                        href="#"
                    />
                </div>
            </SectionWrapper>

            {/* Referensi */}
            <SectionWrapper
                id="referensi"
                isBordered={false}
                title="Referensi"
                icon={<FolderTree className="w-6 h-6 text-blue-500" />}
            >
                <div className="space-y-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <a href="https://docs.sqlalchemy.org/en/20/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                SQLAlchemy Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://alembic.sqlalchemy.org/en/latest/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Alembic Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://trypyramid.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Pyramid Framework Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://marshmallow.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Marshmallow Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                PostgreSQL Documentation
                            </a>
                        </li>
                    </ul>
                </div>
            </SectionWrapper>
        </PraktikumLayout>
    );
}