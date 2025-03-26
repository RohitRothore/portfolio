"use client";

import { Download, Github, Linkedin } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="container max-w-[1300px] flex justify-center gap-10 py-24 border-b border-gray-300">
      <div className="w-[58%] space-y-6">
        <p className="tracking-widest text-gray-600">WELCOME TO MY WORLD</p>
        <div className="text-6xl font-bold space-x-4 tracking-wide">
          <span>Hi, I&apos;m</span>
          <span className="text-red-600">Rohit Rathore a</span>
          <span className="text-5xl">
            <Typewriter
              words={[
                "Full Stack Developer.",
                "MERN Stack Developer.",
                "Frontend Developer.",
                "Backend Developer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="#dc2626"
              typeSpeed={30}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </span>
        </div>
        <p className="text-gray-600 text-lg leading-9 !mt-7">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <p className="tracking-widest text-gray-600 !mt-12">FIND WITH ME</p>
        <div className="flex justify-between">
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
          </div>
          <Link
            href="https://salmon-theodora-98.tiiny.site/"
            className="py-4 px-8 group flex gap-x-2 from-red-600 to-indigo-600 text-white hover:text-gray-700 rounded-xl bg-gradient-to-tr hover:from-gray-300 hover:to-white shadow-xl transition duration-300 mr-40"
            target="_blank"
          >
            <Download className="text-white group-hover:text-gray-600" />
            Download CV
          </Link>
        </div>
      </div>
      <div className="w-[42%]">
        <div className="h-[460px] w-[500px] rounded-lg shadow-lg bg-slate-300 flex justify-center items-end">
          <Image
            src="https://cdn.uninist.com/files/1740634318035lindinprofileimage3removebgpreview.png"
            className="h-[600px]"
            alt="Hero image"
            height={460}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}
