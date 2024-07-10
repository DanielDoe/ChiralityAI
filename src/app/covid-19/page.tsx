import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "COVID-19 Updates | Chirality Research Inc.",
  description: "Stay informed with the latest updates and research on COVID-19 from Chirality Research Inc. Our efforts are dedicated to providing accurate information and innovative solutions during the pandemic.",
};

const Covid19Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="COVID-19 Updates"
        description="Stay informed with the latest updates and research on COVID-19 from Chirality Research Inc. Our efforts are dedicated to providing accurate information and innovative solutions during the pandemic."
      />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">COVID-19 Updates</h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor. Suspendisse potenti. Proin et augue sit amet elit suscipit aliquam. Nulla facilisi. Curabitur auctor purus eu lectus bibendum, sit amet gravida libero efficitur. Aenean non turpis nisl. Morbi in quam bibendum, tincidunt est at, consectetur mi.
          </p>
          <p>
            Vivamus et orci ac velit luctus tincidunt. Ut vulputate ligula id arcu tristique, non facilisis lorem tincidunt. Integer vitae nunc metus. Morbi non sapien eget risus aliquam convallis at vel dui. Vestibulum suscipit eros libero, in scelerisque augue scelerisque ac.
          </p>
        </div>
      </section>
    </>
  );
};

export default Covid19Page;
