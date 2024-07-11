// components/Services/ServiceList.tsx
import React from "react";
import ServiceItem from "./ServiceItem";

const SERVICES_CONTENT = [
  {
    title: "Engineering Support",
    description:
      "We cover the full spectrum: drilling & completions, performance, workovers and well interventions, rig acceptance and commissioning, well testing, from cost estimates to real time execution support.",
    image: "/images/services/number-1.png",
  },
  {
    title: "Carbon Footprint Reduction",
    description:
      "Collect and analyse your emission data with a custom app. Making federally regulated environmental reporting a breeze. View trends to enable decision making for carbon footprint reduction.",
    image: "/images/services/number-2.png",
  },
  {
    title: "Literature Research",
    description:
      "Stay updated with the latest emerging technologies. Gain insight on new open-source software used for calculating plant outputs. Remain informed of market trends.",
    image: "/images/services/number-3.png",
  },
  {
    title: "Apps",
    description:
      "Shift from spreadsheet reporting to an all-in-one app. Collect data efficiently from the field, store it in a database and analyse it through dashboards. Automate maintenance schedules and make more informed decisions.",
    image: "/images/services/number-4.png",
  },
  {
    title: "Models",
    description:
      "Use our prebuilt models for well production estimation, methanol calculation, pigging scheduling, scaling, corrosion, and more. We can also build a custom model to simulate any engineering or chemical process.",
    image: "/images/services/number-5.png",
  },
  {
    title: "Data Historian",
    description:
      "We will help you set up and maintain a time series database built for industrial automation. Count on us to normalize your data across different facilities, create a tag nomenclature and perform calculations with custom views.",
    image: "/images/services/number-6.png",
  },
];

const ServiceList = () => {
  return (
    <ul className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES_CONTENT.map((service) => (
        <ServiceItem
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
