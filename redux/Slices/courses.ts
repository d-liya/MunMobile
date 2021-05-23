import { createSlice } from "@reduxjs/toolkit";
import { courseInfo } from "../../assets/temp-data";
import { CalendarColors } from "../../constants/Colors";
import { FetchStatus } from "../../types";

type Days = {
  day: string;
  time: string;
  description: string;
};

type Course = {
  name: string;
  code: string;
  color: string;
  startingDate: string;
  endDate: string;
  days: Days[];
};

interface CoursesState {
  status: FetchStatus;
  courses: Course[];
}

const initialState: CoursesState = {
  status: "IDLE",
  courses: [],
};

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    fetchCourses: (state) => ({
      ...state,
      status: "LOADING",
    }),
    fetchCoursesSuccess: (state, action) => ({
      ...state,
      status: "SUCCEDDED",
      ...action.payload,
    }),
    fetchCoursesFailure: (state, action) => ({
      ...state,
      status: "FAILED",
      ...action.payload,
    }),
  },
});

export const { fetchCourses, fetchCoursesSuccess, fetchCoursesFailure } = courses.actions;

export const getCourseInfoAsyc = () => (dispatch) => {
  dispatch(fetchCourses());
  const courses = courseInfo.map((el, i) => ({
    ...el,
    color: CalendarColors[i],
  }));
  setTimeout(() => {
    dispatch(fetchCoursesSuccess({ courses }));
  }, 1000);
};

export default courses.reducer;
