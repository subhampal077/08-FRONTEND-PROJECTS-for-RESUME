import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";

const CartProduct = ({ product, quantity }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className=" flex items-center border">
      <img className="w-40 sm:w-60" src={product.images[0]} alt="" />
      <div className="">
        <h5>{product.title}</h5>
        <h5>Price: ${product.price}</h5>
        <div className="buttons">
          <button
            onClick={() => dispatch({ type: "DECREASE", product: product })}
            className="border bg-black text-white font-semibold rounded-circle px-2"
          >
            -
          </button>
          <button className="rounded-circle text-xl px-2">{quantity}</button>
          <button
            onClick={() => dispatch({ type: "INCREASE", product: product })}
            className="border bg-black text-white font-semibold rounded-circle px-2"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "REMOVE", product: product })}
          className="btn btn-sm mt-2 px-3 btn-warning"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
