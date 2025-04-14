import Image from "next/image";

import HireMeButton from "../HireMeButton";

export default function MyExperience() {
  return (
    <section id="experience" className="container md:py-16 py-12 space-y-16">
      <div>
        <p className="text-center uppercase text-red-600 text-lg font-medium">
          Over 2 years of experience
        </p>
        <p className="md:text-5xl text-3xl tracking-wider font-semibold text-center mt-4 mb-16">
          My Experience
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-[1024px] mx-auto gap-5 p-4 shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] shadow-gray-400 hover:scale-105 transition-all duration-300 rounded-xl">
        <Image
          src="https://lh3.googleusercontent.com/p/AF1QipPtEuJx9ltBUwogPSbL_YkxtUe2pjFTtrPti7uh=s1360-w1360-h1020"
          className="h-40 md:w-64 w-full rounded-lg hover:scale-105 transition-all duration-300"
          alt="Experience 2024"
          height={176}
          width={260}
        />
        <div className="flex flex-col md:flex-row justify-between md:items-center md:w-2/3">
          <div className="space-y-3">
            <span className="py-1 px-3 text-sm rounded-3xl bg-gray-400 text-white">
              2024 - Present
            </span>
            <p className="md:text-2xl text-xl font-semibold">
              Associate Software Engineer
            </p>
            <p className="text-gray-600 text-lg font-medium">MERN Stack</p>
            <p className="text-gray-600 font-medium">
              University Living Accommodation
            </p>
          </div>
          <HireMeButton className="mt-7 md:mt-0 md:mb-0 mb-2" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-[1024px] mx-auto gap-5 p-4 shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] shadow-gray-400 hover:scale-105 transition-all duration-300 rounded-xl">
       <Image
          src="https://lh3.googleusercontent.com/p/AF1QipPkofp81ixc0ypNWyfLZmnkzkpTzYXLLSkMeBKq=s1360-w1360-h1020"
          className="h-40 object-cover md:w-64 w-full rounded-lg hover:scale-105 transition-all duration-300"
          alt="Experience 2023"
          height={176}
          width={260}
        />
        <div className="flex flex-col md:flex-row justify-between md:items-center md:w-2/3">
          <div className="space-y-3">
            <span className="py-1 px-3 text-sm rounded-3xl bg-gray-400 text-white">
              2023 - 2024
            </span>
            <p className="md:text-2xl text-xl font-semibold">
              Associate Software Engineer
            </p>
            <p className="text-gray-600 text-lg font-medium">MERN Stack</p>
            <p className="text-gray-600 font-medium">Digitalyuga</p>
          </div>
          <HireMeButton className="mt-7 md:mt-0 md:mb-0 mb-2" />
        </div>
      </div>
    </section>
  );
}
