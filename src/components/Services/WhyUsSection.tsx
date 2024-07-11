const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative flex h-96 flex-wrap items-center justify-center lg:justify-start">
              <div className="h-full w-1/2 p-2">
                <div
                  className="relative aspect-video h-[70%] w-full overflow-hidden rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(/images/services/why-us-1.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  role="img"
                  aria-label="Placeholder image 1"
                ></div>
              </div>
              <div className="inline-flex h-full w-1/2 items-end justify-end p-2">
                <div
                  className="relative aspect-video h-[70%] w-full overflow-hidden rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(/images/services/why-us-2.jpg)`,
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
                <h3 className="mt-4 text-left text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl lg:text-4xl">
                  We're constantly pushing the boundaries
                </h3>
                <p className="mt-4 text-left text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg lg:text-xl">
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
  );
};

export default WhyUsSection;
