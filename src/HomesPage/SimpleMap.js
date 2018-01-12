import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const DisplayBlock = styled.div`
  position: fixed;
  height: 500px;
  width: 100%;
`;
class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API,
          language: "en"
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <DisplayBlock lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
