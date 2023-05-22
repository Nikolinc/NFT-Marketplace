import React, { useState, useEffect } from "react";
import Image from "next/image";
//Component
import { Profile, Language, Contact, Menu, Search } from "./index";
import Button from "../Button";

// Icons

import logo from "../../public/logo.svg";
import { IconContext } from "react-icons";
import Notifications from "./Notifications";

const Navbar = () => {
  return (
    <div className="flex px-10 bg-Davy-Grey py-1 pt-1 justify-between drop-shadow-lg sticky top-0 z-50 unselectable">
      <div className="flex items-center gap-24 pl-2 md:pl-6 xl:pl-16">
        {" "}
        <div className="logo flex text-Turquoise gap-4">
          <Image src={logo} alt="logo" className="xl:w-12 md:w-8 w-5" />
          <a
            className="flex items-center xl:text-xl md:text-lg text-sm  font-semibold"
            href="/"
          >
            NFT Marketplace
          </a>
        </div>
        <div className="hidden lg:block">
          <Search />
        </div>
      </div>
      <div className="hidden 2xl:block">
        <div className="flex gap-6 text-Turquoise text-xl font-semibold items-center ">
          <Contact />
          <p className="cursor-pointer hover:border-b border-Turquoise">
            About
          </p>
          <p className="cursor-pointer hover:border-b border-Turquoise">
            Discover
          </p>
          <p className="cursor-pointer hover:border-b border-Turquoise">Help</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mr-0 md:mr-3 xl:mr-14">
        <IconContext.Provider
          value={{ color: "#A6A6A6", className: "global-class-name " }}
        >
          <div className="md:block hidden">
            <Language />
          </div>

          <Notifications />
          <Profile />
        </IconContext.Provider>

        <div className="md:block hidden text-xl">
          <Button
            text="Create"
            callback={() => {
              console.log("test");
            }}
            classname=""
          />
        </div>
      </div>
      <div className="block 2xl:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
