import React from 'react';
import styled from 'styled-components';
import Search from './SearchInput';
import Logo from './Logo';
import Dropdown from './Dropdown';
import Navigation from './Navigation';

const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;

  margin: 0 auto;
`;

const Header = () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-xs-2 col-md-2 col-lg-1">
          <Logo />
          <Dropdown />
        </div>
        <div className="col-xs-10 col-md-7 col-lg-5">
          <Search />
        </div>
        <div className=" col-lg-4 col-lg-offset-2">
          <Navigation />
        </div>
      </div>
    </div>
  </Wrap>
);

export default Header;
