import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
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
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      gonnaClose: false
    };
  }
  updateState() {
    this.setState({ gonnaClose: true });
  }

  render() {
    return (
      <div className="container">
        <Wrap>
          <Dropdown gonnaClose={this.state.gonnaClose} name="Dates">
            <DateModal onClickProp={this.updateState} id="Dates" />
          </Dropdown>
          <Dropdown name="Guests">
            <GuestModal />
          </Dropdown>
          <DesktopButtons>
            <Dropdown>Room type</Dropdown>
            <Dropdown>Price</Dropdown>
            <Dropdown>Instant book</Dropdown>
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
