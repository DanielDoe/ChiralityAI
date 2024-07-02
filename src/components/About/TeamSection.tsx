import React from 'react';

const teamMembers = [
  {
    name: 'Olivia Andrium',
    position: 'Project Manager',
    image: '/path/to/image1.png',
  },
  {
    name: 'Jemse Kemorun',
    position: 'Frontend Developer',
    image: '/path/to/image2.png',
  },
  {
    name: 'Avi Pestarica',
    position: 'Product Designer',
    image: '/path/to/image3.png',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-16">
          <span className="block text-lg text-primary font-semibold mb-2">OUR TEAM</span>
          <h2 className="text-4xl font-semibold text-black dark:text-white mb-5">Meet With Our Creative Dedicated Team</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div
                className="w-40 h-40 rounded-full bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <h3 className="text-xl font-semibold text-black dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
