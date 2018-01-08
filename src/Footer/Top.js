import React, { Component } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Col = styled.div`
  @media only screen and (min-width: 320px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: block;
    margin-top: 50px;
    margin-bottom: 38px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;

const DropdownCol = styled.div`
  @media only screen and (min-width: 320px) {
    margin-top: 16px;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 0px;
    display: block;
  }
`;

const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  color: #636363;
  display: block;
  text-decoration: none;
  @media only screen and (min-width: 768px) {
    margin-top: 11px;
    line-height: 14px;
    font-size: 12px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 8px;
    line-height: 18px;
    font-size: 15px;
  }
`;

export const Title = styled.h5`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #383838;
  display: block;
  @media only screen and (min-width: 768px) {
    line-height: 14px;
    font-size: 12px;
    margin-bottom: 11px;
  }
  @media only screen and (min-width: 992px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 8px;
  }
`;

class Top extends Component {
  render() {
    return (
      <div className="row between-md">
        <div className="col-md-3 col-xs-12">
          <DropdownCol>
            <Dropdown option1="English" option2="Russian" />
            <Dropdown option1="United States dollar" option2="Rubles" />
          </DropdownCol>
        </div>
        <div className="col-md-2">
          <Col>
            <Title>Airbnb</Title>
            <Link href="#">About us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
            <Link href="#">Policies</Link>
            <Link href="#">Help</Link>
            <Link href="#">Diversity & Belonging</Link>
          </Col>
        </div>
        <div className="col-md-2">
          <Col>
            <Title>Discover</Title>
            <Link href="#">Trust & Safety</Link>
            <Link href="#">Travel Credit</Link>
            <Link href="#">Gift Cards</Link>
            <Link href="#">Airbnb Citizen</Link>
            <Link href="#">Business Travel</Link>
            <Link href="#">Guidebooks</Link>
            <Link href="#">Airbnbmag</Link>
          </Col>
        </div>
        <div className="col-md-2">
          <Col>
            <Title>Hosting</Title>
            <Link href="#">Why Host</Link>
            <Link href="#">Hospitality</Link>
            <Link href="#">Responsible Hosting</Link>
            <Link href="#">Community Center</Link>
          </Col>
        </div>
      </div>
    );
  }
}

export default Top;
