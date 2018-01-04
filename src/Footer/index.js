import React, { Component } from "react";
import { ExploreItemBlock, ExploreItemImg } from "./blockStyles";
import { ExploreItemName } from "./textStyles";

class ExploreItem extends Component {
  render() {
    return (
      <ExploreItemBlock>
        <ExploreItemImg src={this.props.itemImg} />
        <ExploreItemName>{this.props.name}</ExploreItemName>
      </ExploreItemBlock>
    );
  }
}

export default ExploreItem;
