import React, { Component } from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 64px;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <Main>
          <Top />
          <Bottom />
        </Main>
      </div>
    );
  }
}

export default Footer;

/*



*/
