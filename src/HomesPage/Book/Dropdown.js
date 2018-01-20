import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import Moment from "react-moment";
import { FilterButton as Button } from "../ModalUI/UI";

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
            <Modal onCancel={this.toggleClose} />
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
