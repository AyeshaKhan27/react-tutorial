import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./features";

export default configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
