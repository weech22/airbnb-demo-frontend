import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";
import Pagination from "./UI/Pagination";
import Showed from "./UI/Showed";
import Disclaimer from "./UI/Disclaimer";
import MapButton from "./UI/MapButton";
import GoogleMap from "./GoogleMap";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 80px;
  padding-bottom: 88px;
`;

class Homes extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Wrap>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <List />
                <Pagination />
                <Showed />
                <Disclaimer />
              </div>
              <div className="col-xs-12 col-lg-4">
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

export default Homes;
