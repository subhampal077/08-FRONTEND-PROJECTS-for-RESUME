import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, seLatestProducts] = useState([]);

  useEffect(() => {
    seLatestProducts(products.sort((a, b) => b.date - a.date).slice(0, 10));
  }, []);

  //   console.log(latestProducts);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-2xl sm:text-3xl">
        <Title
          title="LATEST COLLECTIONS"
          para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odio
        ratione aut laborum earum ipsam."
        />
      </div>

      {/* Rendering latest products 👀 */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item, i) => (
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

export default LatestCollection;
