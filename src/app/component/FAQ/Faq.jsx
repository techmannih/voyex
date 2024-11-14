"use client";
import React, { useState } from "react";
import voyexFAQs from "./data"; // Adjust the path as necessary
import { IoIosArrowDown } from "react-icons/io";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="  mx-[60px] max-md:mx-[16px] my-40 smooth-scroll">
      <div className="text-white flex items-start justify-between gap-6 flex-wrap">
        <div className="w-full md:w-[60%]">
          <p className="text-[rgba(70,186,60,1)] text-lg">FAQs</p>
          <h1 className="font-fk-grotesk text-[96px] font-medium leading-[123px] tracking-wider	 max-md:w-full text-left mt-3 max-md:text-[24px]	max-md:leading-[30.44px]">
            What Explorers are Asking
          </h1>
        </div>
        <div className="space-y-4 mt-4 w-[616px] max-md:w-full">
          {voyexFAQs.map((faq, index) => (
            <div
              key={index}
              className="faq-item p-4 rounded-3xl shadow-md transition-all"
              style={{
                background:
                  "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
                border: "1px solid rgba(49, 49, 49, 1)",
              }}
            >
              <div className=" flex justify-between items-center">
                <h2
                  className="text-[20px] leading-[25.6px] font-semibold cursor-pointer rouned-full tracking-wider	"
                  onClick={() => toggleAnswer(index)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") toggleAnswer(index);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {faq.question}
                </h2>
                <IoIosArrowDown className="text-[rgba(70,186,60,1)] text-2xl" />
              </div>

              {activeIndex === index && (
                <p className="text-base mt-2 tracking-wider leading-[25.6px]	">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
