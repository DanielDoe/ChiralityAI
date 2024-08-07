import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
//import "../../styles/features.css";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Featured Capabilities"
            paragraph="Explore the wide range of AI services ChiralityAI offers to help your business thrive in a data-driven world."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" style={{ textAlign: "center" }}>
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div
            className="absolute right-0 top-0 z-[-1] h-[75%] w-[25%] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
            style={{ backgroundImage: `url(/images/background.png)` }}
          />

          <div
            className="absolute bottom-0 left-0 z-[-1] h-[75%] w-[25%] rotate-180 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-10 lg:opacity-100"
            style={{ backgroundImage: `url(/images/background.png)` }}
          />
        </div>
      </section>
    </>
  );
};

export default Features;
