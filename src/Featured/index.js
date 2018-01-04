import React, { Component } from "react";
import FeatureItem from "./FeatureItem";
import { Title } from "../textStyles";
import FeatImg1 from "./1.png";
import FeatImg2 from "./2.png";
import FeatImg3 from "./3.png";
import FeatImg4 from "./4.png";
import FeatImg5 from "./5.png";
import FeatImg6 from "./6.png";

class FeaturedSection extends Component {
  render() {
    return (
      <div className="container">
        <Title>Featured destinations</Title>
        <div className="row">
          <FeatureItem ItemImg={FeatImg1} city="Paris" />
          <FeatureItem ItemImg={FeatImg2} city="Miami" />
          <FeatureItem ItemImg={FeatImg3} city="Tokyo" />
          <FeatureItem ItemImg={FeatImg4} city="Cape town" />
          <FeatureItem ItemImg={FeatImg5} city="Seoul" />
          <FeatureItem ItemImg={FeatImg6} city="Los Angeles" />
        </div>
      </div>
    );
  }
}

export default FeaturedSection;
