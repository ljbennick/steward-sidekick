import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { listenToRestaurantsFromFirestore } from "../../../app/firestore/firestoreService";
import { listenToRestaurants } from "../restaurantActions";
import RestaurantFilters from "./restaurantFeatures/RestaurantFilters";
import RestaurantList from "./restaurantFeatures/RestaurantList";
import RestaurantListItemPlaceholder from "./restaurantFeatures/RestaurantListItemPlaceholder";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";

export default function EventDashboard() {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurant);
  const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToRestaurantsFromFirestore(),
    data: (restaurants) => dispatch(listenToRestaurants(restaurants)),
    deps: [dispatch],
  });

  const [restaurantSorting, setRestaurantSorting] =
    useState("rating-high-to-low");

  const sortedRestaurants = restaurants.sort((a, b) => {
    if (restaurantSorting === "rating-high-to-low") {
      return a.rating < b.rating ? 1 : -1;
    }

    if (restaurantSorting === "rating-low-to-high") {
      return a.rating > b.rating ? 1 : -1;
    }

    if (restaurantSorting === "price-high-to-low") {
      return a.price < b.price ? 1 : -1;
    }

    if (restaurantSorting === "price-low-to-high") {
      return a.price > b.price ? 1 : -1;
    }
    return 0;
  });

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <RestaurantListItemPlaceholder />
            <RestaurantListItemPlaceholder />
          </>
        )}
        <RestaurantList restaurants={sortedRestaurants} />
      </Grid.Column>
      <Grid.Column width={6}>
        <RestaurantFilters setRestaurantSorting={setRestaurantSorting} />
      </Grid.Column>
    </Grid>
  );
}
