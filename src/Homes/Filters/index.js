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

const getFilterCount = (state) => {
  let count = 0;
  const sectionList = Object.keys(state);
  for (let i = 0; i < sectionList.length; i += 1) {
    const filterList = Object.keys(state[sectionList[i]]);
    for (let j = 0; j < filterList.length; j += 1) {
      if (state[sectionList[i]][filterList[j]]) {
        count += 1;
      }
    }
  }
  if (state.prices[0] === 10 && state.prices[1] === 1000) {
    count -= 2;
  } else if (state.prices[0] !== 10 || state.prices[1] !== 1000) {
    count -= 1;
  }
  return count;
};

const formatFiltersLabel = (state) => {
  const filtersOpened = getFilterCount(state);
  if (filtersOpened) {
    return `More filters · ${filtersOpened}`;
  }
  return 'More filters';
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
    const filterCount = getFilterCount(this.state);

    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveFilters}
        filterCount={filterCount}
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
        <Button active={this.state.isOpen || filterCount} onClick={this.toggleOpen}>
          {formatFiltersLabel(this.state)}
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
