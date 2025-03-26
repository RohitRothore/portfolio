"use client";

import { useEffect, useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gradient-to-l from-slate-200 to-slate-100 sticky top-0 w-full h-20 z-20 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}
