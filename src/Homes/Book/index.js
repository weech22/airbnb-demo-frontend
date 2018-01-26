import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FilterButton as Button, WhiteBackground, DesktopModal } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
`;

const BookModal = styled(DesktopModal)`
  top: 52px;
  left: 369px;
`;

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    checked: false,
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
      isBookOpen: true,
      isFiltersOpen: false,
    };
    this.props.openModal(filterState);
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilter = (checked) => {
    this.setState({ checked, isOpen: false });
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          Instant book
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <BookModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilter}
                checked={this.state.checked}
              />
            </BookModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
