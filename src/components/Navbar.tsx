import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: 'Beranda', href: '/' },
    {
        label: 'Praktikum',
        href: '#',
        children: [
            { label: 'JavaScript Dasar', href: '/pemrograman-web/javascript-dasar' },
            { label: 'DOM Manipulation', href: '/praktikum/dom-manipulation' },
            { label: 'Asynchronous JS', href: '/praktikum/async-js' },
        ]
    },
    { label: 'Tentang', href: '/about' },
    { label: 'Kontak', href: '/contact' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubmenu = (label: string) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <nav className="bg-white/80 backdrop-blur-sm shadow-md py-4 px-4 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <a href="/" className="flex">
                            <img src={logo} alt="Logo Praktikum IF" className="h-12 w-auto" />
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative">
                                {item.children ? (
                                    <div>
                                        <button
                                            className="flex items-center text-gray-700 hover:text-blue-600"
                                            onClick={() => toggleSubmenu(item.label)}
                                        >
                                            {item.label}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {openSubmenu === item.label && (
                                            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                                {item.children.map((child) => (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600"
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex">
                        <Button variant="default">Masuk</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-500 hover:text-blue-600 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    {item.children ? (
                                        <div>
                                            <button
                                                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                                                onClick={() => toggleSubmenu(item.label)}
                                            >
                                                {item.label}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>
                                            {openSubmenu === item.label && (
                                                <div className="ml-4 mt-2 flex flex-col space-y-2">
                                                    {item.children.map((child) => (
                                                        <a
                                                            key={child.label}
                                                            href={child.href}
                                                            className="text-sm text-gray-600 hover:text-blue-600"
                                                        >
                                                            {child.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="text-gray-700 hover:text-blue-600 font-medium"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4">
                                <Button variant="default" className="w-full">Masuk</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};