import React, { useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import RestaurantDetailedMap from "./RestaurantDetailedMap";

export default function RestaurantDetailedInfo({ restaurant }) {
  const [mapOpen, setMapOpenToggle] = useState(false);

  return (
    <Segment.Group>
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
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{restaurant.venue.address}</span>
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
      {mapOpen && <RestaurantDetailedMap latLng={restaurant.venue.latLng} />}
    </Segment.Group>
  );
}
