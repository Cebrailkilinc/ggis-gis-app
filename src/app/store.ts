import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import PersonSlice from "../features/home/home.slice";
import TableSlice from "../features/person/table.slice";

export const store = configureStore({
  reducer: {
    person: PersonSlice,
    table: TableSlice,
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
