import React, { Component } from "react";
import { connect } from "react-redux";
import EmptyCart from "../components/emptyCart";
import { FaAngleRight } from "react-icons/fa";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: this.props.cart,
      total: this.props.total,
    };
    console.log(this.state);
  }
  render() {
    const { carts } = this.state;
    // if (carts.length === 0) {
    //   return <EmptyCart />;
    // }
    return (
      <div className="container mx-auto px-5">
        <div className="font-bold text-green-600 text-2xl mt-12 mb-12">
          Your Cart
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            {carts.map((cart) => {
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
            })}
          </div>
          <div className="col-span-1">
            <div className="px-4 py-4 bg-gray-100 shadow-lg rounded-lg ">
              <div className="text-lg font-semibold text-green-600">
                Order Summary
              </div>
              <div className=" font-light mt-2">Item(s) Total 20</div>
              <div className="font-light">
                Total Price
                <div className="text-xl font-semibold"> $ 100</div>
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
}

const mapStateToProps = (store) => {
  const { cart, total } = store;
  return { cart, total };
};

export default connect(mapStateToProps)(CartProduct);
