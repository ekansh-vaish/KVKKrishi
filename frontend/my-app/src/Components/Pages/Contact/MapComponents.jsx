import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const fallbackCenter = {
  lat: 28.5707, // Shahabad Rampur approx
  lng: 79.0184
};

function MapComponent() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          setUserLocation(fallbackCenter);
        }
      );
    } else {
      setUserLocation(fallbackCenter);
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBCTq_yrocDJ2vm8FZSWKIPFH8zCrk59Qk">
      {userLocation && (
        <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={15}>
          <Marker position={userLocation} />
          <InfoWindow position={userLocation}>
            <div>
              <h6>कृषि विकास केंद्र</h6>
              <p>Chandausi रोड, शाहाबाद, यूपी</p>
              <p>📞 +91 6395208277</p>
              <p>📞 +91 7830301838</p>
              <p>✉️ ekansh982@gmail.com</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapComponent;
