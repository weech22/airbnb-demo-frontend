import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import SwitchSection from './SwitchSection';

const Wrap = styled.div``;

class Modal extends React.Component {
  state = {
    checked: this.props.checked,
  };

  resetFilter = () => {
    this.setState({ checked: false });
  };

  saveFilter = () => {
    this.props.onApply(this.state.checked);
  };

  handleFilterChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <Wrap>
        <SwitchSection
          id="checked"
          checked={this.state.checked}
          onFilterChange={this.handleFilterChange}
          description="Listings you can book without waiting for host approval."
        >
          Instant Book
        </SwitchSection>
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilter} />
      </Wrap>
    );
  }
}
export default Modal;
