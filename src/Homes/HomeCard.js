import React, { Component } from "react";
import styled from "styled-components";
import Star from "../star";
import { CardBlock, Img } from "../blockStyles";
import { Label } from "../textStyles";

const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  line-height: 18px;
  display: inline;
  font-size: 15px;
  text-align: Left;
  margin-top: 0;
  margin-top: 8px;
  margin-bottom: 0;
  color: #383838;
`;

const Info = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  line-height: 18px;
  font-size: 15px;
  text-align: Left;
  display: inline;
  margin-top: 2px;
  margin-bottom: 0;
  color: #383838;
`;

class HomeCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
        <CardBlock href="#">
          <Img src={this.props.img} />
          <div>
            <Name>{this.props.name}</Name>
          </div>
          <div>
            <Info>{this.props.info} </Info>
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

export default HomeCard;
