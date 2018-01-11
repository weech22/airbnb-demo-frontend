import React, { Component } from "react";
import Header from "../Header";
import Card from "../Homes/Card";
import List from "./List";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Showed from "./Showed";
import Disclaimer from "./Disclaimer";
import MapButton from "./MapButton";
import styled from "styled-components";
import GuestModal from "./Guests/GuestModal";

class HomesPage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <List />
        <Pagination />
        <Showed />
        <Disclaimer />
      </div>
    );
  }
}

export default HomesPage;

/*

        */
