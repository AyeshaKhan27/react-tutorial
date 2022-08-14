import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../services/posts";

export const get_Posts = createAsyncThunk(
  "posts/getPosts",
  async (thunkAPI) => {
    return await getPosts();
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [get_Posts.pending]: (state) => {
      state.loading = true;
    },
    [get_Posts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [get_Posts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default postSlice.reducer;
