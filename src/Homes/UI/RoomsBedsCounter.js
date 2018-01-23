import React, { Component } from 'react';
import styled from 'styled-components';
import plus from './plus.svg';
import minus from './minus.svg';

const Wrap = styled.div`
  margin-bottom: 16px;
`;

const Name = styled.h2`
  font-family: CircularAir;
  margin: 0;
  color: #383838;
  margin-bottom: 6px;
  line-height: normal;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
`;

const Plus = styled.button`
  margin: auto 0;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center center;
`;

const Minus = styled.button`
  margin: auto 0;
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
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 8px;
  @media only screen and (min-width: 768px) {
    padding-left: 0;
  }
`;

const Count = styled.span`
  margin: auto 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

class Counter extends Component {
  increment = () => {
    this.props.onFilterInc(this.props.name.toLowerCase(), this.props.count + 1);
  };

  decrement = () => {
    this.props.onFilterDec(this.props.name.toLowerCase(), this.props.count - 1);
  };

  render() {
    return (
      <Wrap>
        <div className="row between-xs">
          <Text>
            <Name>{this.props.name}</Name>
          </Text>
          <div className="col-xs-5">
            <Buttons>
              <Minus onClick={this.decrement} />
              <Count>{this.props.count}+</Count>
              <Plus onClick={this.increment} />
            </Buttons>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Counter;
