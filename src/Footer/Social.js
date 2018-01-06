import React, { Component } from "react";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const Block = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 149px;
  position: absolute;
  @media only screen and (min-width: 360px) {
    margin-left: 0;
  }
  @media only screen and (min-width: 767px) {
    margin-left: 24px;
    margin-top: 0px;
  }
`;

class Social extends Component {
  render() {
    return (
      <Block>
        <SocialButton img={facebook} />
        <SocialButton img={twitter} />
        <SocialButton img={instagram} />
      </Block>
    );
  }
}

export default Social;
