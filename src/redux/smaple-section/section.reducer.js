import { SectionTypes } from "./section.types";
import createReducer from "./../createReducer";

const INITIAL_STATE = {
  data: {}
};

const sectionReducer = createReducer(INITIAL_STATE, {
  [SectionTypes.SECTION_TYPE_ONE]: (state, action) => {
    return { ...state, data: action.payload };
  },
  [SectionTypes.SECTION_TYPE_TWO]: (state, action) => {
    return { ...state, data: {} };
  }
});

// const sectionReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case CartActionTypes.TOGGLE_HIDDEN_STATE:
//       return { ...state, data: action.payload };
//     case CartActionTypes.ADD_ITEM:
//       return { ...state, data: {} };
//     default:
//       return {
//         ...state
//       };
//   }
// };

export default sectionReducer;
