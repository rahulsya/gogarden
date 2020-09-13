import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductProvider";

export default function FilterProductItems() {
  const context = useContext(ProductContext);
  const { sortByPrice, products, keyword, handleChange, type } = context;

  let getTypeProduct = [...new Set(products.map((item) => item.type))];
  getTypeProduct = ["all", ...getTypeProduct];

  return (
    <div>
      <div className="flex flex-row justify-center">
        <input
          type="text"
          name="keyword"
          placeholder="How to plant..."
          className="w-full lg:w-1/2 px-3 py-4 border rounded shadow-lg mb-5"
          onChange={handleChange}
          value={keyword}
        />
      </div>
      <div className="flex flex-row justify-center items-center mb-12">
        <div className="flex flex-col items-center px-3">
          <label
            htmlFor="sort"
            className="font-semibold text-sm mb-2 text-green-600"
          >
            Sort By
          </label>
          <select
            name="sortByPrice"
            id="sort"
            className="border p-2 rounded"
            onChange={handleChange}
            value={sortByPrice}
          >
            <option value="all">All</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>

        <div className="flex flex-col items-center px-3">
          <label
            htmlFor="category"
            className="font-semibold text-sm mb-2 text-green-600"
          >
            Category
          </label>
          <select
            name="type"
            id="category"
            value={type}
            className="border p-2 rounded capitalize"
            onChange={handleChange}
          >
            {getTypeProduct.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
