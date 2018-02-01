import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
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

const StarBlock = props => {
  return _.times(Math.floor(props.rating), () => <Star />);
};

const pluralize = (count, singular) => {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  return `${count} ${singular}s`;
};

const kindFormatter = kind => {
  const result = (kind.charAt(0).toUpperCase() + kind.substr(1)).replace(
    "_",
    " "
  );
  return result;
};

class Card extends Component {
  render() {
    return (
      <CardBlock href="#">
        <Img src={this.props.images[0].picture} />
        <div>
          <Name>
            {this.props.price}$ {this.props.name}
          </Name>
        </div>
        <div>
          <Info>
            {kindFormatter(this.props.kind)}
            {` · ${pluralize(this.props.bedsCount, "bed")}`}
          </Info>
        </div>
        <div>
          <StarBlock rating={this.props.rating} />
          <Label>
            {this.props.reviewsCount}
            {this.props.isSuperhost ? " · Superhost" : " · Reviews"}
          </Label>
        </div>
      </CardBlock>
    );
  }
}

export default Card;
