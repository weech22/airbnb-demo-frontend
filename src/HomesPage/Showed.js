import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
`;

class Showed extends Component {
  render() {
    return (
      <div className="container">
        <Text>1 – 18 of 300+ Rentals</Text>
      </div>
    );
  }
}

export default Showed;
