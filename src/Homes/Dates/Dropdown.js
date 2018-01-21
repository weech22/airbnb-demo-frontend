import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import Moment from "react-moment";
import ModalWindow from "../ModalUI/ModalWindow";
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  WhiteBackground,
  DesktopModal
} from "../ModalUI/UI";

const DatesModal = styled(DesktopModal)`
  top: 52px;
  left: 8px;
`;

const formatDateLabel = (from, to, isOpen) => {
  if (from && to) {
    return (
      <div>
        <Moment format="MMM D" date={from} />
        <span> — </span>
        <Moment format="MMM D" date={to} />
      </div>
    );
  } else if (isOpen) {
    return "Check in — Check out";
  } else {
    return "Dates";
  }
};

const calculateMonthAmount = () => {
  if (matchMedia("(min-width: 992px)").matches) {
    return 2;
  } else if (matchMedia("(min-width: 576px)").matches) {
    return 1;
  } else {
    return 12;
  }
};

const adaptiveModal = (dialog, onClick) => {
  if (matchMedia("(min-width: 576px)").matches) {
    return (
      <div>
        <WhiteBackground onClick={onClick} />
        <DatesModal>{dialog}</DatesModal>
      </div>
    );
  } else {
    return (
      <Portal node={document && document.getElementById("modal")}>
        <ModalWindow>{dialog}</ModalWindow>
      </Portal>
    );
  }
};

class Dropdown extends Component {
  state = {
    isOpen: false,
    from: undefined,
    to: undefined
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  saveDates = (from, to) => {
    this.setState({ from: from, to: to, isOpen: false });
  };

  render() {
    const monthAmount = calculateMonthAmount();
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveDates}
        monthAmount={monthAmount}
        start={this.state.from}
        end={this.state.to}
      />
    );

    const adequateModal = adaptiveModal(dialogWindow, this.toggleClose);

    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          {formatDateLabel(this.state.from, this.state.to, this.state.isOpen)}
        </Button>
        {this.state.isOpen && adequateModal}
      </Wrap>
    );
  }
}

export default Dropdown;
