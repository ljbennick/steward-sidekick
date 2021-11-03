import React from "react";
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

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <RestaurantListItemPlaceholder />
            <RestaurantListItemPlaceholder />
          </>
        )}
        <RestaurantList restaurants={restaurants} />
      </Grid.Column>
      <Grid.Column width={6}>
        <RestaurantFilters />
      </Grid.Column>
    </Grid>
  );
}
