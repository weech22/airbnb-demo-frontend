import React, { Component } from "react";
import Explore from "./Explore";
import Experience from "./Experience";
import Homes from "./Homes";
import Reservation from "./Reservations";
import Featured from "./Featured";
import Footer from "../Footer";

class FrontPage extends Component {
  render() {
    return (
      <div>
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
