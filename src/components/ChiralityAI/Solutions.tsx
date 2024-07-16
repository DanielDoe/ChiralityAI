import React from 'react';

const solutions = [
  {
    title: 'Predictive Maintenance',
    description: 'Utilize AI to predict equipment failures and schedule timely maintenance, reducing downtime and operational costs.',
    linkText: 'Explore Predictive Maintenance',
    linkUrl: '#',
  },
  {
    title: 'Reservoir Optimization',
    description: 'Leverage machine learning to optimize reservoir management and improve extraction efficiency.',
    linkText: 'Explore Reservoir Optimization',
    linkUrl: '#',
  },
  {
    title: 'Drilling Optimization',
    description: 'AI-driven solutions for optimizing drilling operations, enhancing safety and performance.',
    linkText: 'Explore Drilling Optimization',
    linkUrl: '#',
  },
  {
    title: 'Production Forecasting',
    description: 'Accurate forecasting of production levels using advanced AI algorithms to maximize output.',
    linkText: 'Explore Production Forecasting',
    linkUrl: '#',
  },
  {
    title: 'Supply Chain Management',
    description: 'Streamline supply chain operations with AI to ensure timely delivery and reduce costs.',
    linkText: 'Explore Supply Chain Management',
    linkUrl: '#',
  },
  {
    title: 'Environmental Monitoring',
    description: 'Implement AI solutions to monitor environmental impact and ensure compliance with regulations.',
    linkText: 'Explore Environmental Monitoring',
    linkUrl: '#',
  },
];

const Solutions = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-4xl">
          How Chirality AI enhances oil & gas industry operations
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
            >
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                {solution.title}
              </h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {solution.description}
              </p>
              <a
                href={solution.linkUrl}
                className="inline-block rounded-full bg-blue-600 px-8 py-2 text-lg font-semibold text-white hover:bg-blue-700 transition-colors duration-300"
              >
                {solution.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
