import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our History
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Founded by Dr. Ismail, ChiralityAI began with a strong
                  foundation in physical chemistry and an entrepreneurial
                  spirit. Identifying gaps in the industry, we implemented
                  innovative solutions and automated models to anticipate and
                  address potential issues in real-time. Our journey has been
                  marked by growth and success, driven by our expertise in data
                  analysis and technological innovation.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Belief
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We believe in the power of scientific curiosity and the
                  trial-and-error method. This approach allows us to quickly
                  test and refine ideas, saving time and costs for our clients.
                  Our commitment to innovation drives us to continuously learn
                  and improve, ensuring we deliver the best AI solutions.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Principles
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our guiding principles are:
                </p>
                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>Try, fail, and improve until you succeed.</li>
                  <li>Continuously experiment and learn.</li>
                  <li>Act quickly to cut costs and drive efficiency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
