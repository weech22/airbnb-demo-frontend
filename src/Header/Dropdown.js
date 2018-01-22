import React, { Component } from "react";
import arrow from "./arrowDown.svg";
import styled from "styled-components";

const Img = styled.img`
  margin-top: 38.22px;
  margin-bottom: 36.22px;
  margin-right: -4px;

  @media only screen and (min-width: 762px) {
    margin-left: 8px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

class Dropdown extends Component {
  render() {
    return <Img src={arrow} />;
  }
}

export default Dropdown;
