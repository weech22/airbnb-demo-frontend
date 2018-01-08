import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const CopyrightTag = styled.span`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;

  @media only screen and (min-width: 320px) {
    line-height: 14px;
    font-size: 12px;
    margin-top: 4px;
  }
  @media only screen and (min-width: 992px) {
    line-height: 18px;
    font-size: 15px;
    margin-top: 2px;
  }
`;

const Logo = styled.img`
  @media only screen and (min-width: 320px) {
    margin-right: 8px;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 12px;
  }
`;

const CopyrightBlock = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 320px) {
    margin-top: 16px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 44px;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 34px;
  }
`;

class Copyright extends Component {
  render() {
    return (
      <CopyrightBlock>
        <Logo src={logo} />
        <CopyrightTag>© Airbnb Inc.</CopyrightTag>
      </CopyrightBlock>
    );
  }
}

export default Copyright;
