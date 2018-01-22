import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SectionTitle from "../../UI/SectionTitle";
import { SliderBlock, Slider } from "../../UI/UI";
import { Link } from "react-router-dom";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class Explore extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Explore Airbnb" />
        <SliderBlock>
          <Slider>
            <div className="col-lg-4 col-md-5 col-xs-6">
              <StyledLink to="/homes">
                <Card name="Homes" img={img1} />
              </StyledLink>
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
