import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 8px;
  margin-top: 0px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
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
    <Wrap>
      <Btn onClick={props.onClick}>{props.children}</Btn>
    </Wrap>
  );
}

export default Footer;
