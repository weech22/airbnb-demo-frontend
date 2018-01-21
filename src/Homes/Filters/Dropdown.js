import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import Moment from "react-moment";
import ModalWindow from "../ModalUI/ModalWindow";
import { FilterButton as Button } from "../ModalUI/UI";

const Wrap = styled.div`
  display: inline-block;
`;

class Dropdown extends Component {
  state = {
    isOpen: false,
    home: false,
    privateRoom: false,
    sharedRoom: false,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0
  };

  resetFilters = () => {
    this.setState({
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0
    });
  };

  saveFilters = () => {
    this.setState({
      isOpen: false
    });
  };

  increment = (field, value) => {
    this.setState({ [field]: value });
  };

  decrement = (field, value) => {
    if (value >= 0) {
      this.setState({ [field]: value });
    }
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({
      isOpen: false,
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0
    });
  };

  handleCheck = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          More filters
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById("modal")}>
            <ModalWindow>
              <Modal
                onCancel={this.toggleClose}
                onReset={this.resetFilters}
                onSave={this.saveFilters}
                onCheck={this.handleCheck}
                home={this.state.home}
                privateRoom={this.state.privateRoom}
                sharedRoom={this.state.sharedRoom}
                bedrooms={this.state.bedrooms}
                beds={this.state.beds}
                bathrooms={this.state.bathrooms}
                onPlus={this.inc}
                onMinus={this.dec}
              />
            </ModalWindow>
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
