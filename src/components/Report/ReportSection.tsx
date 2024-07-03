import React from 'react';

const ReportSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg flex items-center relative overflow-hidden">
          <div className="flex-1 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Energy & Natural Resources Report 2023
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Our annual report examines how companies are seizing the once-in-a-generation opportunities of the energy transition.
            </p>
            <a href="#" className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded">
              READ THE REPORT
            </a>
          </div>
          <div className="flex-1 h-full">
            <div
              className="h-full bg-cover bg-center rounded-r-lg"
              style={{ backgroundImage: `url('/images/services/why-us-1.jpg')`, width: '80%', height: '100%' }}
              role="img"
              aria-label="Energy Report Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
