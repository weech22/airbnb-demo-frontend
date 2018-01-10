import React, { Component } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import GuestModal from "./Guests/GuestModal";
import DateModal from "./Date/DateModal";
import FiltersModal from "./Filter/FilterModal";

const Wrap = styled.div`
  background: white;
  border-top: 1px solid rgba(200, 200, 200, 1);
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;

  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 100;

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
          <FilterButton name="Dates">
            <DateModal />
          </FilterButton>
          <FilterButton name="Guests">
            <GuestModal />
          </FilterButton>
          <DesktopButtons>
            <FilterButton>Room type</FilterButton>
            <FilterButton>Price</FilterButton>
            <FilterButton>Instant book</FilterButton>
          </DesktopButtons>
          <FilterButton name="More filters">
            <FiltersModal />
          </FilterButton>
        </Wrap>
      </div>
    );
  }
}

export default Filter;
