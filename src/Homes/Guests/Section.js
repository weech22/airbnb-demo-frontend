import React from 'react';
import styled from 'styled-components';
import Counter from '../UI/Counter';

const Wrap = styled.div`
  height: 100vh;
  padding: 92px 8px;
  padding-bottom: 0;
  @media only screen and (min-width: 768px) {
    padding-left: 23px;
    padding-right: 14px;
    padding-top: 27px;
    width: 290px;
    height: auto;
  }
`;

const Section = props => (
  <Wrap>
    <Counter
      id="adults"
      count={props.adults}
      name="Adults"
      description=""
      onGuestsChange={props.onGuestsChange}
    />
    <Counter
      id="kids"
      count={props.kids}
      name="Children"
      description="Ages 2 — 12"
      onGuestsChange={props.onGuestsChange}
    />
    <Counter
      id="infants"
      count={props.infants}
      name="Infants"
      description="Under 2"
      onGuestsChange={props.onGuestsChange}
    />
  </Wrap>
);

export default Section;
