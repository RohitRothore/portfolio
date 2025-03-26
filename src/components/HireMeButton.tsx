import Link from "next/link";
import React from "react";

import { HEADER } from "@/app/constants/HEADER";

const { BUTTON } = HEADER;

interface HireMeButtonProps {
  className?: string;
}

export default function HireMeButton({ className = "" }: HireMeButtonProps) {
  return (
    <Link
      className={`text-lg text-red-600 hover:text-white hover:from-red-600 transition-all duration-300 hover:scale-105 hover:to-red-600 shadow-lg bg-gradient-to-br from-slate-300 to-slate-50 py-2 px-8 rounded-lg ${className}`}
      href={BUTTON.id}
    >
      {BUTTON.name}
    </Link>
  );
}
