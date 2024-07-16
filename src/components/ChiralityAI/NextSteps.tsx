import React from "react";

const NextSteps = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white">
          Strategize with Our Experts
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Get started quickly with a personalized AI strategy session tailored
          for your needs. Discover where AI can make the biggest impact and how
          ChiralityAI can elevate your tech investments.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Sign up for a session
          </a>
          <a
            href="/newsletter"
            className="inline-block rounded-md border border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Stay informed on AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
