import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const CR = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;
  margin-bottom: 32px;
  margin-left: 12px;
  display: inline-block;
  @media only screen and (min-width: 320px) {
    line-height: 14px;
    font-size: 12px;
  }
  @media only screen and (min-width: 992px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Logo = styled.img`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Div = styled.div`
  margin-top: 34px;
  display: inline-block;
  text-align: right;
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
