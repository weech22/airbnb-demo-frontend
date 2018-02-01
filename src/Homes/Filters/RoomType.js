import React, { Component } from 'react';
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
  margin-bottom: 1px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
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

class RoomType extends Component {
  state = {
    home: this.props.filter.home,
    privateRoom: this.props.filter.privateRoom,
    sharedRoom: this.props.filter.sharedRoom,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      home: nextProps.filter.home,
      privateRoom: nextProps.filter.privateRoom,
      sharedRoom: nextProps.filter.sharedRoom,
    });
  }

  handleFilterChange = (field, value) => {
    this.setState(
      () => ({ [field]: value }),
      () => {
        this.props.onFilterChange('roomType', this.state);
      },
    );
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <Title>Room type</Title>
        <CheckboxBlock>
          <Checkbox
            id="home"
            checked={this.state.home}
            name="Entire home"
            description="Have a place to yourself"
            onFilterChange={this.handleFilterChange}
          />
          <Icon src={home} alt="" />
        </CheckboxBlock>
        <CheckboxBlock>
          <Checkbox
            id="privateRoom"
            checked={this.state.privateRoom}
            name="Private room"
            description="Have your own room and share some common spaces"
            onFilterChange={this.handleFilterChange}
          />
          <Icon src={privateRoom} alt="" />
        </CheckboxBlock>
        <CheckboxBlock>
          <Checkbox
            id="sharedRoom"
            checked={this.state.sharedRoom}
            name="Shared room"
            description="Stay in a shared space, like a common room"
            onFilterChange={this.handleFilterChange}
          />
          <Icon src={sharedRoom} alt="" />
        </CheckboxBlock>
      </Wrap>
    );
  }
}

export default RoomType;
