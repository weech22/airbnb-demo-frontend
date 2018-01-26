import React, { Component } from 'react';
import styled from 'styled-components';
import checkOn from './checkOn.svg';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
`;

const CheckboxInput = styled.input`
  appearance: none;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  &:checked {
    background-color: #008489;
    background-image: url(${checkOn});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const CheckboxBlock = styled.div`
  margin-bottom: 16px;
  display: flex;
  @media only screen and (min-width: 992px) {
    margin-bottom: ${props => (props.id === 'sharedRoom' ? '0px' : '16px')};
  }
`;

const Name = styled.label`
  font-family: CircularAir;
  line-height: 19px;
  font-size: 16px;
  font-weight: lighter;
  color: #383838;
  display: inline-block;
  margin: 0;
  margin-left: 12px;
  margin-top: 1px;
  @media only screen and (min-width: 767px) {
    margin-top: 4px;
    line-height: 21px;
    font-size: 18px;
    margin-top: auto;
    margin-bottom: auto;
  }
  @media only screen and (min-width: 992px) {
    line-height: 19px;
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-family: CircularAir;
  line-height: 14px;
  font-weight: lighter;
  font-size: 12px;
  margin: 0;
  margin-left: 12px;
  color: #383838;
  margin-top: 3px;
  @media only screen and (min-width: 767px) {
    margin-top: 4px;
    line-height: 16px;
    font-size: 14px;
  }
  @media only screen and (min-width: 992px) {
    line-height: 14px;
    font-size: 12px;
    max-width: 196px;
    margin-top: 6px;
  }
`;

const Text = styled.div`
  @media only screen and (min-width: 992px) {
    margin-top: 2px;
  }
`;

class Checkbox extends Component {
  state = {
    checked: this.props.checked,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handleChange = () => {
    this.setState(
      () => ({ checked: !this.state.checked }),
      () => {
        this.props.onFilterChange(this.props.id, this.state.checked);
      },
    );
  };

  render() {
    return (
      <Wrap>
        <CheckboxBlock id={this.props.id}>
          <CheckboxInput
            id={this.props.id}
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <Text>
            <Name for={this.props.id}>{this.props.name}</Name>
            <Desc>{this.props.description}</Desc>
          </Text>
        </CheckboxBlock>
      </Wrap>
    );
  }
}

export default Checkbox;
