import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  @media only screen and (min-width: 360px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

class SocialLink extends Component {
  render() {
    return (
      <a href="#">
        <Img src={this.props.img} />
      </a>
    );
  }
}

export default SocialLink;
