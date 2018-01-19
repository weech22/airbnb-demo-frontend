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
    isOpen: false,
    adults: 1,
    children: 0,
    infants: 0
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({
      isOpen: false,
      adults: 1,
      children: 0,
      infants: 0
    });
  };

  saveGuests = () => {
    this.setState({
      isOpen: false
    });
  };

  resetGuests = () => {
    this.setState({ adults: 1, children: 0, infants: 0 });
  };

  incGuests = (field, value) => {
    this.setState({ [field]: value });
  };

  decGuests = (field, value) => {
    if (value >= 0) {
      this.setState({ [field]: value });
    }
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          Guests
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById("modal")}>
            <Modal
              onCancel={this.toggleClose}
              onReset={this.resetGuests}
              onSave={this.saveGuests}
              adults={this.state.adults}
              children={this.state.children}
              infants={this.state.infants}
              onPlus={this.incGuests}
              onMinus={this.decGuests}
            />
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
