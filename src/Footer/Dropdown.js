import React, { Component } from "react";
import styled from "styled-components";

const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  max-width: 229px;
  @media only screen and (min-width: 767px) {
    height: 48px;
  }

  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 13px;
  margin-bottom: 16px;
`;

const Option = styled.option`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-weight: lighter;
  font-size: 18px;
  color: #383838;
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
