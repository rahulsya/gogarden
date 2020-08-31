import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={DetailProduct} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
