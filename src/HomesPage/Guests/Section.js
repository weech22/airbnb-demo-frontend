import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Wrap = styled.div`
  min-height: 528px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 0.5px;
`;

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <Counter name="Adults" desc="" />
        <Counter name="Children" desc="Ages 2 — 12" />
        <Counter name="Infants" desc="Under 2" />
      </Wrap>
    );
  }
}

export default Footer;
