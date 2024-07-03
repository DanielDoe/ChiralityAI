import React from 'react';

const InsightsSection = () => {
  const insights = [
    {
      title: "How to Win Clean Hydrogen Bids",
      description: "As competitive projects ramp up worldwide, here are five keys to developing successful bids.",
      category: "Advanced Manufacturing & Services",
      type: "Infographic",
      image: "/path/to/image1.jpg"
    },
    {
      title: "Beyond the Stage Gate: Capital Projects in the Energy Transition",
      description: "Leading energy and natural resource companies are rethinking their capital deployment model to succeed in the energy transition.",
      category: "Energy & Natural Resources",
      type: "Brief",
      image: "/path/to/image2.jpg"
    },
    {
      title: "The State of Gender Representation in the UK Energy Industry—and What to Do About It",
      description: "Bain & Company collaborated with POWERful Women to produce their 2024 Annual State of the Nation report.",
      category: "Mining",
      type: "Report",
      image: "/path/to/image3.jpg"
    },
    {
      title: "Southeast Asia's Green Economy 2024 Report",
      description: "Moving the needle.",
      category: "Advanced Manufacturing & Services",
      type: "Report",
      image: "/path/to/image4.jpg"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="relative">
          <hr className="absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2" />
          <h2 className="relative z-10 inline-block px-4 text-3xl font-semibold bg-gray-50">
            Our Insights on Oil & Gas
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {insights.map((insight, index) => (
          <div key={index} className="relative flex flex-col bg-white p-6 shadow-md h-[350px]">
            <div
              className="h-40 w-full bg-center bg-cover mb-4"
              style={{ backgroundImage: `url(${insight.image})` }}
              role="img"
              aria-label={insight.title}
            />
            <p className="text-sm text-red-600 mb-1">{insight.category}</p>
            <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
            <p className="text-gray-600 flex-grow">{insight.description}</p>
            <div className="flex justify-between items-center mt-4">
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
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700">
          See More
        </button>
      </div>
    </div>
  );
};

export default InsightsSection;
