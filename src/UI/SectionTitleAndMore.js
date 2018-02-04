import React from 'react';
import styled from 'styled-components';
import SeeAll from './SeeAll';
import { Title } from './UI';

const Wrap = styled.div`
  @media only screen and (min-width: 320px) {
    margin-bottom: 16px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 24px;
  }
`;

const SectionTitle = props => (
  <Wrap>
    <Title>{props.name}</Title>
    <SeeAll link={props.link} />
  </Wrap>
);

export default SectionTitle;
