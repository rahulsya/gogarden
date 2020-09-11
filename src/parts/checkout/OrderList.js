import React from "react";

export default function OrderList({ cart, total }) {
  return (
    <div>
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
  );
}
