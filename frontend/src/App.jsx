import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ForgotPassword from "./Components/Reset/ForgotPassword";

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:id/:token"
          element={<ResetPassword />}
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
