import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FilterButton as Button, WhiteBackground, DesktopModal } from '../ModalUI';

const Wrap = styled.div`
  display: inline-block;
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
    this.props.openModal('Book');
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
        <Button active={this.state.isOpen || this.state.checked} onClick={this.toggleOpen}>
          Instant book
        </Button>
        {this.state.isOpen && (
          <div>
            <WhiteBackground onClick={this.toggleClose} />
            <DesktopModal>
              <Modal
                onCancel={this.toggleClose}
                onApply={this.saveFilter}
                checked={this.state.checked}
              />
            </DesktopModal>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
