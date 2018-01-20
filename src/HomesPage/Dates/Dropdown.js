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
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          {formatDateLabel(this.state.from, this.state.to, this.state.isOpen)}
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
                        onApply={this.saveDates}
                        monthAmount={
                          matchMedia("(min-width: 992px)").matches
                            ? 2
                            : matchMedia("(min-width: 576px)").matches ? 1 : 12
                        }
                        start={this.state.from}
                        end={this.state.to}
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
                <DatesModal>
                  <Modal
                    onCancel={this.toggleClose}
                    onApply={this.saveDates}
                    monthAmount={
                      matchMedia("(min-width: 992px)").matches
                        ? 2
                        : matchMedia("(min-width: 576px)").matches ? 1 : 12
                    }
                    start={this.state.from}
                    end={this.state.to}
                  />
                </DatesModal>
              </div>
            )))}
      </Wrap>
    );
  }
}

export default Dropdown;
