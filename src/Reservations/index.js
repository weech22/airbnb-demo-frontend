import React, { Component } from "react";
import SectionTitle from "../SectionTitle";
import ResCard from "./ResCard";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";

class Reservation extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle name="Popular reservations around the world" />
        <div className="row">
          <ResCard img={img1} type="Speakeasy" name="Chumley’s" price="60" />
          <ResCard
            img={img2}
            type="Korean gastropub"
            name="Hanjan"
            price="50"
          />
          <ResCard
            img={img3}
            type="German american"
            name="Prime Meats"
            price="55"
          />
          <ResCard img={img4} type="Fine seafood" name="Seaprice" price="70" />
        </div>
      </div>
    );
  }
}

export default Reservation;
