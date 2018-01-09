import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SliderArrow from "../SliderArrow";
import SectionTitle from "../SectionTitle";
import { SliderBlock, Slider, Section } from "../UI";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

const Next = styled.div`
  position: absolute;
  top: 115px;
  right: -20px;
  z-index: 1;
`;

class Featured extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Featured destinations" />
        <Section>
          <SliderBlock>
            <Slider>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img1} city="Paris" />
              </div>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img2} city="Miami" />
              </div>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img3} city="Tokyo" />
              </div>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img4} city="Cape town" />
              </div>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img5} city="Seoul" />
              </div>
              <div className="col-lg-2 col-md-3 col-xs-4">
                <Card img={img6} city="Los Angeles" />
              </div>
            </Slider>
          </SliderBlock>
          <Next>
            <SliderArrow />
          </Next>
        </Section>
      </div>
    );
  }
}

export default Featured;
