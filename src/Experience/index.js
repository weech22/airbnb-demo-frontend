import React, { Component } from "react";
import SectionTitle from "../SectionTitle";
import { SliderBlock, Slider } from "../blockStyles";
import ExpCard from "./ExpCard";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

class Experience extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Experiences" />
        <SliderBlock>
          <Slider>
            <ExpCard img={img1} price="29" name="Forest therapy" reviews="44" />
            <ExpCard img={img2} price="69" name="Whale watching" reviews="46" />
            <ExpCard
              img={img3}
              price="69"
              name="Table Mountain Summit, Cable Car Down"
              reviews="44"
            />
            <ExpCard img={img4} price="50" name="Salsa Night" reviews="44" />
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Experience;
