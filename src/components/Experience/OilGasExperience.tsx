import React from "react";

const OilGasExperience = () => {
  return (
    <div className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-200 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Oil & Gas Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-center">
            <p className="text-5xl font-bold">1,400+</p>
            <p className="mt-4">Global Oil & Gas consulting cases served</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">~80%</p>
            <p className="mt-4">
              of the top 10 global Oil & Gas companies have been Chirality
              clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGasExperience;
