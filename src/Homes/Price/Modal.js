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
    prices: this.props.prices,
  };

  resetFilter = () => {
    this.setState({ prices: [10, 1000] });
  };

  saveFilter = () => {
    this.props.onApply(this.state.prices);
  };

  handleFilterChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div>
        <DesktopPriceRange prices={this.state.prices} onFilterChange={this.handleFilterChange} />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilter} />
      </div>
    );
  }
}
export default Modal;
