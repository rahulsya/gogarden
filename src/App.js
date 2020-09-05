import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import CartProduct from "./pages/CartProduct";
import Checkout from "./pages/Checkout";

import ErrorPage from "./pages/ErrorPage";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={DetailProduct} />
          <Route exact path="/cart" component={CartProduct} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={ErrorPage} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
