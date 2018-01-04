import React, { Component } from "react";
import HomeItem from "./HomeItem";
import { Title } from "../textStyles";
import { SectionTitle } from "../blockStyles";
import HomesImg1 from "./1.png";
import HomesImg2 from "./2.png";
import HomesImg3 from "./3.png";

class HomesSection extends Component {
  render() {
    return (
      <div className="container">
        <Title>Homes</Title>
        <div className="row">
          <HomeItem
            ItemImg={HomesImg1}
            info="Entire house  ·  9 beds"
            name="$82	La Salentina, see, nature & relax"
            hosts="97"
          />
          <HomeItem
            ItemImg={HomesImg2}
            info="Entire house  ·  5 beds"
            name="$82 Your private 3 bedr. riad and exclusi…"
            hosts="161"
          />
          <HomeItem
            ItemImg={HomesImg3}
            info="Entire treehouse  ·  1 bed"
            name="$200 Dreamy Tropical Tree House"
            hosts="364"
          />
        </div>
      </div>
    );
  }
}

export default HomesSection;
