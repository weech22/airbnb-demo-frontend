import React, { Component } from "react";
import Header from "../Header";
import Card from "../Homes/Card";
import List from "./List";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Showed from "./Showed";
import Disclaimer from "./Disclaimer";
import MapButton from "./MapButton";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";
import GuestModal from "./Guests/GuestModal";

const Wrap = styled.div`
  padding-top: 80px;
  padding-bottom: 88px;
`;

class HomesPage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Wrap>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xs-12">
                <List />
                <Pagination />
                <Showed />
                <Disclaimer />
              </div>
              <div className="col-lg-4 col-xs-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </Wrap>

        <MapButton />
      </div>
    );
  }
}

export default HomesPage;

/*

        */
