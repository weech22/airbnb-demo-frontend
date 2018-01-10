import React, { Component } from "react";
import styled from "styled-components";
import mapButton from "./mapButton.svg";

const Btn = styled.img`
  position: fixed;
  right: 8px;
  bottom: 24px;
`;

class MapButton extends Component {
  render() {
    return <Btn src={mapButton} />;
  }
}

export default MapButton;
