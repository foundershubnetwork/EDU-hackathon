import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
// @ts-ignore
import { LoginCallBack } from "@opencampus/ocid-connect-js";

import Home from "../pages/Home";

const OCLoginCallback = () => {
  const navigate = useNavigate();

  const onLoginSuccess = () => {
    navigate("/");
  };

  const onLoginError = () => {
    console.log("Error");
  };

  return (
    <LoginCallBack
      errorCallback={onLoginError}
      successCallback={onLoginSuccess}
    />
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<OCLoginCallback />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
