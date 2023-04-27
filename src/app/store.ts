import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import PersonSlice from "../features/home/home.slice";

export const store = configureStore({
  reducer: {
    person: PersonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;
