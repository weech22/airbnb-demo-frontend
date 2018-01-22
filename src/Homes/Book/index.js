import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Portal } from "react-portal";
import { FilterButton as Button, ModalWindow } from "../ModalUI";

const Wrap = styled.div`
  display: inline-block;
`;

class Dropdown extends Component {
  state = {
    isOpen: false
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
          <Portal node={document && document.getElementById("modal")}>
            <ModalWindow>
              <Modal onCancel={this.toggleClose} />
            </ModalWindow>
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
