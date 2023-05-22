import React, { useEffect, useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "./Button";
import Image from "next/image";
import useTilt from "@/hooks/useTilt";
import Tilt from "./Tilt";
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
        <Tilt classname="w-60  h-96 row-span-3 mt-12 flex justify-end">
          <Image
            src={nftObject[0].image}
            key={nftObject[0].key}
            alt={nftObject[0].name}
            className={`unselectable aspect-square rounded-xl object-cover shadow-xl titleContent w-full h-full row-span-3 `}
          />
        </Tilt>
        <Tilt classname="w-52   h-72 mt-3">
          <Image
            src={nftObject[1].image}
            key={nftObject[1].key}
            alt={nftObject[1].name}
            className={`unselectable aspect-square rounded-xl object-cover shadow-xl titleContent w-full h-full `}
          />
        </Tilt>
        <Tilt classname="w-52  h-80">
          <Image
            src={nftObject[2].image}
            key={nftObject[2].key}
            alt={nftObject[2].name}
            className={`unselectable aspect-square rounded-xl object-cover shadow-xl titleContent w-full h-full `}
          />
        </Tilt>
      </div>
    </div>
  );
}

export default HeroSection;
