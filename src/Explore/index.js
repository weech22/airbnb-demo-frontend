import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SectionTitle from "../SectionTitle";
import { Title, SliderBlock, Slider } from "../UI";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

class Explore extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Explore Airbnb" />
        <SliderBlock>
          <Slider>
            <div className="col-lg-4 col-md-5 col-xs-6">
              <Card name="Homes" img={img1} link="/homes" />
            </div>
            <div className="col-lg-4 col-md-5 col-xs-6">
              <Card name="Experiences" img={img2} />
            </div>
            <div className="col-lg-4 col-md-5 col-xs-6">
              <Card name="Restaurants" img={img3} />
            </div>
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Explore;
