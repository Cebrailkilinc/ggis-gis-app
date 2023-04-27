import React, { FC } from "react";

import {
  createSearchParams,
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Login from "../pages/auth/login/Login";

const PrivateRoute: FC = () => {
  //Burda token kontrolu yapılacak.
  const a = 7;
  if (a < 6) {
    return <Login />;
  }
  return <Outlet />;
};

export default PrivateRoute;
