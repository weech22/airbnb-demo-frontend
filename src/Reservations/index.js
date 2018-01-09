import React, { Component } from "react";
import styled from "styled-components";
import SliderArrow from "../SliderArrow";
import SectionTitleAndMore from "../SectionTitleAndMore";
import { SliderBlock, Slider, Section } from "../UI";
import Card from "./Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

const Next = styled.div`
  position: absolute;
  top: 72px;
  right: -20px;
  z-index: 1;
`;

class Reservation extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitleAndMore name="Popular reservations around the world" />
        <Section>
          <SliderBlock>
            <Slider>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <Card img={img1} type="Speakeasy" name="Chumley’s" price="60" />
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <Card
                  img={img2}
                  type="Korean gastropub"
                  name="Hanjan"
                  price="50"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <Card
                  img={img3}
                  type="German american"
                  name="Prime Meats"
                  price="55"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6">
                <Card
                  img={img4}
                  type="Fine seafood"
                  name="Seaprice"
                  price="70"
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

export default Reservation;
