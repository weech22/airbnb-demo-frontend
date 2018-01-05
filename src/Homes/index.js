import React, { Component } from "react";
import HomeCard from "./HomeCard";
import SectionTitle from "../SectionTitle";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

class Homes extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Homes" />
        <div className="row">
          <HomeCard
            img={img1}
            info="Entire house  ·  9 beds"
            name="$82	La Salentina, see, nature & relax"
            hosts="97"
          />
          <HomeCard
            img={img2}
            info="Entire house  ·  5 beds"
            name="$82 Your private 3 bedr. riad and exclusi…"
            hosts="161"
          />
          <HomeCard
            img={img3}
            info="Entire treehouse  ·  1 bed"
            name="$200 Dreamy Tropical Tree House"
            hosts="364"
          />
        </div>
      </div>
    );
  }
}

export default Homes;
