import React, { Component } from "react";
import styled from "styled-components";
import plus from "./plus.svg";
import minus from "./minus.svg";

const Wrap = styled.div`
  padding-bottom: 40px;
  margin-left: 8px;
  margin-right: 8px;
`;

const Name = styled.h2`
  font-family: CircularAir;
  line-height: 21px;
  font-size: 18px;
  margin: 0;
  color: #383838;
  margin-left: 8px;
  margin-bottom: 6px;
`;

const Desc = styled.h3`
  font-family: CircularAir;
  line-height: 16px;
  font-weight: lighter;
  margin: 0;
  font-size: 14px;
  color: #383838;
  margin-left: 8px;
`;

const Plus = styled.button`
  margin: auto 0;
  margin-left: 18px;
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
  margin-right: 18px;
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
  margin-right: 8px;
`;

const Text = styled.div`
  display: flex;
  margin: auto 0;
`;

const Count = styled.span`
  margin: auto 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

class Counter extends Component {
  incGuests = () => {
    this.props.onPlus(this.props.name.toLowerCase(), this.props.count + 1);
  };

  decGuests = () => {
    this.props.onMinus(this.props.name.toLowerCase(), this.props.count - 1);
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
          <Buttons>
            <Minus onClick={this.decGuests} />
            <Count>{this.props.count}</Count>
            <Plus onClick={this.incGuests} />
          </Buttons>
        </div>
      </Wrap>
    );
  }
}

export default Counter;
