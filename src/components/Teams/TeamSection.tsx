import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Luis Uriza',
      position: 'Partner',
      location: 'Americas',
      image: '/images/team/luis-uriza.jpg',
    },
    {
      name: 'Ethan Phillips',
      position: 'Partner',
      location: 'Houston',
      image: '/images/team/ethan-phillips.jpg',
    },
    {
      name: 'Brian Murphy',
      position: 'Partner',
      location: 'Perth',
      image: '/images/team/brian-murphy.jpg',
    },
    {
      name: 'Emily Emmett',
      position: 'Partner',
      location: 'Houston',
      image: '/images/team/emily-emmett.jpg',
    },
    {
      name: 'Tiziano Rivolta',
      position: 'Partner',
      location: 'Milan',
      image: '/images/team/tiziano-rivolta.jpg',
    },
    {
      name: 'Lili Chahbazi',
      position: 'Partner',
      location: 'London',
      image: '/images/team/lili-chahbazi.jpg',
    },
    {
      name: 'John Norton',
      position: 'Partner',
      location: 'Houston',
      image: '/images/team/john-norton.jpg',
    },
    {
      name: 'Francesco Cigala',
      position: 'Partner',
      location: 'Kuala Lumpur',
      image: '/images/team/francesco-cigala.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center">
            <div className="w-16 border-t border-gray-300"></div>
            <h2 className="px-4 text-3xl font-semibold">Our Oil & Gas Consulting Experts</h2>
            <div className="w-16 border-t border-gray-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`flex flex-col items-center text-center ${index % 4 !== 3 ? 'border-r border-gray-300' : ''} ${index < teamMembers.length - 4 ? 'border-b border-gray-300' : ''}`}>
              <div
                className="w-full h-48 mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-600">{member.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/our-team" className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded">
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
