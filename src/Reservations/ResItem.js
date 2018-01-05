import React, { Component } from "react";
import { ResName, ResType, ResPrice } from "../textStyles";
import styled from "styled-components";
import { CardBlock } from "../blockStyles";

const Img = styled.img`
  width: 100%;
`;

class ResItem extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <CardBlock href="#">
          <Img src={this.props.ItemImg} />
          <div>
            <ResType>{this.props.type}</ResType>
          </div>
          <div>
            <ResName>{this.props.name} </ResName>
          </div>
          <div>
            <ResPrice>About ${this.props.price} per person</ResPrice>
          </div>
        </CardBlock>
      </div>
    );
  }
}

export default ResItem;
