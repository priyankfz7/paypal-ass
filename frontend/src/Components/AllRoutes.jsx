import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SingleSprintPage from "./SingleSprintPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sprints/:sprintID" element={<SingleSprintPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
