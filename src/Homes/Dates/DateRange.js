import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";
import Moment from "react-moment";

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

function DateRange(props) {
  return (
    <Wrap>
      <CheckIn>
        {props.from ? <Moment format="MMM D" date={props.from} /> : "Check-in"}
      </CheckIn>
      <ArrowImg src={arrow} />
      <CheckOut>
        {props.to ? <Moment format="MMM D" date={props.to} /> : "Check-out"}
      </CheckOut>
    </Wrap>
  );
}

export default DateRange;
