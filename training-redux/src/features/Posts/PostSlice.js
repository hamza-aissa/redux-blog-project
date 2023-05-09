import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { sub } from "date-fns";
const POST_API = "https://jsonplaceholder.typicode.com/posts";
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POST_API);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(Title, Body, user) {
        return {
          payload: {
            id: nanoid(),
            title: Title,
            username: user,
            body: Body,
            date: new Date().toISOString(),
            reactions: {
              love: 0,
              angry: 0,
              sad: 0,
              haha: 0,
            },
            comments: [],
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { PostId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === PostId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
    commentAdded(state, action) {
      const { PostId, comment } = action.payload;
      const existingPost = state.posts.find((post) => post.id === PostId);
      if (existingPost) {
        existingPost.comments.push({
          id: nanoid(),
          body: comment,
          date: new Date().toISOString(),
        });
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      let min = 5;
      const loadedPosts = action.payload.map((post) => {
        post.date = sub(new Date(), { minutes: min++ }).toISOString();
        post.reactions = {
          love: 0,
          haha: 0,
          sad: 0,
          angry: 0,
        };
        post.comments = [];
        return post;
      });
      state.posts = state.posts.concat(loadedPosts);
    });
  },
});

export const postselector = (state) => state.posts.posts;
export const postsStatus = (state) => state.posts.status;
export const postserror = (state) => state.posts.error;
export const { addPost, reactionAdded, commentAdded } = PostSlice.actions;
export default PostSlice.reducer;
