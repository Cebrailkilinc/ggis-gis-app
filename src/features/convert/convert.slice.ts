import { createSlice } from "@reduxjs/toolkit";

interface IConvert{
    data:string;
}
const initialState= {  
    data:"data"
};


const ConvertSlice = createSlice({
    name: "convert",
    initialState,
    reducers: {}
})

export default ConvertSlice.reducer;