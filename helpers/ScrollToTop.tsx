"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./ScrollToTop.css"; 

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div onClick={scrollToTop} className="scrollToTop">
        <Image
          src="/scrolltotop.svg"
          alt="Scroll to top"
          width={96}
          height={96}
        />
      </div>
    )
  );
}
