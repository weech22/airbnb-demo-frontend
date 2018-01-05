import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";

const A = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 24px;
  text-align: right;
  color: #383838;
  text-decoration: none;
  @media only screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Div = styled.div`
  float: right;
  margin-top: 47px;
`;

class SeeAll extends Component {
  render() {
    return (
      <Div>
        <A href="#">See all</A> <img src={arrow} />
      </Div>
    );
  }
}

export default SeeAll;
