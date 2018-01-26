import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Counter from '../UI/RoomsBedsCounter';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
`;

const Title = styled(SectionTitle)`
  padding-left: 8px;
`;

const RoomsBeds = props => (
  <Wrap>
    <Title>Rooms and beds</Title>
    <div className="col-xs-12 col-md-6">
      <Counter
        id="bedrooms"
        count={props.bedrooms}
        name="Bedrooms"
        onFilterChange={props.onFilterChange}
      />
      <Counter id="beds" count={props.beds} name="Beds" onFilterChange={props.onFilterChange} />
      <Counter
        id="bathrooms"
        count={props.bathrooms}
        name="Bathrooms"
        onFilterChange={props.onFilterChange}
      />
    </div>
  </Wrap>
);

export default RoomsBeds;
