import { Icon } from 'leaflet';
import React from 'react';

import PickupIcon from '../assets/Pickup_Icon.svg';
import DropoffIcon from '../assets/Dropoff_1_Icon.svg';
import GogetterIcon from '../assets/GoGetter_Location.svg';

import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer
} from 'react-leaflet';

const OSMap = ({ polyLine, gogetterLocation }) => {
  const startPoint = polyLine !== null ? polyLine[0] : null;
  const endPoint = polyLine !== null ? polyLine[polyLine.length - 1] : null;

  return (
    <MapContainer
      style={{ height: 500 }}
      center={[3.1466, 101.6958]}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {polyLine !== null && (
        <Polyline pathOptions={{ fillColor: 'blue' }} positions={polyLine} />
      )}
      {startPoint !== null && (
        <Marker
          position={startPoint}
          icon={
            new Icon({
              iconUrl: PickupIcon,
              iconSize: [35, 35],
              iconAnchor: [17.5, 25]
            })
          }
        >
          <Popup>Start Point</Popup>
        </Marker>
      )}
      {endPoint !== null && (
        <Marker
          position={endPoint}
          icon={
            new Icon({
              iconUrl: DropoffIcon,
              iconSize: [35, 35],
              iconAnchor: [17.5, 25]
            })
          }
        >
          <Popup>End Point</Popup>
        </Marker>
      )}
      {gogetterLocation !== null && (
        <Marker
          position={gogetterLocation}
          icon={
            new Icon({
              iconUrl: GogetterIcon,
              iconSize: [35, 35],
              iconAnchor: [17.5, 25]
            })
          }
        />
      )}
    </MapContainer>
  );
};

export default OSMap;
