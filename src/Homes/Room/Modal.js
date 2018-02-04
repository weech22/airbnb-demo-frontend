import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import RoomType from '../Filters/RoomType';

const DesktopRoomType = styled(RoomType)`
  @media only screen and (min-width: 992px) {
    display: block;
    border: none;
    padding-top: 22px;
    width: 296px;
    padding-left: 14px;
    padding-right: 12px;
    padding-bottom: 0px;
    box-shadow: none;
  }
`;

class Modal extends React.Component {
  state = {
    home: this.props.home,
    privateRoom: this.props.privateRoom,
    sharedRoom: this.props.sharedRoom,
  };

  saveFilters = () => {
    this.props.onApply(this.state.home, this.state.privateRoom, this.state.sharedRoom);
  };

  handleFilterChange = (field, value) => {
    this.setState(value);
  };

  render() {
    const filter = this.state;
    return (
      <div>
        <DesktopRoomType filter={filter} onFilterChange={this.handleFilterChange} />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveFilters} />
      </div>
    );
  }
}
export default Modal;
