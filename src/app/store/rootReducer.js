import { combineReducers } from "redux";
import authReducer from "../../features/auth/authReducer";
import restaurantReducer from "../../features/events/restaurantReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
