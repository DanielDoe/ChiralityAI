import React from 'react';

const OilGasExperience = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2" />
          <h2 className="relative z-10 inline-block px-4 text-3xl font-semibold bg-white">
            Our Oil & Gas Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-black">1,400+</p>
            <p className="mt-4 text-gray-600">Global Oil & Gas consulting cases served</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-black">~80%</p>
            <p className="mt-4 text-gray-600">of the top 10 global Oil & Gas companies have been Chirality clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGasExperience;
