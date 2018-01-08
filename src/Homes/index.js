import React, { Component } from "react";
import Card from "./Card";
import SectionTitleAndMore from "../SectionTitleAndMore";
import { SliderBlock, Slider } from "../UI";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

class Homes extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitleAndMore name="Homes" />
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
      </div>
    );
  }
}

export default Homes;
