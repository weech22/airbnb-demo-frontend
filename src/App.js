import React, { Component } from "react";
import styled from "styled-components";
import "./font.css";
import {
  Title,
  Price,
  See,
  ExploreItemName,
  ExperienceItemName,
  Label,
  HomeItemName,
  HouseInfo,
  ResType,
  ResName,
  ResPrice,
  City,
  Link
} from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <Title>Explore Airbnb</Title>
        <Price>$29</Price>
        <See>See all ></See>
        <ExploreItemName>Homes</ExploreItemName>
        <ExperienceItemName>Forest therapy</ExperienceItemName>
        <Label>44 reviews</Label>
        <Label>97 · Superhost</Label>
        <HomeItemName>$82 La Salentina, see, nature & relax</HomeItemName>
        <HouseInfo>Entire house · 9 beds</HouseInfo>
        <ResName>Chumley’s</ResName>
        <ResPrice>About $60 per person</ResPrice>
        <ResType>Speakeasy</ResType>
        <City>Paris</City>
        <Link>Become a host</Link>
      </div>
    );
  }
}

export default App;
