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
      <div className="sticky bottom-4 max-w-3xl mx-auto transition-all duration-300 animate-slideInUp mt-10 rounded bg-gradient-to-r from-purple-900 via-pink-600 to-black p-6 text-white shadow-xl">
        <div className="relative flex items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-11 -right-11 text-red-600 bg-slate-100 rounded-full p-1.5 hover:text-red-700 shadow-inner"
          >
            <X size={24} />
          </button>
          <Image
            src={LOGO}
            alt="Logo"
            width={56}
            height={56}
            className="size-16 rounded-full"
          />
          <div className="ml-6 flex-1">
            <h2 className="text-2xl font-semibold">
              I&apos;m Rohit is available for hire
            </h2>
            <p className="text-lg text-gray-200 mt-1">Full Stack Developer</p>
          </div>
          <button className="ml-auto bg-white text-black font-semibold px-6 py-2 shadow-xl rounded-lg hover:bg-gray-200 transition-all">
            Hire me
          </button>
        </div>
      </div>
    )
  );
}
