import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./SliderArrow.svg";

class SliderArrow extends Component {
  render() {
    return (
      <a href="#">
        <img src={arrow} />
      </a>
    );
  }
}

export default SliderArrow;
