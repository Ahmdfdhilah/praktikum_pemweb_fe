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

export default function PyramidFrameworkPraktikum() {
  return (
    <PraktikumLayout
      title="Praktikum Pyramid Framework"
      subtitle="Membuat Aplikasi CRUD Sederhana dengan Pyramid dan PostgreSQL"
    >
      <SectionWrapper
        id="tujuan"
        title="Tujuan Praktikum"
        icon={<Target className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, Anda diharapkan mampu:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Memahami konsep dasar Pyramid Framework dalam pengembangan web
            </li>
            <li>
              Menggunakan cookiecutter untuk membuat struktur proyek Pyramid
            </li>
            <li>
              Mengonfigurasi koneksi database PostgreSQL dengan SQLAlchemy
            </li>
            <li>Membuat model data menggunakan SQLAlchemy ORM</li>
            <li>Mengimplementasikan migrasi database dengan Alembic</li>
            <li>Membuat view dan route untuk operasi CRUD sederhana</li>
            <li>Mengembangkan aplikasi web CRUD pengelolaan data Mahasiswa</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="pengenalan"
        title="Pengenalan Pyramid Framework"
        icon={<BookOpen className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Pyramid adalah framework Python yang bersifat minimalis namun sangat
            fleksibel untuk pengembangan web. Berbeda dengan Django yang
            menganut filosofi "batteries included", Pyramid lebih mengutamakan
            fleksibilitas dengan pendekatan "pay only for what you eat".
          </p>

          <p className="text-gray-700">Beberapa kelebihan Pyramid:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Fleksibilitas</strong>: Dapat digunakan untuk proyek kecil
              hingga besar
            </li>
            <li>
              <strong>Modular</strong>: Komponen dapat ditambahkan sesuai
              kebutuhan
            </li>
            <li>
              <strong>Konfigurasi Deklaratif</strong>: Route dan konfigurasi
              yang jelas dan terstruktur
            </li>
            <li>
              <strong>Database Agnostic</strong>: Dapat bekerja dengan berbagai
              database
            </li>
            <li>
              <strong>Skalabilitas</strong>: Mendukung pengembangan aplikasi
              yang dapat diskalakan
            </li>
            <li>
              <strong>Template Engine</strong>: Mendukung berbagai template
              engine seperti Jinja2, Mako, Chameleon
            </li>
          </ul>

          <InfoBox type="info" title="Pyramid vs Framework Lainnya">
            <p>
              Pyramid terkadang dianggap berada di tengah-tengah antara
              micro-framework seperti Flask dan full-stack framework seperti
              Django. Pyramid memberikan fleksibilitas seperti Flask tetapi juga
              menyediakan komponen-komponen yang lebih terstruktur. Anda dapat
              memulai dengan proyek sederhana dan mengembangkannya menjadi
              aplikasi yang kompleks tanpa perlu mengubah framework.
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
            Untuk mengikuti praktikum ini, Anda memerlukan:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Python 3.7+</strong>: Pastikan Python versi terbaru sudah
              terpasang
            </li>
            <li>
              <strong>PostgreSQL</strong>: Database untuk menyimpan data
            </li>
            <li>
              <strong>Text Editor/IDE</strong>: VSCode, PyCharm, atau editor
              lainnya
            </li>
            <li>
              <strong>Command Line/Terminal</strong>: Untuk menjalankan perintah
            </li>
            <li>
              <strong>Git</strong>: Untuk version control (opsional)
            </li>
          </ul>

          <InfoBox type="tip" title="Rekomendasi Setup PostgreSQL">
            <p>Untuk memudahkan pengembangan, Anda dapat menggunakan:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>PostgreSQL App (macOS): https://postgresapp.com/</li>
              <li>pgAdmin: Tool GUI untuk mengelola database PostgreSQL</li>
              <li>
                DBeaver: Database manager universal yang mendukung PostgreSQL
              </li>
              <li>Docker: Menjalankan PostgreSQL dalam container</li>
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
              title: 'Persiapan Lingkungan Pengembangan',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Sebelum mulai membuat aplikasi dengan Pyramid, kita perlu
                    menyiapkan lingkungan pengembangan.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Membuat Virtual Environment
                  </h4>
                  <p className="text-gray-700">
                    Virtual environment membantu mengisolasi dependensi proyek
                    dari instalasi Python global:
                  </p>

                  <CodeBlock
                    title="Membuat Virtual Environment"
                    code={`# Buat folder untuk proyek
mkdir pyramid_mahasiswa
cd pyramid_mahasiswa

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Untuk Windows
venv\\Scripts\\activate
# Untuk macOS/Linux
source venv/bin/activate`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Verifikasi Aktivasi Virtual Environment
                  </h4>
                  <p className="text-gray-700">
                    Pastikan virtual environment telah aktif. Terminal Anda
                    seharusnya menampilkan prefix
                    <code>(venv)</code> seperti ini:
                  </p>

                  <CodeBlock
                    title="Terminal dengan Virtual Environment Aktif"
                    code={`(venv) $ `}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Instalasi Pyramid dan Dependensi
                  </h4>
                  <p className="text-gray-700">
                    Setelah virtual environment aktif, install Pyramid dan
                    dependensi yang diperlukan:
                  </p>

                  <CodeBlock
                    title="Instalasi Pyramid dan Dependensi"
                    code={`# Upgrade pip
pip install --upgrade pip setuptools

# Install cookiecutter untuk template proyek
pip install cookiecutter

# Install pyramid dan dependensi dasar
pip install pyramid pyramid_debugtoolbar waitress pyramid_jinja2`}
                    language="bash"
                  />

                  <InfoBox
                    type="warning"
                    title="Troubleshooting Virtual Environment"
                  >
                    <p>
                      Jika Anda mengalami masalah dengan virtual environment:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Di Windows: Pastikan kebijakan eksekusi script
                        PowerShell mengizinkan aktivasi (Set-ExecutionPolicy
                        -ExecutionPolicy RemoteSigned -Scope CurrentUser)
                      </li>
                      <li>
                        Di macOS/Linux: Pastikan venv/bin/activate memiliki izin
                        eksekusi (chmod +x venv/bin/activate)
                      </li>
                      <li>
                        Jika perintah 'python' tidak ditemukan, coba gunakan
                        'python3' sebagai gantinya
                      </li>
                    </ul>
                  </InfoBox>

                  <InfoBox type="tip">
                    <p>
                      Pastikan untuk selalu mengaktifkan virtual environment
                      setiap kali bekerja dengan proyek. Prompt terminal
                      biasanya akan menampilkan nama virtual environment di awal
                      baris, misalnya <code>(venv) $</code>.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 2,
              title: 'Membuat Proyek Pyramid dengan Cookiecutter',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Cookiecutter adalah tool yang membantu membuat struktur
                    proyek berdasarkan template. Pyramid menyediakan template
                    resmi untuk memulai proyek dengan cepat.
                  </p>

                  <CodeBlock
                    title="Menggunakan Cookiecutter untuk Membuat Proyek Pyramid"
                    code={`# Pastikan virtual environment aktif
# Jalankan cookiecutter dengan template Pyramid
cookiecutter gh:Pylons/pyramid-cookiecutter-alchemy`}
                    language="bash"
                  />

                  <p className="text-gray-700">
                    Cookiecutter akan meminta beberapa input, isi seperti
                    berikut:
                  </p>

                  <CodeBlock
                    title="Input untuk Cookiecutter"
                    code={`project_name [Pyramid Scaffold]: pyramid_mahasiswa
repo_name [pyramid_mahasiswa]: 
Select template_language:
1 - jinja2
2 - chameleon
3 - mako
Choose from 1, 2, 3 [1]: 1`}
                    language="bash"
                  />

                  <p className="text-gray-700">
                    Setelah template dibuat, pindah ke direktori proyek dan
                    install dependensi:
                  </p>

                  <CodeBlock
                    title="Masuk ke Proyek dan Install Dependensi"
                    code={`# Masuk ke direktori proyek
cd pyramid_mahasiswa

# Install dependensi proyek (development mode)
pip install -e ".[testing]"`}
                    language="bash"
                  />

                  <InfoBox type="tip" title="Troubleshooting Cookiecutter">
                    <p>
                      Jika cookiecutter gagal, pastikan Anda memiliki versi
                      terbaru:
                    </p>
                    <CodeBlock
                      code={`pip install --upgrade cookiecutter`}
                      language="bash"
                    />
                    <p className="mt-2">
                      Proses instalasi dependensi mungkin membutuhkan beberapa
                      menit, bergantung pada koneksi internet Anda.
                    </p>
                  </InfoBox>

                  <p className="text-gray-700">
                    Struktur direktori yang dihasilkan akan terlihat seperti
                    ini:
                  </p>

                  <CodeBlock
                    title="Struktur Direktori Pyramid"
                    code={`pyramid_mahasiswa/
├── .coveragerc
├── .gitignore
├── CHANGES.txt
├── MANIFEST.in
├── README.txt
├── development.ini
├── production.ini
├── pytest.ini
├── setup.py
└── pyramid_mahasiswa/
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
    │   ├── pyramid.png
    │   ├── pyramid-16x16.png
    │   ├── pyramid-32x32.png
    │   ├── theme.css
    │   └── theme.min.css
    ├── templates/
    │   ├── 404.jinja2
    │   ├── layout.jinja2
    │   └── mytemplate.jinja2
    ├── tests/
    └── views/
        ├── __init__.py
        ├── default.py
        └── notfound.py`}
                    language="bash"
                  />

                  <InfoBox type="info" title="Tentang Struktur Pyramid">
                    <p>
                      Struktur direktori Pyramid mengikuti konvensi Python
                      package. Folder utama{' '}
                      <code>pyramid_mahasiswa/pyramid_mahasiswa</code> adalah
                      package Python yang berisi kode aplikasi. File{' '}
                      <code>development.ini</code> dan{' '}
                      <code>production.ini</code> berisi konfigurasi untuk mode
                      development dan production.
                    </p>
                  </InfoBox>

                  <InfoBox
                    type="warning"
                    title="Troubleshooting Instalasi Dependensi"
                  >
                    <p>Jika menemui masalah saat instalasi dependensi:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Pastikan Python development headers terinstal
                        (python-dev/python-devel)
                      </li>
                      <li>Di Windows, mungkin perlu Visual C++ Build Tools</li>
                      <li>
                        Jika ada package yang gagal diinstal, coba install satu
                        persatu
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 3,
              title: 'Konfigurasi Database PostgreSQL',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Secara default, template akan menggunakan SQLite. Kita akan
                    mengubahnya untuk menggunakan PostgreSQL.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Pastikan PostgreSQL Sudah Terpasang
                  </h4>
                  <p className="text-gray-700">
                    Sebelum melanjutkan, pastikan PostgreSQL sudah terinstal dan
                    berjalan di komputer Anda. Anda dapat memastikannya dengan
                    mencoba login ke PostgreSQL:
                  </p>

                  <CodeBlock
                    title="Verifikasi PostgreSQL"
                    code={`# Login ke PostgreSQL
psql -U postgres -c "SELECT version();"

# Jika berhasil, akan menampilkan versi PostgreSQL`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Membuat Database PostgreSQL
                  </h4>
                  <p className="text-gray-700">Buat database di PostgreSQL:</p>

                  <CodeBlock
                    title="Membuat Database PostgreSQL"
                    code={`# Login ke PostgreSQL
# Ganti username dengan user PostgreSQL Anda
psql -U postgres

# Di dalam shell PostgreSQL
CREATE DATABASE pyramid_mahasiswa;
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';
GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;
\\q`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Install Dependensi PostgreSQL
                  </h4>
                  <p className="text-gray-700">
                    Install psycopg2 untuk menghubungkan Python dengan
                    PostgreSQL:
                  </p>

                  <CodeBlock
                    title="Install psycopg2"
                    code={`pip install psycopg2-binary`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Update Konfigurasi Pyramid
                  </h4>
                  <p className="text-gray-700">
                    Ubah file <code>development.ini</code> untuk menggunakan
                    PostgreSQL:
                  </p>

                  <CodeBlock
                    title="development.ini (bagian sqlalchemy.url)"
                    code={`# Cari dan ganti baris sqlalchemy.url
sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite

# Menjadi
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa`}
                    language="ini"
                  />

                  <InfoBox type="tip" title="Troubleshooting Koneksi Database">
                    <p>Jika mengalami masalah koneksi database, periksa:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>PostgreSQL service/daemon sudah berjalan</li>
                      <li>Username dan password yang digunakan sudah benar</li>
                      <li>Database pyramid_mahasiswa sudah dibuat</li>
                      <li>Port 5432 tidak diblokir oleh firewall</li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 4,
              title: 'Membuat Model Mahasiswa',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Sekarang kita akan membuat model untuk data Mahasiswa
                    menggunakan SQLAlchemy ORM.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Buat File Model Mahasiswa
                  </h4>
                  <p className="text-gray-700">
                    Buat file baru{' '}
                    <code>pyramid_mahasiswa/models/mahasiswa.py</code>:
                  </p>

                  <CodeBlock
                    title="models/mahasiswa.py"
                    code={`from sqlalchemy import (
    Column,
    Integer,
    Text,
    Date,
)

from .meta import Base


class Mahasiswa(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'mahasiswa'
    id = Column(Integer, primary_key=True)
    nim = Column(Text, unique=True, nullable=False)
    nama = Column(Text, nullable=False)
    jurusan = Column(Text, nullable=False)
    tanggal_lahir = Column(Date)
    alamat = Column(Text)

    def to_dict(self):
        return {
            'id': self.id,
            'nim': self.nim,
            'nama': self.nama,
            'jurusan': self.jurusan,
            'tanggal_lahir': self.tanggal_lahir.isoformat() if self.tanggal_lahir else None,
            'alamat': self.alamat,
        }`}
                    language="python"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Update models/__init__.py
                  </h4>
                  <p className="text-gray-700">
                    Update file{' '}
                    <code>pyramid_mahasiswa/models/__init__.py</code> untuk
                    menambahkan model Mahasiswa:
                  </p>

                  <CodeBlock
                    title="models/__init__.py"
                    code={`from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# Import model classes untuk memastikan mereka ter-register oleh SQLAlchemy
from .mahasiswa import Mahasiswa  # Tambahkan import ini
from .mymodel import MyModel  # Ini sudah ada

# Run configure_mappers setelah mendefinisikan semua models
configure_mappers()


def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)


def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory


def get_tm_session(session_factory, transaction_manager):
    """
    Get a SqlAlchemy Session using zope.sqlalchemy.
    """
    dbsession = session_factory()
    zope.sqlalchemy.register(
        dbsession, transaction_manager=transaction_manager)
    return dbsession


def includeme(config):
    """
    Initialize the model for a Pyramid app.
    """
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid.tm.ThreadLocalManager'

    # Use sqlite for development, configured in development.ini
    engine = get_engine(settings)
    session_factory = get_session_factory(engine)
    config.registry['dbsession_factory'] = session_factory

    # Add dbsession to request
    config.add_request_method(
        # r.tm is the transaction manager used by pyramid_tm
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )`}
                    language="python"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Update Script Initialize DB
                  </h4>
                  <p className="text-gray-700">
                    Update{' '}
                    <code>pyramid_mahasiswa/scripts/initialize_db.py</code>{' '}
                    untuk menambahkan data awal:
                  </p>

                  <CodeBlock
                    title="scripts/initialize_db.py"
                    code={`import argparse
import sys
from datetime import date

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from .. import models


def setup_models(dbsession):
    """
    Add initial model objects.
    """
    # Tambahkan data awal untuk Mahasiswa
    mahasiswa1 = models.Mahasiswa(
        nim='12345',
        nama='Budi Santoso',
        jurusan='Teknik Informatika',
        tanggal_lahir=date(2000, 5, 15),
        alamat='Jl. Merdeka No. 123, Bandung'
    )
    mahasiswa2 = models.Mahasiswa(
        nim='54321',
        nama='Siti Aminah',
        jurusan='Sistem Informasi',
        tanggal_lahir=date(2001, 8, 22),
        alamat='Jl. Mawar No. 45, Jakarta'
    )
    dbsession.add(mahasiswa1)
    dbsession.add(mahasiswa2)


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'config_uri',
        help='Configuration file, e.g., development.ini',
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)

    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
    except OperationalError:
        print('''
Pyramid is having a problem using your SQL database.

Your database should be up and running before you
initialize your project. Make sure your database server
is running and your connection string in development.ini
is correctly configured.
''')


if __name__ == '__main__':
    main()`}
                    language="python"
                  />

                  <InfoBox type="info" title="SQLAlchemy ORM">
                    <p>
                      SQLAlchemy Object-Relational Mapping (ORM) memungkinkan
                      kita mendefinisikan dan bekerja dengan data seperti objek
                      Python biasa, tanpa perlu menulis query SQL secara
                      langsung. Setiap kelas model memetakan ke satu tabel di
                      database.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 5,
              title: 'Menjalankan Migrasi Database dengan Alembic',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Alembic adalah tool migrasi database untuk SQLAlchemy.
                    Dengan Alembic, kita dapat melacak perubahan skema database
                    dan menerapkannya dengan mudah.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Pastikan Alembic Terpasang
                  </h4>
                  <p className="text-gray-700">
                    Alembic sudah termasuk dalam dependensi proyek, tapi
                    pastikan sudah terpasang:
                  </p>

                  <CodeBlock
                    title="Verifikasi Alembic"
                    code={`# Verifikasi Alembic sudah terpasang
pip list | grep alembic

# Jika tidak ada, install
pip install alembic`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Membuat Migrasi Awal
                  </h4>
                  <p className="text-gray-700">
                    Template Pyramid sudah menyertakan konfigurasi Alembic. Kita
                    perlu membuat file migrasi:
                  </p>

                  <CodeBlock
                    title="Membuat File Migrasi"
                    code={`# Di root proyek pyramid_mahasiswa
# Pastikan virtual environment aktif

# Buat file migrasi
alembic -c development.ini revision --autogenerate -m "create mahasiswa table"`}
                    language="bash"
                  />

                  <p className="text-gray-700">
                    Perintah ini akan membuat file migrasi baru di folder{' '}
                    <code>pyramid_mahasiswa/alembic/versions/</code>. File ini
                    berisi kode untuk membuat tabel mahasiswa.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Menjalankan Migrasi
                  </h4>
                  <p className="text-gray-700">
                    Setelah file migrasi dibuat, kita dapat menjalankan migrasi
                    untuk membuat tabel di database:
                  </p>

                  <CodeBlock
                    title="Menjalankan Migrasi"
                    code={`# Jalankan migrasi
alembic -c development.ini upgrade head`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Inisialisasi Database dengan Data Awal
                  </h4>
                  <p className="text-gray-700">
                    Sekarang kita dapat menjalankan script initialize_db.py
                    untuk menambahkan data awal:
                  </p>

                  <CodeBlock
                    title="Inisialisasi Database"
                    code={`# Jalankan dari direktori root proyek
python -m pyramid_mahasiswa.scripts.initialize_db development.ini`}
                    language="bash"
                  />

                  <InfoBox type="warning" title="Troubleshooting Common Errors">
                    <p>
                      Jika Anda mengalami error saat menjalankan migrasi,
                      periksa hal-hal berikut:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Pastikan PostgreSQL berjalan dan dapat diakses</li>
                      <li>
                        Pastikan koneksi string di development.ini sudah benar
                      </li>
                      <li>
                        Jika error menyebutkan "module not found", pastikan Anda
                        berada di direktori root proyek
                      </li>
                      <li>
                        Jika error terjadi saat generate revision, pastikan
                        model Mahasiswa sudah benar dan ter-import
                      </li>
                    </ul>
                  </InfoBox>

                  <InfoBox type="tip" title="Tentang Alembic">
                    <p>
                      Alembic memungkinkan kita melakukan migrasi secara
                      bertahap. Kita bisa mundur ke versi sebelumnya dengan{' '}
                      <code>alembic -c development.ini downgrade -1</code> atau
                      maju ke versi tertentu dengan{' '}
                      <code>alembic -c development.ini upgrade +1</code>.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 6,
              title: 'Membuat Views untuk CRUD Mahasiswa',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Sekarang kita akan membuat views yang diperlukan untuk
                    operasi CRUD (Create, Read, Update, Delete) pada data
                    Mahasiswa.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Buat File Views Mahasiswa
                  </h4>
                  <p className="text-gray-700">
                    Buat file baru{' '}
                    <code>pyramid_mahasiswa/views/mahasiswa.py</code>:
                  </p>

                  <CodeBlock
                    title="views/mahasiswa.py"
                    code={`import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPNotFound,
    HTTPBadRequest,
)
from ..models import Mahasiswa


@view_config(route_name='mahasiswa_list', renderer='json')
def mahasiswa_list(request):
    """View untuk menampilkan daftar mahasiswa"""
    dbsession = request.dbsession
    mahasiswas = dbsession.query(Mahasiswa).all()
    return {'mahasiswas': [m.to_dict() for m in mahasiswas]}


@view_config(route_name='mahasiswa_detail', renderer='json')
def mahasiswa_detail(request):
    """View untuk melihat detail satu mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    
    return {'mahasiswa': mahasiswa.to_dict()}


@view_config(route_name='mahasiswa_add', request_method='POST', renderer='json')
def mahasiswa_add(request):
    """View untuk menambahkan mahasiswa baru"""
    try:
        # Ambil data dari request JSON
        json_data = request.json_body
        
        # Validasi data minimal
        required_fields = ['nim', 'nama', 'jurusan']
        for field in required_fields:
            if field not in json_data:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})
        
        # Parse tanggal lahir jika ada
        tanggal_lahir = None
        if 'tanggal_lahir' in json_data and json_data['tanggal_lahir']:
            try:
                tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir']).date()
            except ValueError:
                return HTTPBadRequest(json_body={'error': 'Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD'})
        
        # Buat objek Mahasiswa baru
        mahasiswa = Mahasiswa(
            nim=json_data['nim'],
            nama=json_data['nama'],
            jurusan=json_data['jurusan'],
            tanggal_lahir=tanggal_lahir,
            alamat=json_data.get('alamat')
        )
        
        # Simpan ke database
        dbsession = request.dbsession
        dbsession.add(mahasiswa)
        dbsession.flush()  # Untuk mendapatkan ID yang baru dibuat
        
        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}
            
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='mahasiswa_update', request_method='PUT', renderer='json')
def mahasiswa_update(request):
    """View untuk mengupdate data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    
    # Cari mahasiswa yang akan diupdate
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    
    try:
        # Ambil data dari request JSON
        json_data = request.json_body
        
        # Update atribut yang ada di request
        if 'nim' in json_data:
            mahasiswa.nim = json_data['nim']
        if 'nama' in json_data:
            mahasiswa.nama = json_data['nama']
        if 'jurusan' in json_data:
            mahasiswa.jurusan = json_data['jurusan']
        if 'alamat' in json_data:
            mahasiswa.alamat = json_data['alamat']
            
        # Parse tanggal lahir jika ada
        if 'tanggal_lahir' in json_data:
            if json_data['tanggal_lahir']:
                try:
                    mahasiswa.tanggal_lahir = datetime.datetime.fromisoformat(json_data['tanggal_lahir']).date()
                except ValueError:
                    return HTTPBadRequest(json_body={'error': 'Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD'})
            else:
                mahasiswa.tanggal_lahir = None
                
        return {'success': True, 'mahasiswa': mahasiswa.to_dict()}
        
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='mahasiswa_delete', request_method='DELETE', renderer='json')
def mahasiswa_delete(request):
    """View untuk menghapus data mahasiswa"""
    dbsession = request.dbsession
    mahasiswa_id = request.matchdict['id']
    
    # Cari mahasiswa yang akan dihapus
    mahasiswa = dbsession.query(Mahasiswa).filter_by(id=mahasiswa_id).first()
    if mahasiswa is None:
        return HTTPNotFound(json_body={'error': 'Mahasiswa tidak ditemukan'})
    
    # Hapus dari database
    dbsession.delete(mahasiswa)
    
    return {'success': True, 'message': f'Mahasiswa dengan id {mahasiswa_id} berhasil dihapus'}`}
                    language="python"
                  />

                  <InfoBox type="info" title="Renderer JSON">
                    <p>
                      Kita menggunakan <code>renderer='json'</code> pada
                      decorator <code>@view_config</code> untuk mengonversi
                      return value dari function view menjadi JSON response
                      secara otomatis. Ini berguna untuk membuat API web yang
                      mengembalikan data dalam format JSON.
                    </p>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 7,
              title: 'Membuat Routes dan Update routes.py',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Sekarang kita perlu mendefinisikan routes untuk endpoints
                    CRUD Mahasiswa di <code>pyramid_mahasiswa/routes.py</code>.
                  </p>

                  <CodeBlock
                    title="routes.py"
                    code={`def includeme(config):
                """Add routes to the config."""
                config.add_static_view('static', 'static', cache_max_age=3600)
                
                # Default route
                config.add_route('home', '/')
                
                # Mahasiswa routes dengan request_method untuk membedakan endpoint dengan URL yang sama
                config.add_route('mahasiswa_list', '/api/mahasiswa', request_method='GET')
                config.add_route('mahasiswa_detail', '/api/mahasiswa/{id}', request_method='GET')
                config.add_route('mahasiswa_add', '/api/mahasiswa', request_method='POST')
                config.add_route('mahasiswa_update', '/api/mahasiswa/{id}', request_method='PUT')
                config.add_route('mahasiswa_delete', '/api/mahasiswa/{id}', request_method='DELETE')`}
                    language="python"
                  />

                  <InfoBox type="info" title="Definisi Routes">
                    <p>
                      Route menghubungkan URL dengan view function. Pyramid akan
                      mengarahkan request ke view function yang sesuai
                      berdasarkan kombinasi URL path dan HTTP method.
                    </p>
                  </InfoBox>

                  <InfoBox type="warning" title="Request Method Penting!">
                    <p>
                      Perhatikan penambahan parameter{' '}
                      <code>request_method</code> pada setiap route. Ini sangat
                      penting untuk membedakan endpoint yang memiliki URL sama
                      tetapi method berbeda. Tanpa parameter ini, Pyramid
                      mungkin akan selalu mengarahkan request ke satu view
                      function saja (biasanya yang pertama didefinisikan), yang
                      menyebabkan endpoint POST/PUT/DELETE tidak berfungsi.
                    </p>
                  </InfoBox>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Mengapa perlu parameter request_method?
                  </h4>
                  <p className="text-gray-700">
                    Saat kita memiliki beberapa endpoints dengan URL yang sama
                    (misalnya <code>/api/mahasiswa</code> untuk GET dan POST),
                    Pyramid perlu cara untuk membedakan ke mana request harus
                    diarahkan. Parameter <code>request_method</code>
                    memastikan request diarahkan ke view function yang tepat
                    berdasarkan HTTP method yang digunakan.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <h5 className="font-medium">Contoh:</h5>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        GET <code>/api/mahasiswa</code> →{' '}
                        <code>mahasiswa_list</code> view
                      </li>
                      <li>
                        POST <code>/api/mahasiswa</code> →{' '}
                        <code>mahasiswa_add</code> view
                      </li>
                      <li>
                        GET <code>/api/mahasiswa/1</code> →{' '}
                        <code>mahasiswa_detail</code> view
                      </li>
                      <li>
                        PUT <code>/api/mahasiswa/1</code> →{' '}
                        <code>mahasiswa_update</code> view
                      </li>
                      <li>
                        DELETE <code>/api/mahasiswa/1</code> →{' '}
                        <code>mahasiswa_delete</code> view
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              id: 8,
              title: 'Menjalankan dan Menguji API',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Setelah semua komponen diimplementasikan, kita siap untuk
                    menjalankan dan menguji API.
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Menjalankan Aplikasi
                  </h4>
                  <p className="text-gray-700">
                    Dari root proyek, jalankan perintah:
                  </p>

                  <CodeBlock
                    title="Menjalankan Server Development"
                    code={`# Pastikan virtual environment aktif
# Di root proyek
pserve development.ini --reload`}
                    language="bash"
                  />

                  <p className="text-gray-700">
                    Flag <code>--reload</code> akan menyebabkan server restart
                    secara otomatis saat ada perubahan kode. Server akan
                    berjalan pada port 6543 secara default
                    (http://localhost:6543).
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Pengujian API dengan CURL (Linux/macOS)
                  </h4>
                  <p className="text-gray-700">
                    Kita dapat menggunakan CURL untuk menguji API. Berikut
                    beberapa contoh menggunakan CURL:
                  </p>

                  <CodeBlock
                    title="Mendapatkan Daftar Mahasiswa"
                    code={`curl -X GET http://localhost:6543/api/mahasiswa`}
                    language="bash"
                  />

                  <CodeBlock
                    title="Mendapatkan Detail Mahasiswa"
                    code={`curl -X GET http://localhost:6543/api/mahasiswa/1`}
                    language="bash"
                  />

                  <CodeBlock
                    title="Menambahkan Mahasiswa Baru"
                    code={`curl -X POST http://localhost:6543/api/mahasiswa \\
-H "Content-Type: application/json" \\
-d '{
"nim": "67890",
"nama": "Ahmad Fadli",
"jurusan": "Teknik Elektro",
"tanggal_lahir": "2001-11-05",
"alamat": "Jl. Mawar No. 10, Surabaya"
}'`}
                    language="bash"
                  />

                  <CodeBlock
                    title="Mengupdate Data Mahasiswa"
                    code={`curl -X PUT http://localhost:6543/api/mahasiswa/1 \\
-H "Content-Type: application/json" \\
-d '{
"jurusan": "Informatika",
"alamat": "Jl. Melati No. 5, Bandung"
}'`}
                    language="bash"
                  />

                  <CodeBlock
                    title="Menghapus Data Mahasiswa"
                    code={`curl -X DELETE http://localhost:6543/api/mahasiswa/3`}
                    language="bash"
                  />

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Pengujian API dengan CURL (Windows)
                  </h4>
                  <p className="text-gray-700">
                    Untuk pengguna Windows, gunakan syntax curl berikut:
                  </p>

                  <CodeBlock
                    title="Pengujian API dengan curl di Windows"
                    code={`curl -X GET http://localhost:6543/api/mahasiswa

curl -X POST http://localhost:6543/api/mahasiswa -H "Content-Type: application/json" -d "{\\"nim\\": \\"67890\\", \\"nama\\": \\"Ahmad Fadli\\", \\"jurusan\\": \\"Teknik Elektro\\", \\"tanggal_lahir\\": \\"2001-11-05\\", \\"alamat\\": \\"Jl. Mawar No. 10, Surabaya\\"}"
                            
curl -X PUT http://localhost:6543/api/mahasiswa/1 -H "Content-Type: application/json" -d "{\\"jurusan\\": \\"Informatika\\", \\"alamat\\": \\"Jl. Melati No. 5, Bandung\\"}"

curl -X DELETE http://localhost:6543/api/mahasiswa/3`}
                    language="bash"
                  />

                  <InfoBox type="tip" title="Alternatif Pengujian API">
                    <p>
                      Untuk pengujian API yang lebih mudah, Anda dapat
                      menggunakan:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Browser</strong>: Untuk request GET sederhana
                        (http://localhost:6543/api/mahasiswa)
                      </li>
                      <li>
                        <strong>Postman</strong>: Aplikasi desktop dengan
                        antarmuka grafis untuk API testing
                      </li>
                      <li>
                        <strong>Insomnia</strong>: Alternatif Postman yang lebih
                        ringan
                      </li>
                      <li>
                        <strong>VS Code REST Client Extension</strong>:
                        Extension di VS Code untuk menguji API
                      </li>
                    </ul>
                  </InfoBox>

                  <InfoBox type="warning" title="Troubleshooting Koneksi API">
                    <p>Jika mengalami masalah saat mengakses API:</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Pastikan server Pyramid sedang berjalan</li>
                      <li>Periksa port yang digunakan (default: 6543)</li>
                      <li>
                        Periksa log error di terminal tempat server berjalan
                      </li>
                      <li>
                        Gunakan <code>http://127.0.0.1:6543</code> jika{' '}
                        <code>localhost</code> tidak berfungsi
                      </li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
            {
              id: 9,
              title: 'Ringkasan Aplikasi',
              content: (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Selamat! Anda telah berhasil membuat API RESTful sederhana
                    menggunakan Pyramid Framework. Mari kita ringkas apa yang
                    telah kita pelajari dan implementasikan:
                  </p>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Komponen Utama yang Telah Diimplementasikan
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <strong>Model</strong>: Menggunakan SQLAlchemy ORM untuk
                      mendefinisikan struktur data Mahasiswa
                    </li>
                    <li>
                      <strong>Views</strong>: Implementasi logika bisnis untuk
                      API RESTful
                    </li>
                    <li>
                      <strong>Routes</strong>: Menghubungkan URL dengan fungsi
                      view
                    </li>
                    <li>
                      <strong>Database</strong>: Konfigurasi PostgreSQL dan
                      migrasi dengan Alembic
                    </li>
                    <li>
                      <strong>REST API</strong>: Endpoint untuk operasi CRUD
                      pada data Mahasiswa
                    </li>
                  </ul>

                  <h4 className="font-medium text-gray-800 mt-4 mb-2">
                    Pengujian Aplikasi
                  </h4>
                  <p className="text-gray-700">
                    Untuk menjalankan aplikasi, gunakan perintah:
                  </p>

                  <CodeBlock
                    title="Menjalankan Aplikasi"
                    code={`# Aktifkan virtual environment terlebih dahulu
# Windows:
venv\\Scripts\\activate
# macOS/Linux:
source venv/bin/activate

# Jalankan server
pserve development.ini --reload`}
                    language="bash"
                  />

                  <p className="text-gray-700">
                    Akses API melalui endpoint yang telah dibuat:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      GET <code>http://localhost:6543/api/mahasiswa</code> -
                      Mendapatkan semua data mahasiswa
                    </li>
                    <li>
                      GET{' '}
                      <code>http://localhost:6543/api/mahasiswa/{'{id}'}</code>{' '}
                      - Mendapatkan detail mahasiswa
                    </li>
                    <li>
                      POST <code>http://localhost:6543/api/mahasiswa</code> -
                      Menambahkan mahasiswa baru
                    </li>
                    <li>
                      PUT{' '}
                      <code>http://localhost:6543/api/mahasiswa/{'{id}'}</code>{' '}
                      - Mengupdate data mahasiswa
                    </li>
                    <li>
                      DELETE{' '}
                      <code>http://localhost:6543/api/mahasiswa/{'{id}'}</code>{' '}
                      - Menghapus data mahasiswa
                    </li>
                  </ul>

                  <InfoBox type="tip" title="Pengembangan Lebih Lanjut">
                    <p>
                      Untuk pengembangan lebih lanjut, Anda dapat menambahkan
                      fitur-fitur seperti:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Autentikasi dan otorisasi dengan JWT</li>
                      <li>Validasi input yang lebih lengkap</li>
                      <li>Pagination untuk data yang banyak</li>
                      <li>Fitur pencarian dan filter</li>
                      <li>Integrasi dengan layanan pihak ketiga</li>
                      <li>API versioning</li>
                      <li>Unit testing dan integration testing</li>
                    </ul>
                  </InfoBox>
                </div>
              ),
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper
        id="tugas-praktikum"
        title="Tugas Praktikum"
        icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4 border rounded-lg p-6 bg-white shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">
            Tugas: Aplikasi Manajemen Matakuliah dengan Pyramid
          </h3>

          <div className="space-y-4">
            <p className="text-gray-700">
              Buatlah aplikasi API sederhana untuk manajemen matakuliah
              berdasarkan apa yang telah Anda pelajari dalam praktikum ini.
            </p>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">Persyaratan:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Buat satu model <code>Matakuliah</code> dengan atribut: id,
                  kode_mk, nama_mk, sks, dan semester
                </li>
                <li>
                  Implementasikan API endpoint untuk operasi dasar (GET, POST,
                  PUT, DELETE)
                </li>
                <li>
                  Pastikan API berfungsi dan dapat diuji dengan curl atau
                  Postman
                </li>
              </ul>
            </div>

            <InfoBox type="tip" title="Langkah Pengerjaan">
              <ol className="list-decimal pl-6 mt-2">
                <li>Gunakan kode dari praktikum sebagai dasar</li>
                <li>
                  Ubah model dan view untuk menyesuaikan dengan matakuliah
                </li>
                <li>
                  Ingat untuk menambahkan <code>request_method</code> pada route
                </li>
                <li>Jalankan migrasi database sebelum menguji API</li>
              </ol>
            </InfoBox>

            <div className="mt-6">
              <h4 className="font-medium text-gray-800 mb-2">
                Kriteria Penilaian:
              </h4>
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Aspek
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Bobot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Model Data</td>
                    <td className="px-4 py-2">30%</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-2">API Endpoints</td>
                    <td className="px-4 py-2">40%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2">Dokumentasi & Kerapian Kode</td>
                    <td className="px-4 py-2">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <SubmissionLink
          title="Submit Tugas Praktikum Pyramid Framework"
          href="https://forms.gle/skfmyJXyhcVtmata7"
        />
      </SectionWrapper>

      <SectionWrapper
        id="hasil-praktikum"
        title="Hasil Praktikum"
        icon={<Award className="w-6 h-6 text-blue-500" />}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Setelah menyelesaikan praktikum ini, Anda seharusnya telah:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Memahami konsep dasar Pyramid Framework dalam pengembangan web
            </li>
            <li>
              Mampu membuat struktur proyek Pyramid menggunakan cookiecutter
            </li>
            <li>Memahami cara mengonfigurasi koneksi database PostgreSQL</li>
            <li>
              Menguasai penggunaan SQLAlchemy ORM untuk mendefinisikan model
              data
            </li>
            <li>Mampu melakukan migrasi database dengan Alembic</li>
            <li>Bisa mengimplementasikan view function untuk operasi CRUD</li>
            <li>Memahami system routing di Pyramid</li>
            <li>
              Mampu mengembangkan RESTful API dengan Pyramid dari awal hingga
              akhir
            </li>
          </ul>

          <InfoBox title="Aplikasi yang Dibangun" type="tip">
            <p className="mt-2">
              Anda telah berhasil membangun sebuah{' '}
              <strong>REST API Manajemen Mahasiswa</strong> dengan fitur:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>API RESTful untuk operasi CRUD data mahasiswa</li>
              <li>Validasi input dasar</li>
              <li>Penyimpanan data di database PostgreSQL</li>
              <li>Migrasi database menggunakan Alembic</li>
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
              <li>
                Buat repository dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_web_itera_[NIM]
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pemrograman_web_itera_119140001
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Struktur Folder:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Buat folder per pertemuan dengan format:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  [NAMA]_[NIM]_pertemuan[X]
                </code>
              </li>
              <li>
                Contoh:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  johndoe_119140001_pertemuan6
                </code>
              </li>
              <li>
                Pastikan README.md berisi instruksi instalasi dan cara
                menjalankan aplikasi
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Deadline Pengumpulan:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Deadline:{' '}
                <span className="font-medium">15 Mei 2025, 23:59 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </PraktikumLayout>
  );
}
