import React, { Component } from "react";
import styled from "styled-components";
import RoomDropdown from "./Room/Dropdown";
import BookDropdown from "./Book/Dropdown";
import PriceDropdown from "./Price/Dropdown";
import FiltersDropdown from "./Filters/Dropdown";
import DatesDropdown from "./Dates/Dropdown";
import GuestsDropdown from "./Guests/Dropdown";

const Wrap = styled.div`
  background: white;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 1012;
  margin: 0 auto;
  padding-left: 8px;
  @media only screen and (min-width: 576px) {
    max-width: 552px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 746px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 968px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1176px;
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
          <DatesDropdown />
          <GuestsDropdown />
          <DesktopButtons>
            <RoomDropdown />
            <PriceDropdown />
            <BookDropdown />
          </DesktopButtons>
          <FiltersDropdown />
        </Wrap>
      </div>
    );
  }
}

export default Filter;
