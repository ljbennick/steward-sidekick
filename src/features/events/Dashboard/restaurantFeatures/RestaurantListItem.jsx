import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";

export default function RestaurantListItem({ restaurant }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={restaurant.imageSource} />
            <Item.Content>
              <Item.Header content={restaurant.title} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="marker" /> {restaurant.venue.address}
        </span>
      </Segment>
      <Segment clearing>
        <div>{restaurant.description}</div>
        <Button
          as={Link}
          to={`/restaurants/${restaurant.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
