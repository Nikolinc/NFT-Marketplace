import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Contact, Language, Search } from "./index";
import { IconContext } from "react-icons";
import Button from "../Button";

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
          isOpen ? "translate-x-0 right-[-41px]" : "translate-x-full"
        }`}
      >
        <div className="flex justify-center w-80">
          <div className="w-80 mt-5 px-10 text-Turquoise text-xl font-semibold  ">
            <div className="mb-16">
              {" "}
              <Search />
            </div>
            <div className="pr-10 mb-5">
              {" "}
              <Contact />
              <p className="cursor-pointer py-3">About</p>
              <p className="cursor-pointer py-3">Discover</p>
              <p className="cursor-pointer py-3">Help</p>
            </div>
            <div className="pr-10 pt-6 w-full border-t-2 border-Chinese-Silver flex items-center justify-between text-lg h-20">
              <div className="flex text-Chinese-Silver text-xl items-center mr-10 ">
                <IconContext.Provider
                  value={{ color: "#A6A6A6", className: "global-class-name " }}
                >
                  <Language />
                </IconContext.Provider>
                English
              </div>

              <div className="h-5  flex items-center">
                {" "}
                <Button
                  text={"Create"}
                  callback={() => {
                    console.log("test");
                  }}
                  classname=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
