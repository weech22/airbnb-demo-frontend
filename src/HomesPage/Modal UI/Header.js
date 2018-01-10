import React, { Component } from "react";
import close from "./close.svg";
import styled from "styled-components";

const Title = styled.h1`
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
`;

const Action = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #0f7276;
  margin-right: 7px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`;

const Img = styled.img`
  margin: 16.23px 0;
  margin-left: 8.23px;
`;

class Header extends Component {
  render() {
    return (
      <Wrap>
        <Img src={close} />
        <Title>{this.props.text}</Title>
        <Action>{this.props.action}</Action>
      </Wrap>
    );
  }
}

export default Header;
