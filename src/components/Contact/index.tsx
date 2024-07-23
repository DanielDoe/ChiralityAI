// Contact.tsx
"use client";

import TicketForm from "./TicketForm";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 grid auto-rows-fr grid-cols-12">
          <div className="col-span-12 px-4 xl:col-span-7">
            <TicketForm />
          </div>
          <div className="col-span-12 px-4 xl:col-span-5">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
