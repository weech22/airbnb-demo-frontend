import React, { Component } from "react";
import FeatureCard from "./FeatureCard";
import SectionTitle from "../SectionTitle";
import { SliderBlock, Slider } from "../blockStyles";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

class Featured extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Featured destinations" />
        <SliderBlock>
          <Slider>
            <FeatureCard img={img1} city="Paris" />
            <FeatureCard img={img2} city="Miami" />
            <FeatureCard img={img3} city="Tokyo" />
            <FeatureCard img={img4} city="Cape town" />
            <FeatureCard img={img5} city="Seoul" />
            <FeatureCard img={img6} city="Los Angeles" />
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Featured;
