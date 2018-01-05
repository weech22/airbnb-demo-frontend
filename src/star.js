import React, { Component } from "react";
import styled from "styled-components";
import star from "./star.svg";

const StarImg = styled.img`
  margin-right: 4px;
  margin-top: 7px;
  margin-bottom: 0;
`;

class Star extends Component {
  render() {
    return <StarImg src={star} />;
  }
}

export default Star;
