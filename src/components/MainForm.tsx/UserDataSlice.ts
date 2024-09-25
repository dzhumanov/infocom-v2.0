import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../types";

export interface UserDataState {
  userData: UserData | null;
}

const initialState: UserDataState = {
  userData: null,
};

export const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  selectors: {
    selectUserData: (state) => state.userData,
  },
});

export const { setUserData } = UserDataSlice.actions;
export const UserDataReducer = UserDataSlice.reducer;
export const { selectUserData } = UserDataSlice.selectors;
