import React from "react";
import { Metadata } from "next";

import ChiralityAIContent from "@/components/ChiralityAI/ChiralityAIContent";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata: Metadata = {
  title: "Chirality AI | Chirality Research Inc.",
  description:
    "Learn more about Chirality AI, our innovative solutions and how we are transforming various industries with advanced AI technology.",
};

const ChiralityAIPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Chirality AI"
        description="Discover Chirality AI, our cutting-edge technology solutions transforming industries with advanced AI."
      />
      <ChiralityAIContent />
      <ContactSection />
    </>
  );
};

export default ChiralityAIPage;
