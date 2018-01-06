import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const CR = styled.span`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;

  position: absolute;
  @media only screen and (min-width: 320px) {
    line-height: 14px;
    font-size: 12px;
    top: 2px;
    left: 26px;
  }
  @media only screen and (min-width: 768px) {
    top: 6px;
    left: 33px;
  }
  @media only screen and (min-width: 992px) {
    line-height: 18px;
    font-size: 15px;
    top: 4px;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const Div = styled.div`
  position: relative;
  @media only screen and (min-width: 320px) {
    margin-bottom: 11px;
    margin-top: 16px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 44px;
    margin-top: 30px;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 34px;
    margin-top: 35px;
  }
`;

class Copyright extends Component {
  render() {
    return (
      <Div>
        <Logo src={logo} />
        <CR>© Airbnb Inc.</CR>
      </Div>
    );
  }
}

export default Copyright;
