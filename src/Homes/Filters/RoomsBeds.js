import React, { Component } from "react";
import styled from "styled-components";
import { SectionTitle, RBCounter } from "../ModalUI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

class RoomsBeds extends Component {
  render() {
    return (
      <Wrap>
        <SectionTitle>Rooms and beds</SectionTitle>
        <RBCounter
          name="Bedrooms"
          count={this.props.bedrooms}
          onFilterInc={this.props.onFilterInc}
          onFilterDec={this.props.onFilterDec}
        />
        <RBCounter
          name="Beds"
          count={this.props.beds}
          onFilterInc={this.props.onFilterInc}
          onFilterDec={this.props.onFilterDec}
        />
        <RBCounter
          name="Bathrooms"
          count={this.props.bathrooms}
          onFilterInc={this.props.onFilterInc}
          onFilterDec={this.props.onFilterDec}
        />
      </Wrap>
    );
  }
}

export default RoomsBeds;
