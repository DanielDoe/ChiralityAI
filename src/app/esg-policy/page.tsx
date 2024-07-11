import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactSection from "@/components/Contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG Policy | Chirality Research Inc.",
  description:
    "Discover Chirality Research Inc.'s commitment to Environmental, Social, and Governance (ESG) practices. Learn about our policies and efforts towards sustainability and responsible business conduct.",
};

const ESG_POLICIES = [
  {
    title: "ESG: Environment, Social & Governance",
    description: `We realize the importance of Environmental, Social and Governance standards in a company’s operations when it comes to investments in this age of rising awareness and accountability. We pay extra attention to ensure compliance to ESG norms by our partner firms by realigning functioning and organization of business operations in line with regulatory provisions. Needless to say using regular data analysis to track industrial waste and emissions from a facility give us and the management of our partner firms the right start on the path to responsible growth.`,
    imgUrl: "/images/services/why-us-1.jpg",
  },
  {
    title: "Environmental Approach",
    description: `What a company does to incorporate effective environmental conservation and cutting down on its impact on the ecosystem is a top concern given pollution and climate change woes. We at Chirality use a range of software including Python, PowerApps, Microsoft Azure and Tibco Spotfire to process data for coming up with figures indicating a client’s carbon footprint based on fuel consumption. This helps concerned segments within the company make the right cuts to reduce toll on the environment while maintaining sustainable growth.`,
    imgUrl: "/images/services/why-us-1.jpg",
  },
  {
    title: "Social Ethics",
    description: `Relationship with suppliers, satisfaction and protection of consumers, safety and fair conduct with employees along with how the business is able to give back to communities are factors that can’t be overlooked. Apps by Chirality keep clients updated about incidents taking place at rigs and offshore units that make sure firms devise an effective net of measures to keep employees safe. We know the role data analysis can play in creating a secure environment for workers operating on ground zero which boosts their confidence in their employer to create positive and productive work environments. In case of suppliers, increased transparency through the app creates a lasting bond of trust between clients and vendors.`,
    imgUrl: "/images/services/why-us-1.jpg",
  },
  {
    title: "Governance Policy",
    description: `Good governance is an inseparable part of effective business operations and leadership, regular payments and delivering value and security to shareholders form the core of a strong governance model. We have created a database of assets for each department which our clients can access easily through an app. This reduces workload on management personnel and auditors can have more organized and hassle free information regarding assets on their fingertips. Having records of payment and audit reports sorted can always help a firm follow a results oriented approach towards long-term growth.`,
    imgUrl: "/images/services/why-us-1.jpg",
  },
];

const EsgPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="ESG Policy"
        description="Discover Chirality Research Inc.'s tailored solutions to Environmental, Social, and Governance (ESG) practices. Learn about our policies and efforts towards sustainability and responsible business conduct."
      />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-16">
            {ESG_POLICIES.map(({ description, imgUrl, title }, index) => (
              <div
                key={index}
                className="inline-flex flex-row rounded-lg border border-gray-300 shadow-lg dark:border-gray-700 dark:shadow-sm dark:shadow-gray-950"
              >
                <div className="flex-1 p-8">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    {title}
                  </h2>
                  <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
                    {description}
                  </p>
                </div>

                <div
                  className="flex-1 rounded-r-lg bg-gray-950 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default EsgPolicyPage;
