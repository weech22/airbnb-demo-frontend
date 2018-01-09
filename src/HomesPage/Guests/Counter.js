import React, { Component } from "react";
import styled from "styled-components";
import plus from "./plus.svg";
import minus from "./minus.svg";

const Wrap = styled.div`
  margin-top: 40px;
  border: 1px solid red;
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

const ImgPlus = styled.img`
  display: inline-block;
  margin: auto 0;
  margin-right: 8px;
  margin-left: 18px;
`;

const ImgMinus = styled.img`
  margin-right: 18px;
`;

const Div = styled.div`
  display: flex;
`;

const Count = styled.span`
  margin: auto 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

class Counter extends Component {
  render() {
    return (
      <Wrap>
        <div className="row between-xs">
          <div>
            <Name>{this.props.name}</Name>
            <Desc>{this.props.desc}</Desc>
          </div>
          <Div>
            <ImgMinus src={minus} />
            <Count>1</Count>
            <ImgPlus src={plus} />
          </Div>
        </div>
      </Wrap>
    );
  }
}

export default Counter;
