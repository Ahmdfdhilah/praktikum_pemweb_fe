import React from 'react';

interface SectionWrapperProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, icon, children }) => {
    return (
        <section id={id} className="py-4">
            <div className="container mx-auto">
                <div className="flex items-center mb-2">
                    <div className="mr-4">
                        {icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                </div>
                <div className="pl-2 border-l-4 border-indigo-400">
                    <div className="px-2">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};