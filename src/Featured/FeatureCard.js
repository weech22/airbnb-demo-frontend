import React, { Component } from "react";
import styled from "styled-components";
import { CardBlock, Img } from "../blockStyles";

const City = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  margin-top: 8px;
  margin-bottom: 0;
  color: #383838;
  @media only screen and (min-width: 320px) {
    line-height: 14px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

class FeatureCard extends Component {
  render() {
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4">
        <CardBlock href="#">
          <Img src={this.props.img} />
          <City>{this.props.city}</City>
        </CardBlock>
      </div>
    );
  }
}

export default FeatureCard;
