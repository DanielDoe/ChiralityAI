import React from 'react';

const UseCases = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white">
          How Clients are Leveraging AI Solutions
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Discover how Chirality Research clients are solving real business problems with our advanced AI solutions.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              95% Efficiency
            </h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Enhanced operational efficiency in oil extraction processes.
            </p>
            <a href="#learn-more" className="text-primary hover:underline">
              Learn more about our solution
            </a>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              80% Faster Data Processing
            </h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Accelerated data processing and analysis for real-time decision making.
            </p>
            <a href="#learn-more" className="text-primary hover:underline">
              Learn more about our solution
            </a>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              70% Cost Reduction
            </h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Significant reduction in operational costs through AI-driven optimization.
            </p>
            <a href="#learn-more" className="text-primary hover:underline">
              Learn more about our solution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
