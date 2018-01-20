import React, { Component } from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import DateRange from "./DateRange";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";

const DateHeader = styled(Header)`
  border: none;
  margin-bottom: 26px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.resetDates = this.resetDates.bind(this);
    this.state = {
      from: this.props.start,
      to: this.props.end
    };
  }

  clickHandler = (day, { disabled, selected }) => {
    if (disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  resetDates() {
    this.setState({ from: undefined, to: undefined });
  }

  saveDates = () => {
    this.props.onApply(this.state.from, this.state.to);
  };

  render() {
    const { from, to } = this.state;
    const days = {
      edgeDays: [from, to]
    };
    return (
      <div>
        <DateHeader
          onClose={this.props.onCancel}
          onAction={this.resetDates}
          text="Dates"
          action="Reset"
        />
        {DateRange(this.state.from, this.state.to)}
        <DayPicker
          numberOfMonths={this.props.monthAmount}
          selectedDays={[from, { from, to }]}
          modifiers={days}
          onDayClick={this.clickHandler}
          disabledDays={[
            {
              before: new Date()
            }
          ]}
        />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveDates} />
        <Footer onClick={this.saveDates} text="Save" />
      </div>
    );
  }
}
export default Modal;
