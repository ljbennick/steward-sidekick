import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function Marker() {
  return <Icon name="marker" size="big" color="red" />;
}

export default function RestaurantDetailedMap({ restaurant }) {
  const zoom = 14;
  const latLng = {
    lat: restaurant.lat,
    lng: restaurant.lng,
  };
  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY,
          }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={restaurant.lat} lng={restaurant.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
