import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../features/ContextProvider";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  //   console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center px-5 py-4">
      {products.map((product, i) => (
        <div key={i} className="card" style={{ width: "18rem" }}>
          <img
            style={{ height: "220px", objectFit: "contain" }}
            src={product.images[0]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <h5>Price: ${product.price}</h5>
            <p className="card-text text-sm">{product.description}</p>
            <button
              onClick={() =>
                dispatch({ type: "ADD", product: product, quantity: 1 })
              }
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
