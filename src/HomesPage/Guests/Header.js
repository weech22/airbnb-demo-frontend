import React, { Component } from "react";
import close from "./close.svg";
import styled from "styled-components";

const Title = styled.h1`
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
`;

const Reset = styled.span`
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
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
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
        <Title>Guests</Title>
        <Reset>Reset</Reset>
      </Wrap>
    );
  }
}

export default Header;
