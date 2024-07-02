import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | ChiralityAI",
  description: "This is Services Page for ChiralityAI",
  // other metadata
};

const SERVICES_CONTENT = [
  {
    title: "Exploration and drilling",
    description:
      "This service involves finding and drilling new oil and gas reserves.",
  },
  {
    title: "Production and refining",
    description:
      "This service involves processing crude oil into refined products such as gasoline, diesel fuel.",
  },
  {
    title: "Transport and logistics",
    description:
      "Moving oil and gas safely and efficiently from production sites to distribution centers.",
  },
  {
    title: "Equipment and services",
    description:
      "Supplying essential equipment and services to the oil and gas industry.",
  },
  {
    title: "Environmental services",
    description:
      "Minimization the environmental impact of oil and gas operations.",
  },
  {
    title: "Renewable energy",
    description:
      "Investing in and developing renewable energy sources to reduce reliance on fossil fuels.",
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
            We&apos;re more than just an energy company.
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
                  className="inline-flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#F5F7F9] p-10 shadow-sm"
                >
                  <span className="h-20 w-20 rounded-full bg-primary" />
                  <p className="text-lg font-bold">{service.title}</p>
                  <p className="text-center">{service.description}</p>
                </li>
              );
            })}
            {/* <div className="rounded bg-white p-4 shadow">Item 1</div>
            <div className="rounded bg-white p-4 shadow">Item 2</div>
            <div className="rounded bg-white p-4 shadow">Item 3</div>
            <div className="rounded bg-white p-4 shadow">Item 4</div>
            <div className="rounded bg-white p-4 shadow">Item 5</div>
            <div className="rounded bg-white p-4 shadow">Item 6</div> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
