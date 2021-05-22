import { configureStore } from "@reduxjs/toolkit";
import news from "./Slices/news";
import article from "./Slices/article";
import grades from "./Slices/grades";
export const store = configureStore({
  reducer: {
    news,
    article,
    grades,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
