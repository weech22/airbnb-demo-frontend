import React, { Component } from "react";
import styled from "styled-components";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";

const Wrap = styled.div`
  position: relative;
  background-color: #ffffff;
`;

const DateHeader = styled(Header)`
  border: none;
  margin-bottom: 26px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.resetDates = this.resetDates.bind(this);
    this.state = {
      from: undefined,
      to: undefined
    };
  }

  resetDates() {
    this.setState({ from: undefined, to: undefined });
  }

  render() {
    const { from, to } = this.state;
    const days = {
      edgeDays: [from, to]
    };
    return (
      <div className="modal">
        <div className="container">
          <div className="modal-container">
            <div className="content">
              <Wrap>
                <DateHeader
                  onClose={this.props.onCancel}
                  onAction={this.resetDates}
                  text="Dates"
                  action="Reset"
                />
                <BottomPanel
                  onCancel={this.props.onCancel}
                  onApply={this.handleSaveDates}
                />
                <Footer onClick={this.handleSaveDates} text="Save" />
              </Wrap>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
