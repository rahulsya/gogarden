import React, { Component } from "react";
import { ProductContext } from "../Context/ProductProvider";
import ProductItem from "../components/productItem";

export default class Products extends Component {
  static contextType = ProductContext;

  render() {
    const { sortedProduct, handleChange } = this.context;
    return (
      <div>
        <div className="container mx-auto px-5 mt-5">
          <div className="text-green-700 font-semibold text-xl mb-5">
            Product List
            <div className="divide-y divide-gray-400 w-64">
              <div className="text-center py-2"></div>
              <div className="text-center py-2"></div>
            </div>
          </div>
          {/* filter */}
          <div className="flex flex-row justify-center">
            <input
              type="text"
              name="keyword"
              placeholder="search"
              className="w-1/2 px-3 py-4 border rounded shadow-lg mb-5"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-center items-center mb-12">
            <div className="flex flex-col items-center px-3">
              <label htmlFor="sort">Sort</label>
              <select name="sort" id="sort" className="border p-2 rounded">
                <option value="1">All</option>
                <option value="1">Lowest Price</option>
                <option value="2">Highest Price</option>
              </select>
            </div>

            <div className="flex flex-col items-center px-3">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded"
              >
                <option value="1">All</option>
                <option value="1">organic</option>
                <option value="2">hydrophonic</option>
                <option value="2">gardening</option>
              </select>
            </div>
          </div>
          {/* endfilter */}
          <ProductItem products={sortedProduct} />
        </div>
      </div>
    );
  }
}
