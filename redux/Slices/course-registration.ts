import { createSlice, Dispatch } from "@reduxjs/toolkit";

interface Registration {
  term: string;
  course: string;
  subject: string;
}

const initialState: Registration = {
  term: "",
  course: "",
  subject: "",
};
const registration = createSlice({
  name: "registration",
  initialState,
  reducers: {
    handleTermChange: (state, action) => ({
      ...state,
      term: action.payload,
    }),
    handleCourseChange: (state, action) => ({
      ...state,
      course: action.payload,
    }),
    handleSubjectChange: (state, action) => ({
      ...state,
      subject: action.payload,
    }),
  },
});

export const { handleCourseChange, handleTermChange, handleSubjectChange } =
  registration.actions;

export default registration.reducer;
