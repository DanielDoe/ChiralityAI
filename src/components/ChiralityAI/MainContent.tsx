"use client";

import React, { useEffect, useRef } from "react";
import ChiralityAISolutions from "./ChiralityAISolutions";
import AISolutionsList from "./AISolutionsList";
import UseCases from "./UseCases";
import ResourcesSection from "./ResourcesSection";
import NextSteps from "./NextSteps";
import Testimonials from "../Testimonials";

const sections = [
  { id: "about", title: "About", content: <ChiralityAISolutions /> },
  { id: "solutions", title: "AI Solutions", content: <AISolutionsList /> },
  { id: "use-cases", title: "Use Cases", content: <UseCases /> },
  { id: "client-stories", title: "Client Stories", content: <Testimonials /> },
  { id: "resources", title: "Resources", content: <ResourcesSection /> },
  { id: "next-steps", title: "Next Steps", content: <NextSteps /> },
];

type Props = {
  onSectionChange: (id: string) => void;
};

const MainContent: React.FC<Props> = ({ onSectionChange }) => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      _: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionChange(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // We are interested in observing the sections only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[80%]">
      {sections.map(({ content, id, title }, index) => (
        <section
          key={id}
          id={id}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          {content}
        </section>
      ))}
    </div>
  );
};

export default MainContent;
