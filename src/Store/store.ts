import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./slices/get.slice";

const store = configureStore({
  reducer: {
    get: getSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
