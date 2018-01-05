import React, { Component } from "react";
import SearchInput from "./SearchInput";
import { HeaderBlock, HeaderLogo, Nav } from "../blockStyles";
import { Link } from "../textStyles";
import logo from "./logo.png";
import { SeeAll } from "../SeeAll";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <HeaderBlock>
          <div className="row">
            <div className="col-lg-1">
              <HeaderLogo src={logo} />
            </div>

            <SearchInput />
            <div className="col-lg-4 col-lg-offset-2">
              <Nav>
                <Link>Become a host</Link>
                <Link>Help</Link>
                <Link>Sign Up</Link>
                <Link>Log In</Link>
              </Nav>
            </div>
          </div>
        </HeaderBlock>
      </div>
    );
  }
}

export default Header;
