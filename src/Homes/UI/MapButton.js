import React from 'react';
import styled from 'styled-components';
import mapButton from './mapButton.svg';

const Btn = styled.img`
  position: fixed;
  right: 8px;
  bottom: 24px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const MapButton = () => <Btn src={mapButton} />;

export default MapButton;
