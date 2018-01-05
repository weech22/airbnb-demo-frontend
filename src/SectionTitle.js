import React, { Component } from "react";
import styled from "styled-components";

class SectionTitle extends Component {
  render() {
    return (
      <div className="row between-lg">
        <div className="col-lg-2">
          <Title>Homes</Title>
        </div>
        <div className="col-lg-1">
          <SeeAll />
        </div>
      </div>
    );
  }
}

export default SectionTitle;
