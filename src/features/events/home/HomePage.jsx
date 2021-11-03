import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/images/att2png.png"
            style={{ marginBottom: 12 }}
          />
          Steward SideKick
        </Header>
        <Button
          onClick={() => history.push("/restaurants")}
          size="huge"
          inverted
        >
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
