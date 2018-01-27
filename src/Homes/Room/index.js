import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FilterButton as Button, WhiteBackground, DesktopModal } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
`;

const formatRoomTypeLabel = (home, privateRoom, sharedRoom) => {
  if (home && privateRoom && sharedRoom) {
    return 'Room type · 3';
  } else if ((home && privateRoom) || (home && sharedRoom) || (sharedRoom && privateRoom)) {
    return 'Room type · 2';
  } else if (home) {
    return 'Entire home';
  } else if (sharedRoom) {
    return 'Shared room';
  } else if (privateRoom) {
    return 'Private room';
  }
  return 'Room type';
};

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
    this.props.openModal('Room', true);
  };

  toggleClose = () => {
    this.props.openModal('Room', false);
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
    const isAnyFilter = this.state.home || this.state.privateRoom || this.state.sharedRoom;
    return (
      <Wrap>
        <Button active={this.state.isOpen || isAnyFilter} onClick={this.toggleOpen}>
          {formatRoomTypeLabel(this.state.home, this.state.privateRoom, this.state.sharedRoom)}
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <DesktopModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilters}
                home={this.state.home}
                privateRoom={this.state.privateRoom}
                sharedRoom={this.state.sharedRoom}
              />
            </DesktopModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
