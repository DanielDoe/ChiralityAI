import React from "react";
import Link from "next/link";

const ClientResultsSection = () => {
  const results = [
    {
      title: "An Oil and Gas Leader Creates a New Clean Energy Business",
      description:
        "We helped build plans, launch, and set ambitious targets for this independent entity.",
      category: "Energy & Natural Resources",
      image: "/images/services/why-us-1.jpg",
      type: "Brief",
    },
    {
      title: "Centralization boosts performance for an energy giant",
      description:
        "We helped OilCo shift from a geocentric model to a global model. The new, centralized organization was implemented ahead of schedule and with minimal disruption to the business.",
      category: "Oil & Gas",
      image: "/images/services/why-us-2.jpg",
      type: "Report",
    },
    {
      title: "How to Win Clean Hydrogen Bids",
      description:
        "As competitive projects ramp up worldwide, here are five keys to developing successful bids.",
      category: "Advanced Manufacturing & Services",
      image: "/images/services/why-us-1.jpg",
      type: "Infographic",
    },
  ];

  return (
    <div className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-x-0 top-1/2 border-t border-gray-200 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Client Results in Oil & Gas
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${result.image})` }}
                role="img"
                aria-label="Client Result Image"
              ></div>
              <div className="p-6">
                <p className="mb-2 font-semibold text-primary">
                  {result.category}
                </p>
                <h3 className="mb-4 text-xl font-bold">{result.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {result.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {result.type}
                  </span>
                  <svg
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="bookmark"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v18l7-5 7 5V3a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/client-results">
            <span className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white">
              SEE MORE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientResultsSection;
