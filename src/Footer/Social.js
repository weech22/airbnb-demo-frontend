import React, { Component } from "react";
import styled from "styled-components";
import SocialLink from "./SocialLink";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const SocialBlock = styled.div`
  display: inline-block;
  float: right;
`;

class Social extends Component {
  render() {
    return (
      <SocialBlock>
        <SocialLink img={facebook} />
        <SocialLink img={twitter} />
        <SocialLink img={instagram} />
      </SocialBlock>
    );
  }
}

export default Social;
