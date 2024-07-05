// useCaseData.tsx
import { Case } from "@/types/usecase";

const useCaseData: { [key: string]: Case[] } = {
  operations: [
    {
      id: 1,
      title: "Implementation of a Metric-Driven, Statistical Chemical Management Program for Unconventional Plays",
      paragraph:
        "The challenges for operators in the Eagle Ford have been enormous, pushing chemical management to the back burner. Operators have become more mindful of implementing metric-driven chemical management programs to mitigate operating expenses and ensure flow assurance.",
      image: "/images/usecases/operations-one.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Operations"],
      publishDate: "2014",
    },
    {
      id: 2,
      title: "Pipeline Integrity: Data-Driven Pipeline Management System for Oil and Gas Transportation in Unconventional Plays",
      paragraph:
        "A data-driven approach to managing pipeline integrity in unconventional plays, addressing challenges in data consolidation and standardization to ensure the safety and efficiency of oil and gas transportation.",
      image: "/images/usecases/steel-pipelines-cables-plant.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Operations"],
      publishDate: "2015",
    },
    {
      id: 3,
      title: "Production Chemical Optimization",
      paragraph:
        "An innovative approach to optimizing chemical use in production operations, ensuring efficiency and cost-effectiveness through rigorous data analysis and performance tracking.",
      image: "/images/usecases/operations-two.png",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Operations"],
      publishDate: "2023",
    },
    {
      id: 4,
      title: "Digital Approach to Operations Management Empowers the Oil Field",
      paragraph:
        "Digital is replacing manual at Sanchez Oil & Gas. Since its implementation in 2017, the company’s Production Maintenance Tracker application has been transforming its operations management by bringing together all the assets, departments, and routes into one hub.",
      image: "/images/usecases/production-operations-alerts.jpg",
      author: {
        name: "Justin Bender",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Operations"],
      publishDate: "2019",
    },
  ],
  "data-historian": [
    {
      id: 1,
      title: "Data Historian and Trending Tool Transforms Company Operations",
      paragraph: "In 2018, Murphy Oil launched an initiative to open-source all internal live streaming data to its engineers. The process led it to implement a global data historian and a corresponding visualization tool. The insights provided are shaping the future of operations at the company.",
      image: "/images/usecases/data-historian.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Data Historian"],
      publishDate: "October 29, 2019",
    },
    {
      id: 2,
      title: "Proposed Framework Normalizes Completions Tags",
      paragraph: "Murphy Oil has created a work flow to normalize the tags it uses when collecting data on its hydraulic fracturing stages. The work flow described here empowers decision makers, who no longer wait for hours to collect data or waste hours cleaning and preparing data for analysis.",
      image: "/images/usecases/completions-tag-normalization.jpg",
      author: {
        name: "Molly Smith, Sarah Carr , Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Data Historian"],
      publishDate: "January 28, 2021",
    },
  ],
  reporting: [
    {
      id: 1,
      title: "Digital Tool Brings Clarity to Reporting of Downtime",
      paragraph: "Murphy Oil worked across its assets to create a tool called the Global Downtime Report (GDR). The GDR provides a global perspective of operational downtime data, focusing on nonproductive time related to drilling, completion, and production operations.",
      image: "/images/usecases/downtime-report.jpg",
      author: {
        name: "Dr. Huzeifa Ismail, Laura Naaykens, Mark Mick",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Reporting"],
      publishDate: "July 29, 2020",
    },
    {
      id: 2,
      title: "Data Science Offers Perspective on Downtime of Production Facilities Caused by Storms in the Gulf of Mexico",
      paragraph: "Tropical storms severely affect oil and gas production in the Gulf of Mexico, especially during the storm season from June to December. Offshore well managers often need to shut down operations and evacuate the facility because of storm alerts. The purpose of this paper is to determine the effect of storms on production by quantifying metrics such as downtime days and downtime percentage after the storm has passed and whether a facility’s platform type affected these metrics.",
      image: "/images/usecases/hurricane-downtime.jpg",
      author: {
        name: "Olasimbo Ogunde and Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Reporting"],
      publishDate: "June 16, 2021",
    },
    {
      id: 3,
      title: "Innovation Advances Digital Culture Throughout Company",
      paragraph: "A technology initiative is changing more than the digital landscape at Murphy Oil. Since its deployment in November 2018, Murphy Labs is changing the very culture of the corporation.",
      image: "/images/usecases/content-management-tool.jpg",
      author: {
        name: "Eric Hambly, Sean Aslam, and Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Reporting"],
      publishDate: "February 20, 2019",
    },
  ],
  "esg-hse": [
    {
      id: 1,
      title: "Carbon Intensity in GOM vs. Permian",
      paragraph: "A comparative study of carbon intensities in the Gulf of Mexico and Permian Basin, highlighting the environmental impacts.",
      image: "/images/usecases/carbon-intensity.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["ESG"],
      publishDate: "2023",
    },
    {
      id: 2,
      title: "HSE Behavioral Safety Program",
      paragraph: "Implementing a behavioral safety program to enhance health, safety, and environmental performance.",
      image: "/images/usecases/hse-safety-program.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["ESG"],
      publishDate: "2023",
    },
    {
      id: 3,
      title: "COVID Management in Oil & Gas Companies",
      paragraph: "Strategies for managing COVID-19 impacts in oil and gas companies to ensure operational continuity.",
      image: "/images/usecases/covid-management.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["ESG"],
      publishDate: "2023",
    },
    // Add more use cases here
  ],
  "upcoming-work": [
    {
      id: 1,
      title: "Implementing AI to Correlate Electricity Data",
      paragraph: "Sample description for AI implementation to correlate electricity data with weather forecast data for operational efficiency.",
      image: "/images/usecases/ai-electricity-data.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Upcoming"],
      publishDate: "2023",
    },
    {
      id: 2,
      title: "Leveraging LLM Models to Improve Subsurface Workflows",
      paragraph: "Sample description for leveraging LLM models to enhance subsurface workflows.",
      image: "/images/usecases/llm-models.jpg",
      author: {
        name: "Dr. Huzeifa Ismail",
        image: "/images/team/huz.jpg",
        designation: "Founder",
      },
      tags: ["Upcoming"],
      publishDate: "2023",
    },
    // Add more upcoming work here
  ],
};

export default useCaseData;
