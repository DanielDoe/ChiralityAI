"use client";
import { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div>
      {/* Section 2: Tabs */}
      <div className="container mx-auto py-16">
        <div className="mb-8 flex justify-around border-b-2 border-gray-300 dark:border-gray-700">
          <button
            className={`px-4 py-2 text-xl font-medium ${activeTab === "mission" ? "border-b-4 border-primary text-primary" : "text-gray-600"}`}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
          <button
            className={`px-4 py-2 text-xl font-medium ${activeTab === "vision" ? "border-b-4 border-primary text-primary" : "text-gray-600"}`}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </button>
          <button
            className={`px-4 py-2 text-xl font-medium ${activeTab === "history" ? "border-b-4 border-primary text-primary" : "text-gray-600"}`}
            onClick={() => setActiveTab("history")}
          >
            Our History
          </button>
        </div>
        <div className="px-4">
          {activeTab === "mission" && (
            <div className="flex flex-row items-center gap-8">
              <div
                className="h-96 w-96 rounded-md"
                style={{
                  backgroundImage: `url(/images/about/2922242_26964.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label="Mission Image"
              />
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">
                  Our mission at Chirality Research Inc. is to leverage
                  cutting-edge AI and data analytics to deliver innovative
                  solutions that enhance operational efficiency, safety, and
                  sustainability. We strive to provide our clients with the
                  tools they need to solve complex challenges and drive success
                  in their respective industries.
                </p>
              </div>
            </div>
          )}
          {activeTab === "vision" && (
            <div className="flex flex-row items-center gap-8">
              <div
                className="h-96 w-96 rounded-md"
                style={{
                  backgroundImage: `url('/images/about/27304920_na_april_14.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label="Vision Image"
              />
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">
                  Our vision is to be a global leader in AI and data analytics,
                  known for our commitment to excellence, innovation, and
                  sustainability. We aim to create a future where technology and
                  human ingenuity work together to solve the world&apos;s most
                  pressing problems.
                </p>
              </div>
            </div>
          )}
          {activeTab === "history" && (
            <div className="flex flex-row items-center gap-8">
              <div
                className="h-96 w-96 rounded-md"
                style={{
                  backgroundImage: `url('/images/about/2148456078.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label="Histroy Image"
              />
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-400">
                  Equipped by a firm grip on science and driven by an
                  entrepreneurial spirit, Dr. Ismail launched Chirality’s
                  journey by deploying his expertise in physical chemistry to
                  manage production chemicals. He quickly spotted loopholes in
                  the way the industry worked and plugged these holes with
                  innovative solutions. Engineers and insightful scientific
                  minds were brought on board to use automated models for
                  predicting potential glitches in pipelines. Combining
                  knowledge on gathering data and the technology to analyze it,
                  Chirality Research Inc. has grown to become a key player in
                  enhancing operational efficiency and sustainability across
                  various industries.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;
