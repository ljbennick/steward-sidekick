import { FETCH_RESTAURANTS, UPDATE_RESTAURANT } from "./restaurantConstants";

const initialState = {
  restaurants: [],
};

export default function restaurantReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_RESTAURANT:
      return {
        ...state,
        restaurants: [
          ...state.restaurants.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: payload,
      };
    default:
      return state;
  }
}
