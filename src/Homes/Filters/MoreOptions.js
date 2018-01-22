import React, { Component } from "react";
import styled from "styled-components";
import { SectionTitle } from "../ModalUI";

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 23px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

class MoreOptions extends Component {
  render() {
    return (
      <Wrap>
        <SectionTitle>More options</SectionTitle>
        <Range>$10 — $1000+</Range>
        <Average>The average nightly price is $75.</Average>
        <SliderBlock>
          <Rheostat min={1} max={100} values={[1, 100]} />
        </SliderBlock>
      </Wrap>
    );
  }
}

export default MoreOptions;
