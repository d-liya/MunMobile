import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { gradeInfo } from "../../assets/temp-data";
import { FetchStatus } from "../../types";
type Grades = {
  semester: string;
  gpa: number;
  courses: Course[];
};
export type Course = {
  name: string;
  title: string;
  marks: number | number;
};

type FetchGradesPayloadProps = {
  grades?: Grades[];
  gpa?: number;
  earnedHours?: number;
  gpahours?: number;
};

interface GradesState extends FetchGradesPayloadProps {
  status: FetchStatus;
  error?: string;
  selectedSemInfo: Grades;
}

const initialState: GradesState = {
  status: "IDLE",
  gpa: undefined,
  grades: [] as Grades[],
  earnedHours: undefined,
  gpahours: undefined,
  selectedSemInfo: {} as Grades,
};

const grades = createSlice({
  name: "grades",
  initialState,
  reducers: {
    fetchGrades: (state) => ({
      ...state,
      status: "LOADING",
    }),
    fetchGradesSuccess: (state, action) => ({
      ...state,
      status: "SUCCEDDED",
      ...action.payload,
    }),
    fetchGradesFailure: (state, action) => ({
      ...state,
      status: "FAILED",
      ...action.payload,
    }),
    setSemesterInfo: (state, action) => ({
      ...state,
      selectedSemInfo: action.payload,
    }),
  },
});
export const { fetchGrades, fetchGradesFailure, fetchGradesSuccess, setSemesterInfo } =
  grades.actions;

export const getGradesAsync = () => (dispatch) => {
  dispatch(fetchGrades());
  const grades = gradeInfo.items.map((el, index) => ({
    semester: el.label,
    gpa: el.value,
    courses: gradeInfo.data[parseInt(index)],
  }));
  const payload: FetchGradesPayloadProps = {
    earnedHours: 54.0,
    gpa: 3.7,
    gpahours: 30.0,
    grades: grades,
  };
  setTimeout(() => {
    dispatch(fetchGradesSuccess(payload));
  }, 1000);
};

export default grades.reducer;
