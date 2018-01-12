import React, { Component } from "react";
import styled from "styled-components";
import GuestModal from "./Guests/GuestModal";

const Button = styled.button`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
  color: #383838;

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
    this.setState({ isOpen: !nextProps.gonnaClose });
  }

  render() {
    return (
      <Wrap>
        <Button onClick={this.toggleOpen}>{this.props.name}</Button>
        {this.state.isOpen && this.props.children}
      </Wrap>
    );
  }
}

export default Dropdown;
