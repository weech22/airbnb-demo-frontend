import React from 'react';
import { Header, Footer, FiltersBottomPanel as BottomPanel } from '../ModalUI';
import RoomType from './RoomType';
import RoomsBeds from './RoomsBeds';
import PriceRange from './PriceRange';
import MoreOptions from './MoreOptions';
import Amenities from './Amenities';
import Facilities from './Facilities';

class Modal extends React.Component {
  state = {
    roomType: this.props.roomType,
    roomsBeds: this.props.roomsBeds,
    ameneties: this.props.ameneties,
    facilities: this.props.facilities,
    prices: this.props.prices,
    moreOptions: this.props.moreOptions,
  };

  resetFilters = () => {
    this.setState({
      roomType: {
        home: false,
        privateRoom: false,
        sharedRoom: false,
      },
      roomsBeds: {
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
      },
      ameneties: {
        heating: false,
        kitchen: false,
        tv: false,
        wifi: false,
      },
      facilities: {
        elevator: false,
        parking: false,
        pool: false,
        wheelchair: false,
      },
      prices: [10, 1000],
      moreOptions: {
        instantBook: false,
        superhost: false,
      },
    });
  };

  saveFilters = () => {
    this.props.onApply(
      this.state.roomType,
      this.state.roomsBeds,
      this.state.ameneties,
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
        <RoomType filter={this.state.roomType} onFilterChange={this.handleFilterChange} />
        <PriceRange filter={this.state.prices} onFilterChange={this.handleFilterChange} />
        <RoomsBeds filter={this.state.roomsBeds} onFilterChange={this.handleFilterChange} />
        <MoreOptions filter={this.state.moreOptions} onFilterChange={this.handleFilterChange} />
        <Amenities filter={this.state.ameneties} onFilterChange={this.handleFilterChange} />
        <Facilities filter={this.state.facilities} onFilterChange={this.handleFilterChange} />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilters} />
        <Footer onClick={this.saveFilters}>See homes</Footer>
      </div>
    );
  }
}
export default Modal;
