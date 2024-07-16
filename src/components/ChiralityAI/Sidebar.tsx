"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const menuItems = [
  { id: "about", label: "About" },
  { id: "solutions", label: "Solutions" },
  { id: "use-cases", label: "Use Cases" },
  { id: "client-stories", label: "Client Stories" },
  { id: "resources", label: "Resources" },
  { id: "next-steps", label: "Next Steps" },
];

const Sidebar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  return (
    <div className="sticky top-24 h-96 w-[20%]">
      <ul className="list-none" role="navigation">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          isActive && console.log(item.id, isActive);
          return (
            <li
              key={item.id}
              className={`border-l-4 p-4 ${isActive ? "border-primary" : "border-gray-300 dark:border-gray-700"}`}
            >
              <Link href={`#${item.id}`}>
                <span className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
