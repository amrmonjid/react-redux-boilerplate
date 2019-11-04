import { createSelector } from "reselect";

const selectSection = state => state.section;

export const selectSectionData = createSelector(
  [selectSection],
  section => section.data
);
