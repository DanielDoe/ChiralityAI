// page.tsx
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import UseCases from "@/components/UseCases/UseCases";

export const metadata = {
  title: "Use Cases | Chirality Research Inc.",
  description:
    "Explore the various use cases and publications by Chirality Research Inc.",
};

const UseCasesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Use Cases"
        description="Explore the various use cases and publications by Chirality Research Inc."
      />
      <div className="container mx-auto py-16">
        <UseCases />
      </div>
    </>
  );
};

export default UseCasesPage;
