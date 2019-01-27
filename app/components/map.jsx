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

class SimpleMap extends React.Component {

  render() {
	  const defaultProps = {
	    center: {lat: 59.95, lng: 30.33},
	    zoom: 11
	  };
    return (
       <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent 
          lat={59.955413} 
          lng={30.337844} 
          text={'hello'} 
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
