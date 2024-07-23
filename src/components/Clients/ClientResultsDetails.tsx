"use client";

import React, { useState } from "react";
import Link from "next/link";

const results = [
  {
    id: 1,
    title: "Production Maintenance Tracker",
    description:
      "Achieved a 21% reduction in ticket close-out time through improved operational efficiency.",
    category: "Operational Efficiency",
    image: "/images/results/pexels-tomfisk-6048400.jpg",
    type: "Report",
  },
  {
    id: 2,
    title: "Production Chemical Optimization",
    description:
      "Optimized chemical treatment, leading to significant cost savings and improved efficiency.",
    category: "Chemical Management",
    image: "/images/results/pexels-chokniti-khongchum-1197604-2280571.jpg",
    type: "Brief",
  },
  {
    id: 3,
    title: "Pipeline Integrity",
    description:
      "Enhanced pipeline safety and reliability, reducing risks and maintenance costs.",
    category: "Pipeline Safety",
    image: "/images/results/steel-pipelines-cables-plant.jpg",
    type: "Infographic",
  },
  {
    id: 4,
    title: "iPig Machine Learning",
    description:
      "Improved pipeline maintenance through advanced image recognition and machine learning.",
    category: "Pipeline Safety",
    image: "/images/results/chris-ried-ieic5Tq8YMk-unsplash.jpg",
    type: "Infographic",
  },
  {
    id: 5,
    title: "Pigging Economic Calculator",
    description:
      "Provided a tool to better understand and manage the economic aspects of pigging activities, leading to cost savings and more efficient operations.",
    category: "Economic Analysis",
    image: "/images/results/pexels-davidmcbee-730547.jpg",
    type: "Report",
  },
  {
    id: 6,
    title: "Mercury Partitioning Calculator",
    description:
      "Enhanced understanding of mercury behavior in gas condensate systems, improving safety and efficiency in processing operations.",
    category: "Chemical Management",
    image: "/images/results/pexels-pixabay-220301.jpg",
    type: "Report",
  },
  {
    id: 7,
    title: "H₂S Economic Model",
    description:
      "Optimized H₂S treatment strategies to balance cost and efficiency, leading to better economic outcomes.",
    category: "Economic Analysis",
    image: "/images/results/pexels-pixabay-257775.jpg",
    type: "Report",
  },
  {
    id: 8,
    title: "Produced Water Model",
    description:
      "Improved water management in oil and gas operations, enhancing efficiency and environmental compliance.",
    category: "Data & Water Management",
    image: "/images/results/pexels-tom-fournier-208942721-16952913.jpg",
    type: "Report",
  },
  {
    id: 9,
    title: "Data Historian: Canary",
    description:
      "Increased data transparency and accessibility, enabling better decision-making and analysis.",
    category: "Data & Water Management",
    image: "/images/results/pexels-negativespace-97080.jpg",
    type: "Report",
  },
  {
    id: 10,
    title: "Completions Tag Normalization",
    description:
      "Improved data consistency and enabled better analytics, leading to enhanced operational efficiency and decision-making.",
    category: "Data & Water Management",
    image: "/images/results/pexels-pixabay-40784.jpg",
    type: "Brief",
  },
];

const categories = [
  "All",
  "Operational Efficiency",
  "Chemical Management",
  "Pipeline Safety",
  "Economic Analysis",
  "Data & Water Management",
];

const ClientResultsDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults =
    selectedCategory === "All"
      ? results
      : results.filter((result) => result.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <span className="mr-4">Filter by:</span>
          {categories.map((category) => (
            <button
              key={category}
              className={`mr-4 rounded border border-gray-200 px-4 py-2 text-gray-700 dark:border-gray-700 dark:text-gray-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-8 flex items-center">
          <span className="mr-4">Selected:</span>
          <button className="rounded bg-primary px-4 py-2 text-white">
            {selectedCategory}{" "}
            <span
              className="ml-2 cursor-pointer"
              onClick={() => setSelectedCategory("All")}
            >
              ×
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
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
                <Link href={`/project-details/${result.id}`}>
                  <span className="mb-4 cursor-pointer text-xl font-bold transition-colors duration-300 hover:text-primary dark:text-white">
                    {result.title}
                  </span>
                </Link>
                <p className="mb-4 text-gray-600">{result.description}</p>
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
      </div>
    </div>
  );
};

export default ClientResultsDetails;
