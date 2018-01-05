import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";
import { Link } from "../textStyles";
import logo from "./logo.svg";

const Div = styled.div`
  position: absolute;
`;

export const Block = styled.header`
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const Logo = styled.img`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Nav = styled.nav`
  position: relative;
  margin-top: 27px;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

class Header extends Component {
  render() {
    return (
      <div className="container">
        <Block>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2">
              <Div>
                <Logo src={logo} />
                <Dropdown />
              </Div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-10 col-xs-10">
              <SearchInput />
            </div>
            <div className="col-lg-4 col-lg-offset-2">
              <Nav>
                <Link href="#">Become a host</Link>
                <Link href="#">Help</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Log In</Link>
              </Nav>
            </div>
          </div>
        </Block>
      </div>
    );
  }
}

export default Header;
