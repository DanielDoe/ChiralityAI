import Link from "next/link";

const partners = [
  { name: "afs", logo: "/images/partners/afs.png" },
  { name: "baker", logo: "/images/partners/baker.png" },
  { name: "benchmark", logo: "/images/partners/benchmark.png" },
  { name: "canary", logo: "/images/partners/canary.png" },
  { name: "companyA", logo: "/images/partners/companyA.png" },
  { name: "conoco", logo: "/images/partners/conoco.png" },
  { name: "dp", logo: "/images/partners/dp.png" },
  { name: "evolve", logo: "/images/partners/evolve.png" },
  { name: "exxon", logo: "/images/partners/exxon.jpg" },
  { name: "g2mt", logo: "/images/partners/g2mt.png" },
  { name: "hali", logo: "/images/partners/hali.png" },
  { name: "inplex", logo: "/images/partners/inplex.png" },
  { name: "kosmos", logo: "/images/partners/kosmos.png" },
  { name: "maverick", logo: "/images/partners/maverick.jpg" },
  { name: "mesquite", logo: "/images/partners/mesquite.png" },
  { name: "mrl", logo: "/images/partners/mrl.png" },
  { name: "murphy", logo: "/images/partners/murphy.png" },
  { name: "ne", logo: "/images/partners/ne.png" },
  { name: "repsol", logo: "/images/partners/repsol.png" },
  { name: "sanchez", logo: "/images/partners/sanchez.png" },
  { name: "strathecona", logo: "/images/partners/strathecona.png" },
  { name: "tour", logo: "/images/partners/tour.jpg" },
  { name: "triton", logo: "/images/partners/triton.png" },
  { name: "vermilion", logo: "/images/partners/vermilion.jpg" },
];

const PartnerSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-bg-color-dark">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-300 dark:border-gray-700" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold dark:bg-bg-color-dark">
            Our Trusted Partners
          </h2>
        </div>
        <div className="partner-slider flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-8">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href="#"
              className="mx-2 flex items-center space-x-4"
            >
              <div
                className="h-24 w-44 bg-white bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${partner.logo})` }}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
