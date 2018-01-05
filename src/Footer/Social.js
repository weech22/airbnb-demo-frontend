import React, { Component } from "react";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";

const SocialBlock = styled.div`
  box-sizing: border-box;
  margin-top: 32px;
  text-align: right;
  border: 1px solid green;
  display: inline-block;
`;

class Social extends Component {
  render() {
    return (
      <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3">
        <div className="row lg-between md-between sm-between xs-between">
          <SocialButton img={facebook} />
          <SocialButton img={twitter} />
          <SocialButton img={instagram} />
        </div>
      </div>
    );
  }
}

export default Social;
