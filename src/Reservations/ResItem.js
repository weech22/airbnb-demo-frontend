import React, { Component } from "react";
import { ResItemBlock, ResItemImg } from "../blockStyles";
import { ResName, ResType, ResPrice } from "../textStyles";

class ResItem extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <ResItemBlock>
          <ResItemImg src={this.props.ItemImg} />
          <div>
            <ResType>{this.props.type}</ResType>
          </div>
          <div>
            <ResName>{this.props.name} </ResName>
          </div>
          <div>
            <ResPrice>About ${this.props.price} per person</ResPrice>
          </div>
        </ResItemBlock>
      </div>
    );
  }
}

export default ResItem;
