import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../ModalUI/Checkbox";
import { SectionTitle } from "../ModalUI/UI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
  padding-left: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

class RoomType extends Component {
  render() {
    return (
      <Wrap>
        <SectionTitle>Room type</SectionTitle>
        <Checkbox
          id="home"
          name="Entire home"
          desc="Have a place to yourself"
          onCheck={this.props.onCheck}
          field={this.props.home}
        />
        <Checkbox
          id="privateRoom"
          name="Private room"
          desc="Have your own room and share some common spaces"
          onCheck={this.props.onCheck}
          field={this.props.privateRoom}
        />
        <Checkbox
          id="sharedRoom"
          name="Shared room"
          desc="Stay in a shared space, like a common room"
          onCheck={this.props.onCheck}
          field={this.props.sharedRoom}
        />
      </Wrap>
    );
  }
}

export default RoomType;
