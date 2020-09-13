import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductContext } from "../Context/ProductProvider";
import { ADDTOCART } from "../store/action";

class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
    };
  }
  static contextType = ProductContext;

  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);

    if (!product) {
      return (
        <div className="container mx-auto px-5 mt-5 ">product not found</div>
      );
    }

    const { name, images, description, tools } = product;
    const [mainImage, ...Allimages] = images;

    return (
      <div className="lg:container lg:mx-auto px-5 mt-5 ">
        <div className="text-center text-2xl font-semibold text-green-500 mb-5">
          {name}
        </div>
        <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-4 px-5">
          <div className="lg:row-span-2 lg:col-span-4 ">
            <img src={mainImage} alt="main" />
          </div>
          {Allimages.map((image, index) => {
            return (
              <div key={index} className="lg:row-span-1 lg:col-span-2 ">
                <img src={image} alt={`gmbr-${index}`} />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center px-5 mt-5">
            <div className="font-semibold mb-5">
              <span>Description</span>
              <div className="font-light">{description}</div>
            </div>

            <div className="font-semibold mb-4">
              <div className="mb-2">Tools you will get</div>
              {tools.map((tool, index) => {
                return (
                  <button
                    key={index}
                    className="bg-green-500 rounded-full px-3 py-1 text-lg font-semibold text-gray-100 mr-2 mb-2"
                  >
                    {tool}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 px-5 mb-16">
            <div className=" shadow-lg rounded-lg py-8 px-12">
              <div className="flex justify-between mb-3">
                <div className="font-semibold text-green-600 text-2xl">
                  Price
                </div>
                <div className="font-semibold text-green-600 text-2xl">
                  $ 20 / item
                </div>
              </div>
              <button
                className="hover:bg-green-400 
                w-full rounded-sm px-3 
                py-2 font-semibold bg-green-500 
                text-gray-100 text-lg "
                onClick={() => this.props.add({ product })}
              >
                Add To Cart
              </button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => dispatch({ type: ADDTOCART, payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
