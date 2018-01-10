import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { SectionTitle } from "../Modal UI/UI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`;

class RoomsBeds extends Component {
  render() {
    return (
      <Wrap>
        <SectionTitle>Rooms and beds</SectionTitle>
        <Counter name="Bedrooms" desc="" />
        <Counter name="Beds" desc="" />
        <Counter name="Bathrooms" desc="" />
      </Wrap>
    );
  }
}

export default RoomsBeds;
