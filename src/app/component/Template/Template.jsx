import templateData from "./data";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return description;
};

export default function Template() {
  return (
    <div className="px-10 text-white">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <p className="text-[rgba(70,186,60,1)]">Use Templates</p>
        <h1 className="font-fk-grotesk text-[48px] font-bold leading-[61.44px] tracking-[0.02em] mb-4">
          Get Started with our Templates options
        </h1>
        <button className="mt-4 bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black py-2 px-4 rounded-full">
          See All Templates
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-6 mt-8 max-w-6xl mx-auto p-2">
        {templateData.map((template) => (
          <div
            key={template.id}
            className="w-[331.67px] p-[24px] border rounded-2xl border-[rgba(49, 49, 49, 1)]"
          >
            <div className="relative">
              <div className="flex items-center mb-2 justify-between">
                <Image
                  src={template.logo}
                  alt={truncateDescription(template.title, 1)}
                  width={40}
                  height={40}
                />
                <div className="ml-2 text-white text-2xl font-bold"></div>
              </div>
              <div className="absolute top-0 right-0 m-2 text-white text-2xl font-bold">
                <CiStar />
              </div>
            </div>

            <h1 className="text-lg font-bold">{template.title}</h1>
            <p className="mt-2 text-sm">
              {truncateDescription(template.description, 8)}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {template.tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-gray-700 text-white py-1 px-2 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
