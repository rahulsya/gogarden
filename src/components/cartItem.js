import React from "react";
import { connect } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { setItem, removeItem } from "../store/action";

function cartItem({ cart, set_amount, remove }) {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row justify-between items-center
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
        <div className="w-64">{cart.name}</div>

        <div className="flex items-center mr-2">
          <button
            className="bg-green-500 rounded-lg 
          px-2 py-2 mt-2 text-lg font-semibold 
          text-gray-100 mr-2 mb-2 hover:bg-green-300
          flex items-center"
            onClick={() => set_amount("inc")}
          >
            <FaPlus />
          </button>
          {cart.quantity}
          <button
            className="bg-red-500 rounded-lg 
          px-2 py-2 mt-2 text-lg font-semibold 
          text-gray-100 ml-2 mb-2 hover:bg-red-300
          flex items-center"
            onClick={() => {
              if (cart.quantity === 1) {
                return remove();
              } else {
                return set_amount("dec");
              }
            }}
          >
            <FaMinus />
          </button>
        </div>
        <div>$ {cart.price}</div>
        <button
          className="bg-red-500 rounded-lg 
        px-2 py-2 mt-2 text-lg font-semibold 
        text-gray-100 ml-2 mb-2 hover:bg-red-300
        flex items-center"
          onClick={() => remove()}
        >
          <FaTrash />
        </button>
      </div>

      <div className="divide-y divide-gray-400">
        <div className="text-center py-2"></div>
        <div className="text-center py-2"></div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.cart;
  return {
    set_amount: (set) => dispatch(setItem(id, set)),
    remove: () => dispatch(removeItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(cartItem);
