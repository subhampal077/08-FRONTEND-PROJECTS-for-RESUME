import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [visibleFilter, setVisibleFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [sort, setSort] = useState("relevant");

  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (types.includes(e.target.value)) {
      setTypes((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTypes((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    // console.log(productsCopy);

    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categories.includes(item.category),
      );
    }

    if (types.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        types.includes(item.subCategory),
      );
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilterProducts(productsCopy);
  };

  // sorting products
  const handleSorting = (e) => {
    let filterProductCopy = filterProducts.slice();

    if (sort === "low-high") {
      setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
    } else if (sort === "high-low") {
      setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
    } else if (sort === "relevant") {
      applyFilter();
    }
  };

  // Re-rendering after added filters
  useEffect(() => {
    applyFilter();
  }, [categories, types, sort, search, showSearch]);

  useEffect(() => {
    handleSorting();
  }, [sort]);

  return (
    <div className="flex flex-col border-t pt-10 text-sm text-gray-700 sm:flex-row sm:gap-8">
      {/* design for filter left side UI */}

      <div className="min-w-48">
        {/* filter dropdown */}
        <div
          onClick={() => setVisibleFilter(!visibleFilter)}
          className="my-2 flex cursor-pointer items-center gap-2"
        >
          <p className="text-xl text-black">FILTERS</p>
          <img
            className={`h-3 transition-all sm:hidden ${visibleFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown_icon"
          />
        </div>

        {/* categories filter */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 sm:block ${visibleFilter ? "block" : "hidden"}`}
        >
          <p className="mb-3 font-medium text-black">CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light">
            <div className="flex items-center gap-2">
              <input
                onClick={toggleCategory}
                className="w-3"
                type="checkbox"
                value="Men"
              />
              <p>Men</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={toggleCategory}
                className="w-3"
                type="checkbox"
                value="Women"
              />
              <p>Women</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={toggleCategory}
                className="w-3"
                type="checkbox"
                value="Kids"
              />
              <p>Kids</p>
            </div>
          </div>
        </div>

        {/* types filter */}
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 sm:block ${visibleFilter ? "block" : "hidden"}`}
        >
          <p className="mb-3 text-sm font-medium text-black">TYPE</p>
          <div className="flex flex-col gap-2 font-light">
            <div className="flex items-center gap-2">
              <input
                onClick={toggleType}
                className="w-3"
                type="checkbox"
                value="Topwear"
              />
              <p>Topwear</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={toggleType}
                className="w-3"
                type="checkbox"
                value="Bottomwear"
              />
              <p>Bottomwear</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                onClick={toggleType}
                className="w-3"
                type="checkbox"
                value="Winterwear"
              />
              <p>Winterwear</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side UI */}

      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-xl md:text-2xl">
          <div className="my-1.5 flex items-center gap-2">
            <p className="font-medium text-gray-700">ALL COLLECTIONS</p>
            <p className="sm:h[2px] h-[1px] w-8 bg-gray-700 sm:w-12"></p>
          </div>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="border-2 border-gray-300 px-2 text-sm"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Render all products(collection) */}

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          {filterProducts.map((item, i) => (
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
    </div>
  );
}

export default Collection;
