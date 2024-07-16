import React from "react";

const WHY_TRUST_CONTENT = [
  {
    title: "Transparency",
    description:
      "Openly explaining and instructing on usage, including potential risks and how decisions are made.",
  },
  {
    title: "Privacy & Security",
    description: "Ensuring data privacy and security for all stakeholders.",
  },
  {
    title: "Accountability",
    description:
      "Proactively identifying and mitigating potential risks and adverse impacts.",
  },
  {
    title: "Robustness",
    description:
      "Operating reliably and safely, ensuring continuous performance and risk management throughout the system’s life cycle.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "Implementing sustainable practices and reducing environmental impact.",
  },
  {
    title: "Operational Excellence",
    description:
      "Enhancing operational efficiency and effectiveness across all processes.",
  },
];

const ChiralityAISolutions = () => {
  return (
    <div className="container mx-auto pb-24 text-center">
      <h2 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white">
        AI Solutions for the Oil and Gas Industry
      </h2>
      <p className="mx-auto mb-16 max-w-[72.5%] text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Discover how ChiralityAI is revolutionizing the oil and gas industry
        with cutting-edge AI technology. Our solutions are designed to enhance
        operational efficiency, safety, and sustainability, providing businesses
        with the tools they need to excel in a competitive market.
      </p>
      <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">
        Why Trust ChiralityAI?
      </h3>
      <p className="mx-auto mb-16 max-w-[72.5%] text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        ChiralityAI promotes a trustworthy AI approach by developing and
        implementing tools that help you achieve your goals responsibly while
        complying with industry regulations and standards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {WHY_TRUST_CONTENT.map(({ title, description }, index) => {
          let additionalClass = "";
          switch (index) {
            case 0:
              additionalClass = "md:border-t-0 md:border-l-0";
              break;
            case 1:
              additionalClass = "md:border-t-0";
              break;
            case 2:
              additionalClass = "md:border-t-0 md:border-r-0";
              break;
            case 3:
              additionalClass = "md:border-l-0 md:border-b-0";
              break;
            case 4:
              additionalClass = "md:border-b-0";
              break;
            case 5:
              additionalClass = "md:border-r-0 md:border-b-0";
              break;
          }

          return (
            <div
              key={title}
              className={`border p-8 pb-12 text-left ${additionalClass}`}
            >
              <h4 className="mb-4 text-xl leading-tight text-black dark:text-white">
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChiralityAISolutions;
