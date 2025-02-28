import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeBox from "../components/SubscribeBox";

function Contact() {
  return (
    <div>
      {/* heading part */}
      <div className="border-t pt-10 text-center text-2xl">
        <Title title={"CONTACT US"} />
      </div>

      <div className="my-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
        {/* image part */}
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        {/* details div  */}
        <div className="flex flex-col items-start justify-center gap-6 text-gray-500">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <div>
            <p>12345 Williams Station</p>
            <p>Suite 123, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (123) 123-1234</p>
            <p>Email: admin@forever.com</p>
          </div>
          <p className="text-xl font-semibold text-gray-600">
            Careers at Forever
          </p>
          <p>Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm text-black transition-all duration-300 hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* // SubscribeBox */}
      <SubscribeBox />
    </div>
  );
}

export default Contact;
