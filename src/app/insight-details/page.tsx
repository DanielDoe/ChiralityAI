// pages/insight-details/page.tsx
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import InsightDetails from "@/components/Insight/InsightDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Chirality Research Inc.",
  description: "Explore our insights and discover how Chirality Research Inc. is driving innovation in the oil and gas industry through advanced AI and data analytics solutions.",
  // other metadata
};

const InsightDetailsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Insights"
        description="Discover how Chirality Research Inc. is driving innovation in the oil and gas industry with our insights and advanced AI and data analytics solutions."
      />
      <InsightDetails />
    </>
  );
};

export default InsightDetailsPage;
