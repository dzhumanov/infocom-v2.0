import { configureStore } from "@reduxjs/toolkit";
import { UserDataReducer } from "./UserDataSlice";

export const store = configureStore({
  reducer: {
    UserData: UserDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
