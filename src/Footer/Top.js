import React, { Component } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const FooterCol = styled.div`
  margin-top: 48px;
`;

const FooterItem = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  margin-top: 8px;
  margin-bottom: px;
  display: block;
  text-decoration: none;
`;

export const FooterTitle = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  margin-top: 0;
  margin-bottom: 8px;
  display: block;
`;

class Top extends Component {
  render() {
    return (
      <div className="row between-lg">
        <div className="col-lg-3">
          <FooterCol>
            <Dropdown name="English" />
            <Dropdown name="United States dollar" />
          </FooterCol>
        </div>
        <div className="col-lg-2">
          <FooterCol>
            <FooterTitle>Airbnb</FooterTitle>
            <FooterItem href="#">About us</FooterItem>
            <FooterItem href="#">Careers</FooterItem>
            <FooterItem href="#">Press</FooterItem>
            <FooterItem href="#">Policies</FooterItem>
            <FooterItem href="#">Help</FooterItem>
            <FooterItem href="#">Diversity & Belonging</FooterItem>
          </FooterCol>
        </div>
        <div className="col-lg-2">
          <FooterCol>
            <FooterTitle>Discover</FooterTitle>
            <FooterItem href="#">Trust & Safety</FooterItem>
            <FooterItem href="#">Travel Credit</FooterItem>
            <FooterItem href="#">Gift Cards</FooterItem>
            <FooterItem href="#">Airbnb Citizen</FooterItem>
            <FooterItem href="#">Business Travel</FooterItem>
            <FooterItem href="#">Guidebooks</FooterItem>
            <FooterItem href="#">Airbnbmag</FooterItem>
          </FooterCol>
        </div>
        <div className="col-lg-2">
          <FooterCol>
            <FooterTitle>Hosting</FooterTitle>
            <FooterItem href="#">Why Host</FooterItem>
            <FooterItem href="#">Hospitality</FooterItem>
            <FooterItem href="#">Responsible Hosting</FooterItem>
            <FooterItem href="#">Community Center</FooterItem>
          </FooterCol>
        </div>
      </div>
    );
  }
}

export default Top;
