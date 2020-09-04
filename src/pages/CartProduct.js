import React, { useEffect } from "react";
import { connect } from "react-redux";
// import EmptyCart from "../components/emptyCart";
import CartItem from "../components/cartItem";
import { FaAngleRight } from "react-icons/fa";
import { GET_TOTAL } from "../store/action";

function CartProduct({ cart = [], total, dispatch, amount }) {
  useEffect(() => {
    dispatch({ type: GET_TOTAL });
  });

  return (
    <div className="container mx-auto px-5">
      <div className="font-bold text-green-600 text-2xl mt-12 mb-12">
        Your Cart
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {cart.map((cart, index) => {
            return <CartItem cart={cart} key={index} />;
          })}
        </div>
        <div className="col-span-1">
          <div className="px-4 py-4 bg-gray-100 shadow-lg rounded-lg ">
            <div className="text-lg font-semibold text-green-600">
              Order Summary
            </div>
            <div className=" font-light mt-2">Item(s) Total {amount}</div>
            <div className="font-light">
              Total Price
              <div className="text-xl font-semibold"> $ {total}</div>
            </div>

            <div>
              <button
                className="bg-green-500 rounded-lg 
                  px-3 py-2 mt-2 text-lg font-semibold 
                  text-gray-100 mr-2 mb-2 hover:bg-green-300
                  flex items-center"
              >
                Checkout <FaAngleRight />
              </button>
            </div>
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

export default connect(mapStateToProps)(CartProduct);
