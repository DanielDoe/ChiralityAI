import Link from "next/link";
import careerData from "./careerData";

const CareerList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {careerData.map((career) => (
        <div
          key={career.slug}
          className="rounded-lg bg-white p-6 shadow-md dark:bg-bg-color-dark"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{career.title}</h2>
            <span className="text-lg font-semibold text-blue-600">
              {career.salary}
            </span>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{career.type}</p>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {career.field}
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {career.location}
          </p>
          <div className="flex flex-row justify-end">
            <Link href={`/career/${career.slug}`}>
              <p className="w-full rounded bg-blue-600 px-4 py-2 text-center text-white">
                Apply Now
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
