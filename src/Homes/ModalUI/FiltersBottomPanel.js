import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: none;
  position: relative;
  background: white;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;
  }
  @media only screen and (min-width: 992px) {
    justify-content: flex-end;
    padding-right: 0px;
  }
`;

const CancelBtn = styled.button`
  font-family: CircularAir;
  font-size: 18px;
  line-height: 21px;
  color: black;
  background: white;
  border: none;
  width: 57px;
  height: 23px;
  cursor: pointer;
  margin-right: 16px;
`;

const ApplyBtn = styled.button`
  font-family: CircularAir;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: white;
  background: #008489;
  border: none;
  border-radius: 4px;
  width: 147px;
  height: 48px;
  cursor: pointer;
`;

function BottomPanel(props) {
  return (
    <Wrap>
      <CancelBtn onClick={props.onCancel}>Cancel</CancelBtn>
      <ApplyBtn onClick={props.onApply}>See homes</ApplyBtn>
    </Wrap>
  );
}

export default BottomPanel;
