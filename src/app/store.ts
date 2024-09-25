import { configureStore } from "@reduxjs/toolkit";
import { UserDataReducer } from "../components/MainForm.tsx/UserDataSlice";

export const store = configureStore({
  reducer: {
    UserData: UserDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
