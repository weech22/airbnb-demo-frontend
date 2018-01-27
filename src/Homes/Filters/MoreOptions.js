import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import SwitchSection from './SwitchSection';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  margin-bottom: 1px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  @media only screen and (min-width: 768px) {
    padding-top: 23px;
  }
`;

const Title = styled(SectionTitle)`
  line-height: 23px;
  font-size: 20px;
`;

class MoreOptions extends Component {
  state = {
    instantBook: this.props.filter.instantBook,
    superhost: this.props.filter.superhost,
  };

  handleFilterChange = (field, value) => {
    this.setState(
      () => ({ [field]: value }),
      () => {
        this.props.onFilterChange('moreOptions', this.state);
      },
    );
  };

  render() {
    return (
      <Wrap>
        <div className="col-xs-12 col-md-6">
          <Title>More options</Title>
          <SwitchSection
            id="instantBook"
            checked={this.state.instantBook}
            description="Secure a reservation instantly."
            onFilterChange={this.handleFilterChange}
          >
            Instant book
          </SwitchSection>
          <SwitchSection
            id="superhost"
            checked={this.state.superhost}
            description="Stay with recognized hosts."
            onFilterChange={this.handleFilterChange}
          >
            Superhost
          </SwitchSection>
        </div>
      </Wrap>
    );
  }
}

export default MoreOptions;
