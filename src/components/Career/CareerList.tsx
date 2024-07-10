import Link from "next/link";
import careerData from "./careerData";

const CareerList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {careerData.map((career) => (
        <div key={career.slug} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{career.title}</h2>
            <span className="text-lg font-semibold text-blue-600">{career.salary}</span>
          </div>
          <p className="text-gray-600 mb-4">{career.type}</p>
          <p className="text-gray-600 mb-4">{career.field}</p>
          <p className="text-gray-600 mb-4">{career.location}</p>
          <Link href={`/career/${career.slug}`}>
            <p className="inline-block bg-blue-600 text-white py-2 px-4 rounded">Apply Now</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
