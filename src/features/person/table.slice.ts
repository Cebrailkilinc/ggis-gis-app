import { createSlice } from "@reduxjs/toolkit";
import { ColumnProps } from "../../types/types";

const initialState: ColumnProps = {
  columns: [],
};

const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addField: (state, action) => {
      state.columns = [...action.payload];
    },
  },
});

export const { addField } = TableSlice.actions;
export default TableSlice.reducer;
