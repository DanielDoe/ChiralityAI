import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import InsightsSection from "@/components/Insight/InsightsSection";
import EnergySectorExpertise from "@/components/Sector/EnergySectorExpertise";
import ReportSection from "@/components/Report/ReportSection";
import OilGasExperience from "@/components/Experience/OilGasExperience";
import ClientResultsSection from "@/components/Clients/ClientResultsSection";
import TeamSection from "@/components/Teams/TeamSection";
import PartnerSection from "@/components/partners/PartnerSection";
import SlidingImageSection from "@/components/carousel/SlidingImageSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chirality Research Inc.",
  description: "This is Home for Chirality AI & Research",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <SlidingImageSection />
      <Features />
      <OilGasExperience />
      <ClientResultsSection />
      <TeamSection />
      <Testimonials />
      <ReportSection />
      <InsightsSection />
      <EnergySectorExpertise />
      <AboutSectionOne />
      <PartnerSection />
      <Projects />
      <Contact />
    </>
  );
}
