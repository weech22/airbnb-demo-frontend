import React, { Component } from "react";
import { HomeItemBlock, HomeItemImg, StarImg } from "../blockStyles";
import { HomeItemName, Label, HouseInfo } from "../textStyles";
import star from "../star.png";

class HomeItem extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <HomeItemBlock>
          <HomeItemImg src={this.props.ItemImg} />
          <div>
            <HomeItemName>{this.props.name}</HomeItemName>
          </div>
          <div>
            <HouseInfo>{this.props.info} </HouseInfo>
          </div>
          <div>
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />
            <StarImg src={star} />

            <Label>{this.props.hosts} · Superhost</Label>
          </div>
        </HomeItemBlock>
      </div>
    );
  }
}

export default HomeItem;
