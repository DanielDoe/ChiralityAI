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
    <section className="bg-gray-100 py-16 dark:bg-bg-color-dark">
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
