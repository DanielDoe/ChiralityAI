import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Laura Nyaakens",
      position: "Partner",
      location: "Americas",
      image: "/images/team/laura.png",
    },
    {
      name: "Ethan Phillips",
      position: "Partner",
      location: "Houston",
      image: "/images/team/laura.png",
    },
    {
      name: "Brian Murphy",
      position: "Partner",
      location: "Perth",
      image: "/images/team/laura.png",
    },
    {
      name: "Emily Emmett",
      position: "Partner",
      location: "Houston",
      image: "/images/team/laura.png",
    },
    {
      name: "Tiziano Rivolta",
      position: "Partner",
      location: "Milan",
      image: "/images/team/laura.png",
    },
    {
      name: "Lili Chahbazi",
      position: "Partner",
      location: "London",
      image: "/images/team/laura.png",
    },
    {
      name: "John Norton",
      position: "Partner",
      location: "Houston",
      image: "/images/team/laura.png",
    },
    {
      name: "Francesco Cigala",
      position: "Partner",
      location: "Kuala Lumpur",
      image: "/images/team/laura.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center">
            <div className="w-16 border-t border-gray-200 dark:border-gray-700" />
            <h2 className="px-4 text-3xl font-semibold">
              Our Oil & Gas Consulting Experts
            </h2>
            <div className="w-16 border-t border-gray-200 dark:border-gray-700" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex h-80 flex-col items-center text-center ${index % 4 !== 3 ? "border-r border-gray-300 dark:border-gray-700" : ""} ${index < teamMembers.length - 4 ? "border-b border-gray-300 dark:border-gray-700" : ""}`}
            >
              <div
                className="mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.position}
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                {member.location}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/our-team"
            className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
