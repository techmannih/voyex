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
    <div className=" text-white mt-32 mx-[60px] max-md:mx-[16px] smooth-scroll">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <p className="text-[rgba(70,186,60,1)]">Use Templates</p>
        <h1 className="font-fk-grotesk text-[48px] font-bold leading-[61.44px] tracking-[0.02em] mb-4">
          Get Started with our Templates options
        </h1>
        <button className="mt-4 bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black py-2 px-6 rounded-full text-[14px] font-medium leading-[17.92px] custom-border">
          See All Templates
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-8 max-w-7xl mx-auto p-2">
        {templateData.map((template) => (
          <div
            key={template.id}
            className="w-[333.17px] h-[228px] p-[24px] border border-gray-700 rounded-[25px] flex flex-col justify-between backdrop-blur-3xl"
            style={{
              background:
                "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
            }}
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
            <h1 className="text-[16px] font-bold leading-[20.48px] items-center">
              {template.title}
            </h1>

            <p
              className="mt-2 text-sm font-light leading-[17.92px] text-left"
              style={{ fontSize: "14px", color: "rgba(244, 244, 244, 1)" }}
            >
              {truncateDescription(template.description, 8)}
            </p>

            <div className="mt-2 flex flex-wrap gap-1">
              {template.tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-gray-700 text-white py-1 px-2 rounded-full text-xs font-light"
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
