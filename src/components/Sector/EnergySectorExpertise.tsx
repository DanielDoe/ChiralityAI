import React from "react";

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
    <div className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-200 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Explore Our Industry Expertise
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between border-b border-gray-300 p-6 dark:border-gray-700"
          >
            <p className="text-lg font-medium">{item}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-primary"
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
