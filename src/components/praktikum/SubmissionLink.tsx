import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubmissionLinkProps {
  href: string;
  title?: string;
}

export const SubmissionLink: React.FC<SubmissionLinkProps> = ({ 
  href, 
  title = "Submit Tugas"
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg border border-gray-300 my-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">Sudah selesai mengerjakan?</h3>
          <p className="text-gray-600">Klik tombol di samping untuk mengirimkan tugas praktikum Kalian.</p>
        </div>
        <Button 
          variant="default" 
          size="lg" 
          onClick={() => window.open(href, '_blank')}
          className="flex items-center"
        >
          {title}
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
