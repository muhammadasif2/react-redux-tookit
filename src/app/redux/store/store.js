import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../feature/todoSlice";

// todosSlice is whole function of todosSlice where we definced reducers

export const store = configureStore({
  reducer: todoSlice,
});
