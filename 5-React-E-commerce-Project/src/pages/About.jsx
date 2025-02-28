import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeBox from "../components/SubscribeBox";

function About() {
  return (
    <div>
      <div className="border-t pt-8 text-center text-2xl">
        <Title title="ABOUT US" />
      </div>

      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="text-xl">
        <Title title={"WHY CHOOSE US"} />
      </div>

      <div className="mb-20 flex flex-col text-sm md:flex-row">
        <div className="flex flex-col border px-10 py-8 md:px-16">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        <div className="flex flex-col border px-10 py-8 md:px-16">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        <div className="flex flex-col border px-10 py-8 md:px-16">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <SubscribeBox />
    </div>
  );
}

export default About;
