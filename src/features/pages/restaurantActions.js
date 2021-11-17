import { FETCH_RESTAURANTS, UPDATE_RESTAURANT } from "./restaurantConstants";

//TODO possibly delete this || check what can be done

import {
  // eslint-disable-next-line no-unused-vars
  asyncActionFinish,
  // eslint-disable-next-line no-unused-vars
  asyncActionStart,
  // eslint-disable-next-line no-unused-vars
  asyncActionError,
} from "../../app/async/asyncReducer";

// TODO: change to load from api

// export function loadRestaurants() {
//   return async function (dispatch) {
//     dispatch(asyncActionStart());
//     try {
//       const restaurants = await fetchSampleData();
//       dispatch({ type: FETCH_RESTAURANTS, payload: restaurants });
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       dispatch(asyncActionError(error));
//     }
//   };
// }

export function listenToRestaurants(restaurants) {
  return {
    type: FETCH_RESTAURANTS,
    payload: restaurants,
  };
}

export function updateRestaurant(restaurant) {
  return {
    type: UPDATE_RESTAURANT,
    payload: restaurant,
  };
}
