import React, { Component } from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import Header from "../Modal UI/Header";
import styles from "../../styles.css";

const Wrap = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

class DateModal extends React.Component {
  state = {
    clicks: false
  };

  clickHandler = () => {
    //this.setState({ clicks: true });
    console.log("The link was clicked.");
  };
  render() {
    return (
      <Wrap>
        <DayPicker onDayClick={this.clickHandler} />
      </Wrap>
    );
  }
}
export default DateModal;
