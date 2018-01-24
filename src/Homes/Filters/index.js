import React, { Component } from 'react';
import { Portal } from 'react-portal';
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  FiltersModalWindow as ModalWindow,
  Header,
  Footer,
  FiltersBottomPanel as BottomPanel,
  WhiteBackground,
} from '../ModalUI';
import RoomType from './RoomType';
import RoomsBeds from './RoomsBeds';
import PriceRange from './PriceRange';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';

const AdaptiveModal = (dialog, onClick) => (
  <Portal node={document && document.getElementById('modal')}>
    <WhiteBackground onClick={onClick} />
    <ModalWindow>{dialog}</ModalWindow>
  </Portal>
);

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
    const dialogWindow = (
      <div>
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
      </div>
    );

    const adaptiveModal = AdaptiveModal(dialogWindow, this.toggleClose);

    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          More filters
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
