import React, { Component } from "react";
import ExpItem from "./ExpItem";
import { Title } from "../textStyles";
import ExperienceImg1 from "./1.png";
import ExperienceImg2 from "./2.png";
import ExperienceImg3 from "./3.png";
import ExperienceImg4 from "./4.png";

class ExperienceSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row between-lg">
          <Title>Experiences</Title>
        </div>
        <div className="row">
          <ExpItem
            ItemImg={ExperienceImg1}
            price="29"
            name="Forest therapy"
            reviews="44"
          />
          <ExpItem
            ItemImg={ExperienceImg2}
            price="69"
            name="Whale watching"
            reviews="46"
          />
          <ExpItem
            ItemImg={ExperienceImg3}
            price="69"
            name="Table Mountain Summit, Cable Car Down"
            reviews="44"
          />
          <ExpItem
            ItemImg={ExperienceImg4}
            price="50"
            name="Salsa Night"
            reviews="44"
          />
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
