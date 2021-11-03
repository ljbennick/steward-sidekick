import React from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";

const restaurantImageStyle = {
  filter: "brightness(30%)",
};

const restaurantImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default function RestaurantDetailedHeader({ restaurant }) {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/images/categoryImages/${restaurant.category}.jpg`}
          fluid
          style={restaurantImageStyle}
        />

        <Segment basic style={restaurantImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={restaurant.title}
                  style={{ color: "white" }}
                />
                <p>
                  Hosted by <strong>{restaurant.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${restaurant.id}`}
          color="orange"
          floated="right"
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
}
