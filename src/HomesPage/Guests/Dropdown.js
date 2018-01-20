import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import Moment from "react-moment";
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  WhiteBackground,
  DesktopModal
} from "../ModalUI/UI";

const GuestsModal = styled(DesktopModal)`
  top: 52px;
  left: 89px;
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
        {this.state.isOpen &&
          ((matchMedia("(max-width: 575px)").matches && (
            <Portal node={document && document.getElementById("modal")}>
              <div className="modal">
                <div className="modal-container">
                  <div className="content">
                    <div className="content-wrap">
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
                    </div>
                  </div>
                </div>
              </div>
            </Portal>
          )) ||
            (matchMedia("(min-width: 576px)").matches && (
              <div>
                <WhiteBackground onClick={this.toggleClose} />
                <GuestsModal>
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
                </GuestsModal>
              </div>
            )))}
      </Wrap>
    );
  }
}

export default Dropdown;
