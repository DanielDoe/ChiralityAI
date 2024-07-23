"use client";

import React, { useState } from "react";
import Link from "next/link";
import insightData from "./InsightData";

const categories = [
  "All",
  "Environmental, Social, and Governance (ESG)",
  "Health, Safety, and Environment (HSE)",
];

const InsightDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInsights =
    selectedCategory === "All"
      ? insightData
      : insightData.filter((insight) => insight.category === selectedCategory);

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
          {filteredInsights.map((insight, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${insight.image})` }}
                role="img"
                aria-label="Insight Image"
              ></div>
              <div className="p-6">
                <p className="mb-2 font-semibold text-primary">
                  {insight.category}
                </p>
                <a
                  href={insight.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 block text-xl font-bold transition-colors duration-300 hover:text-primary"
                >
                  {insight.title}
                </a>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{insight.type}</span>
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

export default InsightDetails;
