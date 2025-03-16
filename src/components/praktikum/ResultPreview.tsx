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
    <Card className="my-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        
        <Tabs defaultValue={imageSrc ? "image" : livePreview ? "live" : "code"}>
          <TabsList>
            {imageSrc && <TabsTrigger value="image">Screenshot</TabsTrigger>}
            {livePreview && <TabsTrigger value="live">Live Preview</TabsTrigger>}
            {code && <TabsTrigger value="code">Code</TabsTrigger>}
          </TabsList>
          
          {imageSrc && (
            <TabsContent value="image" className="mt-4">
              <div className="overflow-hidden rounded-lg border border-gray-200">
                {/* Replace with actual Next.js Image component in production */}
                <img 
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto"
                />
              </div>
            </TabsContent>
          )}
          
          {livePreview && (
            <TabsContent value="live" className="mt-4">
              <div className="border border-gray-200 rounded-lg p-4">
                {livePreview}
              </div>
            </TabsContent>
          )}
          
          {code && (
            <TabsContent value="code" className="mt-4">
              <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
                <code className="font-mono text-sm">{code}</code>
              </pre>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};