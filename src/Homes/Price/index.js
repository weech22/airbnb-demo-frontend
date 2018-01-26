import React, { Component } from 'react';
import Modal from './Modal';
import {
  FilterButton as Button,
  DesktopModal,
  WhiteBackground,
  FilterButtonBlock as Wrap,
} from '../ModalUI';

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    min: 10,
    max: 1000,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    const filterState = {
      isDatesOpen: false,
      isGuestsOpen: false,
      isRoomOpen: false,
      isPriceOpen: true,
      isBookOpen: false,
      isFiltersOpen: false,
    };
    this.props.openModal(filterState);
  };
  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilter = (min, max) => {
    this.setState({ min, max, isOpen: false });
  };

  render() {
    return (
      <Wrap>
        <Button
          active={this.state.isOpen || (this.state.min !== 10 || this.state.max !== 1000)}
          onClick={this.toggleOpen}
        >
          Price
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <DesktopModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilter}
                min={this.state.min}
                max={this.state.max}
              />
            </DesktopModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
