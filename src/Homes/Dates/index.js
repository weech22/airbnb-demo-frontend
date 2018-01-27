import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import moment from 'moment';
import Modal from './Modal';
import {
  FilterButton as Button,
  FilterButtonBlock as Wrap,
  WhiteBackground,
  DesktopModal,
  ModalWindow,
} from '../ModalUI';

const DatesModal = styled(DesktopModal)`
  top: 52px;
  left: 0;
`;

const formatDateLabel = (from, to, isOpen) => {
  if (from && to) {
    const start = moment(from);
    const end = moment(to);
    return `${start.format('MMM D')} — ${end.format('MMM D')}`;
  } else if (isOpen) {
    return 'Check in — Check out';
  }
  return 'Dates';
};

const getMonthAmount = () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    return 2;
  }
  if (window.matchMedia('(min-width: 576px)').matches) {
    return 1;
  }
  return 12;
};

const AdaptiveModal = (dialog, onClick) => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    return (
      <div>
        <WhiteBackground onClick={onClick} />
        <DatesModal>{dialog}</DatesModal>
      </div>
    );
  }
  return (
    <Portal node={document && document.getElementById('modal')}>
      <ModalWindow>{dialog}</ModalWindow>
    </Portal>
  );
};

class Dropdown extends Component {
  state = {
    isOpen: this.props.isOpen,
    from: undefined,
    to: undefined,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggleOpen = () => {
    this.props.openModal('Dates', true);
  };

  toggleClose = () => {
    this.props.openModal('Dates', false);
  };

  saveDates = (from, to) => {
    this.setState({ from, to, isOpen: false });
  };

  render() {
    const monthAmount = getMonthAmount();
    const dialogWindow = (
      <Modal
        onCancel={this.toggleClose}
        onApply={this.saveDates}
        monthAmount={monthAmount}
        start={this.state.from}
        end={this.state.to}
      />
    );

    const adaptiveModal = AdaptiveModal(dialogWindow, this.toggleClose);

    return (
      <Wrap>
        <Button
          active={this.state.isOpen || this.state.from || this.state.to}
          onClick={this.toggleOpen}
        >
          {formatDateLabel(this.state.from, this.state.to, this.state.isOpen)}
        </Button>
        {this.state.isOpen && adaptiveModal}
      </Wrap>
    );
  }
}

export default Dropdown;
