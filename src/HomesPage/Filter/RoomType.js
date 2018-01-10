import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import { SectionTitle } from "../Modal UI/UI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
`;

class RoomType extends Component {
  render() {
    return (
      <Wrap>
        <SectionTitle>Room type</SectionTitle>
        <Checkbox name="Entire home" desc="Have a place to yourself" />
        <Checkbox
          name="Private room"
          desc="Have your own room and share some common spaces"
        />
        <Checkbox
          name="Shared room"
          desc="Stay in a shared space, like a common room"
        />
      </Wrap>
    );
  }
}

export default RoomType;
