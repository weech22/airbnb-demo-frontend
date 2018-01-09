import React, { Component } from "react";
import styled from "styled-components";

export const CardBlock = styled.a`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  color: #383838;

  @media only screen and (min-width: 320px) {
    font-size: 12px;
    line-height: 14px;
    margin-left: 12px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 20px;
    font-size: 17px;
    margin-left: 24px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

class Card extends Component {
  render() {
    return (
      <CardBlock href="#">
        <Img src={this.props.img} />
        <Name>{this.props.name}</Name>
      </CardBlock>
    );
  }
}

export default Card;
