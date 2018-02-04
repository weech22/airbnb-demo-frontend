import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media only screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const SocialLink = props => (
  <a href="#">
    <Img src={props.img} alt="" />
  </a>
);

export default SocialLink;
