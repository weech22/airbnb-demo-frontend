import React, { Component } from 'react';
import styled from 'styled-components';
import Room from './Room';
import Book from './Book';
import Price from './Price';
import Filters from './Filters';
import Dates from './Dates';
import Guests from './Guests';

const Wrap = styled.div`
  background: white;
  box-shadow: ${props => (props.anyFilterOpened ? 'none' : '0px 0.5px 0px rgba(72, 72, 72, 0.3)')};
  background-clip: padding-box;
  position: fixed;
  top: 83px;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  padding-left: 8px;
`;

const DesktopButtons = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

const ModalWrap = styled.div`
  position: relative;
`;

class Filter extends Component {
  state = {
    isDatesOpen: false,
    isGuestsOpen: false,
    isRoomOpen: false,
    isPriceOpen: false,
    isBookOpen: false,
    isFiltersOpen: false,
  };

  openModal = (filterName, action) => {
    const modalList = Object.keys(this.state);
    const result = {};
    for (let i = 0; i < modalList.length; i += 1) {
      result[modalList[i]] = false;
      result[`is${filterName}Open`] = action;
    }
    this.setState(result);
  };

  isAnyModalOpened = () => {
    const modalList = Object.keys(this.state);
    for (let i = 0; i < modalList.length; i += 1) {
      if (this.state[modalList[i]]) {
        return true;
      }
    }
    return false;
  };

  render() {
    const isAnyState = this.isAnyModalOpened();

    return (
      <Wrap anyFilterOpened={isAnyState}>
        <div className="container">
          <ModalWrap>
            <Dates isOpen={this.state.isDatesOpen} openModal={this.openModal} />
            <Guests isOpen={this.state.isGuestsOpen} openModal={this.openModal} />
            <DesktopButtons>
              <Room isOpen={this.state.isRoomOpen} openModal={this.openModal} />
              <Price isOpen={this.state.isPriceOpen} openModal={this.openModal} />
              <Book isOpen={this.state.isBookOpen} openModal={this.openModal} />
            </DesktopButtons>
            <Filters isOpen={this.state.isFiltersOpen} openModal={this.openModal} />
          </ModalWrap>
        </div>
      </Wrap>
    );
  }
}

export default Filter;

//
