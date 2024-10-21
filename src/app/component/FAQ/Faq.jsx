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
    <div className="  mx-[60px]  my-40">
      <div className="text-white flex items-start justify-between gap-3 w-full">
        <div className="w-[696px]">
          <p className="text-[rgba(70,186,60,1)] ">FAQs</p>
          <h1 className="font-fk-grotesk text-[96px] font-medium leading-[123px] tracking-wide text-left mt-3">
            What
            <br /> Explorers are Asking
          </h1>
        </div>
        <div className="space-y-4 mt-4 w-[616px]">
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
                  className="text-xl font-semibold cursor-pointer rouned-full tracking-wide"
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
                <p className="text-base mt-2 tracking-wide">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
