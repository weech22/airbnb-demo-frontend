import React, { Component } from 'react';
import Modal from './Modal';
import {
  FilterButton as Button,
  DesktopModal,
  WhiteBackground,
  FilterButtonBlock as Wrap,
} from '../ModalUI';

const formatPriceLabel = (min, max) => {
  if (min !== 10 || max !== 1000) {
    return `$${min} — $${max}`;
  }
  return 'Price';
};

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    prices: [10, 1000],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    this.props.openModal('Price');
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilter = (prices) => {
    this.setState({ prices, isOpen: false });
  };

  render() {
    return (
      <Wrap>
        <Button
          active={
            this.state.isOpen || (this.state.prices[0] !== 10 || this.state.prices[1] !== 1000)
          }
          onClick={this.toggleOpen}
        >
          {formatPriceLabel(this.state.prices[0], this.state.prices[1])}
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <DesktopModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilter}
                prices={this.state.prices}
              />
            </DesktopModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
