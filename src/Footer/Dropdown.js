import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowDown.svg";

const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  max-width: 229px;
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;

  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  color: #383838;
  @media only screen and (min-width: 320px) {
    padding-left: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 24px;
    background-position: 94.44444444% center;
  }
  @media only screen and (min-width: 767px) {
    padding-top: 14px;
    padding-bottom: 15px;
    margin-bottom: 16px;
    background-position: 93.18181818% center;
    line-height: 18px;
    font-size: 15px;
  }
  @media only screen and (min-width: 992px) {
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 13px;
    background-position: 93.0131% center;
  }
`;

class Dropdown extends Component {
  render() {
    return (
      <Select>
        <option>{this.props.name}</option>
      </Select>
    );
  }
}

export default Dropdown;
