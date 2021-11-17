import { combineReducers } from "redux";
import authReducer from "../../features/auth/authReducer";
import profileReducer from "../../features/pages/profile/profileReducer";
import restaurantReducer from "../../features/pages/restaurantReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
});

export default rootReducer;
