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
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
`;

class RedButton extends Component {
  render() {
    return <Btn onClick={this.props.onApply}>{this.props.text}</Btn>;
  }
}

export default RedButton;
