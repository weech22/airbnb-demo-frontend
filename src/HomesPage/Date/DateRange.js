import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";

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
      <div>
        <CheckIn>
          {!this.props.from && "Check-in"}
          {this.props.from && this.props.from.toLocaleDateString()}
        </CheckIn>
        <ArrowImg src={arrow} />
        <CheckOut>
          {!this.props.to && "Check-out"}
          {this.props.to && this.props.to.toLocaleDateString()}
        </CheckOut>
      </div>
    );
  }
}

export default DateRange;
