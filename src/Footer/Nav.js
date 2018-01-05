import React, { Component } from "react";
import styled from "styled-components";

const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 18px;
  font-size: 15px;
  color: #636363;
  margin-right: 16px;
  text-decoration: none;
`;

const FooterNav = styled.div`
  margin-top: 34px;
  text-align: right;
`;

class Nav extends Component {
  render() {
    return (
      <div className="col-lg-3 col-lg-offset-5">
        <FooterNav>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site map</Link>
        </FooterNav>
      </div>
    );
  }
}

export default Nav;
