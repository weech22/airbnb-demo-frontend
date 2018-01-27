import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Counter from '../UI/RoomsBedsCounter';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-bottom: 16px;
  margin-bottom: 1px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Title = styled(SectionTitle)`
  padding-left: 8px;
`;

class RoomsBeds extends Component {
  state = {
    bedrooms: this.props.filter.bedrooms,
    beds: this.props.filter.beds,
    bathrooms: this.props.filter.bathrooms,
  };

  handleFilterChange = (field, value) => {
    this.setState(
      () => ({ [field]: value }),
      () => {
        this.props.onFilterChange('roomsBeds', this.state);
      },
    );
  };

  render() {
    return (
      <Wrap>
        <Title>Rooms and beds</Title>
        <div className="col-xs-12 col-md-6">
          <Counter
            id="bedrooms"
            count={this.state.bedrooms}
            name="Bedrooms"
            onFilterChange={this.handleFilterChange}
          />
          <Counter
            id="beds"
            count={this.state.beds}
            name="Beds"
            onFilterChange={this.handleFilterChange}
          />
          <Counter
            id="bathrooms"
            count={this.state.bathrooms}
            name="Bathrooms"
            onFilterChange={this.handleFilterChange}
          />
        </div>
      </Wrap>
    );
  }
}

export default RoomsBeds;
