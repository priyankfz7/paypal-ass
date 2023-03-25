import logo from "./logo.svg";
import "./App.css";

import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./Redux/tasks/task.action";
import { getSprints } from "./Redux/Sprint/sprint.actions";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authManager.token);
  useEffect(() => {
    dispatch(getTasks(token));
    dispatch(getSprints(token));
  });
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
