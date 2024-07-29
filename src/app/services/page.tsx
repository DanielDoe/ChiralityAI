import Link from "next/link";
import ContactSection from "@/components/Contact/ContactSection";
import WhyUsSection from "@/components/Services/WhyUsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | ChiralityAI",
  description: "This is Services Page for ChiralityAI",
  // other metadata
};

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

const ServicePage = () => {
  return (
    <>
      <section className="relative z-10 pb-12 pt-36 md:pb-16 lg:pb-24 lg:pt-[192px]">
        <div className="inline-flex w-full flex-col gap-4">
          <p className="text-center font-bold uppercase tracking-wide text-primary">
            What we do
          </p>
          <h1 className="mx-auto mb-5 max-w-[48rem] text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            We&apos;re more than just an Oil & Gas Consultancy.
          </h1>
        </div>

        <div
          className="absolute right-0 top-0 z-[-1] h-[75%] w-[25%] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
          style={{ backgroundImage: `url(/images/background.png)` }}
        />

        <div
          className="absolute bottom-0 left-0 z-[-1] h-[75%] w-[25%] rotate-180 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
          style={{ backgroundImage: `url(/images/background.png)` }}
        />
      </section>

      <section
        className="h-96 w-full bg-black bg-cover bg-center bg-no-repeat lg:h-[33.75rem]"
        style={{ backgroundImage: `url(/images/services/services-hero.png)` }}
        role="img"
        aria-label="Services Hero Image"
      />

      <section className="relative py-28">
        <div className="flex w-full flex-col gap-4">
          <p className="text-center font-bold uppercase tracking-wide text-primary">
            Our Services
          </p>
          <h2 className="text-center text-xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
            Discover the range of <br className="hidden md:block" />
            services we offer
          </h2>

          <div
            className="absolute right-0 top-0 z-[-1] h-[20rem] w-[36%] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
            style={{ backgroundImage: `url(/images/background.png)` }}
          />
          <div
            className="absolute right-[36%] top-0 z-[-1] h-[20rem] w-[36%] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
            style={{ backgroundImage: `url(/images/background.png)` }}
          />
          <div
            className="absolute right-[67%] top-0 z-[-1] h-[20rem] w-[36%] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
            style={{ backgroundImage: `url(/images/background.png)` }}
          />

          <ul className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_CONTENT.map((service) => {
              return (
                <li
                  key={service.title}
                  className="inline-flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#F5F7F9] p-10 shadow-sm dark:bg-bg-color-dark"
                >
                  <div
                    className="h-20 w-20 rounded-full"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label="service icon"
                  />
                  <p className="text-lg font-bold ">{service.title}</p>
                  <p className="text-center ">{service.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default ServicePage;
