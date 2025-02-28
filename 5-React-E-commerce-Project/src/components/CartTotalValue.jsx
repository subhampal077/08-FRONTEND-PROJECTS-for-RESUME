import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const CartTotalValue = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title title={"CART TOTAL"} />
      </div>
      <div className="mt-2 flex flex-col gap-2 text-sm">
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p>
            {currency}&nbsp;
            {getCartAmount()}
            {".00"}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}&nbsp;
            {delivery_fee}
            {".00"}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <b>Total</b>
          <b>
            {currency}&nbsp;
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotalValue;
