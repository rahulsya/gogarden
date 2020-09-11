import React, { Component } from "react";

import Hero from "../parts/landingPage/hero";
import Services from "../parts/landingPage/services";
import Featuredproduct from "../parts/landingPage/Featuredproduct";
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
