import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Portal } from "react-portal";
import moment from "moment";
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  WhiteBackground,
  DesktopModal,
  ModalWindow
} from "../ModalUI";

const DatesModal = styled(DesktopModal)`
  top: 52px;
  left: 8px;
`;

const formatDateLabel = (from, to, isOpen) => {
  if (from && to) {
    const start = moment(from);
    const end = moment(to);
    return `${start.format("MMM D")} — ${end.format("MMM D")}`;
  } else if (isOpen) {
    return "Check in — Check out";
  } else {
    return "Dates";
  }
};

const getMonthAmount = () => {
  if (matchMedia("(min-width: 992px)").matches) {
    return 2;
  }
  if (matchMedia("(min-width: 576px)").matches) {
    return 1;
  }
  return 12;
};

const AdaptiveModal = (dialog, onClick) => {
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
    const monthAmount = getMonthAmount();
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveDates}
        monthAmount={monthAmount}
        start={this.state.from}
        end={this.state.to}
      />
    );

    const adaptiveModal = AdaptiveModal(dialogWindow, this.toggleClose);

    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          {formatDateLabel(this.state.from, this.state.to, this.state.isOpen)}
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
