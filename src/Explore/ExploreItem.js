import React, { Component } from "react";
import { ExploreItemBlock, ExploreItemImg } from "../blockStyles";
import { ExploreItemName } from "../textStyles";

class ExploreItem extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <ExploreItemBlock>
          <ExploreItemImg src={this.props.ItemImg} />
          <ExploreItemName>{this.props.name}</ExploreItemName>
        </ExploreItemBlock>
      </div>
    );
  }
}

export default ExploreItem;
