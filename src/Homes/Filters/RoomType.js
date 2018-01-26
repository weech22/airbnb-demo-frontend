import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Checkbox from '../UI/Checkbox';
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
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const CheckboxBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(SectionTitle)`
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const Icon = styled.img`
  display: none;
  @media only screen and (min-width: 767px) {
    display: inline;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 2px;
    margin-top: 7px;
  }
`;

const RoomType = props => (
  <Wrap className={props.className}>
    <Title>Room type</Title>
    <CheckboxBlock>
      <Checkbox
        id="home"
        checked={props.home}
        name="Entire home"
        description="Have a place to yourself"
        onFilterChange={props.onFilterChange}
      />
      <Icon src={home} alt="" />
    </CheckboxBlock>
    <CheckboxBlock>
      <Checkbox
        id="privateRoom"
        checked={props.privateRoom}
        name="Private room"
        description="Have your own room and share some common spaces"
        onFilterChange={props.onFilterChange}
      />
      <Icon src={privateRoom} alt="" />
    </CheckboxBlock>
    <CheckboxBlock>
      <Checkbox
        id="sharedRoom"
        checked={props.sharedRoom}
        name="Shared room"
        description="Stay in a shared space, like a common room"
        onFilterChange={props.onFilterChange}
      />
      <Icon src={sharedRoom} alt="" />
    </CheckboxBlock>
  </Wrap>
);

export default RoomType;
