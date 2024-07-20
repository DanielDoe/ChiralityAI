import React from "react";

const ReportSection = () => {
  return (
    <div className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto">
        <div className="relative flex w-full flex-row items-center justify-center rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950">
          <div className="h-72 p-8" style={{ flex: 2 }}>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Murphy Oil Corporation 2022 Sustainability Report
            </h2>
            <p className="mb-8 text-base text-gray-700 dark:text-gray-400 md:text-lg">
              Our works have been highlighted in the Murphy Oil Corporation 2022 Sustainability Report, demonstrating our commitment to environmental, social, and governance (ESG) initiatives.
            </p>
            <a
              href="https://www.murphyoilcorp.com/wp-content/uploads/2022/08/Murphy-Oil-Corporation-2022-Sustainability-Report.pdf"
              className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ THE REPORT
            </a>
          </div>
          <div className="h-72 flex-1">
            <div
              className="h-full w-full rounded-r-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/reports/Murphy-Oil-Corporation-2022-Sustainability-Report2.jpg')`,
              }}
              role="img"
              aria-label="Murphy Oil Corporation Report Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
