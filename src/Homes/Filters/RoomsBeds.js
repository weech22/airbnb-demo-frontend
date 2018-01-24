import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Counter from '../UI/RoomsBedsCounter';

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

const RoomsBeds = props => (
  <Wrap>
    <SectionTitle>Rooms and beds</SectionTitle>
    <div className="col-xs-12 col-md-6">
      <Counter
        name="Bedrooms"
        count={props.bedrooms}
        onFilterInc={props.onFilterInc}
        onFilterDec={props.onFilterDec}
      />
      <Counter
        name="Beds"
        count={props.beds}
        onFilterInc={props.onFilterInc}
        onFilterDec={props.onFilterDec}
      />
      <Counter
        name="Bathrooms"
        count={props.bathrooms}
        onFilterInc={props.onFilterInc}
        onFilterDec={props.onFilterDec}
      />
    </div>
  </Wrap>
);

export default RoomsBeds;
