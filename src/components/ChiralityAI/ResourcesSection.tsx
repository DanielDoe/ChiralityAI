import React from "react";
import Link from "next/link";

const resourcesData = [
  {
    title: "Implementing AI for Operational Efficiency",
    description:
      "Discover how we utilize AI to correlate electricity data with weather forecasts, improving operational efficiency.",
    linkText: "Read the paper",
    link: "#",
  },
  {
    title: "Leveraging LLM Models for Subsurface Workflows",
    description:
      "Learn about our collaboration to enhance subsurface workflows with advanced LLM models.",
    linkText: "Read more",
    link: "#",
  },
  {
    title: "Optimizing Production Forecasting with AI",
    description:
      "Explore our methods for applying classification modeling to optimize production forecasting.",
    linkText: "Learn more",
    link: "#",
  },
  {
    title: "Reducing OPEX with Machine Learning",
    description:
      "Understand how we use machine learning to track and reduce OPEX costs.",
    linkText: "Discover the process",
    link: "#",
  },
  {
    title: "Scope I and III Sensitivity Analysis",
    description:
      "Get insights into our sensitivity analysis for Scope I and III emissions.",
    linkText: "View the analysis",
    link: "#",
  },
];

const ResourcesSection = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white">
          Stay on top of AI advancements
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resourcesData.map((resource, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
            >
              <h3 className="mb-8 text-xl font-semibold text-black dark:text-white">
                {resource.title}
              </h3>
              <p className="mb-12 text-gray-700 dark:text-gray-300">
                {resource.description}
              </p>
              <Link href={resource.link}>
                <div className="text-primary hover:underline">
                  {resource.linkText} &rarr;
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
