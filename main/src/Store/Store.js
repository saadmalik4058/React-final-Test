import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Features/Todos/TodoSlice";
export const store = configureStore({
  reducer: todoSlice.reducer,
});
