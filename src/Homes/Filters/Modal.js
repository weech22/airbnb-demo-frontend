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
    home: this.props.home,
    privateRoom: this.props.privateRoom,
    sharedRoom: this.props.sharedRoom,
    bedrooms: this.props.bedrooms,
    beds: this.props.beds,
    bathrooms: this.props.bathrooms,
    heating: this.props.heating,
    kitchen: this.props.kitchen,
    tv: this.props.tv,
    wifi: this.props.wifi,
    elevator: this.props.elevator,
    parking: this.props.parking,
    pool: this.props.pool,
    wheelchair: this.props.wheelchair,
    prices: this.props.prices,
    instantBook: this.props.instantBook,
    superhost: this.props.superhost,
  };

  resetFilters = () => {
    this.setState({
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      heating: false,
      kitchen: false,
      tv: false,
      wifi: false,
      elevator: false,
      parking: false,
      pool: false,
      wheelchair: false,
      prices: [10, 1000],
      instantBook: false,
      superhost: false,
    });
  };

  saveFilters = () => {
    this.props.onApply(
      this.state.home,
      this.state.privateRoom,
      this.state.sharedRoom,
      this.state.bedrooms,
      this.state.beds,
      this.state.bathrooms,
      this.state.heating,
      this.state.kitchen,
      this.state.tv,
      this.state.wifi,
      this.state.elevator,
      this.state.parking,
      this.state.pool,
      this.state.wheelchair,
      this.state.prices,
      this.state.instantBook,
      this.state.superhost,
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
          text="All filters (0)"
          action="Clear All"
        />
        <RoomType
          home={this.state.home}
          privateRoom={this.state.privateRoom}
          sharedRoom={this.state.sharedRoom}
          onFilterChange={this.handleFilterChange}
        />
        <PriceRange prices={this.state.prices} onFilterChange={this.handleFilterChange} />
        <RoomsBeds
          bedrooms={this.state.bedrooms}
          beds={this.state.beds}
          bathrooms={this.state.bathrooms}
          onFilterChange={this.handleFilterChange}
        />
        <MoreOptions
          instantBook={this.state.instantBook}
          superhost={this.state.superhost}
          onFilterChange={this.handleFilterChange}
        />
        <Amenities
          heating={this.state.heating}
          kitchen={this.state.kitchen}
          tv={this.state.tv}
          wifi={this.state.wifi}
          onFilterChange={this.handleFilterChange}
        />
        <Facilities
          elevator={this.state.elevator}
          parking={this.state.parking}
          pool={this.state.pool}
          wheelchair={this.state.wheelchair}
          onFilterChange={this.handleFilterChange}
        />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilters} />
        <Footer onClick={this.saveFilters}>See homes</Footer>
      </div>
    );
  }
}
export default Modal;
