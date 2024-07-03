// pages/client-results/page.tsx
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ClientResultsDetails from '@/components/Clients/ClientResultsDetails';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results | Chirality Research Inc.",
  description: "Explore our client results and discover how Chirality Research Inc. has helped various industries achieve their goals through advanced AI and data analytics solutions.",
  // other metadata
};

const ClientResultsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Client Results"
        description="At Chirality Research Inc., our clients' success is our success. Explore how we have helped businesses across various industries achieve their goals with our innovative AI and data analytics solutions."
      />
      <ClientResultsDetails />
    </>
  );
};

export default ClientResultsPage;
