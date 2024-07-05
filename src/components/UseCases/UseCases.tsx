// UseCases.tsx
"use client";

import React, { useState } from "react";
import useCaseData from "./useCaseData";
import UseCaseContent from "./UseCaseContent";

const tabs = [
  { name: "Operations Excellence", id: "operations" },
  { name: "Data Historian", id: "data-historian" },
  { name: "Reporting & Analytics", id: "reporting" },
  { name: "ESG / HSE", id: "esg-hse" },
  { name: "Upcoming Work", id: "upcoming-work" },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("operations");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen w-1/4 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
        <ul className="list-none p-4">
          {tabs.map((tab) => (
            <li key={tab.id} className="mb-4">
              <button
                className={`block w-full rounded-md px-4 py-2 text-left ${
                  activeTab === tab.id ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="h-screen w-3/4 overflow-y-auto p-4">
        <div className="grid grid-cols-1 gap-8">
          {useCaseData[activeTab].map((usecase) => (
            <UseCaseContent key={usecase.id} usecase={usecase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
