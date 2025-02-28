import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title title={"MY ORDERS"} />
      </div>

      <div>
        {products.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 border-b border-t py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
          >
            {/* div1 */}
            <div className="flex items-start gap-6 text-sm">
              {/* sub div1 */}
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              {/* sub div2 */}
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="mt-2 flex items-center gap-3 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">12 nov, 2024</span>
                </p>
              </div>
            </div>
            {/* div2 */}
            <div className="flex justify-between md:w-1/2">
              {/* sub div1 */}
              <div className="flex items-center gap-2">
                <p className="h-2 min-w-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Order placed</p>
              </div>
              {/* sub button */}
              <button className="rounded-sm border px-4 py-2 text-sm font-medium">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
