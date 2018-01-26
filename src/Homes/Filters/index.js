import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import Modal from './Modal';
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  FiltersModalWindow as ModalWindow,
  WhiteBackground,
} from '../ModalUI';

const AdaptiveModal = (dialog, onClick) => (
  <Portal node={document && document.getElementById('modal')}>
    <WhiteBackground onClick={onClick} />
    <ModalWindow>{dialog}</ModalWindow>
  </Portal>
);

const HiddenWrap = styled(Wrap)`
  display: none;
`;

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    home: false,
    privateRoom: false,
    sharedRoom: false,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    heating: false,
    kitchen: false,
    tv: false,
    wifi: false,
    elevator: false,
    parking: false,
    pool: false,
    wheelchair: false,
    min: 10,
    max: 1000,
    instantBook: false,
    superhost: false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    const filterState = {
      isDatesOpen: false,
      isGuestsOpen: false,
      isRoomOpen: false,
      isPriceOpen: false,
      isBookOpen: false,
      isFiltersOpen: true,
    };
    this.props.openModal(filterState);
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilters = (
    home,
    privateRoom,
    sharedRoom,
    bedrooms,
    beds,
    bathrooms,
    heating,
    kitchen,
    tv,
    wifi,
    elevator,
    parking,
    pool,
    wheelchair,
    min,
    max,
    instantBook,
    superhost,
  ) => {
    this.setState({
      home,
      privateRoom,
      sharedRoom,
      bedrooms,
      beds,
      bathrooms,
      heating,
      kitchen,
      tv,
      wifi,
      elevator,
      parking,
      pool,
      wheelchair,
      min,
      max,
      instantBook,
      superhost,
      isOpen: false,
    });
  };

  render() {
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveFilters}
        home={this.state.home}
        privateRoom={this.state.privateRoom}
        sharedRoom={this.state.sharedRoom}
        bedrooms={this.state.bedrooms}
        beds={this.state.beds}
        bathrooms={this.state.bathrooms}
        heating={this.state.heating}
        kitchen={this.state.kitchen}
        tv={this.state.tv}
        wifi={this.state.wifi}
        elevator={this.state.elevator}
        parking={this.state.parking}
        pool={this.state.pool}
        wheelchair={this.state.wheelchair}
        min={this.state.min}
        max={this.state.max}
        instantBook={this.state.instantBook}
        superhost={this.state.superhost}
      />
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
