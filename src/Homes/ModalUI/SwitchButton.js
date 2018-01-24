import React from 'react';
import styled from 'styled-components';
import switchBtn from '../ModalUI/switchBtn.svg';

const Button = styled.button`
  margin: auto 0;
  width: 64px;
  height: 40px;
  border: none;
  background-color: white;
  background-image: url(${switchBtn});
  background-repeat: no-repeat;
  background-position: center center;
`;

const SwitchButton = () => (
  <div>
    <Button />
  </div>
);

export default SwitchButton;
