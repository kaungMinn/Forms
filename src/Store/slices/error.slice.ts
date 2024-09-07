import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DefaultInitialStateType = {
  isError: boolean;
  statusCode: number;
  errorMessage: string;
};

const DEFAULT_INITIAL_STATE: DefaultInitialStateType = {
  isError: false,
  statusCode: 0,
  errorMessage: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState: DEFAULT_INITIAL_STATE,
  reducers: {
    resetError: (state) => {
      state.isError = DEFAULT_INITIAL_STATE.isError;
      state.statusCode = DEFAULT_INITIAL_STATE.statusCode;
      state.errorMessage = DEFAULT_INITIAL_STATE.errorMessage;
    },
    setError: (state, action: PayloadAction<DefaultInitialStateType>) => {
      //This is for testing purposes only
      state = action.payload;
    },
  },
  extraReducers: () => {
    // The error handling for the entire application will be here!
  },
});

export const { resetError, setError } = errorSlice.actions;
export default errorSlice;
