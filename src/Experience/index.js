import React, { Component } from "react";
import SectionTitleAndMore from "../SectionTitleAndMore";
import { SliderBlock, Slider, Section } from "../UI";
import Card from "./Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

class Experience extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitleAndMore name="Experiences" />

        <SliderBlock>
          <Slider>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <Card img={img1} price="29" name="Forest therapy" reviews="44" />
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <Card
                img={img2}
                price="69"
                name="Forest Whale watching"
                reviews="46"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <Card
                img={img3}
                price="69"
                name="Table Mountain Summit, Cable Car Down"
                reviews="44"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <Card img={img4} price="50" name="Salsa Night" reviews="44" />
            </div>
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Experience;
