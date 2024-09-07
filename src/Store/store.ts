import { configureStore } from "@reduxjs/toolkit";

import errorSlice from "./slices/error.slice";
import themeSlice from "./slices/theme.slice";
import listSlice from "./slices/list.slice";

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    error: errorSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
