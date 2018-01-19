import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../ModalUI/Counter";

const Wrap = styled.div`
  height: calc(100vh - 153px);
  width: 100vw;
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
`;

class Section extends Component {
  render() {
    return (
      <Wrap>
        <Counter
          count={this.props.adults}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
          name="Adults"
          desc=""
        />
        <Counter
          count={this.props.children}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
          name="Children"
          desc="Ages 2 — 12"
        />
        <Counter
          count={this.props.infants}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
          name="Infants"
          desc="Under 2"
        />
      </Wrap>
    );
  }
}

export default Section;
