import React, { Component } from "react";
import styled from "styled-components";
import SeeAll from "./SeeAll";
import { Title } from "./textStyles";

class SectionTitle extends Component {
  render() {
    return (
      <div className="row lg-between md-between sm-between xs-between">
        <div className="col-lg-11 col-md-10 col-sm-9 col-xs-9">
          <Title>{this.props.name}</Title>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-3">
          <SeeAll />
        </div>
      </div>
    );
  }
}

export default SectionTitle;
