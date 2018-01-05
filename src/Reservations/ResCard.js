import React, { Component } from "react";
import styled from "styled-components";
import { CardBlock, Img } from "../blockStyles";

const Type = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
  margin-top: 12px;
  margin-bottom: 0;
`;

const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  line-height: normal;
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 0;
  color: #383838;
`;

const Price = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 18px;
  font-weight: lighter;
  color: #383838;
  mix-blend-mode: normal;
  margin-top: 4px;
  margin-bottom: 0;
  opacity: 0.9;
`;

class ResCard extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <CardBlock href="#">
          <Img src={this.props.img} />
          <div>
            <Type>{this.props.type}</Type>
          </div>
          <div>
            <Name>{this.props.name} </Name>
          </div>
          <div>
            <Price>About ${this.props.price} per person</Price>
          </div>
        </CardBlock>
      </div>
    );
  }
}

export default ResCard;
