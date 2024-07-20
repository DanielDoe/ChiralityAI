import React from "react";
import Link from "next/link";

const ClientResultsSection = () => {
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
  ];

  return (
    <div className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <div className="absolute inset-x-0 top-1/2 border-t border-gray-200 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Client Results
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
                <Link href={`/project-details/${result.id}`}>
                  <span className="mb-4 text-xl font-bold hover:text-primary transition-colors duration-300">
                    {result.title}
                  </span>
                </Link>
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
