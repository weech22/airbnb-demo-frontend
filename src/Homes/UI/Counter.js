import React, { Component } from 'react';
import styled from 'styled-components';
import plus from './plus.svg';
import minus from './minus.svg';

const Wrap = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

const Name = styled.h2`
  font-family: CircularAir;
  line-height: 21px;
  font-size: 18px;
  margin: 0;
  color: #383838;
  margin-bottom: 6px;
`;

const Desc = styled.h3`
  font-family: CircularAir;
  line-height: 16px;
  font-weight: lighter;
  margin: 0;
  font-size: 14px;
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
    this.props.onGuestInc(this.props.id, this.props.count + 1);
  };

  decrement = () => {
    this.props.onGuestDec(this.props.id, this.props.count - 1);
  };

  render() {
    return (
      <Wrap>
        <div className="row between-xs">
          <Text>
            <div>
              <Name>{this.props.name}</Name>
              <Desc>{this.props.desc}</Desc>
            </div>
          </Text>
          <div className="col-xs-5">
            <Buttons>
              <Minus onClick={this.decrement} />
              <Count>{this.props.count}</Count>
              <Plus onClick={this.increment} />
            </Buttons>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Counter;
