import { createSlice } from "@reduxjs/toolkit";import { IGeoJSONPolygon } from "../../types/types";


const initialState:IGeoJSONPolygon = {
    type: "FeatureCollection",
    features: [{
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [[
            [35.80898529973183, 40.64852919996264],
            [35.80898529973183, 40.64852919996264]
          ]]
      }
    }],
    bbox: [0, 0, 0, 0]
}
const GisSlice = createSlice({
    name:"gis",
    initialState,
    reducers:{}
})

export default GisSlice.reducer;