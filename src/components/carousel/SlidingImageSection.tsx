"use client";

import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  "/images/projects/project1.png",
  "/images/projects/project2.png",
  "/images/projects/project3.png",
  "/images/projects/project4.png",
  "/images/projects/project5.png",
  "/images/projects/project6.png",
  "/images/projects/project7.png",
  "/images/projects/project8.png",
  "/images/projects/project9.png",
  "/images/projects/project10.png",
  "/images/projects/project11.png",
  "/images/projects/project12.png",
  "/images/projects/project13.png",
  "/images/projects/project14.png",
  "/images/projects/project15.png",
  "/images/projects/project16.png",
  "/images/projects/project17.png",
  "/images/projects/project18.png",
  "/images/projects/project19.png",
  "/images/projects/project20.png",
  "/images/projects/project21.png",
  "/images/projects/project22.png",
  "/images/projects/project23.png",
  "/images/projects/project24.png",
  "/images/projects/project25.png",
  "/images/projects/project26.png",
  "/images/projects/project27.png",
  "/images/projects/project28.png",
];

const SlidingImageSection = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-300 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Project Highlights
          </h2>
        </div>
      </div>
      <div className="container mx-auto overflow-hidden">
        <Marquee className="flex space-x-4">
          {images.map((image, index) => (
            <div key={index} className="mx-4 min-w-[571.28px]">
              <div
                className="h-80 w-full rounded-lg border bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-12 text-center">
        <Link href="/projects">
          <span className="inline-block rounded bg-primary px-6 py-3 font-semibold text-white">
            SEE MORE
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SlidingImageSection;
