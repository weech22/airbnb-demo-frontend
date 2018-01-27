import React from 'react';
import { Header, Footer, BottomPanel } from '../ModalUI';
import Section from './Section';

class Modal extends React.Component {
  state = {
    adults: this.props.adults ? this.props.adults : 1,
    kids: this.props.kids,
    infants: this.props.infants,
  };

  resetGuests = () => {
    this.setState({ adults: 1, kids: 0, infants: 0 });
  };

  saveGuests = () => {
    this.props.onApply(this.state.adults, this.state.kids, this.state.infants);
  };

  handleGuestsChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div>
        <Header
          onClose={this.props.onCancel}
          onAction={this.resetGuests}
          text="Guests"
          action="Reset"
        />
        <Section
          adults={this.state.adults}
          kids={this.state.kids}
          infants={this.state.infants}
          onGuestsChange={this.handleGuestsChange}
        />
        <BottomPanel onCancel={this.props.onCancel} onApply={this.saveGuests} />
        <Footer onClick={this.saveGuests}>Save</Footer>
      </div>
    );
  }
}
export default Modal;
