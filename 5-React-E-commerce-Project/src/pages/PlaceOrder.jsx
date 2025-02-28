import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotalValue from "../components/CartTotalValue";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const [activePay, setActivePay] = useState("cod");

  const { navigate } = useContext(ShopContext);

  if (activePay === "stripe") {
    toast.warning("Stripe is not Active, use COD");
  } else if (activePay === "razorpay") {
    toast.warning("Razorpay is not Active, use COD");
  }

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      {/* Left side of page */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title title={"DELIVERY INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="First name"
          />
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="City"
          />
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="number"
            placeholder="PinCode"
          />
          <input
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="number"
          placeholder="Phone no"
        />
      </div>

      {/* Right side of page */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotalValue />
        </div>
        <div className="mt-12">
          <div className="text-base">
            <Title title={"PAYMENT METHOD"} />
            <div className="flex flex-col gap-3 lg:flex-row">
              <div
                onClick={() => toast.warning("Stripe is not Active, use COD")}
                className="flex cursor-pointer items-center gap-3 border p-2"
              >
                <p className="h-3.5 min-w-3.5 rounded-full border"></p>
                <img className="h-5" src={assets.stripe_logo} />
              </div>

              <div
                onClick={() => toast.warning("Razorpay is not Active, use COD")}
                className="flex cursor-pointer items-center gap-3 border p-2"
              >
                <p className="h-3.5 min-w-3.5 rounded-full border"></p>
                <img className="my-0.5 h-4" src={assets.razorpay_logo} />
              </div>

              <div
                onClick={() => setActivePay("cod")}
                className="flex cursor-pointer items-center gap-3 border p-2"
              >
                <p
                  className={`h-3.5 min-w-3.5 rounded-full border ${activePay === "cod" ? "bg-green-400" : ""}`}
                ></p>
                <p className="text-sm font-medium text-gray-500">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
            <div className="mt-8 w-full text-end">
              <button
                onClick={() => {
                  navigate("/orders");
                }}
                className="bg-black px-16 py-3 text-sm text-white"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
