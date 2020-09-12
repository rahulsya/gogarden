import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { ADDTOCART } from "../store/action";

import { FaCartPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function productItem({ products, add }) {
  const notify = () => {
    toast.success("Item Added To Cart!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  if (products.length === 0) {
    return (
      <div className="text-center text-xl font-semibold text-green-600 capitalize">
        Product not found..
      </div>
    );
  }
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
                onClick={() => {
                  add({ product });
                  notify();
                }}
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
      <ToastContainer />
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
