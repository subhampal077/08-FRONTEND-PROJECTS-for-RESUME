import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="my-10 mt-32 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full text-gray-600 md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            dolore eum in a corporis quod ipsum harum esse dolorum ipsam
            voluptates. Cupiditate debitis voluptatem a iste sint, porro
            assumenda blanditiis.
          </p>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-000-000-0000</li>
            <li>subhampal01999@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="pt-4 pb-5 text-center text-sm">Made with 🖤 by Subham</p>
      </div>
    </div>
  );
};

export default Footer;
