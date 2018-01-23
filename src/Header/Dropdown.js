import React from 'react';
import styled from 'styled-components';
import arrow from './arrowDown.svg';

const Img = styled.img`
  margin-top: 38.22px;
  margin-bottom: 36.22px;
  margin-right: -4px;

  @media only screen and (min-width: 762px) {
    margin-left: 8px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const Dropdown = () => <Img src={arrow} alt="" />;

export default Dropdown;
