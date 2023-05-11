import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

//Component
import { Profile, Language, Contact } from "./index";
import Button from "../Button";

// Icons
import { BsSearch } from "react-icons/bs";
import { MdNotifications, MdTranslate } from "react-icons/md";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";
import logo from "../../public/logo.svg";
import { IconContext } from "react-icons";

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
      <div className="flex items-center gap-24 pl-16">
        {" "}
        <div className="logo flex text-Turquoise gap-4">
          <Image src={logo} alt="logo" width="35" />
          <a className="flex items-center text-xl font-semibold" href="/">
            NFT Marketplace
          </a>
        </div>
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

      <div className="flex gap-6 text-Turquoise text-xl font-semibold items-center ">
        <Contact />
        <p className="cursor-pointer">{t("About")}</p>
        <p className="cursor-pointer">{t("Discover")}</p>
        <p className="cursor-pointer">{t("Help")}</p>
      </div>
      <div className="flex items-center gap-6 mr-14">
        <IconContext.Provider
          value={{ color: "#A6A6A6", className: "global-class-name" }}
        >
          <Language />

          <MdNotifications size={30} />

          <Profile />
        </IconContext.Provider>
        <Button
          text={t("Create")}
          callback={() => {
            console.log("test");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
