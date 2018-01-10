import React, { Component } from "react";
import styled from "styled-components";
import RedButton from "./RedButton";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 8px;
  margin-top: 0px;
  border-top: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`;

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <RedButton text={this.props.text} />
      </Wrap>
    );
  }
}

export default Footer;
