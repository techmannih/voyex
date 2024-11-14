"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 2,
      }}
      className="bg-black text-white py-10 mx-[60px]"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[24px] font-bold leading-[30.72px] tracking-wider text-left"
        >
          Voyex.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center pl-24">
          <li>
            <Link
              href="/pricing"
              className="font-normal text-[14px] leading-[19.92px] text-left"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center">
          {!isMenuOpen ? (
            <button onClick={toggleMenu}>
              <IoMenu className="text-white text-3xl" />
            </button>
          ) : (
            <button onClick={toggleMenu}>
              <RxCross2 className="text-white text-3xl" />
            </button>
          )}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="text-black py-2 px-8 text-[14px] font-medium leading-[17.92px] rounded-full bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] custom-border">
            Go to App
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 mt-8">
          <ul className="space-y-4">
            <li>
              <Link
                href="/pricing"
                className="text-white text-[18px] font-medium"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-white text-[18px] font-medium"
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white text-[18px] font-medium"
                onClick={toggleMenu}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-white text-[18px] font-medium"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button className="py-2 px-8 text-black text-[16px] font-medium leading-[17.92px] rounded-full bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] custom-border">
            Go to App
          </button>
        </div>
      )}
    </motion.div>
  );
}
