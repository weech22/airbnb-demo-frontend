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
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
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
              <Modal />
            </BookModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
