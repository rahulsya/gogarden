import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";

import EmptyCart from "../components/emptyCart";
import CheckoutForm from "../parts/checkout/CheckoutForm";
import BankAccount from "../parts/checkout/BankAccount";
import OrderList from "../parts/checkout/OrderList";

function Checkout({ cart, total, amount }) {
  if (cart.length === 0) {
    return <EmptyCart message="no product you have order" />;
  }

  return (
    <div className="container mx-auto px-5">
      <Link to="/cart" className="inline-block">
        <div className="capitalize mt-5 mb-5 text-lg font-semibold flex items-center text-gray-800 ">
          <FaArrowLeft /> Back to cart
        </div>
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-3 lg:col-span-2">
          <CheckoutForm cart={cart} />
        </div>
        <div className="col-span-3 lg:col-span-1">
          {/* order list */}
          <OrderList cart={cart} total={total} />
          {/* end order list */}

          {/* bank account */}
          <BankAccount />
          {/* end bank account */}
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
