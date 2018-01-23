import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Img = styled.img`
  margin: 24px 0;
  margin-left: 0px;
`;

const Logo = () => <Img src={logo} alt="" />;

export default Logo;
