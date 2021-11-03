import React from "react";
import { Menu, Header } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function HotelFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="Popular" />
        <Menu.Item content="Best Rated" />
        <Menu.Item content="Most Reviewed" />
      </Menu>
      <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar />
    </>
  );
}
