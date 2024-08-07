import Breadcrumb from "@/components/Common/Breadcrumb";

import ProjectList from "@/components/Projects/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Page | ChiralityAI",
  description:
    "Explore our innovative AI projects and how they are transforming various industries.",
  // other metadata
};

const Project = () => {
  return (
    <>
      <Breadcrumb
        pageName="Project Highlights"
        description="Explore our innovative AI, data analysis, and operational efficiency projects that are transforming various industries, from oil and gas to healthcare."
      />

      <ProjectList />
    </>
  );
};

export default Project;
