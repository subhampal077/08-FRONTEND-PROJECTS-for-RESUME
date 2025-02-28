import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);

  const totalValue = cart.reduce(
    (acc, item) => (acc += item.product.price * item.quantity),
    0
  );

  return (
    <div className="container">
      <div className="row">
        {cart.map((item, i) => (
          <CartProduct
            key={i}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
      <p className="text-2xl p-4 mb-4 font-semibold">Total Cart Value: ${totalValue}</p>
    </div>
  );
};

export default Cart;
