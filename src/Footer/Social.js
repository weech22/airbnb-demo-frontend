import React, { Component } from "react";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import styled from "styled-components";

const SocialBlock = styled.div`
  margin-top: 32px;
  text-align: right;
`;

const Img = styled.img`
  margin-right: 16px;
`;

class Social extends Component {
  render() {
    return (
      <div className="col-lg-2">
        <SocialBlock>
          <Img src={facebook} />
          <Img src={twitter} />
          <Img src={instagram} />
        </SocialBlock>
      </div>
    );
  }
}

export default Social;
