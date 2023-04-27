import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
class Person {
  fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.post(import.meta.env.VITE_BASE_URL + "login", {
      email: "ceboas@gmail.com",
      password: "123456",
    });
    console.log(response.data);
    return response?.data.token;
  });
}

export default Person;
