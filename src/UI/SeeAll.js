import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from './arrowRight.svg';

const StyledLink = styled(Link)`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 24px;
  text-align: right;
  color: #383838;
  text-decoration: none;
  @media only screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const SeeAllBlock = styled.div`
  float: right;
  @media only screen and (min-width: 320px) {
    margin-top: 3px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 6px;
  }
`;

const SeeAll = () => (
  <SeeAllBlock>
    <StyledLink to="/homes">
      See all <img src={arrow} alt="" />
    </StyledLink>
  </SeeAllBlock>
);

export default SeeAll;
