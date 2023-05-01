import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//Component
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import Button from "../Button";

// Icons
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import logo from "../../public/logo.svg";

const Navbar = () => {
  //USESTATE COMPONENT
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="flex px-10 gap-6">
      <div className="logo flex text-[]">
        <Image src={logo} alt="logo" />
        NFT Marketplace
      </div>
    </div>
  );
};

export default Navbar;
