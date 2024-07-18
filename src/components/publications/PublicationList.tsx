"use client";

import React, { useMemo, useState } from "react";
import publicationData from "./publicationData";

const CLASSIFICATION_LIST = publicationData.map(
  (publicationData) => publicationData.classification,
);

const CLASSIFICATIONS = Array.from(new Set(CLASSIFICATION_LIST)).sort();
const PAGINATION_COUNT = 10;

const PublicationList: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState({ term: "", isExact: true });

  const publications = useMemo(() => {
    if (!search.term) return publicationData;

    const filteredPublications = publicationData.filter((pub) => {
      if (search.isExact) {
        return pub.classification === search.term;
      }

      return (
        pub.title.toLowerCase().includes(search.term.toLowerCase()) ||
        pub.keywords.toLowerCase().includes(search.term.toLowerCase()) ||
        pub.tags.some((tag) =>
          tag.toLowerCase().includes(search.term.toLowerCase()),
        )
      );
    });

    setIndex(0);
    return filteredPublications;
  }, [search]);

  const pageCount = Math.ceil(publications.length / PAGINATION_COUNT);

  return (
    <main className="flex-start container mx-auto flex flex-row justify-start gap-8">
      <aside className="w-96">
        <input
          type="search"
          placeholder="Search Publications, Keywords, or Tags"
          className="mb-8 h-12 w-full rounded-full border px-4 text-sm"
          value={search.isExact ? "" : search.term}
          onChange={(e) => setSearch({ term: e.target.value, isExact: false })}
        />

        <h2 className="mb-4 text-lg font-semibold text-gray-500">
          Quick filters&nbsp;
          {search.isExact && !!search.term && (
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={() => setSearch({ term: "", isExact: true })}
            >
              (Clear)
            </button>
          )}
        </h2>

        <div className="flex flex-col gap-2">
          {CLASSIFICATIONS.map((classification) => {
            const isSelected = search.term === classification;

            return (
              <button
                type="button"
                className="inline-flex flex-row items-center gap-2 "
                key={classification}
                onClick={() =>
                  setSearch((oldSearch) => {
                    if (oldSearch.term === classification) {
                      return { term: "", isExact: true };
                    }
                    return { term: classification, isExact: true };
                  })
                }
              >
                <span
                  className={`h-4 w-4 rounded-sm ${isSelected ? "border-primary bg-primary text-white" : "border border-gray-400 bg-transparent text-transparent"} items-center justify-center text-xs`}
                >
                  &#x2713;
                </span>
                <span className={`${isSelected ? "font-semibold" : ""}`}>
                  {classification}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="flex-1 pb-32">
        <div className="mb-4 flex flex-col gap-4">
          {publications
            .slice(
              index * PAGINATION_COUNT,
              index * PAGINATION_COUNT + PAGINATION_COUNT,
            )
            .map((publication) => {
              return (
                <div
                  className="rounded-md border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                  key={publication.id}
                >
                  <a href={publication.link} target="_blank">
                    <h4 className="font-semibold focus:text-blue-500 focus:underline">
                      {publication.title}
                    </h4>
                  </a>

                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {publication.author.name}
                  </p>

                  <p className="mb-6 text-sm">{publication.abstract}</p>

                  <div className="inline-flex w-full flex-row items-center justify-between">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {publication.publishDate} | {publication.source}
                    </p>

                    <ul className="inline-flex flex-row items-center gap-2">
                      {publication.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-primary px-4 py-2 text-[0.5rem] uppercase leading-none text-white"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
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
    </main>
  );
};

export default PublicationList;
