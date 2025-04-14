import { HEADER } from "@/app/constants/HEADER";
import { Github, Linkedin, Twitter } from "feather-icons-react";
import Link from "next/link";

const { MENU } = HEADER;

interface SidebarProps {
  handleToggleClick: () => void;
  navbarOpen: boolean;
}

function Sidebar({ handleToggleClick, navbarOpen }: SidebarProps) {
  return (
    <div
      aria-labelledby="slide-over-title"
      aria-modal="true"
      className="relative z-10"
      role="dialog"
    >
      <div
        className={`fixed inset-0 overflow-hidden transition-transform delay-300${
          navbarOpen ? " animate-slideInLeft" : ""
        }`}
      >
        <div
          aria-label="Close Button"
          className="absolute left-0 h-full w-full bg-black/55"
          onClick={handleToggleClick}
        />
        <div className="absolute inset-0 z-10 p-4 flex w-[85%] flex-col overflow-hidden bg-white">
          <div className="flex flex-grow flex-col gap-8 overflow-hidden pb-[14px] pt-5">
            {MENU.map(({ id, name, icon: Icon }) => (
              <div
                key={id}
                className="flex items-center group gap-2"
                onClick={handleToggleClick}
              >
                <Icon className="group-hover:text-red-600 transition-colors" />
                <Link
                  className="group-hover:text-red-600 transition-colors"
                  href={id}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
          <p className="tracking-widest text-red-600 !my-8 border-t border-gray-400 pt-8">
            FIND WITH ME
          </p>
          <div className="flex gap-x-8 pb-4">
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
      </div>
    </div>
  );
}

export default Sidebar;
