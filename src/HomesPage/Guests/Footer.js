import React, { Component } from "react";
import styled from "styled-components";
import RedButton from "./RedButton";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 8px;
  margin-top: 1px;
`;

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <RedButton />
      </Wrap>
    );
  }
}

export default Footer;
