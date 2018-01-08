import React, { Component } from "react";
import Header from "../Header";
import Card from "./Card";
import List from "./List";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Showed from "./Showed";
import Disclaimer from "./Disclaimer";
import styled from "styled-components";

//Хэдер передать на роутинг
class HomesPage extends Component {
  render() {
    return (
      <div>
        <Header />
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
