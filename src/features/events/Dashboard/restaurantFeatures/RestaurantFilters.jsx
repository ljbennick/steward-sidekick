import React from "react";
import { Menu, Header } from "semantic-ui-react";

export default function RestaurantFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="Popular" />
        <Menu.Item content="Best Rated" />
        <Menu.Item content="Price" />
      </Menu>
    </>
  );
}
