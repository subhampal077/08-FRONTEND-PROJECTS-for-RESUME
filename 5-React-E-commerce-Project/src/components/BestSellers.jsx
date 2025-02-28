import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setBestSellers(products.filter((item) => item.bestseller).slice(0, 5));
  }, []);

  //   console.log(bestSellers);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-2xl sm:text-3xl">
        <Title
          title="BEST SELLERS"
          para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio
        ratione aut laborum earum ipsam."
        />
      </div>

      {/* rendering Best selling products */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSellers.map((item, i) => (
          <ProductItem
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
