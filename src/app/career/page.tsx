import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import CareerList from "@/components/Career/CareerList";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata: Metadata = {
  title: "Careers | Chirality Research Inc.",
  description:
    "Explore career opportunities at Chirality Research Inc. Join our team and contribute to cutting-edge AI solutions for diverse industries.",
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Explore career opportunities at Chirality Research Inc. Join our team and contribute to cutting-edge AI solutions for diverse industries."
      />
      <section className="bg-gray-100 py-16 dark:bg-black">
        <div className="container mx-auto">
          <CareerList />
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default CareerPage;
