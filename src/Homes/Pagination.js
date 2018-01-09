import React, { Component } from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";
import activePage from "./activePage.svg";

const Nav = styled.div`
  margin: 16px auto 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 264px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #0f7276;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0f7276;
`;

class Pagination extends Component {
  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-lg-4 col-md-5 col-xs-12">
            <Nav>
              <Link href="#">
                <img src={activePage} />
              </Link>
              <Link href="#">2</Link>
              <Link href="#">3</Link>
              <Link href="#">...</Link>
              <Link href="#">17</Link>
              <Link href="#">
                <img src={arrow} />
              </Link>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
