import React, { Component } from "react";
import styled from "styled-components";
import search from "./search.svg";

const Search = styled.input`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 24px;
  font-size: 16px;

  color: #383838;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  padding: 12px 0;
  padding-left: 53px;
  margin: 16px 0;

  width: 100%;

  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16.2px center;
`;

class SearchInput extends Component {
  render() {
    return <Search type="text" placeholder="Try &quot;Miami&quot;" />;
  }
}

export default SearchInput;
