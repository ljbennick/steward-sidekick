import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";

export default function RestaurantListItem({ restaurant }) {
  const restaurantRating = "Rating: ";
  const restPrice = "Price: ";
  const restDescription = "Description: ";

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header size="large" content={restaurant.name} />
            </Item.Content>
            <Item.Image size="small" circular src={restaurant.imageSource} />
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="marker" /> {restaurant.location}
        </span>
      </Segment>
      <Segment clearing>
        <div>
          {restaurantRating} {restaurant.rating}
        </div>
        <div>
          {restPrice} {restaurant.price}
        </div>
        <Segment>
          <div style={{ fontSize: 15, color: "teal" }}>{restDescription}</div>
          <div>{restaurant.description}</div>
        </Segment>
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
