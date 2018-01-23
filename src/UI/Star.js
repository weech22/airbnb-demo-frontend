import React from 'react';
import styled from 'styled-components';
import star from './star.svg';

const StarImg = styled.img`
  margin-right: 4px;
  margin-top: 7px;
  margin-bottom: 0;
`;

const Star = () => <StarImg src={star} alt="" />;

export default Star;
