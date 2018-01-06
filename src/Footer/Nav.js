import React, { Component } from "react";
import styled from "styled-components";

const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;
  text-decoration: none;
  @media only screen and (min-width: 360px) {
    line-height: 14px;
    font-size: 12px;
    margin-left: 12px;
  }
  @media only screen and (min-width: 767px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const FooterNav = styled.div`
  @media only screen and (min-width: 320px) {
    left: -12px;
    top: 0;
    margin-right: 0;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
  @media only screen and (min-width: 992px) {
  }
  position: absolute;
`;

class Nav extends Component {
  render() {
    return (
      <FooterNav>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site map</Link>
      </FooterNav>
    );
  }
}

export default Nav;
