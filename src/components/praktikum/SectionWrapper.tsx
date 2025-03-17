import React from 'react';

interface SectionWrapperProps {
    id?: string;
    title?: string;
    isBordered?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, isBordered=true, icon, children }) => {
    return (
        <section id={id} className="py-8">
            <div className="container mx-auto">
                <div className="flex items-center mb-2">
                    <div className="mr-4">
                        {icon ? icon : null}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{title ? title : null}</h2>
                </div>
                <div className={`pl-2 ${isBordered == true ? `border-l-4 border-blue-400` : ''}`}>
                    <div className="px-2">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};