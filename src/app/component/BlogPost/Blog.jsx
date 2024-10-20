"use client"; // Use client-side rendering

import React, { useState } from "react";
import blogPostData from "./data"; // Adjust the import path as necessary
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

// Utility function to truncate description
const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return description;
};

export default function BlogPost() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsToShow = 3; // Number of posts to show at once
  const totalPosts = blogPostData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalPosts - postsToShow + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPosts - postsToShow : prevIndex - 1
    );
  };

  return (
    <div className=" text-white mt-24">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <p className="text-[rgba(70,186,60,1)]">Blogpost</p>
        <h1 className="font-fk-grotesk text-[48px] font-bold leading-[61.44px] tracking-[0.02em] mb-4">
          Insights, Ideas, and Stories Worth Sharing
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto h-auto">
        <div className="flex justify-between items-center">
          <button onClick={prevSlide} className="arrow-button">
            <FaArrowLeft color="black" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-[8.5px]"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / postsToShow)
                }%)`,
                width: `${(totalPosts * 100) / postsToShow}%`,
              }}
            >
              {blogPostData.map((post) => (
                <div
                  key={post.id}
                  className="w-[397.33px] h-auto p-[24px] gap-[17px] border border-gray-700 rounded-[25px] flex flex-col m-2"
                  style={{
                    background:
                      "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
                  }}
                >
                  <div className="relative mb-2">
                    <Image
                      src={post.image}
                      alt={post.title}
                     
                      width={300}
                      height={180}
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border border-gray-700 text-white rounded-xl text-xs p-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-[30px] font-bold leading-[36px] text-left">
                    {truncateDescription(post.title, 4)}
                  </h1>

                  <p className="mt-2">
                    {truncateDescription(post.content, 10)}{" "}
                    {/* Truncated content */}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">{post.date}</p>
                  <div className="flex text-center justify-between items-center mt-auto">
                    <button className="bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black py-1 px-4 rounded-full w-full custom-border">
                      Read Blog
                    </button>
                    <CiBookmark className="text-3xl font-bold" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="arrow-button">
            <FaArrowRight color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}
