"use client";

import React, { useState } from "react";

const ClientResultsDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Oil & Gas");

  const results = [
    {
      title: "An Oil and Gas Leader Creates a New Clean Energy Business",
      description:
        "We helped build plans, launch, and set ambitious targets for this independent entity.",
      category: "Oil & Gas",
      image: "/images/client-results-1.jpg",
      type: "Brief",
    },
    {
      title: "Centralization boosts performance for an energy giant",
      description:
        "We helped OilCo shift from a geocentric model to a global model. The new, centralized organization was implemented ahead of schedule and with minimal disruption to the business.",
      category: "Oil & Gas",
      image: "/images/client-results-2.jpg",
      type: "Report",
    },
    {
      title: "An OFS captures post-merger growth synergies",
      description:
        "This oil field services provider needed help following a recent acquisition. Bain focused on ways to yield the highest potential revenue synergies. The result: Four times quarterly profit growth.",
      category: "Oil & Gas",
      image: "/images/client-results-3.jpg",
      type: "Report",
    },
    {
      title: "Forecast backs a bet on shale services",
      description:
        "A private equity firm asked Bain to perform due diligence on their shale gas acquisition target; we advised they buy. Since the successful acquisition, the stock price has greatly appreciated.",
      category: "Oil & Gas",
      image: "/images/client-results-4.jpg",
      type: "Brief",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <span className="mr-4">Filter by:</span>
          <button className="mr-4 rounded border border-gray-300 bg-white px-4 py-2 text-gray-700">
            Industries
          </button>
          <button className="rounded border border-gray-300 bg-white px-4 py-2 text-gray-700">
            Services
          </button>
        </div>

        <div className="mb-8 flex items-center">
          <span className="mr-4">Selected:</span>
          <button className="rounded bg-red-600 px-4 py-2 text-white">
            {selectedCategory}{" "}
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              ×
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${result.image})` }}
                role="img"
                aria-label="Client Result Image"
              ></div>
              <div className="p-6">
                <p className="mb-2 font-semibold text-red-600">
                  {result.category}
                </p>
                <h3 className="mb-4 text-xl font-bold text-black">
                  {result.title}
                </h3>
                <p className="mb-4 text-gray-600">{result.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{result.type}</span>
                  <svg
                    className="h-5 w-5 text-gray-500"
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
      </div>
    </div>
  );
};

export default ClientResultsDetails;
