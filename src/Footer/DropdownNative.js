import React, { Component } from "react";
import styled from "styled-components";

const Select = styled.select`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  @media only screen and (min-width: 767px) {
    height: 48px;
  }
`;

class Dropdown extends Component {
  render() {
    return (
      <Select>
        <option>English</option>
      </Select>
    );
  }
}

export default Dropdown;
