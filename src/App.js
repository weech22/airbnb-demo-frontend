import React, { Component } from "react";
import "flexboxgrid2/flexboxgrid2.css";
import "normalize.css";
import "./Fonts/font.css";
import Header from "./Header";
import FrontPage from "./FrontPage";
import HomesPage from "./HomesPage/HomesPage";

import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <HomesPage />
      </div>
    );
  }
}

export default App;

/*
  <Header />

        <BrowserRouter>
          <div>
            <Route path="/" exact component={FrontPage} />
            <Route path="/homes" component={HomesPage} />
          </div>
        </BrowserRouter>
        */
