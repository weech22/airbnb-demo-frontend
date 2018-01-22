import React, { Component } from "react";
import styled from "styled-components";
import Star from "../UI/Star";
import { CardBlock, Img, Label } from "../UI/UI";

const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  display: inline-block;
  text-align: Left;
  margin-top: 8px;
  margin-bottom: 0;
  color: #383838;

  line-height: 15px;
  font-size: 13px;

  @media only screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Info = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  text-align: Left;
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 0;

  color: #383838;
  line-height: 14px;
  font-size: 12px;
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
          <Name>
            {this.props.price}$ {this.props.name}
          </Name>
        </div>
        <div>
          <Info>
            {this.props.type} · {this.props.bedCount} bed
          </Info>
        </div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Label>{this.props.reviews} · Superhost</Label>
        </div>
      </CardBlock>
    );
  }
}

export default Card;
