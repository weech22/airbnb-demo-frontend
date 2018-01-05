import React, { Component } from "react";
import { HeaderInput } from "../blockStyles";

class SearchInput extends Component {
  render() {
    return (
      <div className="col-lg-5 col-md-7 col-sm-10 col-xs-10">
        <HeaderInput type="text" placeholder="Try &quot;Miami&quot;" />
      </div>
    );
  }
}

export default SearchInput;
