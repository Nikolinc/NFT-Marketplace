import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Search } from "./index";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="rounded  py-2 text-Turquoise transition hover:text-Turquoise"
        onClick={() => toggleDropdown()}
      >
        <CgMenuRight size={30} />
      </button>
      <div
        className={`absolute bg-Outer-Space rounded   h-[100vh] flex justify-center ease-in-out duration-300 ${
          isOpen ? "translate-x-0 right-[-40px]" : "translate-x-full"
        }`}
      >
        <div className="grid grid-cols-1 gap-10 w-80 mt-5">
          {" "}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Menu;
