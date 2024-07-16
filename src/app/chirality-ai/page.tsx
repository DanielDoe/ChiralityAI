import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactSection from "@/components/Contact/ContactSection";
import Sidebar from '@/components/ChiralityAI/Sidebar';
import MainContent from '@/components/ChiralityAI/MainContent';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chirality AI | Chirality Research Inc.",
  description: "Learn more about Chirality AI, our innovative solutions and how we are transforming various industries with advanced AI technology.",
};

const ChiralityAIPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Chirality AI"
        description="Discover Chirality AI, our cutting-edge technology solutions transforming industries with advanced AI."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
            <Sidebar />
            <MainContent />
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default ChiralityAIPage;
