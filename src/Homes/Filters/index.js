import React, { Component } from 'react';
import { Portal } from 'react-portal';
import Modal from './Modal';
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  FiltersModalWindow as ModalWindow,
  WhiteBackground,
} from '../ModalUI';
import DesktopModalWindow from '../ModalUI/FilterModalWindow';

const AdaptiveModal = (dialog, onClick) => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    return <DesktopModalWindow onClick={onClick}>{dialog}</DesktopModalWindow>;
  }
  return (
    <Portal node={document && document.getElementById('modal')}>
      <WhiteBackground onClick={onClick} />
      <ModalWindow>{dialog}</ModalWindow>
    </Portal>
  );
};

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    roomType: {
      home: false,
      privateRoom: false,
      sharedRoom: false,
    },
    roomsBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    },
    ameneties: {
      heating: false,
      kitchen: false,
      tv: false,
      wifi: false,
    },
    facilities: {
      elevator: false,
      parking: false,
      pool: false,
      wheelchair: false,
    },
    prices: [10, 1000],
    moreOptions: {
      instantBook: false,
      superhost: false,
    },
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

  saveFilters = (roomType, roomsBeds, ameneties, facilities, prices, moreOptions) => {
    this.setState({
      roomType,
      roomsBeds,
      ameneties,
      facilities,
      prices,
      moreOptions,
      isOpen: false,
    });
  };

  render() {
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveFilters}
        roomType={this.state.roomType}
        roomsBeds={this.state.roomsBeds}
        ameneties={this.state.ameneties}
        facilities={this.state.facilities}
        prices={this.state.prices}
        moreOptions={this.state.moreOptions}
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
