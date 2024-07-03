import React from 'react';

const EnergySectorExpertise = () => {
  const expertise = [
    "Agribusiness",
    "Chemicals",
    "Energy & Natural Resources",
    "Mining",
    "Oil & Gas",
    "Utilities & Renewables",
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2" />
          <h2 className="relative z-10 inline-block px-4 text-3xl font-semibold bg-white">
            Explore Our Energy Sector Expertise
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertise.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between p-6 border-b border-gray-300">
            <p className="text-lg font-medium text-gray-900">{item}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-red-600"
            >
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergySectorExpertise;
