import React from 'react';
import styled from 'styled-components';
import Navigation from './Nav';
import Social from './Social';
import Copyright from './Copyright';

const Wrap = styled.div`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const NavBlock = styled.div`
  display: flex;

  @media only screen and (min-width: 320px) {
    margin-top: 11px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 34px;
  }
`;

const Bottom = () => (
  <Wrap>
    <div className="row between-md">
      <div className="col-xs-5 col-md-2 col-lg-2">
        <Copyright />
      </div>
      <div className="col-xs-9 col-md-6 col-lg-5">
        <NavBlock>
          <Navigation />
          <Social />
        </NavBlock>
      </div>
    </div>
  </Wrap>
);

export default Bottom;
