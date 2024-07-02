import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutTabs from "../../components/About/AboutTabs";
import TeamSection from "@/components/About/TeamSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Chirality Research Inc.",
  description: "Learn more about Chirality Research Inc., a leader in AI innovation, providing advanced solutions to enhance operational efficiency, safety, and sustainability across various industries.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Chirality Research Inc. is at the forefront of AI innovation, providing advanced solutions to enhance operational efficiency, safety, and sustainability across various industries. Our expertise in artificial intelligence empowers businesses to tackle complex challenges and achieve their goals with precision and confidence."
      />
      <AboutTabs />
      <TeamSection />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
