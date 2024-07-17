"use client";

import useDebounce from "@/hooks/useDebounce";
import React, { useMemo, useState } from "react";
import projectData from "./projectData";
import SingleProject from "./SingleProject";

const LIST_COUNT = 9;

const ProjectList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { pageCount, projectList } = useMemo(() => {
    const projectDataPageCount = Math.ceil(projectData.length / LIST_COUNT);
    setIndex(0);
    if (!debouncedSearchTerm) {
      return { projectList: projectData, pageCount: projectDataPageCount };
    }

    const projectList = projectData.filter(
      (project) =>
        project.tags.some((tag) =>
          tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
        ),
      // project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
    console.log(projectList);

    return {
      projectList,
      pageCount: Math.ceil(projectList.length / LIST_COUNT),
    };
  }, [debouncedSearchTerm]);

  return (
    <section className="container w-full py-32">
      <input
        type="search"
        placeholder="Search Projects"
        className="mb-8 h-16 w-full rounded-full border px-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {projectList.length == 0 && (
        <div className="flex w-full items-center justify-center">
          <p className="text-gray-400">No project found.</p>
        </div>
      )}

      <div className="-mx-4 flex flex-wrap">
        {projectList
          .slice(index * LIST_COUNT, index * LIST_COUNT + LIST_COUNT)
          .map((project) => (
            <div
              key={project.id}
              className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleProject project={project} />
            </div>
          ))}
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-4 pt-8">
        <button
          className="rounded-md border bg-white px-6 py-2 text-sm disabled:opacity-50 dark:bg-gray-900"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          &lt;&lt; Prev
        </button>
        {new Array(pageCount).fill(null).map((_, i) => {
          const isActive = i === index;
          return (
            <button
              key={i}
              className={`rounded-md border px-4 py-2 text-sm disabled:opacity-50 ${isActive ? "bg-primary text-white" : "bg-white dark:bg-gray-900"}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          className="rounded-md border bg-white px-6 py-2 text-sm disabled:opacity-50 dark:bg-gray-900"
          disabled={index === pageCount - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default ProjectList;
