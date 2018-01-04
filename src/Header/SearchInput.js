import React, { Component } from "react";
import { HeaderInput } from "../blockStyles";

class SearchInput extends Component {
  render() {
    return (
      <div className="col-lg-5">
        <HeaderInput type="text" value="Try &quot;Miami&quot;" />
      </div>
    );
  }
}

export default SearchInput;
