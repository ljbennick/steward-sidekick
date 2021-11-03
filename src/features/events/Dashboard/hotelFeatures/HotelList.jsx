import React from "react";
import HotelListItem from "./HotelListItem";

export default function HotelList({ hotels }) {
  return (
    <>
      {hotels.map((hotel) => (
        <HotelListItem hotel={hotel} key={hotel.id} />
      ))}
    </>
  );
}
