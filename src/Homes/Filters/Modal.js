import React from 'react';
import styled from 'styled-components';
import { Header, Footer, FiltersBottomPanel as BottomPanel } from '../ModalUI';
import RoomType from './RoomType';
import RoomsBeds from './RoomsBeds';
import PriceRange from './PriceRange';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';

const Scrollable = styled.div`
  height: 100%;
  padding-top: 50px;
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media only screen and (min-width: 992px) {
    padding-bottom: 0px;
  }
`;

class Modal extends React.Component {
  state = {
    roomType: this.props.roomType,
    roomsBeds: this.props.roomsBeds,
    amenities: this.props.amenities,
    facilities: this.props.facilities,
    prices: this.props.prices,
    moreOptions: this.props.moreOptions,
  };

  resetFilters = () => {
    const defaultRoomType = {
      home: false,
      privateRoom: false,
      sharedRoom: false,
    };

    const defaultRoomBeds = {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    };

    const defaultAmenities = {
      heating: false,
      kitchen: false,
      tv: false,
      wifi: false,
    };

    const defaultFacilities = {
      elevator: false,
      parking: false,
      pool: false,
      wheelchair: false,
    };

    const defaultPrices = [10, 1000];

    const defaultOptions = {
      instantBook: false,
      superhost: false,
    };

    this.setState({
      roomType: defaultRoomType,
      roomsBeds: defaultRoomBeds,
      amenities: defaultAmenities,
      facilities: defaultFacilities,
      prices: defaultPrices,
      moreOptions: defaultOptions,
    });
  };

  saveFilters = () => {
    this.props.onApply(
      this.state.roomType,
      this.state.roomsBeds,
      this.state.amenities,
      this.state.facilities,
      this.state.prices,
      this.state.moreOptions,
    );
  };

  handleFilterChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div>
        <Header
          onClose={this.props.onCancel}
          onAction={this.resetFilters}
          text={`All filters (${this.props.filterCount})`}
          action="Clear All"
        />
        <Scrollable>
          <RoomType filter={this.state.roomType} onFilterChange={this.handleFilterChange} />
          <PriceRange filter={this.state.prices} onFilterChange={this.handleFilterChange} />
          <RoomsBeds filter={this.state.roomsBeds} onFilterChange={this.handleFilterChange} />
          <MoreOptions filter={this.state.moreOptions} onFilterChange={this.handleFilterChange} />
          <Amenities filter={this.state.amenities} onFilterChange={this.handleFilterChange} />
          <Facilities filter={this.state.facilities} onFilterChange={this.handleFilterChange} />
        </Scrollable>
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilters} />
        <Footer onClick={this.saveFilters}>See homes</Footer>
      </div>
    );
  }
}
export default Modal;
