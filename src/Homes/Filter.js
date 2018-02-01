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
    filterOpened: null,
  };

  openModal = (filterName) => {
    this.setState({ filterOpened: filterName });
  };

  isAnyModalOpened = () => {
    const isOn = filter => this.state[filter] === true;
    const activeFilter = Object.keys(this.state).find(isOn);
    return activeFilter;
  };

  render() {
    const isAnyState = this.isAnyModalOpened();

    return (
      <Wrap anyFilterOpened={isAnyState}>
        <div className="container">
          <ModalWrap>
            <Dates isOpen={this.state.filterOpened === 'Dates'} openModal={this.openModal} />
            <Guests isOpen={this.state.filterOpened === 'Guests'} openModal={this.openModal} />
            <DesktopButtons>
              <Room isOpen={this.state.filterOpened === 'Room'} openModal={this.openModal} />
              <Price isOpen={this.state.filterOpened === 'Price'} openModal={this.openModal} />
              <Book isOpen={this.state.filterOpened === 'Book'} openModal={this.openModal} />
            </DesktopButtons>
            <Filters isOpen={this.state.filterOpened === 'Filters'} openModal={this.openModal} />
          </ModalWrap>
        </div>
      </Wrap>
    );
  }
}

export default Filter;

//
