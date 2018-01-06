import React, { Component } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const FooterCol = styled.div`
  @media only screen and (min-width: 320px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: block;
    margin-top: 50px;
    margin-bottom: 38px;
  }
  @media only screen and (min-width: 992px) {
    display: block;
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

const FooterLink = styled.a`
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

export const FooterTitle = styled.h5`
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
          <FooterCol>
            <FooterTitle>Airbnb</FooterTitle>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Policies</FooterLink>
            <FooterLink href="#">Help</FooterLink>
            <FooterLink href="#">Diversity & Belonging</FooterLink>
          </FooterCol>
        </div>
        <div className="col-md-2">
          <FooterCol>
            <FooterTitle>Discover</FooterTitle>
            <FooterLink href="#">Trust & Safety</FooterLink>
            <FooterLink href="#">Travel Credit</FooterLink>
            <FooterLink href="#">Gift Cards</FooterLink>
            <FooterLink href="#">Airbnb Citizen</FooterLink>
            <FooterLink href="#">Business Travel</FooterLink>
            <FooterLink href="#">Guidebooks</FooterLink>
            <FooterLink href="#">Airbnbmag</FooterLink>
          </FooterCol>
        </div>
        <div className="col-md-2">
          <FooterCol>
            <FooterTitle>Hosting</FooterTitle>
            <FooterLink href="#">Why Host</FooterLink>
            <FooterLink href="#">Hospitality</FooterLink>
            <FooterLink href="#">Responsible Hosting</FooterLink>
            <FooterLink href="#">Community Center</FooterLink>
          </FooterCol>
        </div>
      </div>
    );
  }
}

export default Top;
