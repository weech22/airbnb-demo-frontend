import React from 'react';
import styled from 'styled-components';
import close from './close.svg';

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
  background: white;
  z-index: 5000;
`;

const CloseButton = styled.button`
  appearance: none;
  cursor: pointer;
  background-color: white;
  background-image: url(${close});
  border: none;
  background-repeat: no-repeat;
  margin: 16.23px 0;
  margin-left: 8.23px;
  width: 15.53px;
  height: 15.53px;
`;

const Title = styled.h3`
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
`;

const Action = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #0f7276;
  margin-right: 15px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function Header(props) {
  return (
    <FixedContainer>
      <Wrap className={props.className}>
        <CloseButton onClick={props.onClose} />
        <Title>{props.text}</Title>
        <Action onClick={props.onAction}>{props.action}</Action>
      </Wrap>
    </FixedContainer>
  );
}

export default Header;
