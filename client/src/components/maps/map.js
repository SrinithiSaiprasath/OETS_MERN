import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const autoUpdate = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const newPoint = new window.google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        if (!window.marker) {
          window.marker = new window.google.maps.Marker({
            position: newPoint,
            map: window.map,
          });
        } else {
          window.marker.setPosition(newPoint);
        }

        window.map.setCenter(newPoint);
      });

      setTimeout(autoUpdate, 5000);
    };

    autoUpdate();

    // Clean up function (optional)
    return () => {
      clearInterval(autoUpdate);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default Map;
