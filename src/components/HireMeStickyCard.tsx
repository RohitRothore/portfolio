"use client";

import { HEADER } from "@/app/constants/HEADER";
import { X } from "feather-icons-react";
import Image from "next/image";
import { useState } from "react";

const { LOGO } = HEADER;

export default function HireMeStickyCard() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <div className="sticky bottom-4 w-11/12 md:w-auto md:max-w-3xl mx-auto transition-all duration-300 animate-slideInUp mt-10 rounded bg-gradient-to-r from-purple-900 via-pink-600 to-black p-4 md:p-6 text-white shadow-xl">
        <div className="relative flex flex-wrap gap-4 items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute md:-top-11 -top-7 -right-7 md:-right-11 text-red-600 bg-slate-100 rounded-full p-1.5 hover:text-red-700 shadow-inner"
          >
            <X size={24} />
          </button>
          <Image
            src={LOGO}
            alt="Logo"
            width={56}
            height={56}
            className="md:size-16 size-12 rounded-full"
          />
          <div className="ml-6 hidden md:inline-block flex-1">
            <h2 className="text-2xl font-semibold">
              I&apos;m Rohit is available for hire
            </h2>
            <p className="text-lg text-gray-200 mt-1">Full Stack Developer</p>
          </div>
          <button className="ml-auto bg-white text-black font-semibold px-4 md:px-6 py-1.5 md:py-2 shadow-xl rounded-lg hover:bg-gray-200 transition-all">
            Hire me
          </button>
          <p className="text-xl inline-block md:hidden font-semibold">
            I&apos;m Rohit is available for hire
          </p>
        </div>
      </div>
    )
  );
}
