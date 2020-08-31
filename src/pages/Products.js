import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "How to Plant Tomato organically",
        imgUrl: "s3dj8nsjX9Y",
        price: 20,
      },
      {
        id: 2,
        title: "How to Plant Tomato hydrophonic",
        imgUrl: "4LiUI-Y2mI8",
        price: 20,
      },
      {
        id: 3,
        title: "Design Garden",
        imgUrl: "hvSBya7hX2Q",
        price: 50,
      },

      {
        id: 4,
        title: "How to Farm Koi fish",
        imgUrl: "B8UTPKlHNyw",
        price: 20,
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="container mx-auto px-5 mt-5">
          <div className="text-green-700 font-semibold text-xl mb-5">
            Product List
            <div className="divide-y divide-gray-400 w-64">
              <div className="text-center py-2"></div>
              <div className="text-center py-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <Link to={`/product/${product.id}`}>
                    <div className="bg-green-300 px-1 py-1 rounded-lg">
                      <img
                        src={`https://source.unsplash.com/${product.imgUrl}/1600x900`}
                        alt={`img-${index}`}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="text-md font-semibold capitalize px-2 text-green-700 mb-2 mt-3">
                      {product.title}
                    </div>
                    <span class="bg-green-500 rounded-full px-3 py-1 text-lg font-semibold text-gray-100">
                      $ {product.price}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
