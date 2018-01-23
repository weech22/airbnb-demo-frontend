import React from 'react';
import {
  ModalWrap as Wrap,
  Content,
  ModalWindowBlock as Window,
  ModalContainer as Container,
} from './';

const ModalWindow = props => (
  <Window>
    <Container>
      <Content>
        <Wrap>{props.children}</Wrap>
      </Content>
    </Container>
  </Window>
);
export default ModalWindow;
