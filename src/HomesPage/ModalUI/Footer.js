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
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <RedButton onApply={this.props.onApply} text={this.props.text} />
      </Wrap>
    );
  }
}

export default Footer;
