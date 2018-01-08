import React, { Component } from "react";
import "flexboxgrid2/flexboxgrid2.css";
import "normalize.css";
import "./Fonts/font.css";
import FrontPage from "./FrontPage";
import HomesPage from "./Homes/HomesPage";

class App extends Component {
  render() {
    return <HomesPage />;
  }
}

export default App;
