import Breadcrumb from "@/components/Common/Breadcrumb";
import PublicationList from "@/components/publications/PublicationList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publication Page | ChiralityAI",
  description: "This is Publication Page for ChiralityAI",
};

const PublicationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Publications"
        description="Some details about publications and this will be shown here"
      />

      <PublicationList />
    </>
  );
};

export default PublicationPage;
