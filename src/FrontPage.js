import React, { Component } from "react";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
import Explore from "./Explore";
import Experience from "./Experience";
import Homes from "./Homes";
import Reservation from "./Reservations";
import Featured from "./Featured";
import Header from "./Header";
import Footer from "./Footer";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experience />
        <Homes />
        <Reservation />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default FrontPage;
