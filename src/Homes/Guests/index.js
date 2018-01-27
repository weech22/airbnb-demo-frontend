import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import Modal from './Modal';
import { FilterButton as Button, WhiteBackground, DesktopModal, ModalWindow } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
`;

const formatGuestsLabel = (adults, kids, infants) => {
  if (infants) {
    return `${adults + kids} guests, ${infants} infants`;
  } else if (adults || kids) {
    return `${adults + kids} guests`;
  }
  return 'Guests';
};

const AdaptiveModal = (dialog, onClick) => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    return (
      <div>
        <WhiteBackground onClick={onClick} />
        <DesktopModal>{dialog}</DesktopModal>
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
    const filterState = {
      isDatesOpen: false,
      isGuestsOpen: false,
      isRoomOpen: false,
      isPriceOpen: false,
      isBookOpen: false,
      isFiltersOpen: false,
    };
    this.props.openModal(filterState);
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
    const isAnyFilter = this.state.adults > 1 || this.state.kids || this.state.infants;
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
        <Button active={this.state.isOpen || isAnyFilter} onClick={this.toggleOpen}>
          {formatGuestsLabel(this.state.adults, this.state.kids, this.state.infants)}
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
