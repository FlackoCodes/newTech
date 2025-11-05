import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./logSlice/logSlice"

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
