import React from "react";

const images = [
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  "/images/usecases/operations-one.jpg",
  // Add more image paths as needed
];

const SlidingImageSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto overflow-hidden">
        <div className="flex space-x-4 animate-marquee">
          {images.map((image, index) => (
            <div key={index} className="min-w-[300px]">
              <div
                className="h-80 w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={`Image ${index + 1}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingImageSection;
