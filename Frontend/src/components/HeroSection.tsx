import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import pngwing from "../assets/heroSection/pngwing.png";
import uImage from "@/assets/heroSection";

function HeroSection() {
  const nftObject = uImage();
  return (
    <div className="grid grid-cols-1 mt-20 items-start w-[70%] gap-10 xl:grid-cols-2 unselectable">
      <div className="text-7xl text-Turquoise font-extrabold  h-full pt-6 mt-12">
        Discover collect, and Sell NFTs
        <p className="text-xl font-normal my-8">
          {" "}
          Discover the most outstanding NFTs is all topics of life. Creating
          your NFTs and sell them
        </p>
        <div className="text-xl font-normal h-20">
          <Button
            text="Start your search"
            callback={() => {}}
            classname="py-2 rounded-xl shadow-xl"
          ></Button>
        </div>
      </div>
      <div className="grid pl-12 gap-6 grid-cols-2 ">
        <Image src={pngwing} alt="pngwing" />
      </div>
    </div>
  );
}

export default HeroSection;
