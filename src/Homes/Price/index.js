import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FilterButton as Button, DesktopModal, WhiteBackground } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
`;

const PriceModal = styled(DesktopModal)`
  top: 52px;
  left: 292px;
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
          Price
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <PriceModal>
              <Modal />
            </PriceModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
