import React, { Component } from "react";
import { FeatureItemBlock, FeatureItemImg } from "../blockStyles";
import { City } from "../textStyles";

class FeatureItem extends Component {
  render() {
    return (
      <div className="col-lg-2">
        <FeatureItemBlock>
          <FeatureItemImg src={this.props.ItemImg} />
          <City>{this.props.city}</City>
        </FeatureItemBlock>
      </div>
    );
  }
}

export default FeatureItem;
