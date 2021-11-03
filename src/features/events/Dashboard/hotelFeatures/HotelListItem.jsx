import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";

export default function HotelListItem({ hotel }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={hotel.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={hotel.title} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="marker" /> {hotel.venue.address}
        </span>
      </Segment>
      <Segment clearing>
        <div>{hotel.description}</div>
        <Button
          as={Link}
          to={`/hotels/${hotel.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
