"use client";

import { ArrowUp } from "feather-icons-react";
import React from "react";

export default function Widget() {
  const handleScroll = () => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <div
      onClick={handleScroll}
      className="bg-red-600 max-w-min rounded-full p-3 hover:scale-110 shadow-2xl shadow-black transition sticky bottom-24 left-5"
    >
      <ArrowUp className="text-white" />
    </div>
  );
}
