import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #ffffff;
  padding: 12px 132px;
  border: none;
`;

class RedButton extends Component {
  render() {
    return <Btn>Save</Btn>;
  }
}

export default RedButton;
