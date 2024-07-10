import { notFound } from 'next/navigation';
import Breadcrumb from "@/components/Common/Breadcrumb";
import careerData from "./careerData";

const CareerDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const career = careerData.find((job) => job.slug === slug);

  if (!career) {
    return notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={career.title}
        description={career.description}
      />
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-4">{career.title}</h1>
        <div className="mb-4">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{career.type}</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">{career.field}</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">{career.location}</span>
        </div>
        <p className="text-lg font-semibold mb-4">{career.salary}</p>
        <p className="mb-4">{career.description}</p>
        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside mb-4">
          {career.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Qualifications</h2>
        <ul className="list-disc list-inside mb-4">
          {career.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
        <p>{career.eligibility}</p>
      </div>
    </>
  );
};

export default CareerDetails;
