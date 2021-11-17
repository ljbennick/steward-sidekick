import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { listenToRestaurantFromFirestore } from "../../../app/firestore/firestoreService";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import { listenToRestaurants } from "../restaurantActions";
import RestaurantDetailedHeader from "./RestaurantDetailedHeader";
import RestaurantDetailedInfo from "./RestaurantDetailedInfo";

import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

export default function RestaurantDetailedPage({ match }) {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) =>
    state.restaurant.restaurants.find((e) => e.id === match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToRestaurantFromFirestore(match.params.id),
    data: (restaurant) => dispatch(listenToRestaurants([restaurant])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!restaurant && !error))
    return <LoadingComponent content="Loading restaurant..." />;

  if (error) return <Redirect to="/error" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <RestaurantDetailedHeader restaurant={restaurant} />
        <RestaurantDetailedInfo restaurant={restaurant} />
      </Grid.Column>
    </Grid>
  );
}
