import React, { Component } from "react";
import {
  ModalWrap as Wrap,
  Content,
  ModalWindow as Window,
  ModalContainer as Container
} from "./UI";

class ModalWindow extends React.Component {
  render() {
    return (
      <Window>
        <Container>
          <Content>
            <Wrap>{this.props.children}</Wrap>
          </Content>
        </Container>
      </Window>
    );
  }
}
export default ModalWindow;
