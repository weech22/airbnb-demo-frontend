import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../ModalUI/Counter";

const Wrap = styled.div`
  height: calc(100% - 153px);
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
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
