import { notFound } from "next/navigation";
import careerData from "@/components/Career/careerData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const CareerDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const career = careerData.find((job) => job.slug === slug);

  if (!career) {
    return notFound();
  }

  return (
    <>
      <Breadcrumb pageName={career.title} description={career.description} />
      <div className="container mx-auto py-16">
        <h1 className="mb-4 text-3xl font-bold">{career.title}</h1>
        <div className="mb-4">
          <span className="mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
            {career.type}
          </span>
          <span className="mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
            {career.field}
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
            {career.location}
          </span>
        </div>
        <p className="mb-4 text-lg font-semibold">{career.salary}</p>
        <p className="mb-4">{career.description}</p>
        <h2 className="mb-2 text-2xl font-semibold">Responsibilities</h2>
        <ul className="mb-4 list-inside list-disc">
          {career.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <h2 className="mb-4 text-2xl font-semibold">Qualifications</h2>
        <ul className="list-inside list-disc">
          {career.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
        <h2 className="mb-4 mt-4 text-2xl font-semibold">Eligibility</h2>
        <p>{career.eligibility}</p>
      </div>
    </>
  );
};

export default CareerDetails;
