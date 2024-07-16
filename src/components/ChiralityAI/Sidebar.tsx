"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'client-stories', label: 'Client Stories' },
  { id: 'resources', label: 'Resources' },
  { id: 'next-steps', label: 'Next Steps' },
];

const Sidebar = () => {
  const [activeId, setActiveId] = useState(menuItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = menuItems[0].id;
      menuItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = item.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 w-1/4 pr-4">
      <ul className="list-none">
        {menuItems.map(item => (
          <li key={item.id} className="mb-4">
            <Link href={`#${item.id}`}>
              <div className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 ${activeId === item.id ? 'font-bold' : ''}`}>{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
