import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotalValue from "../components/CartTotalValue";
import PlaceOrder from "./PlaceOrder";

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const ids in cartItems) {
      for (const sizes in cartItems[ids]) {
        if (cartItems[ids][sizes] > 0) {
          tempData.push({
            id: ids,
            size: sizes,
            quantity: cartItems[ids][sizes],
          });
        }
      }
    }
    setCartData(tempData);
    // console.log(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title title={"YOUR CART"} />
      </div>

      {/* // rendering cart products */}
      <div>
        <hr />
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id,
          );

          return (
            <div
              key={index}
              className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-b border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="product-img"
                />
                <div>
                  <p className="text-xs font-medium sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="mt-2 flex items-center gap-5">
                    <p className="">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, item.size, +e.target.value)
                }
                className="max-w-10 border py-1 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item.id, item.size, 0)}
                className="mr-4 w-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {/* // cart total value section */}
      <div className="mt-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotalValue />

          {/* using navigate for redirect to payment page */}
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="my-8 bg-black px-8 py-3 text-sm text-white"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
