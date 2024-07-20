import React from "react";
import Link from "next/link";
import insightData from "./InsightData";

const InsightsSection = () => {
  return (
    <div className="bg-gray-light py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto text-center">
        <div className="relative">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-300 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-gray-light px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Insights on Oil & Gas
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {insightData
          .filter((_, index) => index < 4)
          .map((insight, index) => (
            <div
              key={index}
              className="relative flex h-[480px] flex-col rounded-md border border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-bg-color-dark dark:shadow-sm"
            >
              <div
                className="mb-4 h-40 w-full bg-red-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${insight.image})` }}
                role="img"
                aria-label={insight.title}
              />
              <p className="mb-1 text-sm text-primary">{insight.category}</p>
              <h3 className="mb-2 line-clamp-3 text-lg font-semibold">
                {insight.title}
              </h3>
              <p className="line-clamp-3 flex-grow text-gray-600">
                {insight.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">{insight.type}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-gray-500"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/insight-details">
          <span className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white">
            SEE MORE
          </span>
        </Link>
      </div>
    </div>
  );
};

export default InsightsSection;
