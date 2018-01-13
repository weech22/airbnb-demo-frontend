import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const CancelBtn = styled.button`
  background: white;
  border: none;
  width: 110px;
  height: 64px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  cursor: pointer;
`;

const ApplyBtn = styled.button`
  background: white;
  border: none;
  width: 110px;
  height: 64px;
  float: right;

  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #0f7276;
  cursor: pointer;
`;

class BottomPanel extends React.Component {
  render() {
    return (
      <Wrap>
        <CancelBtn onClick={this.props.onCancel}>Cancel</CancelBtn>
        <ApplyBtn onClick={this.props.onApply}>Apply</ApplyBtn>
      </Wrap>
    );
  }
}

export default BottomPanel;
