import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import {
  FilterButton as Button,
  ModalWindow,
  Header,
  Footer,
  FiltersBottomPanel as BottomPanel,
} from '../ModalUI';
import RoomType from './RoomType';
import RoomsBeds from './RoomsBeds';
import PriceRange from './PriceRange';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';

const Wrap = styled.div`
  display: inline-block;
`;

class Dropdown extends Component {
  state = {
    isOpen: false,
    home: false,
    privateRoom: false,
    sharedRoom: false,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  };

  resetFilters = () => {
    this.setState({
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    });
  };

  saveFilters = () => {
    this.setState({
      isOpen: false,
    });
  };

  increment = (field, value) => {
    this.setState({ [field]: value });
  };

  decrement = (field, value) => {
    if (value >= 0) {
      this.setState({ [field]: value });
    }
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({
      isOpen: false,
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    });
  };

  handleCheck = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          More filters
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById('modal')}>
            <ModalWindow>
              <Header
                text="All filters (0)"
                action="Clear All"
                onAction={this.resetFilters}
                onClose={this.toggleClose}
              />
              <RoomType
                onCheck={this.handleCheck}
                home={this.state.home}
                privateRoom={this.state.privateRoom}
                sharedRoom={this.state.sharedRoom}
              />
              <PriceRange />
              <RoomsBeds
                bedrooms={this.state.bedrooms}
                beds={this.state.beds}
                bathrooms={this.state.bathrooms}
                onFilterInc={this.increment}
                onFilterDec={this.decrement}
              />
              <MoreOptions />
              <Amenities />
              <Facilities />
              <BottomPanel onCancel={this.toggleClose} onApply={this.saveFilters} />
              <Footer onClick={this.saveFilters}>See homes</Footer>
            </ModalWindow>
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
