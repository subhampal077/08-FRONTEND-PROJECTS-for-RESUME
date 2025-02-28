import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("Please Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }

    setCartItems(cartData);
    // console.log(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const ids in cartItems) {
      for (const sizes in cartItems[ids]) {
        if (cartItems[ids][sizes] > 0) {
          totalCount += cartItems[ids][sizes];
        }
      }
    }
    // console.log(totalCount);
    return totalCount;
  };

  const updateQuantity = async (id, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[id][size] = quantity;

    setCartItems(cartData);
    // console.log(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const ids in cartItems) {
      let productInfo = products.find((item) => item.id === ids);
      for (const sizes in cartItems[ids]) {
        if (cartItems[ids][sizes] > 0) {
          totalAmount += productInfo.price * cartItems[ids][sizes];
          // prodPrice * total quantity //
        }
      }
    }
    return totalAmount;
  };

  const allValues = {
    products,currency,delivery_fee,
    search,setSearch,showSearch,
    setShowSearch,cartItems,addToCart,
    getCartCount,updateQuantity,getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={allValues}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
