import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../ModalUI/Counter";

const Wrap = styled.div`
  height: calc(100vh - 153px);
  width: 95vw;
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-left: 8px;
  @media only screen and (min-width: 768px) {
    height: auto;
    width: 326px;
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 15px;
  }
`;

class Section extends Component {
  render() {
    return (
      <Wrap>
        <Counter
          count={this.props.adults}
          onGuestInc={this.props.onGuestInc}
          onGuestDec={this.props.onGuestDec}
          name="Adults"
          desc=""
        />
        <Counter
          count={this.props.children}
          onGuestInc={this.props.onGuestInc}
          onGuestDec={this.props.onGuestDec}
          name="Children"
          desc="Ages 2 — 12"
        />
        <Counter
          count={this.props.infants}
          onGuestInc={this.props.onGuestInc}
          onGuestDec={this.props.onGuestDec}
          name="Infants"
          desc="Under 2"
        />
      </Wrap>
    );
  }
}

export default Section;
