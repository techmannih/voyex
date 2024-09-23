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
    <div className="text-white flex justify-center p-6 m-16">
      <div className="mb-6 w-[696px]">
        <p className="text-[rgba(70,186,60,1)] p-2">FAQs</p>
        <h1 className="font-bold text-[96px] leading-[122.88px] tracking-[0.02em]">
          What Explorers are Asking
        </h1>
      </div>
      <div className="space-y-4 mt-4 w-[600px]">
        {voyexFAQs.map((faq, index) => (
          <div
            key={index}
            className="faq-item p-4 rounded-full shadow-md"
            style={{
              background:
                "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              border: "1px solid rgba(49, 49, 49, 1)",
            }}
          >
            <div className=" flex justify-between items-center">
              <h2
                className="text-xl font-semibold cursor-pointer rouned-full"
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
              <p className="text-base mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
