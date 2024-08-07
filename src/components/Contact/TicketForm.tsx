// TicketForm.tsx
"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: "Chirality Research Inc.",
      message: formData.message,
      email: formData.email,
    };

    emailjs
      .send(
        "service_fqrk5mi",
        "template_km0ufug",
        templateParams,
        "uEP_QoSj8qhcsJxFz",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Ticket submitted successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus(
            "There was an issue with the ticket submission. Please try again.",
          );
        },
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mb-12 h-full rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
      <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Need Help? Open a Ticket
      </h2>
      <p className="mb-12 text-base font-medium text-body-color">
        Our support team will get back to you ASAP via email.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your Message"
                value={formData.message}
                onChange={handleChange}
                className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              ></textarea>
            </div>
          </div>
          <div className="w-full px-4">
            <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
              Submit Ticket
            </button>
          </div>
        </div>
      </form>
      {status && (
        <div className="mt-4 w-full px-4">
          <p className="text-sm text-green-500">{status}</p>
        </div>
      )}
    </div>
  );
};

export default TicketForm;
