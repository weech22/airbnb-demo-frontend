import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import { SectionTitle } from "../ModalUI/UI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
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
