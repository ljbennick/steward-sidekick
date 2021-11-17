import React from "react";
import { Segment, Image, Item, Header } from "semantic-ui-react";

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
                  content={restaurant.name}
                  style={{ color: "white" }}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
    </Segment.Group>
  );
}
