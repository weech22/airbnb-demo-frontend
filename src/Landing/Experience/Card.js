import React, { Component } from "react";
import { CardBlock, Img, Label } from "../../UI/UI";
import styled from "styled-components";
import Star from "../../UI/Star";

const Name = styled.span`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: Left;
  font-weight: lighter;
  color: #383838;
  margin-top: 8px;
  margin-bottom: 0;
  @media only screen and (min-width: 320px) {
    line-height: 15px;
    font-size: 13px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Price = styled.b`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  text-align: Left;
  color: #383838;
  padding: 0;
  margin: 0;
  margin-top: 8px;
  @media only screen and (min-width: 320px) {
    line-height: 15px;
    font-size: 13px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

class Card extends Component {
  render() {
    return (
      <CardBlock href="#">
        <Img src={this.props.img} />
        <div>
          <Price>${this.props.price} </Price>
          <Name>{this.props.name}</Name>
        </div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Label>{this.props.reviews} reviews</Label>
        </div>
      </CardBlock>
    );
  }
}

export default Card;
