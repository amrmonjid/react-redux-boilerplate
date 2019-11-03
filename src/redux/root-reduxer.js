import { combineReducers } from "redux";
import sectionReducer from "./smaple-section/section.reducer";

export default combineReducers({
  section: sectionReducer
});
