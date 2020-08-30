import React, { Component } from "react";

import Hero from "../components/landingPage/hero";
import Services from "../components/landingPage/services";
import Featuredproduct from "../components/landingPage/Featuredproduct";
import Footer from "../components/footer";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto px-5 mt-5">
          <Hero />
          {/* product */}
          <Featuredproduct />
          <Services />
        </div>
        <Footer />
      </div>
    );
  }
}
