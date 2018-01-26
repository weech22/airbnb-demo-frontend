import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import PriceRange from '../Filters/PriceRange';

const DesktopPriceRange = styled(PriceRange)`
  @media only screen and (min-width: 992px) {
    display: block;
    border: none;
    padding-top: 23px;
    width: 296px;
    padding-left: 14px;
    padding-right: 12px;
    padding-bottom: 0px;
  }
`;

class Modal extends React.Component {
  state = {
    min: this.props.min,
    max: this.props.max,
  };

  resetFilter = () => {
    this.setState({ min: 10, max: 1000 });
  };

  saveFilter = () => {
    this.props.onApply(this.state.min, this.state.max);
  };

  handleFilterChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div>
        <DesktopPriceRange
          min={this.state.min}
          max={this.state.max}
          onFilterChange={this.handleFilterChange}
        />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilter} />
      </div>
    );
  }
}
export default Modal;
