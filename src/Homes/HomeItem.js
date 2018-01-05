import React, { Component } from "react";
import { CardBlock } from "../blockStyles";
import { HomeItemName, Label, HouseInfo } from "../textStyles";
import Star from "../star";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

class HomeItem extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <CardBlock href="#">
          <Img src={this.props.ItemImg} />
          <div>
            <HomeItemName>{this.props.name}</HomeItemName>
          </div>
          <div>
            <HouseInfo>{this.props.info} </HouseInfo>
          </div>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Label>{this.props.hosts} · Superhost</Label>
          </div>
        </CardBlock>
      </div>
    );
  }
}

export default HomeItem;
