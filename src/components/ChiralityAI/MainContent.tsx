import React from 'react';
import ChiralityAISolutions from './ChiralityAISolutions';
import AISolutionsList from './AISolutionsList';
import UseCases from './UseCases';
import ResourcesSection from './ResourcesSection';
import NextSteps from './NextSteps';
import Testimonials from '../Testimonials';

const sections = [
  { id: 'overview', title: 'Overview', content: <ChiralityAISolutions /> },
  { id: 'solutions', title: 'AI Solutions', content: <AISolutionsList /> },
  { id: 'use-cases', title: 'Use Cases', content: <UseCases /> },
  { id: 'client-stories', title: 'Client Stories', content: <Testimonials /> },
  { id: 'resources', title: 'Resources', content: <ResourcesSection /> },
  { id: 'next-steps', title: 'Next Steps', content: <NextSteps /> },
];

const MainContent = () => {
  return (
    <div className="ml-1/4 w-3/4 p-4">
      {sections.map(section => (
        <div key={section.id} id={section.id} className="py-8">
          <div className="mt-4">{section.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
