import React, { Component } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import GoogleMapReact from "google-map-react";

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  margin-bottom: 24px;
  @media only screen and (min-width: 320px) {
    padding-left: 8px;
  }
  @media only screen and (min-width: 992px) {
    padding-left: 0;
  }
`;

const DesktopButtons = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

class Filter extends Component {
  render() {
    return (
      <div className="container">
        <Wrap>
          <FilterButton>Dates</FilterButton>
          <FilterButton>Guests</FilterButton>
          <DesktopButtons>
            <FilterButton>Room type</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Instant book</FilterButton>
          </DesktopButtons>
          <FilterButton>More filters</FilterButton>
        </Wrap>
      </div>
    );
  }
}

export default Filter;
