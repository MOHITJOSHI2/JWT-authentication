import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedContent from "./protectedPages/ProtectedContent";
import UnprotectedContent from "./unprotected/UnprotectedContent";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/protectedContent" element={<ProtectedContent />} />
        <Route path="/unprotectedContent" element={<UnprotectedContent />} />
      </Routes>
    </div>
  );
};

export default Router;
