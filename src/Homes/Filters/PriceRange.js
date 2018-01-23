import React from 'react';
import Rheostat from 'rheostat';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import './slider.css';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const Range = styled.div`
  font-family: CircularAir;
  line-height: 19px;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
  margin-bottom: 7px;
`;

const Average = styled.div`
  font-family: CircularAir;
  line-height: 14px;
  font-weight: lighter;
  font-size: 12px;
  color: #383838;
`;

const SliderBlock = styled.div`
  margin: 32px 16px;
`;

const PriceRange = () => (
  <Wrap>
    <SectionTitle>Price range</SectionTitle>
    <Range>$10 — $1000+</Range>
    <Average>The average nightly price is $75.</Average>
    <SliderBlock>
      <Rheostat min={1} max={100} values={[1, 100]} />
    </SliderBlock>
  </Wrap>
);

export default PriceRange;
