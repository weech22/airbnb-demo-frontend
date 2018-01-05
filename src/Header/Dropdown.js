import React, { Component } from "react";
import arrow from "./arrowDown.svg";
import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  left: 37px;
  top: 38px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

class Dropdown extends Component {
  render() {
    return (
      <div>
        <Img src={arrow} />
      </div>
    );
  }
}

export default Dropdown;
