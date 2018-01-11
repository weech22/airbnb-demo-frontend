import React, { Component } from "react";
import styled from "styled-components";
import search from "./search.svg";

const Input = styled.input`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 392px;
  height: 48px;
  color: #383838;
  mix-blend-mode: normal;
  line-height: 24px;
  opacity: 0.64;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16.2px center;
  padding-left: 53px;
  margin-top: 16px;
  max-width: 83.3333%;
  @media only screen and (min-width: 320px) {
    margin-top: 16px;
    margin-bottom: 16px;

    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

class SearchInput extends Component {
  render() {
    return <Input type="text" placeholder="Try &quot;Miami&quot;" />;
  }
}

export default SearchInput;
