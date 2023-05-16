import { createSlice } from "@reduxjs/toolkit";

interface IConvert {
  epsgCode: string;
  swapperCode: string;
  name: string;
}
interface IProjectionInfo {
    inputProjectionInfo: IConvert;
    outputProjectionInfo: IConvert;
    modelControl: boolean;
}
const initialState: IProjectionInfo = {
  inputProjectionInfo: {
    name: "WGS84",
    epsgCode: "4326",
    swapperCode: "+proj=longlat +datum=WGS84 +no_defs +type=crs",
    
  },
  outputProjectionInfo:{
    name: "TUREF / TM30",
    epsgCode: "5254",
    swapperCode: "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",  
  },
  modelControl:true,
};

const ConvertSlice = createSlice({
  name: "convert",
  initialState,
  reducers: {
    modelControl(state, action){
        state.modelControl = action.payload
    },
    getInputProjectionInfo(state, action) {
      state.inputProjectionInfo = action.payload;  
      console.log(action.payload)   
    },
    getOutputProjectionInfo(state, action) {
        state.outputProjectionInfo = action.payload;    
      },
  },
});

export const {  modelControl,getInputProjectionInfo, getOutputProjectionInfo } = ConvertSlice.actions;
export default ConvertSlice.reducer;
