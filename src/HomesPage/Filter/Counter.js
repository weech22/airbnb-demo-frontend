import React, { Component } from "react";
import styled from "styled-components";
import plus from "../Modal UI/plus.svg";
import minus from "../Modal UI/minus.svg";

const Wrap = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h2`
  font-family: CircularAir;
  line-height: 19px;
  font-size: 16px;
  font-weight: lighter;
  margin: 0;
  color: #383838;
  margin-left: 8px;
  margin-bottom: 6px;
  vertical-align: center;
`;

const ImgPlus = styled.img`
  display: inline-block;
  margin: auto 0;
  margin-right: 8px;
  margin-left: 12px;
`;

const ImgMinus = styled.img`
  margin-right: 14px;
`;

const Div = styled.div`
  display: flex;
`;

const Count = styled.span`
  margin: auto 0;
  font-family: CircularAir;
  line-height: 21px;
  font-size: 18px;
  font-weight: lighter;
  color: #383838;
`;

class Counter extends Component {
  render() {
    return (
      <Wrap>
        <Name>{this.props.name}</Name>
        <Div>
          <ImgMinus src={minus} />
          <Count>0+</Count>
          <ImgPlus src={plus} />
        </Div>
      </Wrap>
    );
  }
}

export default Counter;
