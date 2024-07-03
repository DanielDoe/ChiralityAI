import React from "react";

const ReportSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 bg-white shadow-lg">
          <div className="h-72 p-8" style={{ flex: 2 }}>
            <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
              Energy & Natural Resources Report 2023
            </h2>
            <p className="mb-8 text-base text-gray-600 md:text-lg">
              Our annual report examines how companies are seizing the
              once-in-a-generation opportunities of the energy transition.
            </p>
            <a
              href="#"
              className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white"
            >
              READ THE REPORT
            </a>
          </div>
          <div className="h-72 flex-1">
            <div
              className="h-full w-full rounded-r-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/services/why-us-1.jpg')`,
              }}
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
