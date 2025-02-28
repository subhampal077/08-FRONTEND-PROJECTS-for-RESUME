import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);

  return (
    <div className="d-flex justify-content-between bg-primary text-white py-2 px-5 items-center">
      <Link to="/" className="fs-1 navbar-brand fw-bolder">
        Shop
      </Link>
      <Link to="/cart" className="relative text-white navbar-link fs-4">
        <BsCart />
        <p className="absolute top-4 left-3 text-[9px] bg-black h-4 w-4 flex items-center justify-center rounded-full">
          {cart
            ? cart.reduce((acc, item) => {
                return (acc += item.quantity);
              }, 0)
            : 0}
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
