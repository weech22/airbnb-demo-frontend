import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Social from "./Social";
import Copyright from "./Copyright";

const Wrap = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const NavBlock = styled.div`
  display: inline-block;
  @media only screen and (min-width: 320px) {
    margin-top: 11px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
    
  @media only screen and (min-width: 992px) {
    margin-top: 34px;
  }
`;

class Bottom extends Component {
  render() {
    return (
      <Wrap>
        <div className="row between-md">
          <div className="col-lg-2 col-md-2 col-xs-5">
            <Copyright />
          </div>
          <div className="col-lg-5 col-md-6 col-xs-9">
            <NavBlock>
              <Nav />
              <Social />
            </NavBlock>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Bottom;
