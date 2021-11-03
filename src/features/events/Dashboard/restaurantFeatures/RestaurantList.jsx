import React from "react";
import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList({ restaurants }) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantListItem restaurant={restaurant} key={restaurant.id} />
      ))}
    </>
  );
}
