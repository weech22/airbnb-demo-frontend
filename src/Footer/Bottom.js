import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Social from "./Social";
import Copyright from "./Copyright";

const Div = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Div1 = styled.div`
  position: relative;
  @media only screen and (min-width: 320px) {
    margin-top: 30px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
    margin-bottom: 46px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 34px;
    margin-bottom: 35px;
  }
`;

class Bottom extends Component {
  render() {
    return (
      <Div>
        <div className="row between-md between-lg">
          <div className="col-lg-2 col-md-2 col-sm-5 col-xs-5">
            <Copyright />
          </div>
          <div className="col-lg-4 col-md-5 col-sm-9 col-xs-9">
            <Div1>
              <Nav />
              <Social />
            </Div1>
          </div>
        </div>
      </Div>
    );
  }
}

export default Bottom;
