import Image from "next/image";

import HireMeButton from "../HireMeButton";

export default function MyExperience() {
  return (
    <section id="experience" className="container py-16 space-y-16">
      <div>
        <p className="text-center uppercase text-red-600 text-lg font-medium">
          Over 2 years of experience
        </p>
        <p className="text-5xl tracking-wider font-semibold text-center mt-4 mb-16">
          My Experience
        </p>
      </div>
      <div className="flex max-w-[1024px] mx-auto gap-5 p-4 shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] shadow-gray-400 hover:scale-105 transition-all duration-300 rounded-xl">
        <Image
          src="https://lh3.googleusercontent.com/p/AF1QipPtEuJx9ltBUwogPSbL_YkxtUe2pjFTtrPti7uh=s1360-w1360-h1020"
          className="h-40 w-64 rounded-lg hover:scale-105 transition-all duration-300"
          alt="Experience 2024"
          height={176}
          width={260}
        />
        <div className="flex justify-between items-center w-2/3">
          <div className="space-y-3">
            <span className="py-1 px-3 text-sm rounded-3xl bg-gray-400 text-white">
              2024 - Present
            </span>
            <p className="text-2xl font-semibold">
              Associate Software Engineer
            </p>
            <p className="text-gray-600 text-lg font-medium">MERN Stack</p>
            <p className="text-gray-600 font-medium">
              University Living Accommodation
            </p>
          </div>
          <HireMeButton />
        </div>
      </div>
      <div className="flex max-w-[1024px] mx-auto gap-5 p-4 shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] shadow-gray-400 hover:scale-105 transition-all duration-300 rounded-xl">
       <Image
          src="https://lh3.googleusercontent.com/p/AF1QipPkofp81ixc0ypNWyfLZmnkzkpTzYXLLSkMeBKq=s1360-w1360-h1020"
          className="h-40 object-cover w-64 rounded-lg hover:scale-105 transition-all duration-300"
          alt="Experience 2023"
          height={176}
          width={260}
        />
        <div className="flex justify-between items-center w-2/3">
          <div className="space-y-3">
            <span className="py-1 px-3 text-sm rounded-3xl bg-gray-400 text-white">
              2023 - 2024
            </span>
            <p className="text-2xl font-semibold">
              Associate Software Engineer
            </p>
            <p className="text-gray-600 text-lg font-medium">MERN Stack</p>
            <p className="text-gray-600 font-medium">Digitalyuga</p>
          </div>
          <HireMeButton />
        </div>
      </div>
    </section>
  );
}
