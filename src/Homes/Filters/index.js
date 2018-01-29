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
  const sectionList = Object.keys(state);
  const result = sectionList.reduce((res, section) => {
    const filterList = Object.keys(state[section]);
    if (section === 'prices') {
      return state[section][0] === 10 && state[section][1] === 1000 ? res : res + 1;
    }
    const activeFilterCount = filterList.reduce((count, filter) => {
      if (state[section][filter]) {
        return count + 1;
      }
      return count;
    }, 0);
    return res + activeFilterCount;
  }, 0);
  return result;
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
    amenities: {
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
    this.props.openModal('Filters', true);
  };

  toggleClose = () => {
    this.props.openModal('Filters', false);
  };

  saveFilters = (roomType, roomsBeds, amenities, facilities, prices, moreOptions) => {
    this.setState({
      roomType,
      roomsBeds,
      amenities,
      facilities,
      prices,
      moreOptions,
      isOpen: false,
    });
  };

  render() {
    const filterCount = getFilterCount(this.state);
    console.log('filterCount === ', filterCount);

    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveFilters}
        filterCount={filterCount}
        roomType={this.state.roomType}
        roomsBeds={this.state.roomsBeds}
        amenities={this.state.amenities}
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
