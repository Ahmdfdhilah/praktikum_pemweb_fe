import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

const useCopyToClipboard = (text: string) => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return { copied, copy };
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript',
  title
}) => {
  const { copied, copy } = useCopyToClipboard(code);

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 my-4">
      {title && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono flex justify-between items-center">
          <span>{title}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copy}
            className="text-gray-300 hover:text-white"
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
        </div>
      )}
      <pre className={`p-4 overflow-x-auto text-gray-300 ${!title ? 'pt-10 relative' : ''}`}>
        {!title && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copy}
            className="absolute top-2 right-2 text-gray-300 hover:text-white"
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
        )}
        <code className={`font-mono text-sm language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};