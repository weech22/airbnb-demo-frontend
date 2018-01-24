import React from 'react';
import styled from 'styled-components';
import Counter from '../UI/Counter';

const Wrap = styled.div`
  height: calc(100vh - 153px);
  padding: 39px 8px;
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
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
      name="Adults"
      description=""
    />
    <Counter
      id="kids"
      count={props.kids}
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
      name="Children"
      description="Ages 2 — 12"
    />
    <Counter
      id="infants"
      count={props.infants}
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
      name="Infants"
      description="Under 2"
    />
  </Wrap>
);

export default Section;
