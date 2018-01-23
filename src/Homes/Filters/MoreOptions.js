import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 23px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const MoreOptions = () => (
  <Wrap>
    <SectionTitle>More options</SectionTitle>
  </Wrap>
);

export default MoreOptions;
