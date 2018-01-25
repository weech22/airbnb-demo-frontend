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
  };

  resetFilters = () => {
    this.setState({
      home: false,
      privateRoom: false,
      sharedRoom: false,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
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
    );
  };

  handleFilterChange = (field, value) => {
    if (value >= 0) {
      this.setState({ [field]: value });
    }
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
        <RoomType />
        <PriceRange />
        <RoomsBeds
          bedrooms={this.state.bedrooms}
          beds={this.state.beds}
          bathrooms={this.state.bathrooms}
          onFilterChange={this.handleFilterChange}
        />
        <MoreOptions />
        <Amenities />
        <Facilities />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilters} />
        <Footer onClick={this.saveFilters}>See homes</Footer>
      </div>
    );
  }
}
export default Modal;
