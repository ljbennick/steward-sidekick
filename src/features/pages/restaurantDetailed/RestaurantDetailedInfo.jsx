import React, { useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import RestaurantDetailedMap from "./RestaurantDetailedMap";

export default function RestaurantDetailedInfo({ restaurant }) {
  const [mapOpen, setMapOpenToggle] = useState(false);
  // const [location, setLocation] = useState();

  // function handleSetLocation(latLng) {
  //   setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  // }

  return (
    <Segment.Group>
      <Segment>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Icon size="large" color="teal" name="money bill alternate" />
            </Grid.Column>
            <Grid.Column width={13} style={{ fontSize: 16, color: "green" }}>
              {restaurant.price}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Icon size="large" color="teal" name="star" />
            </Grid.Column>
            <Grid.Column width={13} style={{ fontSize: 16, color: "teal" }}>
              {restaurant.rating}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{restaurant.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{restaurant.location}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => setMapOpenToggle(!mapOpen)}
              color="teal"
              size="tiny"
              content={mapOpen ? "Hide map" : "Show map"}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {mapOpen && (
        <RestaurantDetailedMap
          latLng={restaurant.lat}
          restaurant={restaurant}
        />
      )}
    </Segment.Group>
  );
}
