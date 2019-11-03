import { SectionTypes } from "./section.types";

export const AddDataActionSampleOne = data => ({
  type: SectionTypes.SECTION_TYPE_ONE,
  payload: data
});

export const AddDataActionSampleTwo = data => ({
  type: SectionTypes.SECTION_TYPE_TWO,
  payload: data
});
