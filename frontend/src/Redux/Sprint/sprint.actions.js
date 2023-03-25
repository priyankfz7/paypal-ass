import axios from "axios";
import { GET_AND_UPDATE_SPRINT } from "./sprint.action.types";

export const getSprints = (token) => async (dispatch) => {
  try {
    let res = await axios.get(
      "https://tame-lime-scallop-tutu.cyclic.app/sprints",
      {
        headers: {
          authentication: token,
        },
      }
    );
    dispatch({ type: GET_AND_UPDATE_SPRINT, payload: res.data });
  } catch (e) {
    alert("something went wrong");
  }
};

export const addSprint = (sprint, token) => async (dispatch) => {
  try {
    await axios.post(
      `https://tame-lime-scallop-tutu.cyclic.app/sprints/create`,
      sprint,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: token,
        },
      }
    );
    dispatch(getSprints(token));
  } catch (e) {
    alert("something went wrong");
  }
};

export const deleteSprint = (id, token) => async (dispatch) => {
  try {
    await axios.delete(
      `https://tame-lime-scallop-tutu.cyclic.app/sprints/${id}`,
      {
        headers: {
          authentication: token,
        },
      }
    );
    dispatch(getSprints(token));
  } catch (e) {
    alert("something went wrong");
  }
};
