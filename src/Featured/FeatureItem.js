import React, { Component } from "react";
import { City } from "../textStyles";
import styled from "styled-components";
import { CardBlock } from "../blockStyles";

const Img = styled.img`
  width: 100%;
`;

class FeatureItem extends Component {
  render() {
    return (
      <div className="col-lg-2">
        <CardBlock href="#">
          <Img src={this.props.ItemImg} />
          <City>{this.props.city}</City>
        </CardBlock>
      </div>
    );
  }
}

export default FeatureItem;
