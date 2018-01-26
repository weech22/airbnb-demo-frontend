import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import SwitchSection from './SwitchSection';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;

  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  @media only screen and (min-width: 768px) {
    padding-top: 23px;
  }
  @media only screen and (min-width: 992px) {
  }
`;

const Title = styled(SectionTitle)`
  line-height: 23px;
  font-size: 20px;
`;

const MoreOptions = props => (
  <Wrap>
    <div className="col-xs-12 col-md-6">
      <Title>More options</Title>
      <SwitchSection
        id="instantBook"
        checked={props.instantBook}
        description="Secure a reservation instantly."
        onFilterChange={props.onFilterChange}
      >
        Instant book
      </SwitchSection>
      <SwitchSection
        id="superhost"
        checked={props.superhost}
        description="Stay with recognized hosts."
        onFilterChange={props.onFilterChange}
      >
        Superhost
      </SwitchSection>
    </div>
  </Wrap>
);

export default MoreOptions;
