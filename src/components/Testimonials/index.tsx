import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Murphy Oil Corporation",
    designation: "Client",
    content:
      "ChiralityAI's solutions have significantly enhanced our operational efficiency. Their AI technology has provided us with critical insights to optimize our processes and reduce costs.",
    image: "/images/partners/murphy.png",
    star: 5,
  },
  {
    id: 2,
    name: "Vermilion Energy",
    designation: "Client",
    content:
      "Partnering with ChiralityAI has transformed our data analysis capabilities. Their innovative AI applications have enabled us to make more informed decisions, improving our overall performance.",
    image: "/images/testimonials/vermilion-energy.png",
    star: 5,
  },
  {
    id: 3,
    name: "Kosmos Energy",
    designation: "Client",
    content:
      "ChiralityAI has been instrumental in advancing our AI initiatives. Their expertise in machine learning and AI has allowed us to leverage data in ways we never thought possible, driving substantial growth.",
    image: "/images/testimonials/kosmos-energy.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Partners Say"
          paragraph="Our partners in the oil and gas industry have experienced significant improvements in their operations and decision-making processes thanks to our advanced AI solutions. Here's what they have to say about working with ChiralityAI."
          center
        />
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
