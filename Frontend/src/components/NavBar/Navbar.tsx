import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

//Component
import { Profile, Language, Contact } from "./index";
import Button from "../Button";

// Icons
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";
import logo from "../../public/logo.svg";
import { IconContext } from "react-icons";
import Notifications from "./Notifications ";

const Navbar = () => {
  //USESTATE COMPONENT
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const { t } = useTranslation("namespace-name");

  return (
    <div className="flex px-10 bg-Davy-Grey py-1 pt-1 justify-between drop-shadow-lg sticky top-0 z-50">
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
          <div className="relative flex items-center mr-32 ">
            <label htmlFor="UserEmail" className="sr-only ml-25">
              {t("Search")}...
            </label>

            <input
              type="Search"
              id="Search"
              placeholder="Search ..."
              className="w-[300px] rounded-xl border-Charleston-Green px-5 py-1 shadow-sm dark:border-gray-700 dark:bg-Black-Olive dark:text-white sm:text-sm"
            />

            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 dark:text-gray-400">
              <BsSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block">
        <div className="flex gap-6 text-Turquoise text-xl font-semibold items-center ">
          <Contact />
          <p className="cursor-pointer">{t("About")}</p>
          <p className="cursor-pointer">{t("Discover")}</p>
          <p className="cursor-pointer">{t("Help")}</p>
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

        <div className="md:block hidden">
          <Button
            text={t("Create")}
            callback={() => {
              console.log("test");
            }}
          />
        </div>
      </div>
      <div className="block 2xl:hidden">
        <button className="rounded  py-2 text-Turquoise transition hover:text-Turquoise">
          <CgMenuRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
