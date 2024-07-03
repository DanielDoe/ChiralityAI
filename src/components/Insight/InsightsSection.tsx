import React from "react";

const InsightsSection = () => {
  const insights = [
    {
      title: "How to Win Clean Hydrogen Bids",
      description:
        "As competitive projects ramp up worldwide, here are five keys to developing successful bids.",
      category: "Advanced Manufacturing & Services",
      type: "Infographic",
      image: "/images/services/why-us-1.jpg",
    },
    {
      title: "Beyond the Stage Gate: Capital Projects in the Energy Transition",
      description:
        "Leading energy and natural resource companies are rethinking their capital deployment model to succeed in the energy transition.",
      category: "Energy & Natural Resources",
      type: "Brief",
      image: "/images/services/why-us-1.jpg",
    },
    {
      title:
        "The State of Gender Representation in the UK Energy Industry—and What to Do About It",
      description:
        "Bain & Company collaborated with POWERful Women to produce their 2024 Annual State of the Nation report.",
      category: "Mining",
      type: "Report",
      image: "/images/services/why-us-1.jpg",
    },
    {
      title: "Southeast Asia's Green Economy 2024 Report",
      description: "Moving the needle.",
      category: "Advanced Manufacturing & Services",
      type: "Report",
      image: "/images/services/why-us-1.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <div className="relative">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-300" />
          <h2 className="relative z-10 inline-block bg-gray-50 px-4 text-3xl font-semibold">
            Our Insights on Oil & Gas
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="relative flex h-[480px] flex-col bg-white p-4 shadow-md"
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
      <div className="mt-8 text-center">
        <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90">
          See More
        </button>
      </div>
    </div>
  );
};

export default InsightsSection;
