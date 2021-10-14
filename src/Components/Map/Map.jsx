import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css'
const containerStyle = {
  width: '500px',
  height: '400px'
};


const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  return (
 <div className="mapCard p-2 mr-2">
      <LoadScript
      googleMapsApiKey="AIzaSyAtZBBcHh4DooCPpwbqsfbpZqWOIWw7sPI"
    >
      <GoogleMap
         mapContainerStyle={containerStyle}
       
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
 </div>
  )
}

export default React.memo(Map)