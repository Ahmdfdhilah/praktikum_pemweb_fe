import React from 'react';
import { Navbar } from '../Navbar';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface PraktikumLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const PraktikumLayout: React.FC<PraktikumLayoutProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {
        title ? (
          <Header
            title={title}
            subtitle={subtitle}
          />
        )  : null
      }

      <main className="flex-grow bg-white px-3 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};