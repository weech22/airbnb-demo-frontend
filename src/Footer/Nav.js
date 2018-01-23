import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #636363;
  text-decoration: none;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;
  margin-right: 12px;
  @media only screen and (min-width: 767px) {
    line-height: 18px;
    font-size: 15px;
    margin-right: 16px;
  }
`;

const Nav = styled.div`
  @media only screen and (min-width: 768px) {
    margin-right: 12px;
    margin-top: 4px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 11px;
    margin-top: 2px;
  }
`;

const Navigation = () => (
  <Nav>
    <Link href="#">Terms</Link>
    <Link href="#">Privacy</Link>
    <Link href="#">Site map</Link>
  </Nav>
);

export default Navigation;
