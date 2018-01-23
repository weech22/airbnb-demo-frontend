import React from 'react';
import styled from 'styled-components';
import Room from './Room';
import Book from './Book';
import Price from './Price';
import Filters from './Filters';
import Dates from './Dates';
import Guests from './Guests';

const Wrap = styled.div`
  background: white;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  z-index: 1012;
  margin: 0 auto;
  padding-left: 8px;
  @media only screen and (min-width: 576px) {
    max-width: 552px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 746px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 968px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1176px;
  }
`;

const DesktopButtons = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

const Filter = () => (
  <div className="container">
    <Wrap>
      <Dates />
      <Guests />
      <DesktopButtons>
        <Room />
        <Price />
        <Book />
      </DesktopButtons>
      <Filters />
    </Wrap>
  </div>
);

export default Filter;
