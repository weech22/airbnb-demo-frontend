import React from 'react';
import styled from 'styled-components';
import arrow from './arrowRight.svg';
import activePage from './activePage.svg';

const Nav = styled.div`
  margin: 16px auto 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 264px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0f7276;
`;

const Pagination = () => (
  <div className="container">
    <div className="row center-xs">
      <div className="col-lg-4 col-md-5 col-xs-12">
        <Nav>
          <Link href="/homes">
            <img src={activePage} alt="" />
          </Link>
          <Link href="/homes">2</Link>
          <Link href="/homes">3</Link>
          <Link href="/homes">...</Link>
          <Link href="/homes">17</Link>
          <Link href="/homes">
            <img src={arrow} alt="" />
          </Link>
        </Nav>
      </div>
    </div>
  </div>
);

export default Pagination;
