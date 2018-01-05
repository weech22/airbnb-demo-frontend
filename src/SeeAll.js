import React, { Component } from "react";
import { See } from "./textStyles";
import arrow from "./rightArrow.png";

class SeeAll extends Component {
  render() {
    return (
      <div>
        <See>See all ></See>
        <img scr={arrow} />
      </div>
    );
  }
}

export default SeeAll;
