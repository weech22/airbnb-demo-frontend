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
  state = {
    from: this.props.start,
    to: this.props.end
  };

  dayClickHandler = (day, { disabled, selected }) => {
    if (!disabled) {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }
  };

  resetDates = () => {
    this.setState({ from: undefined, to: undefined });
  };

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
        <DateRange from={this.state.from} to={this.state.to} />
        <DayPicker
          numberOfMonths={this.props.monthAmount}
          selectedDays={[from, { from, to }]}
          modifiers={days}
          onDayClick={this.dayClickHandler}
          disabledDays={[
            {
              before: new Date()
            }
          ]}
        />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveDates} />
        <Footer onClick={this.saveDates}>Save</Footer>
      </div>
    );
  }
}
export default Modal;
