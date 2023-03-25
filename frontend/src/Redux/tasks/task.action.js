import axios from "axios";
import { GET_AND_UPDATE_TASKS_SUCCESS } from "./tasks.actiontypes";

export const getTasks = (token) => async (dispatch) => {
  try {
    let res = await axios.get(
      "https://tame-lime-scallop-tutu.cyclic.app/tasks",
      {
        headers: {
          authentication: token,
        },
      }
    );
    console.log(res);

    dispatch({ type: GET_AND_UPDATE_TASKS_SUCCESS, payload: res.data });
  } catch (e) {
    alert("something went wrong");
  }
};

export const addTask = (task, token) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://tame-lime-scallop-tutu.cyclic.app/tasks/create",
      task,
      {
        headers: {
          authentication: token,
        },
      }
    );
    dispatch(getTasks(token));
  } catch (e) {
    alert("something went wrong");
  }
};
export const deleteTask = (id, token) => async (dispatch) => {
  try {
    await axios.delete(
      `https://tame-lime-scallop-tutu.cyclic.app/tasks/${id}`,
      {
        headers: {
          authentication: token,
        },
      }
    );
    dispatch(getTasks(token));
  } catch (e) {
    alert("something went wrong");
  }
};
export const toggleTaskStatus = (id, status, token) => async (dispatch) => {
  try {
    await axios.patch(
      `https://tame-lime-scallop-tutu.cyclic.app/tasks/${id}`,
      { status },
      {
        headers: {
          authentication: token,
        },
      }
    );
    dispatch(getTasks(token));
  } catch (e) {
    alert("something went wrong");
  }
};
