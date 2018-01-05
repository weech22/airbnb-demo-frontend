import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Social from "./Social";
import Copyright from "./Copyright";

class Bottom extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
          <Copyright />
        </div>
        <Nav />
        <Social />
      </div>
    );
  }
}

export default Bottom;
