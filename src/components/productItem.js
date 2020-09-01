import React from "react";
import { Link } from "react-router-dom";

export default function productItem({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Link to={`/product/${product.slug}`}>
              <div className="bg-green-300 px-1 py-1 rounded-lg">
                <img
                  src={product.images[0]}
                  alt={`img-${index}`}
                  className="rounded-lg"
                />
              </div>
              <div className="text-md font-semibold capitalize px-2 text-green-700 mb-2 mt-3">
                {product.name}
              </div>
              <span className="bg-green-500 rounded-full px-3 py-1 text-lg font-semibold text-gray-100">
                $ {product.price}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
