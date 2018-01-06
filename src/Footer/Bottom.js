import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Social from "./Social";
import Copyright from "./Copyright";

const Div = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

class Bottom extends Component {
  render() {
    return (
      <Div>
        <div className="row">
          <div className="col-lg-2">
            <Copyright />
          </div>
          <Nav />
          <Social />
        </div>
      </Div>
    );
  }
}

export default Bottom;
