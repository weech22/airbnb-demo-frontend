import React, { Component } from "react";
import "normalize.css";
import "flexboxgrid2/flexboxgrid2.css";
import ExploreSection from "./Explore";
import ExperienceSection from "./Experience";
import HomesSection from "./Homes";
import ReservationSection from "./Reservations";
import FeaturedSection from "./Featured";
import Header from "./Header";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;

/*
        <Header />
        <ExploreSection />
        <ExperienceSection />
        <HomesSection />
        <ReservationSection />
        <FeaturedSection />
        
*/
