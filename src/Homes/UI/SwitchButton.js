import React, { Component } from 'react';
import styled from 'styled-components';
import checkOn from './buttonCheckOn.svg';
import cross from './buttonCross.svg';

const Button = styled.button`
  margin: auto 0;
  width: 64px;
  height: 40px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 24px;
  transition: background-color 0.4s, background-position 0.3s;
  background-color: ${props => (props.checked ? '#008489' : 'rgba(72, 72, 72, 0.08)')};
  background-image: ${props => (props.checked ? `url(${checkOn})` : `url(${cross})`)};
  background-repeat: no-repeat;
  background-position: ${props => (props.checked ? 'center right' : 'center left')};
  cursor: pointer;
`;

class SwitchButton extends Component {
  state = {
    checked: this.props.checked,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handleClick = () => {
    this.setState(
      () => ({ checked: !this.state.checked }),
      () => {
        this.props.onFilterChange(this.props.id, this.state.checked);
      },
    );
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} checked={this.state.checked} />
      </div>
    );
  }
}

export default SwitchButton;
