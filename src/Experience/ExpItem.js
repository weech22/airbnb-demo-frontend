import React, { Component } from "react";
import { CardBlock } from "../blockStyles";
import { ExpItemName, Price, Label } from "../textStyles";
import styled from "styled-components";
import Star from "../star";

const Img = styled.img`
  width: 100%;
`;

class ExpItem extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <CardBlock href="#">
          <Img src={this.props.ItemImg} />
          <div>
            <Price>${this.props.price} </Price>
            <ExpItemName>{this.props.name}</ExpItemName>
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

export default ExpItem;

/*
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
*/
