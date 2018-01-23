import React, { Component } from 'react';
import styled from 'styled-components';
import checkOn from './check-on.svg';

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
  margin-left: 8px;
  margin-bottom: 16px;
  display: flex;
`;

const Name = styled.h3`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: lighter;
  color: #383838;
  display: inline-block;
  margin: 0;
  margin-left: 12px;
  margin-top: 1px;
`;

const Desc = styled.p`
  font-family: CircularAir;
  line-height: normal;
  font-weight: lighter;
  font-size: 12px;
  margin: 0;
  margin-left: 12px;
  color: #383838;
  margin-top: 3px;
`;

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
          <div>
            <Name>{this.props.name}</Name>
            <Desc>{this.props.desc}</Desc>
          </div>
        </CheckboxBlock>
      </Wrap>
    );
  }
}

export default Checkbox;
