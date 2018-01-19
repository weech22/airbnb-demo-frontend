import React, { Component } from "react";
import styled from "styled-components";
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
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
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
          More Filters
        </Button>
        {this.state.isOpen && (
          <Portal node={document && document.getElementById("modal")} />
        )}
      </Wrap>
    );
  }
}

export default Dropdown;
