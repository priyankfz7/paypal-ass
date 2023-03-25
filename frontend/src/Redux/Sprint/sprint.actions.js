import axios from "axios";
import { GET_AND_UPDATE_SPRINT } from "./sprint.action.types";

export const addSprint = (sprint, token) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:8080/sprints/create`, sprint, {
      headers: {
        "Content-Type": "application/json",
        authentication: token,
      },
    });
    let res = await axios.get("http://localhost:8080/sprints", {
      headers: {
        authentication: token,
      },
    });
    dispatch({ type: GET_AND_UPDATE_SPRINT, payload: res.data });
  } catch (e) {
    alert("something went wrong");
  }
};
export const getSprints = (token) => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:8080/sprints", {
      headers: {
        authentication: token,
      },
    });
    dispatch({ type: GET_AND_UPDATE_SPRINT, payload: res.data });
  } catch (e) {
    alert("something went wrong");
  }
};
