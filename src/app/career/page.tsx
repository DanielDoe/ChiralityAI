import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import CareerList from "@/components/Career/CareerList";

export const metadata: Metadata = {
  title: "Careers | Chirality Research Inc.",
  description: "Explore career opportunities at Chirality Research Inc. Join our team and contribute to cutting-edge AI solutions for diverse industries.",
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Explore career opportunities at Chirality Research Inc. Join our team and contribute to cutting-edge AI solutions for diverse industries."
      />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <CareerList />
        </div>
      </section>
    </>
  );
};

export default CareerPage;
