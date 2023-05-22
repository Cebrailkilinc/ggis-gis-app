import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import PersonSlice from "../features/home/home.slice";
import ConvertSlice from "../features/convert/convert.slice";
import gisSlice from "../features/gis/gis.slice";

export const store = configureStore({
  reducer: {
    person: PersonSlice,
    convert: ConvertSlice,
    gis: gisSlice
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
