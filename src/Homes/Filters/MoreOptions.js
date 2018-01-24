import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import SwitchSection from './SwitchSection';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const MoreOptions = () => (
  <Wrap>
    <div className="col-xs-12 col-md-6">
      <SectionTitle>More options</SectionTitle>
      <SwitchSection description="Secure a reservation instantly.">Instant book</SwitchSection>
      <SwitchSection description="Stay with recognized hosts.">Superhost</SwitchSection>
    </div>
  </Wrap>
);

export default MoreOptions;
