import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import Moment from "react-moment";

const Button = styled.button`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  background: ${props => (props.active ? "#008489" : "white")};
  color: ${props => (props.active ? "white" : "#383838")};
  cursor: pointer;
  @media only screen and (min-width: 320px) {
    padding: 7px 16px;
    margin: 12px 0;
    margin-right: 12px;
    line-height: normal;
    font-size: 14px;
  }
`;

const Wrap = styled.div`
  display: inline-block;
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

  handleSaveDates = (from, to) => {
    this.setState({ from: from, to: to, isOpen: false });
  };

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          {formatDateLabel(this.state.from, this.state.to, this.state.isOpen)}
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById("modal")}>
            <Modal
              onCancel={this.toggleClose}
              onApply={this.handleSaveDates}
              monthAmount={
                matchMedia("(min-width: 992px)").matches
                  ? 2
                  : matchMedia("(min-width: 576px)").matches ? 1 : 12
              }
            />
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
