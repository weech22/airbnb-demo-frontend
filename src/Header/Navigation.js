import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #383838;
  display: none;
  margin: 27px 0 29px 0;
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

const Link = styled.a`
  padding-right: 8px;
  text-decoration: none;
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Link href="#">Become a host</Link>
        <Link href="#">Help</Link>
        <Link href="#">Sign Up</Link>
        <Link href="#">Log In</Link>
      </Nav>
    );
  }
}

export default Navigation;
