"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  // Add more image paths as needed
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
            <div key={index} className="mx-4 min-w-[300px]">
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
    </section>
  );
};

export default SlidingImageSection;
