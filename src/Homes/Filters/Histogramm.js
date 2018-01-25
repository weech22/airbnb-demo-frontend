import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  background: #d8d8d8;
  width: 6px;
  display: inline-block;
  height: ${props => props.height}px;
  @media only screen and (min-width: 768px) {
    width: 16px;
  }
`;

const Wrap = styled.div`
  margin-left: 21px;
  margin-bottom: -3px;
`;

const Histogramm = () => (
  <Wrap>
    <Column height={3} />
    <Column height={6} />
    <Column height={14} />
    <Column height={20} />
    <Column height={14} />
    <Column height={32} />
    <Column height={42} />
    <Column height={56} />
    <Column height={69} />
    <Column height={79} />
    <Column height={69} />
    <Column height={69} />
    <Column height={69} />
    <Column height={56} />
    <Column height={42} />
    <Column height={42} />
    <Column height={35} />
    <Column height={32} />
    <Column height={20} />
    <Column height={10} />
    <Column height={14} />
    <Column height={20} />
    <Column height={6} />
    <Column height={1} />
  </Wrap>
);

export default Histogramm;
