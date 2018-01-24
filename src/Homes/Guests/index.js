import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import Modal from './Modal';
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  WhiteBackground,
  DesktopModal,
  ModalWindow,
} from '../ModalUI';

const GuestsModal = styled(DesktopModal)`
  top: 52px;
  left: 89px;
`;

const AdaptiveModal = (dialog, onClick) => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    return (
      <div>
        <WhiteBackground onClick={onClick} />
        <GuestsModal>{dialog}</GuestsModal>
      </div>
    );
  }
  return (
    <Portal node={document && document.getElementById('modal')}>
      <ModalWindow>{dialog}</ModalWindow>
    </Portal>
  );
};

class Dropdown extends Component {
  state = {
    isOpen: false,
    adults: 0,
    kids: 0,
    infants: 0,
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({
      isOpen: false,
      adults: 0,
      kids: 0,
      infants: 0,
    });
  };

  saveGuests = () => {
    this.setState({
      isOpen: false,
    });
  };

  resetGuests = () => {
    this.setState({ adults: 0, kids: 0, infants: 0 });
  };

  increment = (field, value) => {
    this.setState({ [field]: value });
  };

  decrement = (field, value) => {
    if (value >= 0) {
      this.setState({ [field]: value });
    }
  };

  render() {
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onReset={this.resetGuests}
        onSave={this.saveGuests}
        adults={this.state.adults}
        kids={this.state.kids}
        infants={this.state.infants}
        onGuestInc={this.increment}
        onGuestDec={this.decrement}
      />
    );

    const adaptiveModal = AdaptiveModal(dialogWindow, this.toggleClose);
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          Guests
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
