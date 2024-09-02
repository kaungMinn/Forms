import { createSlice } from "@reduxjs/toolkit";
type InitialStateType = {
  isLoading: boolean;
  isSuccess: boolean;
  customerList: any[];
};

const DEFAULT_INITITAL_STATE: InitialStateType = {
  isLoading: false,
  isSuccess: false,
  customerList: [],
};

const getSlice = createSlice({
  name: "get-customers",
  initialState: DEFAULT_INITITAL_STATE,
  reducers: {
    getReset: () => DEFAULT_INITITAL_STATE,
  },

  extraReducers: (builder) => {},
});

export default getSlice;
