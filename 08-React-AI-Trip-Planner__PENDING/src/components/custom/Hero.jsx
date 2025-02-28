import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="text-center flex flex-col items-center gap-9">
      <div className="mt-14 max-w-3xl px-10">
        <h1 className="font-extrabold text-[38px] sm:text-[50px]">
          <span className="text-[#F56551]">
            Discover Your Next Adventure with AI:
          </span>{" "}
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="mt-9 text-xl text-gray-500">
          Your personal trip planner and travel guide, creating custom
          itineraries tailored to your interests and budget.
        </p>
      </div>

      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free</Button>
      </Link>

      <img
        className="max-w-3xl w-full"
        src="./hero-image.png"
        alt="landing-page-image"
      />
    </div>
  );
};

export default Hero;
