import React, { Component } from "react";
import close from "./close.svg";
import styled from "styled-components";

const Img = styled.img``;

const Button = styled.button`
  appearance: none;
  cursor: pointer;
  background-color: white;
  background-image: url(${close});
  border: none;
  background-repeat: no-repeat;
  margin: 16.23px 0;
  margin-left: 8.23px;
  width: 15.53px;
  height: 15.53px;
`;

class CloseButton extends Component {
  render() {
    return <Button onClick={this.props.onClickProp} />;
  }
}

export default CloseButton;
