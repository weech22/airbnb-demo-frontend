import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
`;

class Disclaimer extends Component {
  render() {
    return (
      <div className="container">
        <Text>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </Text>
      </div>
    );
  }
}

export default Disclaimer;
