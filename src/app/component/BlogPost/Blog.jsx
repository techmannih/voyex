'use client';
import React, { useState } from "react";
import blogPostData from "./data"; 
import Image from "next/image";

export default function BlogPost() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const itemsToShow = 3;

  const nextPosts = () => {
    if (currentIndex < blogPostData.length - itemsToShow) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setFade(false);
      }, 700);
    }
  };

  const prevPosts = () => {
    if (currentIndex > 0) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setFade(false);
      }, 700);
    }
  };

  const displayedPosts = blogPostData.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="px-10 text-white mt-20">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <p className="text-[rgba(70,186,60,1)]">Blogpost</p>
        <h1 className="font-fk-grotesk text-[48px] font-bold leading-[61.44px] tracking-[0.02em] mb-4">
          Insights, Ideas, and Stories Worth Sharing
        </h1>
      </div>

      <div className={`flex justify-center flex-wrap gap-6 mt-8 max-w-6xl mx-auto p-2 transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {displayedPosts.map((post) => (
          <div
            key={post.id}
            className="w-[349.33px] h-[222.36px] p-4 border border-solid border-white rounded-[20px] flex flex-col"
          >
            <div className="relative w-full mb-2">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <h1 className="text-lg font-bold">{post.title}</h1>
            <p className="mt-2">{post.content}</p>
            <p className="text-gray-400 text-sm mt-2">{post.date}</p>
            <button className="mt-4 bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black py-1 px-4 rounded-full">
              Read Blog
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 relative">
        <button 
          onClick={prevPosts} 
          disabled={currentIndex === 0}
          className="text-black bg-[rgba(70,186,60,1)] py-2 px-4 rounded-full"
        >
          &lt;
        </button>
        <button 
          onClick={nextPosts} 
          disabled={currentIndex >= blogPostData.length - itemsToShow}
            className="text-black bg-[rgba(70,186,60,1)] py-2 px-4 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
