import React, { Component } from "react";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
import "./font.css";
import ExploreSection from "./Explore";
import ExperienceSection from "./Experience";
import HomesSection from "./Homes";
import ReservationSection from "./Reservations";
import FeaturedSection from "./Featured";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExploreSection />
        <ExperienceSection />
        <HomesSection />
        <ReservationSection />
        <FeaturedSection />
      </div>
    );
  }
}

export default App;

/*
        
        
*/
