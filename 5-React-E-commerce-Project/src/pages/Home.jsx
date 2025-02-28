import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import OurPolicy from "../components/OurPolicy";
import SubscribeBox from "../components/SubscribeBox";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <SubscribeBox />
    </div>
  );
}

export default Home;
