import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Checkbox } from '../ModalUI';
import sharedRoom from '../ModalUI/sharedRoom.svg';
import privateRoom from '../ModalUI/privateRoom.svg';
import home from '../ModalUI/home.svg';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-bottom: 16px;
  padding-left: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const CheckboxBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  display: none;
  @media only screen and (min-width: 767px) {
    display: inline;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;

const RoomType = props => (
  <Wrap>
    <SectionTitle>Room type</SectionTitle>
    <CheckboxBlock>
      <Checkbox
        id="home"
        name="Entire home"
        description="Have a place to yourself"
        onCheck={props.onCheck}
        field={props.home}
      />
      <Icon src={home} alt="" />
    </CheckboxBlock>
    <CheckboxBlock>
      <Checkbox
        id="privateRoom"
        name="Private room"
        description="Have your own room and share some common spaces"
        onCheck={props.onCheck}
        field={props.privateRoom}
      />
      <Icon src={privateRoom} alt="" />
    </CheckboxBlock>
    <CheckboxBlock>
      <Checkbox
        id="sharedRoom"
        name="Shared room"
        description="Stay in a shared space, like a common room"
        onCheck={props.onCheck}
        field={props.sharedRoom}
      />
      <Icon src={sharedRoom} alt="" />
    </CheckboxBlock>
  </Wrap>
);

export default RoomType;
