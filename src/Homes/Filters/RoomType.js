import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Checkbox } from '../ModalUI';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
  padding-left: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const RoomType = props => (
  <Wrap>
    <SectionTitle>Room type</SectionTitle>
    <Checkbox
      id="home"
      name="Entire home"
      description="Have a place to yourself"
      onCheck={props.onCheck}
      field={props.home}
    />
    <Checkbox
      id="privateRoom"
      name="Private room"
      description="Have your own room and share some common spaces"
      onCheck={props.onCheck}
      field={props.privateRoom}
    />
    <Checkbox
      id="sharedRoom"
      name="Shared room"
      description="Stay in a shared space, like a common room"
      onCheck={props.onCheck}
      field={props.sharedRoom}
    />
  </Wrap>
);

export default RoomType;
