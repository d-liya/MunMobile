import { createSlice, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { news, newsInfo } from "../../assets/temp-data";
import { FetchStatus, News } from "../../types";

interface NewsState {
  status: FetchStatus;
  article: News;
}

const initialState: NewsState = {
  article: {} as News,
  status: "IDLE",
};

const article = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticle: (state) => ({
      ...state,
      status: "LOADING",
      article: {} as News,
    }),
    fetchArticleSuccess: (state, action) => ({
      ...state,
      status: "SUCCEDDED",
      ...action.payload,
    }),
    fetchArticleFailure: (state, action) => ({
      ...state,
      status: "FAILED",
      ...action.payload,
    }),
  },
});

export const { fetchArticle, fetchArticleSuccess, fetchArticleFailure } = article.actions;

type GetArticleParams = {
  category: string;
  title: string;
};
export const getArticleAsync = (title: string, category: string) => (dispatch: Dispatch) => {
  dispatch(fetchArticle());
  setTimeout(() => {
    let article = {} as News;
    newsInfo.forEach((el, i) => {
      if (el.title.toLowerCase() === title.toLowerCase()) {
        article = {
          title,
          category,
          description: el.description,
          image: el.image,
          markdownText: news[i],
        };
      }
    });

    dispatch(fetchArticleSuccess({ article }));
  }, 1000);
};

export default article.reducer;
