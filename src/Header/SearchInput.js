import React, { Component } from "react";
import styled from "styled-components";
import search from "./search.svg";

const Input = styled.input`
  position: absolute;
  width: 392px;
  height: 48px;
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  mix-blend-mode: normal;
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
`;

class SearchInput extends Component {
  render() {
    return (
      <div className="col-lg-5 col-md-7 col-sm-10 col-xs-10">
        <Input type="text" placeholder="Try &quot;Miami&quot;" />
      </div>
    );
  }
}

export default SearchInput;
