import { createSlice } from "@reduxjs/toolkit";
import { Tax, UserData } from "../types";

export interface UserDataState {
  userData: UserData | null;
  taxes: Tax[];
}

const initialState: UserDataState = {
  userData: null,
  taxes: [],
};

export const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setTaxesData: (state, action) => {
      state.taxes = action.payload;
    },
  },
  selectors: {
    selectUserData: (state) => state.userData,
    selectTaxes: (state) => state.taxes,
  },
});

export const { setUserData , setTaxesData} = UserDataSlice.actions;
export const UserDataReducer = UserDataSlice.reducer;
export const { selectUserData, selectTaxes } = UserDataSlice.selectors;
