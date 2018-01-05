import React, { Component } from "react";
import styled from "styled-components";

const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 18px;
  font-size: 15px;
  color: #636363;
  margin-right: 16px;
  margin-top: 34px;
  text-decoration: none;
`;

const FooterNav = styled.div`
  margin-top: 34px;
  text-align: right;
  border: 1px solid red;
`;

class Nav extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-lg-offset-5 col-md-offset-5">
        <div className="row lg-between md-between sm-between xs-between">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site map</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
