import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Posts/PostSlice";
import userReducer from "../features/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
