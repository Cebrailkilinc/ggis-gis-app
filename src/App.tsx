//Import Package
import React, { FC } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Component and Pages
import Home from "./pages/home";
import Login from "./pages/auth/login/Login";
import Gis from "./pages/gis";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

//Import Css
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";
import Convert from "./layout/modules/convert";
import CesiumPg from "./pages/cesium";

const App: FC = () => {
  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/modules/gis" element={<Gis />} />
          <Route path="/modules/cesium" element={<CesiumPg />} />
          <Route path="/modules/convert" element={<Convert />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;