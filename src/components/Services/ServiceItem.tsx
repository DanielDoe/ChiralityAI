// components/Services/ServiceItem.tsx
import React from "react";

const ServiceItem = ({ title, description, image }) => {
  return (
    <li className="inline-flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#F5F7F9] p-10 shadow-sm dark:bg-bg-color-dark">
      <div
        className="h-20 w-20 rounded-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="service icon"
      />
      <p className="text-lg font-bold">{title}</p>
      <p className="text-center">{description}</p>
    </li>
  );
};

export default ServiceItem;
