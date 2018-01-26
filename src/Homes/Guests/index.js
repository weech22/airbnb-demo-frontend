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
    isOpen: this.props.isOpen,
    adults: 0,
    kids: 0,
    infants: 0,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    const filterState = {
      isDatesOpen: false,
      isGuestsOpen: true,
      isRoomOpen: false,
      isPriceOpen: false,
      isBookOpen: false,
      isFiltersOpen: false,
    };
    this.props.openModal(filterState);
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveGuests = (adults, kids, infants) => {
    this.setState({
      adults,
      kids,
      infants,
      isOpen: false,
    });
  };

  render() {
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveGuests}
        adults={this.state.adults}
        kids={this.state.kids}
        infants={this.state.infants}
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
