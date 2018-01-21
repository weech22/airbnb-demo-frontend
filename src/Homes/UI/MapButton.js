import React, { Component } from "react";
import styled from "styled-components";
import mapButton from "./mapButton.svg";

const Btn = styled.img`
  position: fixed;
  right: 8px;
  bottom: 24px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

class MapButton extends Component {
  render() {
    return <Btn src={mapButton} />;
  }
}

export default MapButton;
