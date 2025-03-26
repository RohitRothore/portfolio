import Image from "next/image";
import Link from "next/link";

import { HEADER } from "@/app/constants/HEADER";

import HireMeButton from "../HireMeButton";

const { LOGO, MENU } = HEADER;

export default function HeaderDesktop() {
  return (
    <div className="hidden md:flex container py-3 justify-between items-center">
      <div className="size-14 rounded-full flex items-center justify-center bg-slate-400">
        <Image
          src={LOGO}
          alt="Logo"
          width={56}
          height={56}
          className="size-12 rounded-full"
        />
      </div>
      <div className="text-lg text-slate-700 space-x-8">
        {MENU.map(({ id, name }) => (
          <Link
            className="hover:text-red-600 transition-colors"
            key={id}
            href={id}
          >
            {name}
          </Link>
        ))}
      </div>
      <HireMeButton />
    </div>
  );
}
