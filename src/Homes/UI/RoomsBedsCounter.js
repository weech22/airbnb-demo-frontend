import React, { Component } from 'react';
import styled from 'styled-components';
import plus from './plus.svg';
import minus from './minus.svg';

const Wrap = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
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

const Count = styled.span`
  margin: auto 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
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
          this.props.onFilterChange(this.props.id, this.state.count);
        },
      );
    }
  };

  increment = () => {
    this.setState(
      () => ({ count: this.state.count + 1 }),
      () => {
        this.props.onFilterChange(this.props.id, this.state.count);
      },
    );
  };

  render() {
    return (
      <Wrap>
        <Name>{this.props.name}</Name>

        <div className="col-xs-5">
          <Buttons>
            <Minus onClick={this.decrement} />
            <Count>{this.state.count}+</Count>
            <Plus onClick={this.increment} />
          </Buttons>
        </div>
      </Wrap>
    );
  }
}

export default Counter;
