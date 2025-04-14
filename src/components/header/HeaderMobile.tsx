"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import useHeaderLogic from "./headerLogic";
import Image from "next/image";
import { HEADER } from "@/app/constants/HEADER";

const DynamicSidebar = dynamic(() => import("./Sidebar"), {
  loading: () => null,
});

const { LOGO } = HEADER;

function HeaderMobile() {
  const pathname = usePathname();
  const { handleSidebarToggle, handleSidebarClose, navbarOpen } =
    useHeaderLogic();

  const handleToggleClick = () => {
    handleSidebarToggle();
  };

  useEffect(() => {
    handleSidebarClose();
  }, [pathname]);

  return (
    <div className="flex md:hidden justify-end py-2.5 px-4 items-center">
      <button
        aria-label="nav-toggle"
        className="absolute left-5 top-5  inline-flex size-6 items-center justify-center rounded-md text-red-600 focus:outline-none"
        onClick={handleToggleClick}
        type="button"
      >
        <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-5 -translate-y-1.5 transform bg-current transition duration-500 ease-in-out"
          />
          <span
            aria-hidden="true"
            className="opacity-1 absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-5 translate-y-1.5 transform bg-current transition duration-500 ease-in-out"
          />
        </div>
      </button>
       <div className="size-12 rounded-full flex items-center justify-center bg-slate-400">
              <Image
                src={LOGO}
                alt="Logo"
                width={56}
                height={56}
                className="size-10 rounded-full"
              />
            </div>
      {navbarOpen && (
        <DynamicSidebar
          handleToggleClick={handleToggleClick}
          navbarOpen={navbarOpen}
        />
      )}
    </div>
  );
}

export default HeaderMobile;
