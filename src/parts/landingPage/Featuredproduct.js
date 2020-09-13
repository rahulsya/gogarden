import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductProvider";

export default function Featuredproduct() {
  const context = useContext(ProductContext);
  const { featuredProduct } = context;
  return (
    <div>
      <div className="text-center text-green-600 mt-12 mb-5 font-semibold text-3xl">
        Featured Product
        <div className="divide-y divide-gray-400 lg:px-64">
          <div className="text-center py-2"></div>
          <div className="text-center py-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProduct.map((product, index) => {
          return (
            <div key={index}>
              <div className="bg-white px-1 py-1 rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.images[0]}
                  className="rounded-lg mb-2"
                />
              </div>
              <Link to={`product/${product.slug}`}>
                <div className="text-md font-semibold capitalize px-2 text-green-700">
                  {product.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
