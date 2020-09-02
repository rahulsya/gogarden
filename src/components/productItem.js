import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADDTOCART } from "../store/action";
import { FaCartPlus } from "react-icons/fa";

function productItem({ products, add }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex items-end justify-end px-2">
              <button
                className="inline-block 
                rounded-lg px-3 
                py-2 font-semibold 
                bg-green-500 text-gray-100 
                text-lg -mb-5 z-10
                hover:bg-green-300"
                onClick={() => add({ product })}
              >
                <FaCartPlus />
              </button>
            </div>
            <div className="bg-green-300 px-1 py-1 rounded-lg">
              <img
                src={product.images[0]}
                alt={`img-${index}`}
                className="rounded-lg"
              />
            </div>
            <Link to={`/product/${product.slug}`}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => {
      dispatch({ type: ADDTOCART, payload: data });
    },
  };
};

export default connect(null, mapDispatchToProps)(productItem);
