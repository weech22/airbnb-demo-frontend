import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: none;
  @media (min-width: 992px) {
    width: 33%;
    position: fixed;
    top: 140px;
    right: 0;
    height: calc(100% - 140px);
    display: block;
  }
`;

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 39.983334, lng: -82.983330 },
    zoom: 11,
  };

  render() {
    return (
      <div className="container">
        <Wrap>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          />
        </Wrap>
      </div>
    );
  }
}

export default GoogleMap;
