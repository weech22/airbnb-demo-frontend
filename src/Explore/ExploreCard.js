import React, { Component } from "react";
import styled from "styled-components";

export const Div = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  height: 72px;
  position: relative;
  overflow: hidden;
`;

export const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  line-height: 20px;
  font-size: 17px;
  display: inline-block;
  color: #383838;
  position: absolute;
  top: 50%;
  margin-top: -0.625em;
  margin-left: 24px;
`;

const Img = styled.img`
  width: 96px;
  height: 72px;
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
