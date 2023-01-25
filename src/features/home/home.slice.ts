import { createSlice } from "@reduxjs/toolkit";
import { PersonState } from "../../types/types";

const initialState: PersonState = {
  persons: [
    {
      id: 1,
      name: "John",
      age: 32,
    },
  ],
};

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
});

export default PersonSlice.reducer;
