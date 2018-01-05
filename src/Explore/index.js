import React, { Component } from "react";
import styled from "styled-components";
import ExploreCard from "./ExploreCard";
import { Title } from "../textStyles";
import { SliderBlock, Slider } from "../blockStyles";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

class Explore extends Component {
  render() {
    return (
      <div className="container">
        <Title>Explore Airbnb</Title>
        <SliderBlock>
          <Slider>
            <ExploreCard name="Homes" img={img1} />
            <ExploreCard name="Experiences" img={img2} />
            <ExploreCard name="Restaurants" img={img3} />
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Explore;
