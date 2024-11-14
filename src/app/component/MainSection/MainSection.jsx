"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VDO from "../../../../assets/Chat1.png";

const headings = [
  {
    text: (
      <>
        Turn{" "}
        <span style={{ color: "#84DE7C" }} className="font-medium">
          Ideas into Workflows
        </span>{" "}
        in one click
      </>
    ),
    width: "1100px",
  },
  {
    text: (
      <>
        Your{" "}
        <span style={{ color: "#84DE7C" }} className="font-medium">
          Search Engine
        </span>{" "}
        for AI
      </>
    ),
    width: "830px",
  },
  {
    text: (
      <>
        Your{" "}
        <span style={{ color: "#2DE21D" }} className="font-medium">
          mini AI powered agency
        </span>{" "}
        at your fingertips
      </>
    ),
    width: "1200px",
  },
];

export default function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <motion.div
      className="text-white text-center mx-[60px] smooth-scroll"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{  amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 50, damping: 20 }}
    >
      <h1
        className="font-medium leading-[110.08px] tracking-wider mx-auto mt-24 text-[86px] gap-[10px] max-sm:text-[48px] max-sm:leading-[61px] max-md:text-[72px] max-md:leading-[84px] max-lg:text-[86px] max-lg:leading-[110px] max-w-full"
        style={{ width: headings[currentIndex].width }}
      >
        {headings[currentIndex].text}
      </h1>

      <div className="flex justify-center mt-8">
        <p className="mt-2 text-center opacity-88 font-light w-[978px] text-[20px] leading-[25.6px] tracking-wider text-[rgba(255, 255, 255, 1)]">
          Voyex is your Superapp that allows you to get the right AI tools and
          the correct workflow as per your use case.{" "}
          <span className="max-md:hidden">
            {" "}
            It simplifies finding, using, and querying AI tools and creates your
            own mini agency. All you need to do is describe your use case in a
            few words.
          </span>
        </p>
      </div>

      <div className="flex justify-center max-md:items-center mt-8 gap-6 max-md:flex-col max-md:gap-[24px]">
        <button className="mt-8  max-md:mt-0 w-[208.45px] h-[36.91px] bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] rounded-full flex justify-center items-center opacity-100 px-6 custom-border">
          <span className="text-black text-[14px]">Start Your AI Journey</span>
        </button>
        <button className="mt-8  max-md:mt-0 w-[208.45px] h-[38.91px] border-[1.48px] border-solid border-[rgba(70,186,60,1)] rounded-full opacity-100 flex justify-center px-6 items-center">
          <span className="text-[rgba(70,186,60,1)]">Upload Product</span>
        </button>
      </div>

      <div className="relative mb-2 items-center flex justify-center my-24">
        <Image src={VDO} alt="Video" width={1100} height={624} />
      </div>
    </motion.div>
  );
}
