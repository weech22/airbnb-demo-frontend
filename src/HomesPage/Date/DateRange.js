import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";

const Wrap = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const CheckIn = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #0f7276;
  cursor: pointer;
  font-weight: lighter;
  margin-left: 8px;
`;

const CheckOut = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: lighter;
  color: #636363;
`;

const ArrowImg = styled.img`
  margin: 0 16px;
`;

class DateRange extends React.Component {
  render() {
    return (
      <Wrap>
        <CheckIn>
          {!this.props.from && "Check-in"}
          {this.props.from && this.props.from.toLocaleDateString()}
        </CheckIn>
        <ArrowImg src={arrow} />
        <CheckOut>
          {!this.props.to && "Check-out"}
          {this.props.to && this.props.to.toLocaleDateString()}
        </CheckOut>
      </Wrap>
    );
  }
}

export default DateRange;
