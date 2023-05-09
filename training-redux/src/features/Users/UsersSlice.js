import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const USER_API = "https://jsonplaceholder.typicode.com/users";
const initialState = {
  users: [],
  status: "idle",
  error: null,
};
export const fetchusers = createAsyncThunk("users/fetchusers", async () => {
  try {
    const response = axios.get(USER_API);
    return (await response).data;
  } catch (error) {}
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchusers.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(fetchusers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchusers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});
export const selectusers = (state) => state.users.users;
export const selecterror = (state) => state.users.status;
export const selectstatus = (state) => state.users.error;
export default userSlice.reducer;
