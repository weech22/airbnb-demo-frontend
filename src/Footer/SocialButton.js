import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  margin-left: 12px;
  margin-top: 32px;
  width: 16px;
  height: 16px;
  @media only screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;

class SocialButton extends Component {
  render() {
    return (
      <a href="#">
        <Img src={this.props.img} />
      </a>
    );
  }
}

export default SocialButton;
