import React, { Component, createContext } from "react";
// import items from "../data";
import Client from "../contentful";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProduct: [],
    featuredProduct: [],
    keyword: "",
    sortByPrice: "all",
    type: "all",
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "gogarden",
        order: "-sys.createdAt",
      });

      let products = this.formatData(response.items);
      let featuredProduct = products.filter(
        (product) => product.featured === true
      );

      this.setState({
        products,
        sortedProduct: products,
        featuredProduct,
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getData();
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

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let { products, keyword, sortByPrice, type } = this.state;
    let tempProduct = [...products];

    tempProduct = tempProduct.filter((product) => {
      const regex = new RegExp(keyword, "gi");
      return product.name.match(regex);
    });

    if (sortByPrice === "lowest") {
      tempProduct = tempProduct.sort((min, max) => {
        return min.price - max.price;
      });
    }

    if (sortByPrice === "highest") {
      tempProduct = tempProduct.sort((min, max) => {
        return max.price - min.price;
      });
    }

    if (type !== "all") {
      tempProduct = tempProduct.filter((item) => item.type === type);
    }

    this.setState({
      sortedProduct: tempProduct,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductContext, ProductProvider };
