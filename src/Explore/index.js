import React, { Component } from "react";
import ExploreItem from "./ExploreItem";
import { Title } from "../textStyles";
import ExploreImg1 from "./1.png";
import ExploreImg2 from "./2.png";
import ExploreImg3 from "./3.png";
import "flexboxgrid2";

class ExploreSection extends Component {
  render() {
    return (
      <div className="container">
        <Title>Explore Airbnb</Title>
        <div className="row">
          <ExploreItem name="Homes" ItemImg={ExploreImg1} />
          <ExploreItem name="Experiences" ItemImg={ExploreImg2} />
          <ExploreItem name="Restaurants" ItemImg={ExploreImg3} />
        </div>
      </div>
    );
  }
}

export default ExploreSection;
