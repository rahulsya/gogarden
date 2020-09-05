import React from "react";
import { connect } from "react-redux";

function Checkout({ cart, total, amount }) {
  return (
    <div>
      {cart.map((item) => item.name)}
      <br />
      {total}
      <br />
      {amount}
    </div>
  );
}

const mapStateToProps = (store) => {
  const { cart, total, amount } = store;
  return { cart, total, amount };
};

export default connect(mapStateToProps)(Checkout);
