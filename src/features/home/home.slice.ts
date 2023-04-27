import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/types";

const initialState: UserState = {
  users: [
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ],
};

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = PersonSlice.actions;
export default PersonSlice.reducer;
