import React from 'react';
import { Info, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

type InfoBoxType = 'info' | 'warning' | 'success' | 'tip';

interface InfoBoxProps {
  type: InfoBoxType;
  title?: string;
  children: React.ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ type, title, children }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'info':
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-500',
          textColor: 'text-blue-800',
          icon: <Info className="w-5 h-5 text-blue-500" />
        };
      case 'warning':
        return {
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-500',
          textColor: 'text-amber-800',
          icon: <AlertTriangle className="w-5 h-5 text-amber-500" />
        };
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-500',
          textColor: 'text-green-800',
          icon: <CheckCircle className="w-5 h-5 text-green-500" />
        };
      case 'tip':
        return {
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-500',
          textColor: 'text-purple-800',
          icon: <HelpCircle className="w-5 h-5 text-purple-500" />
        };
    }
  };

  const { bgColor, textColor, icon } = getTypeStyles();

  return (
    <div className={`${bgColor} p-4 rounded-r-md my-4`}>
      <div className="flex items-center">
        {icon}
        {title && <h4 className={`ml-2 font-semibold ${textColor}`}>{title}</h4>}
      </div>
      <div className={`mt-2 ${textColor}`}>
        {children}
      </div>
    </div>
  );
};