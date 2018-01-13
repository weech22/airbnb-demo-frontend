import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import GuestModal from "./Guests/GuestModal";
import DateModal from "./Date/DateModal";
import FiltersModal from "./Filter/FilterModal";

const Wrap = styled.div`
  background: white;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 100;
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
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      gonnaClose: false
    };
  }
  closeModal() {
    this.setState({ gonnaClose: true });
  }

  render() {
    return (
      <div className="container">
        <Wrap>
          <Dropdown gonnaClose={this.state.gonnaClose} name="Dates">
            <DateModal onClickProp={this.closeModal} id="Dates" />
          </Dropdown>
          <Dropdown name="Guests">
            <GuestModal />
          </Dropdown>
          <DesktopButtons>
            <Dropdown name="Room type">
              <GuestModal />
            </Dropdown>
            <Dropdown name="Price">
              <GuestModal />
            </Dropdown>
            <Dropdown name="Instant book">
              <GuestModal />
            </Dropdown>
          </DesktopButtons>
          <Dropdown name="More filters">
            <FiltersModal />
          </Dropdown>
        </Wrap>
      </div>
    );
  }
}

export default Filter;
