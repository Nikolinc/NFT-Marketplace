import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "./Button";
import Image from "next/image";
import { nftObject } from "@/assets";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 mt-20 items-start w-[70%] gap-10 md:grid-cols-2 unselectable">
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 ">
        <Image
          src={nftObject[0].image}
          key={nftObject[0].key}
          alt={nftObject[0].name}
          className="unselectable aspect-square w-72 h-96 rounded-xl object-cover row-span-3 shadow-xl mt-12 "
        />
        <Image
          src={nftObject[1].image}
          key={nftObject[1].key}
          alt={nftObject[1].name}
          className="unselectable aspect-square w-52 h-72  rounded-xl object-cover shadow-xl"
        />
        <Image
          src={nftObject[2].image}
          key={nftObject[2].key}
          alt={nftObject[2].name}
          className="unselectable aspect-square  w-64 h-80 rounded-xl object-cover shadow-xl"
        />
      </div>
    </div>
  );
}

export default HeroSection;
