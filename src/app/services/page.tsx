import Link from "next/link";

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
                  className="inline-flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#F5F7F9] p-10 shadow-sm"
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
                  <p className="text-lg font-bold dark:text-black">
                    {service.title}
                  </p>
                  <p className="text-center dark:text-black">
                    {service.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <div className="w-1/2 p-2">
                  <div
                    className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url('/images/services/why-us-1.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label="Placeholder image 1"
                  ></div>
                </div>
                <div className="w-1/2 p-2">
                  <div
                    className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url('/images/services/why-us-2.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label="Placeholder image 2"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="lg:ml-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-left font-bold uppercase tracking-wide text-primary">
                    WHY US
                  </h2>
                  <h3 className=" mt-4 text-left text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl lg:text-4xl">
                    We're constantly pushing the boundaries
                  </h3>
                  <p className=" mt-4 text-left text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg lg:text-xl">
                    At ChiralityAI, we’re committed to delivering excellence
                    across various industries. With our state-of-the-art
                    technology and advanced processes, we’re able to provide
                    innovative solutions to meet the evolving needs of our
                    clients worldwide.
                  </p>
                </div>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <div className="mr-8 text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-primary">20+</h4>
                    <p className="mt-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      Years on market
                    </p>
                  </div>
                  <div className="mr-8 text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-primary">3K+</h4>
                    <p className="mt-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      Big projects
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <h4 className="text-3xl font-bold text-primary">60+</h4>
                    <p className="mt-2 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      Trusted partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url('/images/services/why-us-1.jpg')` }}
      >
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              From the well to the pump, we've got you covered
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white sm:text-xl">
              We look forward to partnering with you and delivering excellence
              in the oil industry.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
    </>
  );
};

export default ServicePage;
