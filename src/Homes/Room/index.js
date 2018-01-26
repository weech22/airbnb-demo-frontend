import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FilterButton as Button, WhiteBackground, DesktopModal } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
`;

const RoomModal = styled(DesktopModal)`
  top: 52px;
  left: 179px;
`;

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    home: false,
    privateRoom: false,
    sharedRoom: false,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    const filterState = {
      isDatesOpen: false,
      isGuestsOpen: false,
      isRoomOpen: true,
      isPriceOpen: false,
      isBookOpen: false,
      isFiltersOpen: false,
    };
    this.props.openModal(filterState);
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveFilters = (home, privateRoom, sharedRoom) => {
    this.setState({
      home,
      privateRoom,
      sharedRoom,
      isOpen: false,
    });
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          Room type
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <RoomModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilters}
                home={this.state.home}
                privateRoom={this.state.privateRoom}
                sharedRoom={this.state.sharedRoom}
              />
            </RoomModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
