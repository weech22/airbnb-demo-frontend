import React, { Component } from "react";
import styled from "styled-components";
import GuestModal from "./Guests/GuestModal";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";

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

class Dropdown extends Component {
  state = {
    isOpen: false,
    from: undefined,
    to: undefined
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
    console.log();
    console.log();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: !nextProps.gonnaClose
    });
  }

  render() {
    return (
      <Wrap>
        <Button active={this.state.isOpen} onClick={this.toggleOpen}>
          {this.props.dateFrom && this.props.dateTo
            ? this.props.dateFrom.toLocaleDateString() +
              " - " +
              this.props.dateTo.toLocaleDateString()
            : this.state.isOpen ? "Check in — Check out" : "Dates"}
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById("modal")}>
            {this.props.children}
          </Portal>
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
