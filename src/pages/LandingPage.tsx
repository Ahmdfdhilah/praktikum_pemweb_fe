import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    BookOpen,
    Users,
    Monitor,
    Award,
    ArrowRight,
    CheckCircle,
    Calendar,
    Clock,
    FileCode,
    BrainCircuit
} from "lucide-react";
import { PraktikumLayout } from '@/components/layout/PraktikumLayout';
import { SectionWrapper } from '@/components/praktikum/SectionWrapper';
import home from '@/assets/home.png';

const LandingPage: React.FC = () => {
    return (
        <PraktikumLayout>
            <SectionWrapper isBordered={false}>
                <div className="mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-screen container lg:pb-28">
                    <div className="md:w-1/2 md:pr-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Belajar Programming <span className="text-blue-600">Lebih Mudah</span> dan Terstruktur
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Platform interaktif untuk mahasiswa Teknik Informatika ITERA. Kembangkan skill programming dengan praktikum yang terstruktur dan asistensi online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Mulai Belajar <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Lihat Demo
                            </Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
                            <div className="absolute -z-10 -bottom-8 -right-8 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
                            <img
                                src={home}
                                alt="Platform Praktikum"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Features */}
            <SectionWrapper isBordered={false}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Platform praktikum interaktif dengan berbagai fitur untuk memudahkan proses belajar programming
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modul Interaktif</h3>
                                <p className="text-gray-600">
                                    Modul praktikum yang interaktif dengan panduan langkah demi langkah dan contoh kode.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                                    <Monitor className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">IDE Terintegrasi</h3>
                                <p className="text-gray-600">
                                    Coding langsung di browser dengan IDE terintegrasi yang mendukung berbagai bahasa pemrograman.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-green-50 p-3 rounded-lg inline-block mb-4">
                                    <FileCode className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Grading</h3>
                                <p className="text-gray-600">
                                    Sistem penilaian otomatis yang memberikan feedback instan untuk setiap tugas yang dikerjakan.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-purple-50 p-3 rounded-lg inline-block mb-4">
                                    <Users className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Asistensi Online</h3>
                                <p className="text-gray-600">
                                    Bimbingan dari asisten praktikum secara online melalui forum diskusi dan chat.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-orange-50 p-3 rounded-lg inline-block mb-4">
                                    <Calendar className="h-6 w-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jadwal Terintegrasi</h3>
                                <p className="text-gray-600">
                                    Pengingat jadwal praktikum dan deadline tugas yang tersinkronisasi dengan kalender pribadi.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="bg-red-50 p-3 rounded-lg inline-block mb-4">
                                    <BrainCircuit className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bimbingan AI</h3>
                                <p className="text-gray-600">
                                    Dukungan dari AI untuk membantu menyelesaikan masalah dan menjawab pertanyaan.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>

            {/* Courses Section */}
            <SectionWrapper isBordered={false}>
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mata Kuliah Praktikum</h2>
                            <p className="text-gray-600 max-w-2xl">
                                Jelajahi berbagai mata kuliah praktikum yang tersedia untuk program studi Informatika, Sistem Informasi, dan jurusan terkait.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <Button variant="outline" className="flex items-center">
                                Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Pemrograman Web",
                                level: "Semester 4",
                                students: 120,
                                image: "/api/placeholder/400/240",
                                color: "bg-blue-600"
                            },
                            {
                                title: "Struktur Data",
                                level: "Semester 2",
                                students: 175,
                                image: "/api/placeholder/400/240",
                                color: "bg-green-600"
                            },
                            {
                                title: "Basis Data",
                                level: "Semester 3",
                                students: 150,
                                image: "/api/placeholder/400/240",
                                color: "bg-purple-600"
                            }
                        ].map((course, index) => (
                            <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 ${course.color} opacity-80`}></div>
                                    <img
                                        src='https://placehold.co/600x400'
                                        alt={course.title}
                                        className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-2xl font-bold text-white text-center px-4">{course.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-800">
                                            {course.level}
                                        </span>
                                        <span className="text-sm text-gray-600 flex items-center">
                                            <Users className="h-4 w-4 mr-1" />
                                            {course.students} Mahasiswa
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                                            <Clock className="h-4 w-4" />
                                            <span>12 Pertemuan</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                                            Lihat Detail
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Testimonials */}
            <SectionWrapper isBordered={false}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Mahasiswa yang telah menggunakan platform praktikum kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dian Pratama",
                                role: "Mahasiswa Informatika",
                                image: "/api/placeholder/100/100",
                                text: "Platform ini sangat membantu saya memahami konsep pemrograman web. Modul interaktif dan asistensi online membuat praktikum jadi lebih efektif."
                            },
                            {
                                name: "Raka Aditya",
                                role: "Mahasiswa Sistem Informasi",
                                image: "/api/placeholder/100/100",
                                text: "Saya suka fitur IDE terintegrasi yang memungkinkan saya coding langsung di browser. Auto-grading juga memberikan feedback yang cepat untuk tugas yang saya kerjakan."
                            },
                            {
                                name: "Putri Handayani",
                                role: "Mahasiswa Teknik Komputer",
                                image: "/api/placeholder/100/100",
                                text: "Bimbingan AI sangat membantu saat saya stuck dengan kode. Platform ini membuat saya lebih mandiri dalam menyelesaikan praktikum."
                            }
                        ].map((testimonial, index) => (
                            <Card key={index} className="border border-gray-100">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">
                                            <img
                                                src='https://placehold.co/600x400'
                                                alt={testimonial.name}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Statistics */}
            <SectionWrapper isBordered={false}>
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                number: "2,500+",
                                label: "Mahasiswa Aktif",
                                icon: <Users className="h-6 w-6 text-blue-600" />
                            },
                            {
                                number: "15+",
                                label: "Mata Kuliah",
                                icon: <BookOpen className="h-6 w-6 text-blue-600" />
                            },
                            {
                                number: "50+",
                                label: "Asisten Praktikum",
                                icon: <Award className="h-6 w-6 text-blue-600" />
                            },
                            {
                                number: "24/7",
                                label: "Dukungan Online",
                                icon: <CheckCircle className="h-6 w-6 text-blue-600" />
                            }
                        ].map((stat, index) => (
                            <Card key={index} className="text-center border border-gray-100">
                                <CardContent className="pt-6">
                                    <div className="flex justify-center mb-4">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper isBordered={false}>
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Jawaban untuk beberapa pertanyaan yang sering diajukan
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "Bagaimana cara mendaftar di PraktikumITERA?",
                                answer: "Untuk mendaftar, Anda dapat mengklik tombol 'Daftar' di halaman beranda dan mengisi formulir pendaftaran dengan data mahasiswa ITERA Anda. Setelah verifikasi email, Anda dapat langsung mengakses platform."
                            },
                            {
                                question: "Apakah semua mata kuliah praktikum tersedia di platform ini?",
                                answer: "Saat ini kami menyediakan platform untuk mata kuliah praktikum di program studi Informatika, Sistem Informasi, dan beberapa jurusan terkait. Kami terus menambahkan mata kuliah baru setiap semesternya."
                            },
                            {
                                question: "Bagaimana sistem penilaian praktikum bekerja?",
                                answer: "Sistem penilaian menggunakan auto-grading untuk tugas pemrograman. Kode yang Anda kerjakan akan dievaluasi secara otomatis berdasarkan test case yang telah ditentukan. Asisten praktikum juga dapat memberikan feedback tambahan untuk perbaikan."
                            },
                            {
                                question: "Apakah saya bisa mengakses platform dari perangkat mobile?",
                                answer: "Ya, PraktikumITERA didesain dengan responsif sehingga dapat diakses dari berbagai perangkat termasuk smartphone dan tablet. Namun, untuk pengalaman coding yang optimal, kami menyarankan menggunakan laptop atau komputer."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="border border-gray-100">
                                <CardContent className="pt-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

        </PraktikumLayout>
    );
};

export default LandingPage;