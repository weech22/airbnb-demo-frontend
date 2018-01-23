import React from 'react';
import styled from 'styled-components';
import Counter from '../UI/Counter';

const Wrap = styled.div`
  height: calc(100vh - 153px);
  width: 95vw;
  background: #ffffff;
  margin-top: 0px;
  padding-top: 40px;
  padding-left: 8px;
  @media only screen and (min-width: 768px) {
    height: auto;
    width: 326px;
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 15px;
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
      desc=""
    />
    <Counter
      id="kids"
      count={props.kids}
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
      name="Children"
      desc="Ages 2 — 12"
    />
    <Counter
      id="infants"
      count={props.infants}
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
      name="Infants"
      desc="Under 2"
    />
  </Wrap>
);

export default Section;
