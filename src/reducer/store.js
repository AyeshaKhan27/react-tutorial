import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer, PostReducer } from "./features";

export default configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostReducer,
  },
});
