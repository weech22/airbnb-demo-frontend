import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SliderArrow from "../SliderArrow";
import SectionTitleAndMore from "../SectionTitleAndMore";
import { SliderBlock, Slider, Section } from "../UI";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Next = styled.div`
  position: absolute;
  top: 102px;
  right: -20px;
  z-index: 1;
`;

class Homes extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitleAndMore name="Homes" />
        <Section>
          <SliderBlock>
            <Slider>
              <div className="col-lg-4 col-md-5 col-xs-6">
                <Card
                  img={img1}
                  info="Entire house  ·  9 beds"
                  name="$82	La Salentina, see, nature & relax"
                  hosts="97"
                />
              </div>
              <div className="col-lg-4 col-md-5 col-xs-6">
                <Card
                  img={img2}
                  info="Entire house  ·  5 beds"
                  name="$82 Your private 3 bedr. riad and exclusi…"
                  hosts="161"
                />
              </div>
              <div className="col-lg-4 col-md-5 col-xs-6">
                <Card
                  img={img3}
                  info="Entire treehouse  ·  1 bed"
                  name="$200 Dreamy Tropical Tree House"
                  hosts="364"
                />
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

export default Homes;
