import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex">
              <a href="/" className="flex">
                <img src={logo} alt="Logo Praktikum IF" className="h-12 w-auto" />
              </a>
            </div>
            <p className="text-gray-300 mt-4">
              Platform pembelajaran interaktif untuk mengembangkan keterampilan pemrograman Kalian melalui praktikum yang komprehensif.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">Beranda</a>
              </li>
              <li>
                <a href="/praktikum" className="text-gray-300 hover:text-white">Praktikum</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">Tentang</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">Kontak</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <p className="text-gray-300 mb-4">
              Punya pertanyaan? Hubungi kami di contact@Praktikum IF.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Praktikum IF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};