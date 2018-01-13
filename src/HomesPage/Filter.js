import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import StaticDropdown from "./StaticDropdown";
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
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleSaveDates = this.handleSaveDates.bind(this);

    this.state = {
      dateFrom: undefined,
      dateTo: undefined,
      gonnaClose: false
    };
  }
  closeModal() {
    this.setState({ gonnaClose: true });
  }

  handleSaveDates(dateFrom, dateTo) {
    this.setState({
      dateFrom: dateFrom,
      dateTo: dateTo
    });
  }
  render() {
    return (
      <div className="container">
        <Wrap>
          <Dropdown
            gonnaClose={this.state.gonnaClose}
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
            name="Dates"
          >
            <DateModal
              handleSaveDates={this.handleSaveDates}
              onCancel={this.closeModal}
              onClickProp={this.closeModal}
              monthAmount={
                matchMedia("(min-width: 992px)").matches
                  ? 2
                  : matchMedia("(min-width: 576px)").matches ? 1 : 12
              }
              id="Dates"
            />
          </Dropdown>

          <StaticDropdown name="Guests" />
          <DesktopButtons>
            <StaticDropdown name="Room type" />
            <StaticDropdown name="Price" />
            <StaticDropdown name="Instant book" />
          </DesktopButtons>
          <StaticDropdown name="More filters" />
        </Wrap>
      </div>
    );
  }
}

export default Filter;
