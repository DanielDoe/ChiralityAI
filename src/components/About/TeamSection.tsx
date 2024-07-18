import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    position: "Project Manager",
    image: "/images/team/huz.jpg",
  },
  {
    name: "John Doe",
    position: "Project Manager",
    image: "/images/team/benny.png",
  },
  {
    name: "John Doe",
    position: "Frontend Developer",
    image: "/images/team/brian.png",
  },
  {
    name: "John Doe",
    position: "Product Designer",
    image: "/images/team/laura.png",
  },
  {
    name: "John Doe",
    position: "Product Designer",
    image: "/images/team/van.png",
  },
  {
    name: "John Doe",
    position: "Product Designer",
    image: "/images/team/tony.png",
  },
  {
    name: "John Doe",
    position: "Product Designer",
    image: "/images/team/van.png",
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
            Our team consists of experienced professionals who are dedicated to
            delivering innovative solutions. We work collaboratively to ensure
            the best outcomes for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 place-content-center gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="mb-2 h-32 w-32 rounded-full bg-cover bg-center"
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
