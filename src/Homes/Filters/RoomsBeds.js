import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../ModalUI/RBCounter";
import { SectionTitle } from "../ModalUI/UI";

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
        <Counter
          name="Bedrooms"
          count={this.props.bedrooms}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
        />
        <Counter
          name="Beds"
          count={this.props.beds}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
        />
        <Counter
          name="Bathrooms"
          count={this.props.bathrooms}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
        />
      </Wrap>
    );
  }
}

export default RoomsBeds;
