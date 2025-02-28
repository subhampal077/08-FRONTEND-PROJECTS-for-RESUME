import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
        
      {/* left hero section */}
      <div className="flex w-full flex-col items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div className="flex items-center gap-2 text-[#414141]">
          <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
          <p className="text-sm font-medium md:text-base">OUR BESTSELLERS</p>
        </div>

        <h1 className="font-['prata'] text-3xl leading-relaxed sm:py-3 text-[#414141] lg:text-5xl">
          Latest Arrivals
        </h1>

        <div className="flex items-center gap-2 text-[#414141]">
          <p className="text-sm font-medium md:text-base">SHOP NOW</p>
          <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
        </div>
      </div>

      {/* right hero section */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full object-contain"
          src={assets.hero_img}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
