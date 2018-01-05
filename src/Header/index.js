import React, { Component } from "react";
import SearchInput from "./SearchInput";
import { HeaderBlock, HeaderLogo, Nav } from "../blockStyles";
import { Link } from "../textStyles";
import logo from "./logo.png";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
`;

class Header extends Component {
  render() {
    return (
      <div className="container">
        <HeaderBlock>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2">
              <Div>
                <HeaderLogo src={logo} />
                <Dropdown />
              </Div>
            </div>

            <SearchInput />
            <div className="col-lg-4 col-lg-offset-2">
              <Nav>
                <Link href="#">Become a host</Link>
                <Link href="#">Help</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Log In</Link>
              </Nav>
            </div>
          </div>
        </HeaderBlock>
      </div>
    );
  }
}

export default Header;
