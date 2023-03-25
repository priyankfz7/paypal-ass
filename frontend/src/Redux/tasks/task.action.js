import axios from "axios";
import { GET_AND_UPDATE_TASKS_SUCCESS } from "./tasks.actiontypes";

export const getTasks = (token) => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:8080/tasks", {
      headers: {
        authentication: token,
      },
    });
    console.log(res);

    dispatch({ type: GET_AND_UPDATE_TASKS_SUCCESS, payload: res.data });
  } catch (e) {
    alert("something went wrong");
  }
};

export const addTask = (task, token) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/tasks/create", task, {
      headers: {
        authentication: token,
      },
    });
    let tasks = await axios.get("http://localhost:8080/tasks", {
      headers: {
        authentication: token,
      },
    });
    dispatch({ type: GET_AND_UPDATE_TASKS_SUCCESS, payload: tasks.data });
  } catch (e) {
    alert("something went wrong");
  }
};
