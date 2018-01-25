import React, { Component } from 'react';
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

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilters = (home, privateRoom, sharedRoom, bedrooms, beds, bathrooms) => {
    this.setState({
      home,
      privateRoom,
      sharedRoom,
      bedrooms,
      beds,
      bathrooms,
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
