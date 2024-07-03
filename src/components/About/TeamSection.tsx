import React from "react";

const teamMembers = [
  {
    name: "Olivia Andrium",
    position: "Project Manager",
    image: "/images/projects/author-01.png",
  },
  {
    name: "Jemse Kemorun",
    position: "Frontend Developer",
    image: "/images/projects/author-02.png",
  },
  {
    name: "Avi Pestarica",
    position: "Product Designer",
    image: "/images/projects/author-01.png",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-[620px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            OUR TEAM
          </span>
          <h2 className="mb-5 text-4xl font-semibold text-black dark:text-white">
            Meet With Our Creative Dedicated Team
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>

        <div className="mx-auto mb-8 flex w-full max-w-[768px] flex-row items-center justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="inline-flex flex-1 flex-col items-center text-center"
            >
              <div
                className="mb-4 h-40 w-40 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.position}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-[768px] flex-row items-center justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="inline-flex flex-1 flex-col items-center text-center"
            >
              <div
                className="mb-4 h-40 w-40 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
