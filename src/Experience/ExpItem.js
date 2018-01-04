import React, { Component } from "react";
import { ExpItemBlock, ExpItemImg, StarImg } from "../blockStyles";
import { ExpItemName, Price, Label } from "../textStyles";
import star from "../star.png";

class ExpItem extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <ExpItemBlock>
          <ExpItemImg src={this.props.ItemImg} />
          <div>
            <Price>${this.props.price} </Price>
            <ExpItemName>{this.props.name}</ExpItemName>
          </div>
          <div>
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />

            <Label>{this.props.reviews} reviews</Label>
          </div>
        </ExpItemBlock>
      </div>
    );
  }
}

export default ExpItem;
