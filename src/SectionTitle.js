import React, { Component } from "react";
import styled from "styled-components";
import SeeAll from "./SeeAll";
import { Title } from "./textStyles";

class SectionTitle extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Title>{this.props.name}</Title>
          <SeeAll />
        </div>
      </div>
    );
  }
}

export default SectionTitle;
