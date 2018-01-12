import React, { Component } from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import Header from "../Modal UI/Header";
import styles from "../../styles.css";
import DateRange from "./DateRange";

const Wrap = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const DateHeader = styled(Header)`
  border: none;
  margin-bottom: 26px;
`;

class DateModal extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      from: undefined,
      to: undefined
    };
  }

  clickHandler = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  render() {
    const { from, to } = this.state;
    const days = {
      edgeDays: [from, to]
    };
    return (
      <Wrap>
        <DateHeader
          onClickProp={this.props.onClickProp}
          text="Dates"
          action="Reset"
        />
        <DateRange from={this.state.from} to={this.state.to} />
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          modifiers={days}
          onDayClick={this.clickHandler}
          disabledDays={[
            {
              before: new Date()
            }
          ]}
        />
      </Wrap>
    );
  }
}
export default DateModal;
