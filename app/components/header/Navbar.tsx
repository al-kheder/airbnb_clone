import { GlobeAltIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

function Navbar() {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline ml-4 cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-spacing-2 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
}

export default Navbar;
