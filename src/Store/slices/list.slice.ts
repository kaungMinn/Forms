import { createSlice } from "@reduxjs/toolkit";
const DEFAULT_INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
};

const listSlice = createSlice({
  name: "list",
  initialState: DEFAULT_INITIAL_STATE,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: () => {
    //This is for further use case
  },
});
export const { reset } = listSlice.actions;
export default listSlice;
