import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const RelatedProduct = ({ id, category, subCategory }) => {
  const { products } = useContext(ShopContext);

  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    let productsCopy = products.slice();
    productsCopy = productsCopy.filter(
      (item) =>
        item.category === category &&
        item.subCategory === subCategory &&
        item.id !== id,
    );
    setRelatedProduct(productsCopy.slice(0, 5));
  }, [products]);

  return (
    <div className="mt-20">
      <div className="py-2 text-center text-3xl">
        <Title title={"RELATED PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProduct.map((item, i) => (
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

export default RelatedProduct;
