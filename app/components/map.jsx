import React from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
const defaultProps = {
  lat: 59.95,
  lng: 30.33,
  zoom: 11
};

class SimpleMap extends React.Component {

  render() {
    const {lat, lon} = this.props;
    const center = {
      lat: parseFloat(lat || defaultProps.lat),
      lng: parseFloat(lon || defaultProps.lng),
    };
    return (
       <GoogleMapReact
        defaultCenter={center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent 
          lat={lat || defaultProps.lat}
          lng={lon || defaultProps.lon} 
          text={'here'} 
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
