import React, { Component } from "react";
import styled from "styled-components";
import mapButton from "./mapButton.svg";

const Btn = styled.img``;

class MapButton extends Component {
  render() {
    return <Btn src={mapButton} />;
  }
}

export default MapButton;
