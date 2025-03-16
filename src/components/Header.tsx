import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle,
  icon = <BookOpen className="w-12 h-12 text-indigo-500" />
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between  lg:px-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
            {subtitle && (
              <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
            )}
          </div>
          <div className="justify-center hidden lg:flex">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};