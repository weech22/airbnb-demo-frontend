import React, { Component } from "react";
import styled from "styled-components";
import SeeAll from "./SeeAll";
import { Title } from "./UI";

const Wrap = styled.div`
  @media only screen and (min-width: 320px) {
    margin-bottom: 16px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 24px;
  }
`;

class SectionTitle extends Component {
  render() {
    return (
      <Wrap>
        <Title>{this.props.name}</Title>
        <SeeAll />
      </Wrap>
    );
  }
}

export default SectionTitle;
