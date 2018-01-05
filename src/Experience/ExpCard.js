import React, { Component } from "react";
import { CardBlock, Img } from "../blockStyles";
import { Label } from "../textStyles";
import styled from "styled-components";
import Star from "../star";

const Name = styled.div`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: Left;
  font-weight: lighter;
  color: #383838;
  display: inline;
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

class ExpCard extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
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
      </div>
    );
  }
}

export default ExpCard;
