import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { newsInfo } from "../../assets/temp-data";
import { FetchStatus, News } from "../../types";

interface NewsState {
  news: News[];
  status: FetchStatus;
}
const initialState: NewsState = {
  news: [],
  status: "IDLE",
};

const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    fetchNews: (state) => ({
      ...state,
      status: "LOADING",
      news: [],
    }),
    fetchNewsSuccess: (state, action) => ({
      ...state,
      status: "SUCCEDDED",
      ...action.payload,
    }),
    fetchNewsFailure: (state, action) => ({
      ...state,
      status: "FAILED",
      ...action.payload,
    }),
  },
});

export const { fetchNews, fetchNewsSuccess, fetchNewsFailure } = news.actions;

export const getNewsAsync = () => (dispatch: Dispatch) => {
  dispatch(fetchNews());
  setTimeout(() => {
    dispatch(fetchNewsSuccess({ news: newsInfo }));
  }, 1000);
};

export default news.reducer;
