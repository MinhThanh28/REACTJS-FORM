import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = configureStore({
  reducer: {
    QuanLySinhVienReducer,
  },
});
