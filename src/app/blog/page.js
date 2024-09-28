'use client'
import Navbar from "@/app/component/Navbar/Navbar";
import { CiBookmark } from "react-icons/ci";
import blogPostData from "../component/BlogPost/data";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPosts = blogPostData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPostData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="text-white">
      <Navbar />
      <div className="m-20 p-4 flex">
        <div className="w-[300px] h-[296px] opacity-100">
          <h1 className="text-xl font-bold">KEY ARTICLES</h1>
          <div className="flex flex-col gap-6 w-[214px]">
            {[
              "New Listing",
              "Artificial Intelligence",
              "Startups",
              "Finances",
              "Large Language Models",
              "New Templates",
              "New Features",
            ].map((article) => (
              <label key={article} className="flex items-center gap-2 py-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                {article}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="w-[350px] p-4 border border-solid border-gray-700 rounded-[20px] flex flex-col m-2"
            >
              <div className="relative mb-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="responsive"
                  width={300}
                  height={180}
                  className="rounded-[20px]"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border border-gray-700 text-white rounded-xl text-xs p-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-lg font-bold">{post.title}</h1>
              <p className="mt-2">{post.content}</p>
              <p className="text-gray-400 text-sm mt-2">{post.date}</p>
              <div className="flex text-center justify-between items-center mt-4">
                <button className="bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black py-1 px-4 rounded-full w-full">
                  Read Blog
                </button>
                <CiBookmark className="text-3xl font-bold" />
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <p>Show </p>
              <p className="mx-2">{postsPerPage}</p>
              <p>Rows per page</p>
            </div>
            <div className="flex items-center">
              <button onClick={handlePrev} disabled={currentPage === 1}>
                <FaArrowLeft /> Prev
              </button>
              <p className="mx-2">{currentPage} / {totalPages}</p>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
