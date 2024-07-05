import Link from "next/link";

const partners = [
  { name: "Company One", logo: "/images/partners/image-holder.png" },
  { name: "Company Two", logo: "/images/partners/image-holder.png" },
  { name: "Company Three", logo: "/images/partners/image-holder.png" },
  { name: "Company Four", logo: "/images/partners/image-holder.png" },
  { name: "Company Five", logo: "/images/partners/image-holder.png" },
  { name: "Company Six", logo: "/images/partners/image-holder.png" },
  { name: "Company Seven", logo: "/images/partners/image-holder.png" },
  { name: "Company Eight", logo: "/images/partners/image-holder.png" },
  { name: "Company Nine", logo: "/images/partners/image-holder.png" },
  { name: "Company Ten", logo: "/images/partners/image-holder.png" },
  // Add more partners as needed
];

const PartnerSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <div className="relative mb-8">
          <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border-t border-gray-300" />
          <h2 className="relative z-10 inline-block bg-white px-4 text-3xl font-semibold">
            Our Trusted Partners
          </h2>
        </div>
        <div
          className="partner-slider"
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {partners.map((partner, index) => (
            <Link
              key={index}
              href="#"
              className="mx-2 flex items-center space-x-4"
            >
              <div
                className="h-10 w-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${partner.logo})` }}
              />
              <span className="text-xl font-bold text-gray-700 text-primary">
                {partner.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
