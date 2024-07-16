"use client";

import { useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const ChiralityAIContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>();

  return (
    <div className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row">
        <Sidebar activeSection={activeSection} />
        <MainContent onSectionChange={setActiveSection} />
      </div>
    </div>
  );
};

export default ChiralityAIContent;
