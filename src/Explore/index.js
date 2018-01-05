import React, { Component } from "react";
import ExploreCard from "./ExploreCard";
import { Title } from "../textStyles";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

class Explore extends Component {
  render() {
    return (
      <div className="container">
        <Title>Explore Airbnb</Title>
        <div className="row">
          <ExploreCard name="Homes" img={img1} />
          <ExploreCard name="Experiences" img={img2} />
          <ExploreCard name="Restaurants" img={img3} />
        </div>
      </div>
    );
  }
}

export default Explore;
