import React, { Component } from "react";
import ResItem from "./ResItem";
import { Title } from "../textStyles";
import ResImg1 from "./1.png";
import ResImg2 from "./2.png";
import ResImg3 from "./3.png";
import ResImg4 from "./4.png";

class ReservationSection extends Component {
  render() {
    return (
      <div className="container">
        <Title>Popular reservations around the world</Title>
        <div className="row between-lg">
          <ResItem
            ItemImg={ResImg1}
            type="Speakeasy"
            name="Chumley’s"
            price="60"
          />
          <ResItem
            ItemImg={ResImg2}
            type="Korean gastropub"
            name="Hanjan"
            price="50"
          />
          <ResItem
            ItemImg={ResImg3}
            type="German american"
            name="Prime Meats"
            price="55"
          />
          <ResItem
            ItemImg={ResImg4}
            type="Fine seafood"
            name="Seaprice"
            price="70"
          />
        </div>
      </div>
    );
  }
}

export default ReservationSection;
