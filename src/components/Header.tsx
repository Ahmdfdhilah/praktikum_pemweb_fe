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
  icon = <BookOpen className="w-16 h-16 text-indigo-500 mb-6" />
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          {icon}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};