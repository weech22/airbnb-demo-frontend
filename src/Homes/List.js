import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const CardWrap = styled.div`
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

class List extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <CardWrap>
              <Card
                img={img1}
                info="Entire house  ·  9 beds"
                name="$82	La Salentina, see, nature & relax"
                hosts="97"
              />
            </CardWrap>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <CardWrap>
              <Card
                img={img2}
                info="Entire house  ·  5 beds"
                name="$82 Your private 3 bedr. riad and exclusi…"
                hosts="161"
              />
            </CardWrap>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <CardWrap>
              <Card
                img={img3}
                info="Entire treehouse  ·  1 bed"
                name="$200 Dreamy Tropical Tree House"
                hosts="364"
              />
            </CardWrap>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
