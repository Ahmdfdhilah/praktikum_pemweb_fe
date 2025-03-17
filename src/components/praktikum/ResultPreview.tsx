import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResultPreviewProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  code?: string;
  livePreview?: React.ReactNode;
}

export const ResultPreview: React.FC<ResultPreviewProps> = ({
  title = "Hasil yang Diharapkan",
  description,
  imageSrc,
  imageAlt = "Preview hasil",
  code,
  livePreview
}) => {
  return (
    <Card className="my-6 w-full max-w-full">
      <CardContent className="pt-6 px-2 sm:px-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        
        <Tabs defaultValue={imageSrc ? "image" : livePreview ? "live" : "code"} className="w-full">
          <div className="overflow-x-auto">
            <TabsList>
              {imageSrc && <TabsTrigger value="image">Screenshot</TabsTrigger>}
              {livePreview && <TabsTrigger value="live">Live Preview</TabsTrigger>}
              {code && <TabsTrigger value="code">Code</TabsTrigger>}
            </TabsList>
          </div>
          
          {imageSrc && (
            <TabsContent value="image" className="mt-4 w-full">
              <div className="overflow-hidden rounded-lg border border-gray-200 w-full">
                <img 
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto"
                />
              </div>
            </TabsContent>
          )}
          
          {livePreview && (
            <TabsContent value="live" className="mt-4 w-full">
              <div className="w-full overflow-x-auto border border-gray-200 rounded-lg">
                {livePreview}
              </div>
            </TabsContent>
          )}
          
          {code && (
            <TabsContent value="code" className="mt-4 w-full">
              <div className="w-full overflow-x-auto">
                <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg">
                  <code className="font-mono text-sm whitespace-pre-wrap break-words">{code}</code>
                </pre>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};