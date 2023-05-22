import HeroSection from "@/components/HeroSection";
import Service from "@/components/service";
import React from "react";

const Home = () => {
  return (
    <div className="bg-Outer-Space  text-Chinese-Silver   w-full unselectable">
      <div className="flex justify-center items-center ">
        <HeroSection />
      </div>
      <div className="flex justify-center items-center py-20">
        <Service />
      </div>
    </div>
  );
};

export default Home;
