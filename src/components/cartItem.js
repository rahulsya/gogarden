import React from "react";

export default function cartItem({ cart }) {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row justify-between 
        mr-4 items-center
        font-semibold
        text-green-500"
      >
        <div>
          <img
            src={cart.images[0]}
            alt={`cart-${cart.images[0]}`}
            className="rounded-full w-20 h-20"
          />
        </div>
        <div>{cart.name}</div>
        <div className="flex items-center mr-2">
          <button
            className="bg-red-500 rounded-lg 
          px-3 py-2 mt-2 text-lg font-semibold 
          text-gray-100 mr-2 mb-2 hover:bg-green-300
          flex items-center"
          >
            +
          </button>
          {cart.quantity}
          <button
            className="bg-green-500 rounded-lg 
          px-3 py-2 mt-2 text-lg font-semibold 
          text-gray-100 ml-2 mb-2 hover:bg-green-300
          flex items-center"
          >
            -
          </button>
        </div>
        <div>$ {cart.price}</div>
        <div>x</div>
      </div>
      <div className="divide-y divide-gray-400">
        <div className="text-center py-2"></div>
        <div className="text-center py-2"></div>
      </div>
    </div>
  );
}
