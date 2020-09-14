import React, { Component } from "react";
import { ProductContext } from "../Context/ProductProvider";

import ProductItem from "../components/productItem";
import FilterProductItems from "../components/FilterProductItems";

export default class Products extends Component {
  static contextType = ProductContext;

  render() {
    const { sortedProduct } = this.context;
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
          <FilterProductItems />
          {/* endfilter */}
          <ProductItem products={sortedProduct} />
        </div>
      </div>
    );
  }
}
