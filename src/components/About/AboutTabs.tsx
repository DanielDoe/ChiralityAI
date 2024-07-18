import { useState } from "react";
import PartnerSection from "../partners/PartnerSection";

const AboutTabs = () => (
  <>
    <ul className="container mx-auto flex flex-col gap-24 py-12 md:flex-row">
      <li className="flex flex-1 flex-col gap-4">
        <svg
          width={36}
          height={36}
          viewBox="0 0 512 512"
          className="fill-gray-900 dark:fill-gray-100"
        >
          <path d="M253.5 5.8c-1.1.2-3.1 1.4-4.4 2.5-1.3 1.2-16.3 20.3-33.4 42.4l-31 40.3h-51.8c-38 0-52.5.3-54.4 1.2-3 1.4-5.5 5.5-5.5 9.3 0 3.6 44.4 91.9 47.2 93.9 1.2.9 3.5 1.6 5.1 1.6h2.8l-.3 6.2c-.3 5.8-.4 6.2-3.3 7.1-4.4 1.5-9.3 5-12.1 8.8-4.5 6.2-5.4 11.5-5.4 33.5 0 18.8.2 20.9 2.5 28.1 4.4 13.8 13 24.5 24.2 30.1l5.1 2.5 1.7 9.1c8.1 44.6 42.7 92.6 80 111.1 24.5 12.1 46.5 12.1 71 0 37.3-18.5 71.9-66.5 80-111.1l1.7-9.1 5.1-2.5c11.2-5.6 19.8-16.3 24.2-30.1 2.3-7.3 2.5-9.2 2.5-28.5-.1-17.1-.4-21.6-1.8-25.8-2.8-8.1-7.8-13.1-15.7-16-2.8-1-3-1.4-3.3-7.2-.3-5.5-.1-6.2 1.6-6.2 4.8 0 7.4-4.3 29.3-48.2 22.3-44.6 23.5-47.9 20.9-52.9-2.6-4.8-3.3-4.9-58.7-4.9h-51.8l-30.3-40.3c-16.6-22.2-31-41.2-32.1-42.1-2.2-2-6.9-3.4-9.6-2.8zm31 65.8c16.2 21.7 29.1 38.2 30.7 39 2.2 1.1 10.8 1.4 48.3 1.4 25 0 45.5.2 45.5.5s-7.1 14.7-15.7 32L377.5 176H133l-16-32-16-32h45.7c34.4 0 46.4-.3 48.2-1.3 1.4-.6 15.6-18.2 31.5-38.9 16-20.8 29.3-37.7 29.6-37.7.3 0 13.1 16.9 28.5 37.5zM363 210.1c0 12.9 0 13.1 2.8 15.8 2.2 2.2 4 2.9 9 3.5 9.3 1.1 9.4 1.3 9 24.3l-.3 18.8-3.2 6c-4.6 8.9-9.3 13.2-16.2 14.6-3.1.6-6.4 1.5-7.3 2-3 1.6-4.5 6-5.3 14.9-3.9 46-44.1 99.3-82.7 109.6-6.4 1.7-18.2 1.8-24.6.3-7.8-1.8-22.5-9.5-30.4-15.7-20.9-16.7-39.9-44.1-48.3-69.7-2.8-8.8-5.5-22.6-5.5-28.7 0-4.4-2.2-9.3-4.8-10.7-.9-.5-4.2-1.4-7.3-2-6.9-1.4-11.6-5.7-16.2-14.6l-3.2-6-.3-18.8c-.4-23-.3-23.2 9-24.3 5-.6 6.8-1.3 9-3.5 2.8-2.7 2.8-2.9 2.8-15.8V197h214v13.1zM137.5 400.7c-34.6 5.2-63.7 27.2-76.4 57.7-5.3 12.7-9 31.8-7.7 39 1.4 7.1 8.7 11.1 15 8.1 4.5-2.2 6.2-6.1 6.9-16 1.8-24.8 17.1-47.7 39.7-59.4 9.6-5 16.2-6.9 27.7-8.1 11-1.2 13.6-2.2 15.8-6.5 2.3-4.1 1.4-9.3-2.1-12.6-2.1-1.9-3.7-2.4-9.2-2.5-3.7-.1-8 0-9.7.3zM359 400.6c-5.8 2.4-8.5 9.5-5.5 14.9 2.2 4.3 4.8 5.3 15.8 6.5 11.5 1.2 18.1 3.1 27.7 8.1 22.6 11.7 37.9 34.6 39.7 59.4.7 9.9 2.4 13.8 6.9 16 6.3 3 13.6-1 15-8.1.7-3.8-.9-17.5-3.1-25.9-10.3-39.3-46.1-68.7-86.5-71-4.7-.3-9.2-.2-10 .1z" />
        </svg>

        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-300">
          Our Mission
        </h3>
        <p className="text-sm leading-loose text-gray-700 dark:text-gray-300">
          Chirality Research has always thrived to achieve goals using cost
          effective Data solutions. At chirality our experts aim to design and
          develop applications and workflows in such a way that the entire
          process can be made simple and automated.
        </p>
      </li>
      <li className="flex flex-1 flex-col gap-4">
        <svg
          width={36}
          height={36}
          viewBox="0 0 512 512"
          className="fill-gray-900 dark:fill-gray-100"
        >
          <path d="M3.4 46.4 0 49.8v173.7C0 383.8.1 397.4 1.7 400c.9 1.6 2.7 3.3 4 3.9 1.5.7 12.4 1.1 30.3 1.1h28v6.5c0 8.1 1.9 12.1 6.7 14.1 4.4 1.9 8.3 1.1 11.4-2.2 2-2.1 2.5-3.9 2.9-10.2l.5-7.7 178-.5c97.9-.3 178.7-.9 179.6-1.3.8-.4 2.3-2.1 3.2-3.6 1.6-2.7 1.7-12.7 1.7-137.5V128h6.5c7.6 0 11.1-1.4 13.1-5.1 2.4-4.7 1.8-9.7-1.5-13-2.7-2.7-3.5-2.9-10.5-2.9H448V49.8l-3.4-3.4-3.4-3.4H6.8l-3.4 3.4zM427 96v32H21V64h406v32zm0 170.5V384H21V149h406v117.5z" />
          <path d="M50.3 85.7c-3.6.7-7.3 5.9-7.3 10.3 0 11.1 14.9 14.5 19.7 4.6 3.9-8.2-3.2-16.8-12.4-14.9zM91.3 86.6c-3.9 1.9-6.7 7.4-5.8 11.4.8 3.7 4.8 7.7 8.5 8.5 4.1.9 9.5-1.9 11.4-6 2-4.1 2-4.9 0-9-1.5-3.2-6.5-6.5-9.6-6.5-.7 0-2.7.8-4.5 1.6zM135.2 86.2c-3.6 1-7.2 5.7-7.2 9.6 0 6.4 6.9 12 13.1 10.7 4.2-.9 7.9-5.8 7.9-10.5 0-7-6.6-11.7-13.8-9.8zM483.3 110.5c-3.2 3.2-3.5 4-3 7.6.6 4.8 3.8 8.5 7.8 9.4 1.9.4 2.9 1.3 2.9 2.5 0 2.8 4.7 7.8 7.9 8.5 4.1.9 9.6-1.7 11.5-5.4 1.1-2 1.6-5.7 1.6-11.2 0-7.9-.1-8.2-3.4-11.5-3.4-3.4-3.5-3.4-12.6-3.4-9.2 0-9.2 0-12.7 3.5zM498.3 182.2c-1.7.4-4.1 2-5.2 3.4-1.9 2.4-2.1 4-2.1 16.5 0 8 .5 14.8 1.1 16.3 2.8 6 12.2 7.1 17 2 2.3-2.4 2.4-3.4 2.7-16.1.4-13.5-.4-17.9-3.3-20.3-2.3-1.9-6.9-2.7-10.2-1.8zM493.9 269.9l-2.9 2.9v30.4l2.9 2.9c4.8 4.7 13 3.7 16.4-2.1 1.4-2.3 1.7-5.5 1.7-16.5v-13.7l-3.4-3.4c-4.6-4.6-10.4-4.8-14.7-.5zM495.8 353.7c-4.2 2.6-4.8 5.4-4.8 20.3 0 13.4.1 14 2.5 16.8 3.2 3.8 7.2 4.8 11.8 2.8 5.9-2.4 6.9-5.6 6.5-21.7-.3-13.4-.4-13.9-2.9-16.5-3.3-3.3-9.4-4.1-13.1-1.7zM71.2 438.2c-5.1 1.4-7.2 5.7-7.2 15.1 0 13 2.8 15.7 16 15.7 9.3 0 12.2-1.1 14.5-5.5 3.3-5.9-.1-13.4-6.7-15-1.8-.5-2.8-1.4-2.8-2.6 0-2.6-4-6.8-7.5-7.8-1.6-.4-4.5-.4-6.3.1zM498.3 438.2c-3.5.9-7.3 5-7.3 7.8 0 1.1-1.1 2-2.7 2.5-6.7 1.6-10.1 9.1-6.8 15 2.3 4.4 5.2 5.5 14.5 5.5 13.2 0 16-2.7 16-15.7 0-6-.5-8.5-2-11.1-1.1-1.7-2.1-3.2-2.2-3.2-.2 0-1.7-.4-3.3-.8-1.7-.5-4.4-.5-6.2 0zM143.8 449.7c-5.6 3.5-6.6 11.7-1.9 16.4l2.9 2.9h30.4l2.9-2.9c4.7-4.8 3.7-13-2.1-16.4-4.1-2.4-28.3-2.4-32.2 0zM231 448.7c-5.7 2.1-8.5 9.4-5.5 14.8 2.5 4.8 5 5.5 20.5 5.5 13.4 0 14-.1 16.8-2.5 3.8-3.2 4.8-7.2 2.8-11.8-2.3-5.7-5.5-6.7-20.3-6.6-7 0-13.5.3-14.3.6zM314.4 449.9c-3.6 2.2-5.8 7.5-4.8 11.5.3 1.4 2 3.7 3.6 5.1 2.8 2.4 3.5 2.5 16.8 2.5 8.1 0 14.9-.5 16.4-1.1 6-2.8 7.1-12.2 2-17-2.4-2.3-3.3-2.4-16.7-2.7-12.7-.2-14.5-.1-17.3 1.7zM399.8 449.7c-5.6 3.5-6.6 11.7-1.9 16.4l2.9 2.9h30.4l2.9-2.9c4.7-4.8 3.7-13-2.1-16.4-4.1-2.4-28.3-2.4-32.2 0z" />
        </svg>

        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-300">
          Our Vision
        </h3>
        <p className="text-sm leading-loose text-gray-700 dark:text-gray-300">
          Chirality Research Inc aims to come up with a business model that
          would help its client organization to implement work process that
          would compliant with ESG policies.
        </p>
      </li>
    </ul>

    <h2 className="container mx-auto my-8 text-4xl font-bold">
      Learn More About Us
    </h2>

    <ul className="container mx-auto">
      <li className="mb-8">
        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-700">
          Our History
        </h3>
        <p className="text-sm leading-loose">
          Equipped by a firm grip on science and driven by an entrepreneurial
          spirit, Dr Ismail launched Chirality’s journey by deploying his
          expertise in physical chemistry to manage production chemicals. He
          quickly spotted loopholes in the way the industry worked and plugged
          these holes with innovative solutions. Engineers and insightful
          scientific minds were brought on board to use automated models for
          giving a heads up on possible glitches in pipelines. Combining
          knowledge on gathering data and the tech to analyse it triggered
          growth and success for the company that is geared up to boost your
          business with services including:
        </p>
      </li>

      <li className="mb-8">
        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-700">
          Our Belief
        </h3>
        <p className="text-sm leading-loose">
          The scientific instinct brings a natural curiosity which powers our
          trial and error method, which helps us figure out if an idea can work
          or not within a few hours without waiting till most of the work is
          done. Goes without saying that this approach says time and since time
          is money, we help you save a lot on costs as well.
        </p>
      </li>

      <li className="mb-8">
        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-700">
          Our Secret Ingredient
        </h3>
        <p className="text-sm leading-loose">
          <strong>
            “Scientists don’t need years of data history to find correlations.
            Newton certainly did not.”
          </strong>
        </p>
        <p className="text-sm leading-loose">
          The conventional approach of gathering info for years before analysing
          it is just as outdated as the data can get in a rapidly changing
          world. We bring in a dynamic approach with curious minds that keep
          gathering and processing information continuously till we get the
          right outcome, which we do all the time.
        </p>
      </li>

      <li className="mb-8">
        <h3 className="mb-4 w-full border-b border-gray-300 py-4 dark:border-gray-700">
          Our Partners
        </h3>
        <PartnerSection className="" showHeader={false} />
      </li>
    </ul>
  </>
);

export default AboutTabs;
