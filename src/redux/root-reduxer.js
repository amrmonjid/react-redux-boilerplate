import { combineReducers } from "redux";
import sectionReducer from "./sample-section/section.reducer";

export default combineReducers({
  section: sectionReducer
});
