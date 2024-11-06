"use client";
// useScrollDirection.js
import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isScrollingDown;
}
