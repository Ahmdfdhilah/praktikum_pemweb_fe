import React from 'react';

interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface StepGuideProps {
  steps: Step[];
}

export const StepGuide: React.FC<StepGuideProps> = ({ steps }) => {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-50 px-6 py-4 flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
          </div>
          <div className="p-6">
            {step.content}
          </div>
        </div>
      ))}
    </div>
  );
};
