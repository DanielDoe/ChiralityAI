import React from 'react';
import aiSolutionsData from './aiSolutionsData';
import SingleSolution from './SingleSolution';
import Solutions from './Solutions';

const AISolutionsList = () => {
  return (
    <>
<section className="py-16 md:py-20 lg:py-28">
<Solutions />
</section>
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white text-center">
          Our AI Solution Highlights for the Oil and Gas Industry
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiSolutionsData.map((solution) => (
            <SingleSolution key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
    </>
    
  );
};

export default AISolutionsList;
