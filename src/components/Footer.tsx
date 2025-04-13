import { HEADER } from "@/app/constants/HEADER";
import { Github, Linkedin, Twitter } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const { LOGO, MENU } = HEADER;

export default function Footer() {
  return (
    <section className="container py-16 border-t border-gray-400">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center gap-x-4 mb-8">
            <div className="size-14 rounded-full flex items-center justify-center bg-slate-400">
              <Image
                src={LOGO}
                alt="Logo"
                width={56}
                height={56}
                className="size-12 rounded-full"
              />
            </div>
            <p className="text-2xl font-bold text-gray-300">ROHIT</p>
          </div>
          <div className="flex gap-x-8">
            <Link
              href="https://github.com/RohitRothore"
              className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
              target="_blank"
            >
              <Github className="group-hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rohit-rathore-7a764526b/"
              className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
              target="_blank"
            >
              <Linkedin className="group-hover:text-white" />
            </Link>
            <Link
              href="https://twitter.com/Rohit_Rathore02"
              className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
              target="_blank"
            >
              <Twitter className="group-hover:text-white" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
        <div className="text-lg flex flex-col md:flex-row text-slate-700 space-x-8">
          {MENU.map(({ id, name }) => (
            <Link
              className="hover:text-red-600 underline transition-colors"
              key={id}
              href={id}
            >
              {name}
            </Link>
          ))}
        </div>
        <p className="text-gray-500 text-lg">
        © 2025. All rights reserved by Rohit Rathore
        </p>
        </div>
      </div>
    </section>
  );
}
