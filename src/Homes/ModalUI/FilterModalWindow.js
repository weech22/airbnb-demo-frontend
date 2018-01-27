import React from 'react';
import styled from 'styled-components';
import { WhiteBackground } from './index';

const ModalContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  position: relative;

  @media only screen and (min-width: 576px) {
    width: 560px;
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 752px;
    max-width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 976px;
    max-width: 100%;
  }

  @media only screen and (min-width: 1200px) {
    width: 1184px;
    max-width: 100%;
  }
`;

const Window = styled.div`
  position: fixed;
  z-index: 9998;
  top: 139px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
`;

const Container = styled.div`
  position: absolute;
  width: 65.5%;
  height: 100%;
  z-index: 7000;
`;

const Content = styled.div`
  position: relative;
  z-index: 1002;
`;

const Wrap = styled.div`
  position: relative;
  background-color: #ffffff;
`;

const DesktopModalWindow = props => (
  <Window>
    <WhiteBackground onClick={props.onClick} />
    <ModalContainer>
      <Container>
        <Content>
          <Wrap>{props.children}</Wrap>
        </Content>
      </Container>
    </ModalContainer>
  </Window>
);
export default DesktopModalWindow;
