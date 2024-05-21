import React from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

const NavBar: React.FC = () => {
  const handleModeSwitch = (e: any) => {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="font-mono fixed flex items-center justify-between top-0 left-0 right-0 text-zinc-500 bg-white dark:bg-neutral-800">
      <nav className="flex items-center py-2 lg:px-5">
        <NavMobile />
        <NavDesktop />
      </nav>
      <div className="pe-2 lg:pe-5">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleModeSwitch}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
