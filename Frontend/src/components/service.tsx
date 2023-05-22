import React from "react";
import Image from "next/image";
import { steapOne, steapTwo, steapfour, steapthree } from "@/assets/service";

function Service() {
  return (
    <div className="mt-20 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-12 text-Turquoise text-center">
      <div className="steapOne">
        <div className="flex justify-center">
          <Image src={steapOne} alt="steapOne" className="w-36 scale-110" />
        </div>
        <div className="font-bold text-xl pt-4 align-middle  border-Outer-Space border">
          Filter & Discover
        </div>
        <p className="text-lg font-light align-middle w-56">
          Connect with wallet discover, buy NFT-s sell your NFT-s and earn money
        </p>
      </div>
      <div className="steapTwo">
        <div className="flex justify-center">
          <Image src={steapTwo} alt="steapOne" className="w-36 scale-110" />
        </div>
        <div className="font-bold text-xl  pt-4 align-middle  border-Outer-Space border">
          Filter & Discover
        </div>
        <p className="text-lg font-light align-middle w-56">
          Connect with wallet discover, buy NFT-s sell your NFT-s and earn money
        </p>
      </div>
      <div className="steapthree">
        <div className="flex justify-center">
          <Image src={steapthree} alt="steapOne" className="w-36 scale-110 " />
        </div>
        <div className="font-bold text-xl  pt-4 align-middle  border-Outer-Space border">
          Connect Wallet
        </div>
        <p className="text-lg font-light align-middle w-56">
          Connect with wallet discover, buy NFT-s sell your NFT-s and earn money
        </p>
      </div>
      <div className="steapfour">
        <div className="flex justify-center">
          <Image src={steapfour} alt="steapOne" className="w-36 scale-110" />
        </div>
        <div className="font-bold text-xl  pt-4 align-middle  border-Outer-Space border">
          Start trading
        </div>
        <p className="text-lg font-light align-middle w-56">
          Connect with wallet discover, buy NFT-s sell your NFT-s and earn money
        </p>
      </div>
    </div>
  );
}

export default Service;
