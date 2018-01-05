import React, { Component } from "react";
import styled from "styled-components";

export const Div = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 320px) {
    height: 118px;
    width: 144px;
  }
  @media only screen and (min-width: 768px) {
    height: 72px;
    width: 100%;
  }
`;

export const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;

  color: #383838;
  position: absolute;

  @media only screen and (min-width: 320px) {
    font-size: 12px;
    line-height: 14px;
    margin-left: 12px;
    display: block;
    margin-top: 12px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 20px;
    font-size: 17px;
    margin-left: 24px;
    display: inline-block;
    top: 50%;
    margin-top: -0.625em;
  }
`;

const Img = styled.img`
  @media only screen and (min-width: 320px) {
    height: 78px;
    width: 144px;
  }
  @media only screen and (min-width: 768px) {
    height: 72px;
    width: 96px;
  }
`;

class ExploreCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
        <Div>
          <Img src={this.props.img} />
          <Name>{this.props.name}</Name>
        </Div>
      </div>
    );
  }
}

export default ExploreCard;
