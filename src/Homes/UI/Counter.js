import React, { Component } from 'react';
import styled from 'styled-components';
import plus from './plus.svg';
import minus from './minus.svg';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => (props.id === 'kids' ? '33px' : '28px')};
  @media only screen and (min-width: 768px) {
    margin-bottom: ${props => (props.id === 'kids' ? '26px' : '22px')};
  }
`;

const Name = styled.h3`
  margin: 0;
  padding: 0;
  font-family: CircularAir;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    line-height: 23px;
    font-size: 20px;
  }
`;

const Description = styled.span`
  display: inline-block;
  font-family: CircularAir;
  line-height: 16px;
  font-weight: lighter;
  font-size: 14px;
  color: #383838;
  margin-top: 6px;
  @media only screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Plus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center center;
`;

const Minus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-position: center center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 112px;
  width: 100%;
`;

const Text = styled.div`
  display: ${props => (props.id === 'adults' ? 'flex' : 'block')};
  align-items: center;
`;

const Count = styled.span`
  font-family: CircularAir;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  font-weight: lighter;
`;

class Counter extends Component {
  state = {
    count: this.props.count,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ count: nextProps.count });
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState(
        () => ({ count: this.state.count - 1 }),
        () => {
          this.props.onGuestsChange(this.props.id, this.state.count);
        },
      );
    }
  };

  increment = () => {
    this.setState(
      () => ({ count: this.state.count + 1 }),
      () => {
        this.props.onGuestsChange(this.props.id, this.state.count);
      },
    );
  };

  render() {
    return (
      <Wrap id={this.props.id}>
        <Text id={this.props.id}>
          <Name>{this.props.name}</Name>
          <Description>{this.props.description}</Description>
        </Text>
        <Buttons>
          <Minus onClick={this.decrement} />
          <Count>{this.state.count}</Count>
          <Plus onClick={this.increment} />
        </Buttons>
      </Wrap>
    );
  }
}

export default Counter;
