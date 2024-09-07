import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DEFAULT_THEMES } from "../../Pages/Theme/constants";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";

const DEFAULT_INITIAL_STATE: DefaultThemeTypes = DEFAULT_THEMES[0];

const themeSlice = createSlice({
  name: "theme",
  initialState: DEFAULT_INITIAL_STATE,
  reducers: {
    resetTheme: (state) => {
      Object.assign(state, DEFAULT_INITIAL_STATE);
    },

    setTheme: (state, action: PayloadAction<DefaultThemeTypes>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { resetTheme, setTheme } = themeSlice.actions;
export default themeSlice;
