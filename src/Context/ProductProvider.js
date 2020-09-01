import React, { Component, createContext } from "react";
import items from "../data";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProduct: [],
  };

  componentDidMount() {
    let products = this.formatData(items);

    this.setState({
      products,
      sortedProduct: products,
    });
  }

  formatData(items) {
    let tempProduct = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let product = { ...item.fields, images, id };
      return product;
    });
    return tempProduct;
  }

  getProduct = (slug) => {
    let tempProduct = [...this.state.products];
    const product = tempProduct.find((product) => product.slug === slug);
    return product;
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductContext, ProductProvider };
