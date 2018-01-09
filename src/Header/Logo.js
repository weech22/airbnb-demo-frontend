import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Img = styled.img`
  margin: 24px 0;
  margin-left: 0px;
`;

class Logo extends Component {
  render() {
    return <Img src={logo} />;
  }
}

export default Logo;
