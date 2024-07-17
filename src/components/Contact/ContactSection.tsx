import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('/images/services/why-us-1.jpg')` }}
    >
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            From the well to the pump, we&apos;ve got you covered
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white sm:text-xl">
            We look forward to partnering with you and delivering excellence in
            the oil industry.
          </p>
          <Link href="/contact">
            <div className="inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600">
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
