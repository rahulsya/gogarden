import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";

import CheckoutForm from "../components/form/CheckoutForm";

function Checkout({ cart, total, amount }) {
  return (
    <div className="container mx-auto px-5">
      <div className="capitalize mt-5 mb-5 text-md flex items-center text-gray-800">
        <FaArrowLeft /> Back to cart
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <CheckoutForm />
        </div>
        <div className="col-span-1 ">
          <div className="font-semibold text-xl mb-5 mt-5 text-gray-800">
            Order List
          </div>
          {cart.map((cart) => {
            return (
              <div
                className="flex flex-row 
          items-center
          justify-between 
          font-semibold
          text-white
          px-3 py-3 rounded shadow-xl
          bg-green-600
          mb-4"
                key={cart.id}
              >
                <div>
                  <img
                    src={cart.images[0]}
                    alt={`cart-${cart.images[0]}`}
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div>{cart.name}</div>
                <div>
                  {cart.quantity} x ${cart.price}
                </div>
              </div>
            );
          })}

          <div
            className="font-semibold text-xl mb-5 mt-5 
          text-right
          text-gray-800
          "
          >
            Total ${total}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  const { cart, total, amount } = store;
  return { cart, total, amount };
};

export default connect(mapStateToProps)(Checkout);
