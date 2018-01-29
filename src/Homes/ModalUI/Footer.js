import React from 'react';
import styled from 'styled-components';

const FixedContainer = styled.div`
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 8px;
  margin-top: 1px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

const Btn = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
`;

function Footer(props) {
  return (
    <FixedContainer>
      <Wrap>
        <Btn onClick={props.onClick}>{props.children}</Btn>
      </Wrap>
    </FixedContainer>
  );
}

export default Footer;
