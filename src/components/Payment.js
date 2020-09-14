import React from "react";
import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa";

import { connect } from "react-redux";
import { CLEAR_CART } from "../store/action";

import OrderList from "../parts/checkout/OrderList";

import { motion } from "framer-motion";

function Payment({ cart, total, address, dispatch }) {
  return (
    <div className="container mx-auto px-5">
      <motion.div
        initial={{ scale: 0.4, y: 100, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col justify-center items-center mt-5"
      >
        <div className="shadow rounded w-full lg:w-1/2 py-4 ">
          <div className="font-semibold text-xl flex justify-center items-center text-center ">
            <FaCheck className="text-green-500" />
            Thank You ,Your Order In Process
          </div>
          <div className="mt-5 px-3">
            <div className="font-semibold text-xl">Shipping Details</div>
            <div>{address.fullName}</div>
            <div>{address.email}</div>
            <div>{address.phoneNumber}</div>
            <div>{address.address}</div>
          </div>

          <div className="px-3">
            <OrderList cart={cart} total={total} />
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-500 px-3 py-3 font-semibold text-white rounded"
              onClick={() => dispatch({ type: CLEAR_CART })}
            >
              Complete Order
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { cart, total, address } = state;
  return { cart, total, address };
};

export default connect(mapStateToProps)(Payment);
