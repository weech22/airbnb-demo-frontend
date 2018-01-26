import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import SwitchSection from '../Filters/SwitchSection';

const DesktopSwitchSection = styled(SwitchSection)`
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

const Wrap = styled.div`
  padding-top: 23px;
`;

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
        <DesktopSwitchSection
          checked={this.state.checked}
          onFilterChange={this.handleFilterChange}
          description="Listings you can book without waiting for host approval."
        >
          Instant Book
        </DesktopSwitchSection>
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilter} />
      </Wrap>
    );
  }
}
export default Modal;
