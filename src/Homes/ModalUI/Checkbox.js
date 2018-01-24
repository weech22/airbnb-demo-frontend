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
`;

const Name = styled.h3`
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
`;

const Text = styled.div``;

class Checkbox extends Component {
  state = {
    isChecked: this.props.field,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isChecked: nextProps.field });
  }

  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
    this.props.onCheck(this.props.id, this.state.checked);
  };

  render() {
    return (
      <Wrap>
        <CheckboxBlock>
          <CheckboxInput
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheck}
          />
          <Text>
            <Name>{this.props.name}</Name>
            <Desc>{this.props.description}</Desc>
          </Text>
        </CheckboxBlock>
      </Wrap>
    );
  }
}

export default Checkbox;
