import React, { Component } from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Title = styled.h1`
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
`;

const Action = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #0f7276;
  margin-right: 7px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gonnaClose: false
    };
  }

  render() {
    return (
      <Wrap className={this.props.className}>
        <CloseButton onClickProp={this.props.onClickProp} />
        <Title>{this.props.text}</Title>
        <Action>{this.props.action}</Action>
      </Wrap>
    );
  }
}

export default Header;
